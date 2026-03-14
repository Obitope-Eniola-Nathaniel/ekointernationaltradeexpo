import { useState } from "react";
import { Search, Building2, MapPin, Package, Eye, Edit } from "lucide-react";

export function Exhibitors() {
  const [searchTerm, setSearchTerm] = useState("");

  const exhibitors = [
    {
      id: 1,
      company: "Johnson Enterprises Ltd",
      contact: "Adewale Johnson",
      email: "adewale.j@johnsonent.com",
      phone: "+234 801 234 5678",
      sector: "Manufacturing",
      boothNumber: "A-101",
      boothSize: "3x3m",
      products: "Industrial Equipment, Machinery",
      country: "Nigeria",
      status: "Confirmed"
    },
    {
      id: 2,
      company: "Hassan Trading Co.",
      contact: "Ibrahim Hassan",
      email: "ibrahim@hassantrading.com",
      phone: "+234 803 456 7890",
      sector: "Retail & Distribution",
      boothNumber: "B-205",
      boothSize: "2x2m",
      products: "Consumer Goods, Electronics",
      country: "Nigeria",
      status: "Confirmed"
    },
    {
      id: 3,
      company: "Global Trade International",
      contact: "Michael Chen",
      email: "michael.c@globaltrade.com",
      phone: "+86 138 0013 8000",
      sector: "Import/Export",
      boothNumber: "C-315",
      boothSize: "4x4m",
      products: "Textiles, Electronics, Machinery",
      country: "China",
      status: "Confirmed"
    },
    {
      id: 4,
      company: "Nwankwo Foods Limited",
      contact: "Blessing Nwankwo",
      email: "blessing@nwankwofoods.com",
      phone: "+234 805 678 9012",
      sector: "Food & Beverage",
      boothNumber: "D-420",
      boothSize: "3x2m",
      products: "Processed Foods, Beverages",
      country: "Nigeria",
      status: "Pending"
    },
    {
      id: 5,
      company: "Musa Textiles Industries",
      contact: "Ahmed Musa",
      email: "ahmed@musatextiles.com",
      phone: "+234 806 789 0123",
      sector: "Textiles & Fashion",
      boothNumber: "E-530",
      boothSize: "3x3m",
      products: "Fabrics, Garments, Fashion Accessories",
      country: "Nigeria",
      status: "Confirmed"
    },
    {
      id: 6,
      company: "UK Trade Partners Ltd",
      contact: "Sophia Williams",
      email: "sophia@uktradepartners.co.uk",
      phone: "+44 20 7946 0958",
      sector: "Business Services",
      boothNumber: "F-645",
      boothSize: "2x3m",
      products: "Consultancy, Trade Services",
      country: "United Kingdom",
      status: "Confirmed"
    }
  ];

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

      {/* No Results */}
      {filteredExhibitors.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No exhibitors found matching your search.</p>
        </div>
      )}
    </div>
  );
}
