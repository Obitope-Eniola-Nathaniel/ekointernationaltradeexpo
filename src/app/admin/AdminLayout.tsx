import { useState, useEffect, Suspense } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  Building2,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import logo from "@/assets/images/d0244ad2b6eb8456c544a50c842971c30ea8e285.png";

export function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("ekoAdminAuth");
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("ekoAdminAuth");
    navigate("/admin/login");
  };

  const menuItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/registrations", label: "Registrations", icon: Users },
    { path: "/admin/exhibitors", label: "Exhibitors", icon: Building2 },
    { path: "/admin/messages", label: "Messages", icon: MessageSquare },
    { path: "/admin/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-40">
        <div className="flex items-center gap-3">
          <img src={logo} alt="EKO Logo" className="w-10 h-10" />
          <span className="font-semibold text-gray-900">EKO Admin</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 z-50
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-gray-200">
          <img src={logo} alt="EKO Logo" className="w-12 h-12" />
          <div>
            <h2 className="font-semibold text-gray-900">EKO Admin</h2>
            <p className="text-xs text-gray-500">Trade Expo Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className="p-4 space-y-2 overflow-y-auto"
          style={{ height: "calc(100vh - 180px)" }}
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-[var(--eko-green)] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64 pt-16 lg:pt-0">
        <Suspense fallback={<div className="p-8 text-gray-500">Loading…</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
