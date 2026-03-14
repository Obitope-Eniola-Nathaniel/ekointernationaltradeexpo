import { useState } from "react";
import { Search, Filter, Download, Eye, Mail, Phone } from "lucide-react";

export function Registrations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const registrations = [
    {
      id: 1,
      name: "Adewale Johnson",
      email: "adewale.j@email.com",
      phone: "+234 801 234 5678",
      company: "Johnson Enterprises Ltd",
      type: "Exhibitor",
      sector: "Manufacturing",
      date: "2024-03-10",
      status: "Confirmed"
    },
    {
      id: 2,
      name: "Chioma Okonkwo",
      email: "chioma.o@email.com",
      phone: "+234 802 345 6789",
      company: "TechVista Solutions",
      type: "Visitor",
      sector: "Technology",
      date: "2024-03-10",
      status: "Pending"
    },
    {
      id: 3,
      name: "Ibrahim Hassan",
      email: "ibrahim.h@email.com",
      phone: "+234 803 456 7890",
      company: "Hassan Trading Co.",
      type: "Exhibitor",
      sector: "Retail",
      date: "2024-03-09",
      status: "Confirmed"
    },
    {
      id: 4,
      name: "Grace Adekunle",
      email: "grace.a@email.com",
      phone: "+234 804 567 8901",
      company: "Grace Ventures",
      type: "Visitor",
      sector: "Services",
      date: "2024-03-09",
      status: "Confirmed"
    },
    {
      id: 5,
      name: "Michael Chen",
      email: "michael.c@email.com",
      phone: "+86 138 0013 8000",
      company: "Global Trade International",
      type: "International",
      sector: "Import/Export",
      date: "2024-03-08",
      status: "Confirmed"
    },
    {
      id: 6,
      name: "Blessing Nwankwo",
      email: "blessing.n@email.com",
      phone: "+234 805 678 9012",
      company: "Nwankwo Foods",
      type: "Exhibitor",
      sector: "Food & Beverage",
      date: "2024-03-08",
      status: "Pending"
    },
    {
      id: 7,
      name: "Ahmed Musa",
      email: "ahmed.m@email.com",
      phone: "+234 806 789 0123",
      company: "Musa Textiles",
      type: "Exhibitor",
      sector: "Textiles",
      date: "2024-03-07",
      status: "Confirmed"
    },
    {
      id: 8,
      name: "Sophia Williams",
      email: "sophia.w@email.com",
      phone: "+44 20 7946 0958",
      company: "UK Trade Partners",
      type: "International",
      sector: "Business Services",
      date: "2024-03-07",
      status: "Confirmed"
    }
  ];

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

      {/* No Results */}
      {filteredRegistrations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No registrations found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
