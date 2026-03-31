import { useEffect, useMemo, useState } from "react";
import { Search, Filter, Download, Eye, Mail, Phone } from "lucide-react";
import { API_BASE_URL } from "../config/api";

type ApiRegistration = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  category: string;
  createdAt: string;
};

type UiRegistration = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  type: string;
  sector: string;
  date: string;
  status: string;
};

export function Registrations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [items, setItems] = useState<UiRegistration[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load registrations from the backend and adapt them to the UI shape.
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/api/registrations`);
        if (!response.ok) {
          throw new Error("Failed to load registrations");
        }
        const data = (await response.json()) as ApiRegistration[];

        const mapped: UiRegistration[] = data.map((reg) => ({
          id: reg.id,
          name: `${reg.firstName} ${reg.lastName}`.trim(),
          email: reg.email,
          phone: reg.phone,
          company: reg.company || "—",
          type: reg.category,
          // Sector and status are not yet modelled in the backend;
          // we keep them simple placeholders for now.
          sector: "—",
          status: "Confirmed",
          date: new Date(reg.createdAt).toLocaleDateString()
        }));

        setItems(mapped);
      } catch (err) {
        console.error("Failed to fetch registrations", err);
        setError("Unable to load registrations. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  const registrations = items;

  const filteredRegistrations = registrations.filter((reg) => {
    const matchesSearch = 
      reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === "all" || reg.type === filterType;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    return status === "Confirmed" 
      ? "bg-green-100 text-green-700" 
      : "bg-yellow-100 text-yellow-700";
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case "Exhibitor":
        return "bg-blue-100 text-blue-700";
      case "International":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
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
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {Array.from({ length: 6 }).map((_, rowIdx) => (
            <div key={rowIdx} className="flex items-center gap-4 px-6 py-4 border-b border-gray-100">
              <div className="flex-1 space-y-2">
                <div className="h-4 w-40 bg-gray-100 rounded-lg" />
                <div className="h-3 w-32 bg-gray-50 rounded-lg" />
              </div>
              <div className="hidden md:block h-4 w-40 bg-gray-100 rounded-lg" />
              <div className="hidden md:block h-3 w-32 bg-gray-50 rounded-lg" />
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
        <h1 className="text-3xl text-gray-900 mb-2">Registrations</h1>
        <p className="text-gray-600">Manage all event registrations and attendees</p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none appearance-none bg-white"
              >
                <option value="all">All Types</option>
                <option value="Exhibitor">Exhibitors</option>
                <option value="Visitor">Visitors</option>
                <option value="International">International</option>
              </select>
            </div>

            {/* Export Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-[var(--eko-green)] text-white rounded-lg hover:bg-[var(--eko-blue)] transition-colors">
              <Download className="h-5 w-5" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Total</p>
          <p className="text-2xl text-gray-900">{registrations.length}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Exhibitors</p>
          <p className="text-2xl text-gray-900">
            {registrations.filter(r => r.type === "Exhibitor").length}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Visitors</p>
          <p className="text-2xl text-gray-900">
            {registrations.filter(r => r.type === "Visitor").length}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">International</p>
          <p className="text-2xl text-gray-900">
            {registrations.filter(r => r.type === "International").length}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-sm text-gray-600">Name</th>
                <th className="text-left px-6 py-3 text-sm text-gray-600">Company</th>
                <th className="text-left px-6 py-3 text-sm text-gray-600">Contact</th>
                <th className="text-left px-6 py-3 text-sm text-gray-600">Type</th>
                <th className="text-left px-6 py-3 text-sm text-gray-600">Sector</th>
                <th className="text-left px-6 py-3 text-sm text-gray-600">Status</th>
                <th className="text-left px-6 py-3 text-sm text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRegistrations.map((reg) => (
                <tr key={reg.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-gray-900">{reg.name}</p>
                      <p className="text-sm text-gray-500">{reg.date}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{reg.company}</td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="h-3 w-3" />
                        <span className="truncate max-w-[150px]">{reg.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-3 w-3" />
                        <span>{reg.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-1 rounded text-xs ${getTypeColor(reg.type)}`}>
                      {reg.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{reg.sector}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-1 rounded text-xs ${getStatusColor(reg.status)}`}>
                      {reg.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Error / No Results */}
      {error && (
        <div className="text-center py-8 text-red-600 text-sm">
          {error}
        </div>
      )}
      {!error && !loading && filteredRegistrations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No registrations found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
