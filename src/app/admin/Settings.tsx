import { useState } from "react";
import { Save, User, Bell, Lock, Globe } from "lucide-react";

export function Settings() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: Globe },
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock }
  ];

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your admin preferences and configuration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 p-2 space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-[var(--eko-green)] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {/* General Settings */}
          {activeTab === "general" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl text-gray-900 mb-6">General Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Event Name</label>
                  <input
                    type="text"
                    defaultValue="EKO International Trade Expo 2026"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Event Dates</label>
                  <input
                    type="text"
                    defaultValue="September 22-26, 2026"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Venue</label>
                  <input
                    type="text"
                    defaultValue="Eridan-space (Testing Ground) Obafemi Awolowo Way, Alausa, Ikeja, Lagos State"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Contact Email</label>
                  <input
                    type="email"
                    defaultValue="contact@ekointernationaltrade.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Contact Phone</label>
                  <input
                    type="tel"
                    defaultValue="+234 904 882 0010"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
                  />
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-[var(--eko-green)] text-white rounded-lg hover:bg-[var(--eko-blue)] transition-colors">
                  <Save className="h-5 w-5" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Profile Settings */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl text-gray-900 mb-6">Profile Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Admin User"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="admin@ekointernationaltrade.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Role</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none">
                    <option>Super Admin</option>
                    <option>Admin</option>
                    <option>Manager</option>
                  </select>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-[var(--eko-green)] text-white rounded-lg hover:bg-[var(--eko-blue)] transition-colors">
                  <Save className="h-5 w-5" />
                  Update Profile
                </button>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl text-gray-900 mb-6">Notification Preferences</h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-gray-900 mb-1">New Registrations</p>
                    <p className="text-sm text-gray-600">Receive notifications for new event registrations</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--eko-green)]" />
                </label>
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-gray-900 mb-1">New Messages</p>
                    <p className="text-sm text-gray-600">Get notified when new messages arrive</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--eko-green)]" />
                </label>
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-gray-900 mb-1">Payment Confirmations</p>
                    <p className="text-sm text-gray-600">Notifications for successful payments</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--eko-green)]" />
                </label>
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <p className="text-gray-900 mb-1">Daily Summary</p>
                    <p className="text-sm text-gray-600">Receive daily activity summary emails</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-[var(--eko-green)]" />
                </label>
                <button className="flex items-center gap-2 px-6 py-3 bg-[var(--eko-green)] text-white rounded-lg hover:bg-[var(--eko-blue)] transition-colors">
                  <Save className="h-5 w-5" />
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === "security" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl text-gray-900 mb-6">Security Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none"
                  />
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-[var(--eko-green)] text-white rounded-lg hover:bg-[var(--eko-blue)] transition-colors">
                  <Lock className="h-5 w-5" />
                  Update Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
