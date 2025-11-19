"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("products"), href: "#products" },
    { name: t("benefits"), href: "#benefits" },
    { name: t("contact"), href: "#contact" },
  ];

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav
      className={cn(
        "w-full transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
              <span className="text-2xl">🍪</span>
            </div>
            <span className={cn("text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-600", scrolled ? "opacity-100" : "text-primary")}>
              MasaFresh
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors">
                <Globe size={20} />
                <span className="uppercase font-medium">{locale}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right border border-gray-100 overflow-hidden">
                {['es', 'en'].map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLocale(l)}
                    className={cn(
                      "block w-full text-left px-4 py-2 text-sm hover:bg-orange-50 transition-colors",
                      locale === l ? "text-primary font-bold bg-orange-50" : "text-gray-700"
                    )}
                  >
                    {l === 'es' ? 'Español' : 'English'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-orange-50 hover:text-primary rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex justify-center space-x-4">
                  {['es', 'en'].map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        switchLocale(l);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        locale === l ? "bg-primary text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      {l === 'es' ? 'Español' : 'English'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
