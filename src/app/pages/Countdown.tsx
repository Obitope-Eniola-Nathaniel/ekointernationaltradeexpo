import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

export function Countdown() {
  // Set expo date - adjust as needed
  const expoDate = new Date("2026-09-22T08:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = expoDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [expoDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days, color: "var(--eko-green)" },
    { label: "Hours", value: timeLeft.hours, color: "var(--eko-orange)" },
    { label: "Minutes", value: timeLeft.minutes, color: "var(--eko-blue)" },
    { label: "Seconds", value: timeLeft.seconds, color: "var(--eko-cyan)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[var(--eko-green)] to-[var(--eko-blue)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4 text-white">Countdown to the Expo</h1>
            <p className="text-lg md:text-xl text-white/95">
              Mark your calendar for an unforgettable experience
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {timeUnits.map((unit, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl p-6 md:p-8 text-center text-white"
                style={{ backgroundColor: unit.color }}
              >
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl lg:text-6xl mb-2 text-white">
                    {unit.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-base uppercase tracking-wide text-white/90">
                    {unit.label}
                  </div>
                </div>
                {/* Decorative circle */}
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10"
                  style={{ backgroundColor: "white" }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-center">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[var(--eko-green)] to-[var(--eko-blue)] rounded-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white">Date</h3>
                </div>
                <p className="text-2xl text-white">Tues 22nd - Sat 26th September 2026</p>
                <p className="text-white/80 mt-2">5 Days of Innovation & Networking</p>
              </div>

              <div className="bg-gradient-to-br from-[var(--eko-orange)] to-[var(--eko-yellow)] rounded-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white">Time</h3>
                </div>
                <p className="text-2xl text-white">8:00 AM Daily</p>
                <p className="text-white/80 mt-2">Opening Time</p>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl mb-4">Location</h3>
              <p className="text-gray-700 mb-2">
                Police College, Ikeja
              </p>
              <p className="text-gray-600">Lagos State, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What to Expect</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              An immersive experience designed to connect, inspire, and grow your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                day: "Day 1-2",
                title: "Opening & Exhibitions",
                desc: "Grand opening ceremony and initial exhibition showcases",
                color: "var(--eko-green)",
              },
              {
                day: "Day 3-4",
                title: "B2B Networking",
                desc: "Intensive networking sessions and partnership meetings",
                color: "var(--eko-orange)",
              },
              {
                day: "Day 5",
                title: "Cultural & Closing",
                desc: "Cultural showcases and closing ceremonies",
                color: "var(--eko-blue)",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div
                  className="text-sm uppercase tracking-wide mb-2 font-medium"
                  style={{ color: item.color }}
                >
                  {item.day}
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[var(--eko-green)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-white">Don't Miss Out!</h2>
          <p className="text-lg mb-8 text-white/95 max-w-2xl mx-auto">
            Secure your spot at the premier trade expo connecting businesses across borders
          </p>
          <a
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-white text-[var(--eko-green)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}