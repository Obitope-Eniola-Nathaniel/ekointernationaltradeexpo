import { useState } from "react";
import { Link } from "react-router";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import logo from "../../assets/images/5c8986ece2f57565fb099eb11a2b86e50d4009c3.png";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
    console.log("Login submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              <Link to="/" className="inline-block">
                <img src={logo} alt="EKO Logo" className="w-64" />
              </Link>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl text-gray-900">
                  Welcome Back
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Log in to access your account and continue your journey with the EKO International Trade Expo 2026.
                </p>
              </div>
              
              {/* Decorative Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--eko-green)]/10 to-[var(--eko-green)]/5 border border-[var(--eko-green)]/20">
                  <div className="text-3xl text-[var(--eko-green)] mb-2">1000+</div>
                  <p className="text-gray-600">Registered Members</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--eko-blue)]/10 to-[var(--eko-blue)]/5 border border-[var(--eko-blue)]/20">
                  <div className="text-3xl text-[var(--eko-blue)] mb-2">100+</div>
                  <p className="text-gray-600">Exhibitors</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--eko-orange)]/10 to-[var(--eko-orange)]/5 border border-[var(--eko-orange)]/20">
                  <div className="text-3xl text-[var(--eko-orange)] mb-2">50+</div>
                  <p className="text-gray-600">Countries</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--eko-cyan)]/10 to-[var(--eko-cyan)]/5 border border-[var(--eko-cyan)]/20">
                  <div className="text-3xl text-[var(--eko-cyan)] mb-2">5 Days</div>
                  <p className="text-gray-600">Of Networking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Mobile Logo */}
              <div className="lg:hidden mb-8 text-center">
                <Link to="/" className="inline-block">
                  <img src={logo} alt="EKO Logo" className="w-48 mx-auto" />
                </Link>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl mb-2 text-gray-900">Log In</h2>
                <p className="text-gray-600">Access your EKO Expo account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none transition-all"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm mb-2 text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--eko-green)] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-[var(--eko-green)] focus:ring-[var(--eko-green)]"
                    />
                    <label htmlFor="rememberMe" className="text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[var(--eko-green)] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[var(--eko-green)] text-white py-3 px-6 rounded-lg hover:bg-[var(--eko-green)]/90 transition-colors text-lg"
                >
                  Log In
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-sm text-gray-700">Facebook</span>
                  </button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[var(--eko-green)] hover:underline">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
