import { useEffect, useMemo, useState } from "react";
import { Search, Mail, Clock, Check, Archive } from "lucide-react";
import { API_BASE_URL } from "../config/api";

type MessageItem = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "archived";
  createdAt: string;
};

export function Messages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/api/messages`);
        if (!response.ok) {
          throw new Error("Failed to load messages");
        }
        const data = (await response.json()) as MessageItem[];
        setMessages(data);
      } catch (err) {
        console.error("Failed to fetch messages", err);
        setError("Unable to load messages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch = 
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === "all" || msg.status === filter;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "unread":
        return <Mail className="h-5 w-5 text-[var(--eko-green)]" />;
      case "read":
        return <Check className="h-5 w-5 text-blue-500" />;
      case "archived":
        return <Archive className="h-5 w-5 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case "unread":
        return "New";
      case "read":
        return "Read";
      case "archived":
        return "Archived";
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "unread":
        return "bg-green-100 text-green-700";
      case "read":
        return "bg-blue-100 text-blue-700";
      case "archived":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  if (loading) {
    return (
      <div className="p-6 lg:p-8 animate-pulse">
        <div className="mb-8">
          <div className="h-8 w-56 bg-gray-200 rounded-lg mb-3" />
          <div className="h-4 w-80 bg-gray-200 rounded-lg" />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 h-10 bg-gray-100 rounded-lg" />
            <div className="w-64 h-10 bg-gray-100 rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 p-4 space-y-2">
              <div className="h-3 w-24 bg-gray-100 rounded-lg" />
              <div className="h-6 w-12 bg-gray-200 rounded-lg" />
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200">
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-40 bg-gray-100 rounded-lg" />
                    <div className="h-3 w-32 bg-gray-50 rounded-lg" />
                  </div>
                </div>
                <div className="h-4 w-full bg-gray-50 rounded-lg" />
                <div className="h-4 w-2/3 bg-gray-50 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-gray-900 mb-2">Messages</h1>
        <p className="text-gray-600">Review and respond to inquiries and contact messages</p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "all" 
                  ? "bg-[var(--eko-green)] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("unread")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "unread" 
                  ? "bg-[var(--eko-green)] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setFilter("read")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "read" 
                  ? "bg-[var(--eko-green)] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Read
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Total Messages</p>
          <p className="text-2xl text-gray-900">{messages.length}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Unread</p>
          <p className="text-2xl text-green-600">
            {messages.filter(m => m.status === "unread").length}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Read</p>
          <p className="text-2xl text-blue-600">
            {messages.filter(m => m.status === "read").length}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Archived</p>
          <p className="text-2xl text-gray-500">
            {messages.filter(m => m.status === "archived").length}
          </p>
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {filteredMessages.map((msg) => (
          <div 
            key={msg.id} 
            className={`bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all cursor-pointer ${
              msg.status === "unread" ? "border-l-4 border-l-[var(--eko-green)]" : ""
            }`}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 rounded-full bg-[var(--eko-green)]/10 flex items-center justify-center flex-shrink-0">
                    {getStatusIcon(msg.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-lg ${msg.status === "unread" ? "text-gray-900 font-semibold" : "text-gray-700"}`}>
                        {msg.name}
                      </h3>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${getStatusColor(msg.status)}`}>
                        {getStatusText(msg.status)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{msg.email}</p>
                    <p className={`text-base mb-3 ${msg.status === "unread" ? "text-gray-900 font-medium" : "text-gray-700"}`}>
                      {msg.subject}
                    </p>
                    <p className="text-gray-600 leading-relaxed">{msg.message}</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(msg.createdAt).toLocaleString()}</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Archive
                  </button>
                  <button className="px-4 py-2 bg-[var(--eko-green)] text-white rounded-lg hover:bg-[var(--eko-blue)] transition-colors text-sm">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Error / No Results */}
      {error && (
        <div className="text-center py-8 text-red-600 text-sm">
          {error}
        </div>
      )}
      {!error && !loading && filteredMessages.length === 0 && (
        <div className="text-center py-12">
          <Mail className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No messages found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
