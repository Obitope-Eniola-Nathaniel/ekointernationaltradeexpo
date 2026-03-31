import { useEffect, useMemo, useState } from "react";
import { Search, Building2, MapPin, Package, Eye, Edit } from "lucide-react";
import { API_BASE_URL } from "../config/api";

type ApiRegistration = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  category: string;
  country?: string;
};

type Exhibitor = {
  id: string;
  company: string;
  contact: string;
  email: string;
  phone: string;
  sector: string;
  boothNumber: string;
  boothSize: string;
  products: string;
  country: string;
  status: string;
};

export function Exhibitors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [exhibitors, setExhibitors] = useState<Exhibitor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExhibitors = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/api/registrations`);
        if (!response.ok) {
          throw new Error("Failed to load exhibitors");
        }
        const data = (await response.json()) as ApiRegistration[];

        const mapped: Exhibitor[] = data
          .filter((reg) => reg.category === "Exhibitor")
          .map((reg) => ({
            id: reg.id,
            company: reg.company || "Unnamed Exhibitor",
            contact: `${reg.firstName} ${reg.lastName}`.trim(),
            email: reg.email,
            phone: reg.phone,
            // These are not yet modelled in the backend; keep neutral placeholders.
            sector: "—",
            boothNumber: "TBD",
            boothSize: "TBD",
            products: "—",
            country: reg.country || "Nigeria",
            status: "Confirmed"
          }));

        setExhibitors(mapped);
      } catch (err) {
        console.error("Failed to fetch exhibitors", err);
        setError("Unable to load exhibitors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchExhibitors();
  }, []);

  const filteredExhibitors = exhibitors.filter((exhibitor) =>
    exhibitor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exhibitor.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exhibitor.sector.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    return status === "Confirmed" 
      ? "bg-green-100 text-green-700" 
      : "bg-yellow-100 text-yellow-700";
  };

  if (loading) {
    return (
      <div className="p-6 lg:p-8 animate-pulse">
        <div className="mb-8">
          <div className="h-8 w-56 bg-gray-200 rounded-lg mb-3" />
          <div className="h-4 w-80 bg-gray-200 rounded-lg" />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="h-10 bg-gray-100 rounded-lg" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 p-4 space-y-2">
              <div className="h-3 w-24 bg-gray-100 rounded-lg" />
              <div className="h-6 w-12 bg-gray-200 rounded-lg" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200">
              <div className="p-6 border-b border-gray-100 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100" />
                  <div className="space-y-2">
                    <div className="h-4 w-40 bg-gray-100 rounded-lg" />
                    <div className="h-3 w-24 bg-gray-50 rounded-lg" />
                  </div>
                </div>
                <div className="h-5 w-16 bg-gray-100 rounded-lg" />
              </div>
              <div className="p-6 space-y-3">
                <div className="h-3 w-56 bg-gray-100 rounded-lg" />
                <div className="h-3 w-64 bg-gray-50 rounded-lg" />
                <div className="h-3 w-40 bg-gray-100 rounded-lg" />
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
        <h1 className="text-3xl text-gray-900 mb-2">Exhibitors</h1>
        <p className="text-gray-600">Manage exhibitor profiles and booth assignments</p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search exhibitors by company, contact, or sector..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Total Exhibitors</p>
          <p className="text-2xl text-gray-900">{exhibitors.length}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Confirmed</p>
          <p className="text-2xl text-green-600">
            {exhibitors.filter(e => e.status === "Confirmed").length}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">Pending</p>
          <p className="text-2xl text-yellow-600">
            {exhibitors.filter(e => e.status === "Pending").length}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600 mb-1">International</p>
          <p className="text-2xl text-purple-600">
            {exhibitors.filter(e => e.country !== "Nigeria").length}
          </p>
        </div>
      </div>

      {/* Exhibitors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredExhibitors.map((exhibitor) => (
          <div key={exhibitor.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--eko-green)]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-[var(--eko-green)]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">{exhibitor.company}</h3>
                    <p className="text-sm text-gray-600">{exhibitor.contact}</p>
                  </div>
                </div>
                <span className={`inline-block px-2 py-1 rounded text-xs ${getStatusColor(exhibitor.status)}`}>
                  {exhibitor.status}
                </span>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">{exhibitor.email}</p>
                <p className="text-gray-600">{exhibitor.phone}</p>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 space-y-4">
              {/* Booth Info */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Booth Location</p>
                  <p className="text-gray-900">
                    Booth {exhibitor.boothNumber} ({exhibitor.boothSize})
                  </p>
                </div>
              </div>

              {/* Products */}
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Products/Services</p>
                  <p className="text-gray-900">{exhibitor.products}</p>
                </div>
              </div>

              {/* Sector & Country */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                  {exhibitor.sector}
                </span>
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded text-sm">
                  {exhibitor.country}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-colors">
                <Eye className="h-4 w-4" />
                <span>View Details</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[var(--eko-green)] text-white rounded-lg hover:bg-[var(--eko-blue)] transition-colors">
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </button>
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
      {!error && !loading && filteredExhibitors.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No exhibitors found matching your search.</p>
        </div>
      )}
    </div>
  );
}
