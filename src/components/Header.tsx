import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { translations, Lang } from '../translations';

interface HeaderProps {
  lang: Lang;
  onToggleLang: () => void;
}

export default function Header({ lang, onToggleLang }: HeaderProps) {
  const t = translations[lang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900 shadow-xl shadow-black/20 py-2'
          : 'bg-navy-900/80 backdrop-blur-md py-3'
      }`}
      dir={t.dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/image.png"
            alt="مؤسسة أعمال الصفا"
            className="h-14 w-auto object-contain drop-shadow-md"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-white/90 hover:text-lime-400 text-sm font-semibold transition-colors duration-200 rounded-lg hover:bg-white/5 font-cairo"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onToggleLang}
            className="px-3 py-1.5 text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-lg text-sm font-medium transition-all duration-200 font-cairo"
          >
            {t.nav.langSwitch}
          </button>
          <a
            href="tel:0581584123"
            className="flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-white px-4 py-2 rounded-xl font-bold text-sm transition-all duration-200 shadow-lg shadow-lime-500/30 hover:shadow-lime-400/40 hover:-translate-y-0.5 font-cairo"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>058 158 4123</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1.5 text-white/80 hover:text-white border border-white/20 rounded-lg text-xs font-medium transition-all font-cairo"
          >
            {t.nav.langSwitch}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-950 border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-white/90 hover:text-lime-400 font-semibold rounded-xl hover:bg-white/5 transition-colors font-cairo text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0581584123"
            className="mt-2 flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-white px-4 py-3 rounded-xl font-bold text-base transition-all font-cairo"
          >
            <Phone className="w-5 h-5" />
            <span>058 158 4123</span>
          </a>
        </div>
      </div>
    </header>
  );
}
