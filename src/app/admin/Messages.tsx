import { useState } from "react";
import { Search, Mail, Clock, Check, Archive } from "lucide-react";

export function Messages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const messages = [
    {
      id: 1,
      name: "Sarah Williams",
      email: "sarah.w@email.com",
      subject: "Booth pricing inquiry",
      message: "Hello, I would like to know the pricing details for a 3x3m booth at the upcoming trade expo. Also, are there any early bird discounts available?",
      date: "2024-03-10 14:30",
      status: "unread"
    },
    {
      id: 2,
      name: "David Okafor",
      email: "david.o@email.com",
      subject: "Sponsorship opportunities",
      message: "Good day. Our company is interested in becoming a sponsor for the EKO International Trade Expo. Could you please share the sponsorship packages and benefits?",
      date: "2024-03-10 11:15",
      status: "unread"
    },
    {
      id: 3,
      name: "Fatima Bello",
      email: "fatima.b@email.com",
      subject: "Event schedule question",
      message: "Hi, I registered as a visitor. Will there be specific times for B2B networking sessions? I'd like to plan my visit accordingly.",
      date: "2024-03-10 08:45",
      status: "read"
    },
    {
      id: 4,
      name: "John Smith",
      email: "john.s@internationaltrade.com",
      subject: "International exhibitor details",
      message: "Hello from the UK! We're interested in exhibiting at your trade expo. What are the requirements and support available for international exhibitors?",
      date: "2024-03-09 16:20",
      status: "read"
    },
    {
      id: 5,
      name: "Chiamaka Nwosu",
      email: "chiamaka.n@email.com",
      subject: "Media partnership inquiry",
      message: "Good afternoon. I represent a business magazine in Lagos and we'd like to explore media partnership opportunities for the expo.",
      date: "2024-03-09 13:10",
      status: "archived"
    },
    {
      id: 6,
      name: "Mohammed Baba",
      email: "mohammed.b@email.com",
      subject: "Exhibitor registration help",
      message: "I'm having trouble completing the exhibitor registration form. The payment section keeps showing an error. Can someone assist?",
      date: "2024-03-09 10:30",
      status: "read"
    },
    {
      id: 7,
      name: "Linda Ogun",
      email: "linda.o@email.com",
      subject: "Accommodation recommendations",
      message: "Hello! I'm traveling from Abuja to attend the expo. Could you recommend hotels near the venue?",
      date: "2024-03-08 15:45",
      status: "read"
    },
    {
      id: 8,
      name: "Peter Chen",
      email: "peter.c@asiatrade.com",
      subject: "Bulk visitor passes",
      message: "We would like to bring a delegation of 15 people from our company. Is there a group discount for visitor passes?",
      date: "2024-03-08 09:00",
      status: "archived"
    }
  ];

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
                  <span>{msg.date}</span>
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

      {/* No Results */}
      {filteredMessages.length === 0 && (
        <div className="text-center py-12">
          <Mail className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No messages found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
