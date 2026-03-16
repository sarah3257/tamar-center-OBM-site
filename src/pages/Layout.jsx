
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Scroll to top when route changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { name: "בית", path: createPageUrl("Home") },
    { name: "אודות", path: createPageUrl("About") },
    { name: "השירותים", path: createPageUrl("Services") },
    { name: "המלצות", path: createPageUrl("Testimonials") },
    { name: "צור קשר", path: createPageUrl("Contact") }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950">
      <style>{`
        :root {
          --color-primary-orange: #F97316;
          --color-primary-blue: #0EA5E9;
          --color-dark: #0F172A;
          --color-dark-lighter: #1E293B;
        }
        
        * {
          scroll-behavior: smooth;
        }

        body {
          font-family: system-ui, -apple-system, sans-serif;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 right-0 left-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e240583b0887a22239a7f7/5354dfc39_LOGO-.png" 
                alt="תמר שכטר לוגו" 
                className="h-16 md:h-20 w-auto"
              />
              <div>
                <div className="text-2xl font-bold text-white">תמר שכטר</div>
                <div className="text-base text-orange-400">יועצת התנהגות ארגונית</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-orange-500"
                      : "text-slate-300 hover:text-orange-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              to={createPageUrl("Contact")}
              className="hidden md:block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/30"
            >
              שיחת ייעוץ חינם
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium px-2 py-2 ${
                      location.pathname === item.path
                        ? "text-orange-500"
                        : "text-slate-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl("Contact")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg text-center"
                >
                  שיחת ייעוץ חינם
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e240583b0887a22239a7f7/5354dfc39_LOGO-.png" 
                  alt="תמר שכטר" 
                  className="h-12 w-auto"
                />
                <div className="text-lg font-bold text-white">תמר שכטר</div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                יועצת התנהגות ארגונית (OBM)<br/>
                מתמחה בניתוח התנהגות וטיפול CBT
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">ניווט מהיר</h3>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-slate-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">צור קשר</h3>
              <div className="text-slate-400 text-sm space-y-2">
                <p>📧 obmtamar@gmail.com</p>
                <p dir="ltr">📞 0502131327</p>
                <p dir="ltr">📱 WhatsApp: 0502131327</p>
                <Link
                  to={createPageUrl("Contact")}
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  שיחת ייעוץ ללא עלות
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} תמר שכטר - יועצת התנהגות ארגונית. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
