import { Users, Building2, MessageSquare, Calendar, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router";

export function Dashboard() {
  const stats = [
    {
      title: "Total Registrations",
      value: "324",
      change: "+12%",
      icon: Users,
      color: "bg-blue-500",
      trend: "up"
    },
    {
      title: "Exhibitors",
      value: "87",
      change: "+8%",
      icon: Building2,
      color: "bg-green-500",
      trend: "up"
    },
    {
      title: "Messages",
      value: "156",
      change: "+24",
      icon: MessageSquare,
      color: "bg-purple-500",
      trend: "up"
    },
    {
      title: "Days Until Event",
      value: "164",
      change: "Sep 22, 2026",
      icon: Calendar,
      color: "bg-orange-500",
      trend: "neutral"
    }
  ];

  const recentRegistrations = [
    { id: 1, name: "Adewale Johnson", email: "adewale.j@email.com", type: "Exhibitor", date: "2 hours ago" },
    { id: 2, name: "Chioma Okonkwo", email: "chioma.o@email.com", type: "Visitor", date: "5 hours ago" },
    { id: 3, name: "Ibrahim Hassan", email: "ibrahim.h@email.com", type: "Exhibitor", date: "1 day ago" },
    { id: 4, name: "Grace Adekunle", email: "grace.a@email.com", type: "Visitor", date: "1 day ago" },
    { id: 5, name: "Michael Chen", email: "michael.c@email.com", type: "International", date: "2 days ago" }
  ];

  const recentMessages = [
    { id: 1, name: "Sarah Williams", subject: "Booth pricing inquiry", date: "1 hour ago", read: false },
    { id: 2, name: "David Okafor", subject: "Sponsorship opportunities", date: "3 hours ago", read: false },
    { id: 3, name: "Fatima Bello", subject: "Event schedule question", date: "6 hours ago", read: true },
    { id: 4, name: "John Smith", subject: "International exhibitor details", date: "1 day ago", read: true }
  ];

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to EKO International Trade Expo Admin Portal</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                {stat.trend === "up" && (
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <TrendingUp className="h-4 w-4" />
                    <span>{stat.change}</span>
                  </div>
                )}
              </div>
              <h3 className="text-2xl text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.title}</p>
              {stat.trend === "neutral" && (
                <p className="text-xs text-gray-500 mt-2">{stat.change}</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Registrations */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl text-gray-900">Recent Registrations</h2>
            <Link 
              to="/admin/registrations"
              className="text-[var(--eko-green)] hover:text-[var(--eko-blue)] text-sm transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentRegistrations.map((reg) => (
              <div key={reg.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{reg.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{reg.email}</p>
                    <span className="inline-block px-2 py-1 bg-[var(--eko-green)]/10 text-[var(--eko-green)] rounded text-xs">
                      {reg.type}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{reg.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl text-gray-900">Recent Messages</h2>
            <Link 
              to="/admin/messages"
              className="text-[var(--eko-green)] hover:text-[var(--eko-blue)] text-sm transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`${msg.read ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
                        {msg.name}
                      </h3>
                      {!msg.read && (
                        <span className="w-2 h-2 bg-[var(--eko-green)] rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{msg.subject}</p>
                  </div>
                  <span className="text-xs text-gray-500">{msg.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/admin/registrations"
            className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[var(--eko-green)] hover:shadow-md transition-all group"
          >
            <Users className="h-8 w-8 text-[var(--eko-green)] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-gray-900 mb-1">View Registrations</h3>
            <p className="text-sm text-gray-600">Manage all event registrations</p>
          </Link>
          <Link
            to="/admin/exhibitors"
            className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[var(--eko-green)] hover:shadow-md transition-all group"
          >
            <Building2 className="h-8 w-8 text-[var(--eko-green)] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-gray-900 mb-1">Manage Exhibitors</h3>
            <p className="text-sm text-gray-600">View and edit exhibitor details</p>
          </Link>
          <Link
            to="/admin/messages"
            className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[var(--eko-green)] hover:shadow-md transition-all group"
          >
            <MessageSquare className="h-8 w-8 text-[var(--eko-green)] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-gray-900 mb-1">Review Messages</h3>
            <p className="text-sm text-gray-600">Respond to inquiries and messages</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
