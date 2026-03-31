import { useEffect, useMemo, useState } from "react";
import { Users, Building2, MessageSquare, Calendar, TrendingUp, Mail } from "lucide-react";
import { Link } from "react-router";
import { API_BASE_URL } from "../config/api";

type RegistrationSummary = {
  totalRegistrations: number;
  exhibitorCount: number;
  recentRegistrations: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    category: string;
    createdAt: string;
  }[];
};

type MessageSummary = {
  totalMessages: number;
  unreadCount: number;
  readCount: number;
  archivedCount: number;
  recentMessages: {
    id: string;
    name: string;
    email: string;
    subject: string;
    status: "unread" | "read" | "archived";
    createdAt: string;
  }[];
};

type EmailSummary = {
  totalEvents: number;
  sent: number;
  delivered: number;
  opened: number;
  clicked: number;
  bounced: number;
  spam: number;
};

type VisitorRegistrationSummary = {
  totalPageViews: number;
  totalRegistrations: number;
  conversionRate: number;
};

type PageView = {
  id: string;
  route: string;
  referrer?: string;
  userAgent?: string;
  ipAddress?: string;
  occurredAt: string;
};

export function Dashboard() {
  const expoDate = new Date("2026-09-22T08:00:00").getTime();
  const [summary, setSummary] = useState<RegistrationSummary | null>(null);
  const [messageSummary, setMessageSummary] = useState<MessageSummary | null>(null);
  const [emailSummary, setEmailSummary] = useState<EmailSummary | null>(null);
  const [visitorSummary, setVisitorSummary] = useState<VisitorRegistrationSummary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [, setError] = useState<string | null>(null);
  const [visitorDetailsOpen, setVisitorDetailsOpen] = useState(false);
  const [visitorDetailsLoading, setVisitorDetailsLoading] = useState(false);
  const [visitorDetailsError, setVisitorDetailsError] = useState<string | null>(null);
  const [pageViews, setPageViews] = useState<PageView[]>([]);

  // Fetch registration and message stats from the backend when the dashboard mounts.
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [regRes, msgRes, emailRes, visitorRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/registrations/summary`),
          fetch(`${API_BASE_URL}/api/messages/summary`),
          fetch(`${API_BASE_URL}/api/email/summary`),
          fetch(`${API_BASE_URL}/api/analytics/summary`)
        ]);

        if (!regRes.ok) {
          throw new Error("Failed to load registration summary");
        }
        if (!msgRes.ok) {
          throw new Error("Failed to load message summary");
        }
        if (!emailRes.ok) {
          throw new Error("Failed to load email summary");
        }
        if (!visitorRes.ok) {
          throw new Error("Failed to load visitor summary");
        }

        const regData = (await regRes.json()) as RegistrationSummary;
        const msgData = (await msgRes.json()) as MessageSummary;
        const emailData = (await emailRes.json()) as EmailSummary;
        const visitorData = (await visitorRes.json()) as VisitorRegistrationSummary;
        setSummary(regData);
        setMessageSummary(msgData);
        setEmailSummary(emailData);
        setVisitorSummary(visitorData);
      } catch (err) {
        console.error("Failed to fetch dashboard data", err);
        setError("Unable to load dashboard data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openVisitorDetails = async () => {
    setVisitorDetailsOpen(true);
    setVisitorDetailsLoading(true);
    setVisitorDetailsError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/analytics/page-views`);
      if (!res.ok) {
        throw new Error("Failed to load visitor details");
      }
      const data = (await res.json()) as PageView[];
      setPageViews(data);
    } catch (err) {
      console.error("Failed to load visitor details", err);
      setVisitorDetailsError("Unable to load visitor details.");
    } finally {
      setVisitorDetailsLoading(false);
    }
  };

  const daysUntilEvent = useMemo(() => {
    const now = Date.now();
    const distance = expoDate - now;
    if (distance <= 0) {
      return 0;
    }
    return Math.floor(distance / (1000 * 60 * 60 * 24));
  }, [expoDate]);

  const stats = useMemo(
    () => [
      {
        title: "Total Registrations",
        value: summary ? summary.totalRegistrations.toString() : "—",
        change: "+12%", // Placeholder – you can wire real trends later
        icon: Users,
        color: "bg-blue-500",
        trend: "up" as const
      },
      {
        title: "Exhibitors",
        value: summary ? summary.exhibitorCount.toString() : "—",
        change: "+8%", // Placeholder
        icon: Building2,
        color: "bg-green-500",
        trend: "up" as const
      },
      {
        title: "Messages",
        value: messageSummary ? messageSummary.totalMessages.toString() : "—",
        change: messageSummary ? `${messageSummary.unreadCount} unread` : "+0",
        icon: MessageSquare,
        color: "bg-purple-500",
        trend: "up" as const
      },
      {
        title: "Visitor → Registration",
        value:
          visitorSummary && visitorSummary.conversionRate > 0
            ? `${visitorSummary.conversionRate.toFixed(1)}%`
            : "—",
        change:
          visitorSummary
            ? `${visitorSummary.totalRegistrations} regs / ${visitorSummary.totalPageViews} visits`
            : "No data",
        icon: Users,
        color: "bg-teal-500",
        trend: "up" as const
      },
      {
        title: "Email Open Rate",
        value:
          emailSummary && emailSummary.delivered > 0
            ? `${Math.round((emailSummary.opened / emailSummary.delivered) * 100)}%`
            : "—",
        change:
          emailSummary && emailSummary.sent > 0
            ? `${emailSummary.sent} sent / ${emailSummary.delivered} delivered`
            : "No events",
        icon: Mail,
        color: "bg-pink-500",
        trend: "up" as const
      },
      {
        title: "Days Until Event",
        value: daysUntilEvent.toString(),
        change: "Sep 22, 2026",
        icon: Calendar,
        color: "bg-orange-500",
        trend: "neutral" as const
      }
    ],
    [summary, messageSummary, visitorSummary, emailSummary, daysUntilEvent]
  );

  const recentRegistrations = useMemo(
    () =>
      (summary?.recentRegistrations ?? []).map((reg) => ({
        id: reg.id,
        name: `${reg.firstName} ${reg.lastName}`.trim(),
        email: reg.email,
        type: reg.category,
        date: new Date(reg.createdAt).toLocaleString()
      })),
    [summary]
  );

  const recentMessages =
    messageSummary?.recentMessages.map((msg) => ({
      id: msg.id,
      name: msg.name,
      subject: msg.subject,
      date: new Date(msg.createdAt).toLocaleString(),
      read: msg.status !== "unread"
    })) ?? [];

  if (loading) {
    return (
      <div className="p-6 lg:p-8 animate-pulse">
        <div className="mb-8">
          <div className="h-8 w-48 bg-gray-200 rounded-lg mb-3" />
          <div className="h-4 w-72 bg-gray-200 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-200" />
                <div className="h-4 w-12 bg-gray-200 rounded-lg" />
              </div>
              <div className="h-6 w-20 bg-gray-200 rounded-lg mb-2" />
              <div className="h-4 w-24 bg-gray-100 rounded-lg" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="h-5 w-40 bg-gray-200 rounded-lg" />
                <div className="h-4 w-16 bg-gray-100 rounded-lg" />
              </div>
              <div className="divide-y divide-gray-100">
                {Array.from({ length: 3 }).map((__, rowIdx) => (
                  <div key={rowIdx} className="p-4 flex items-center justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-32 bg-gray-200 rounded-lg" />
                      <div className="h-3 w-40 bg-gray-100 rounded-lg" />
                    </div>
                    <div className="h-3 w-24 bg-gray-100 rounded-lg" />
                  </div>
                ))}
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
        <h1 className="text-3xl text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to EKO International Trade Expo Admin Portal</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isVisitorCard = stat.title === "Visitor → Registration";
          return (
            <button
              key={index}
              type="button"
              onClick={isVisitorCard ? openVisitorDetails : undefined}
              className={`bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-left ${
                isVisitorCard ? "cursor-pointer" : "cursor-default"
              }`}
            >
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
            </button>
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

      {/* Visitor details modal */}
      {visitorDetailsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[80vh] flex flex-col">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-lg text-gray-900">Visitor Details</h2>
                <p className="text-xs text-gray-500">
                  Recent page views for the last visitors to the website
                </p>
              </div>
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-gray-800"
                onClick={() => setVisitorDetailsOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              {visitorDetailsLoading ? (
                <div className="p-6 text-sm text-gray-500">Loading visitor data...</div>
              ) : visitorDetailsError ? (
                <div className="p-6 text-sm text-red-600">{visitorDetailsError}</div>
              ) : pageViews.length === 0 ? (
                <div className="p-6 text-sm text-gray-500">No visitor data yet.</div>
              ) : (
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Route
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Referrer
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        IP
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Device
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pageViews.map((pv) => (
                      <tr key={pv.id}>
                        <td className="px-4 py-2 text-gray-700">
                          {new Date(pv.occurredAt).toLocaleString()}
                        </td>
                        <td className="px-4 py-2 text-gray-700">{pv.route}</td>
                        <td className="px-4 py-2 text-gray-500 truncate max-w-[200px]">
                          {pv.referrer || "—"}
                        </td>
                        <td className="px-4 py-2 text-gray-500">{pv.ipAddress || "—"}</td>
                        <td className="px-4 py-2 text-gray-500 truncate max-w-[240px]">
                          {pv.userAgent || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
