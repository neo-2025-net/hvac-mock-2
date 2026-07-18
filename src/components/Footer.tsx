import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { translations, Lang } from '../translations';

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy-950 border-t border-white/5" dir={t.dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src="/image.png"
              alt="مؤسسة أعمال الصفا"
              className="h-24 w-auto object-contain mb-5"
            />
            <p className="font-cairo text-white/50 text-sm leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>
            {/* Social / contact buttons */}
            <div className="flex gap-3 mt-6">
              <a
                href="tel:0581584123"
                className="flex items-center gap-2 bg-navy-800 hover:bg-lime-500 text-white/70 hover:text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 font-cairo"
              >
                <Phone className="w-4 h-4" />
                {lang === 'ar' ? 'اتصل' : 'Call'}
              </a>
              <a
                href="https://wa.me/966581584123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-navy-800 hover:bg-[#25D366] text-white/70 hover:text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 font-cairo"
              >
                <MessageCircle className="w-4 h-4" />
                {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-cairo font-bold text-white text-base mb-5">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {[
                { label: t.nav.home, href: '#home' },
                { label: t.footer.servicesLink, href: '#services' },
                { label: t.footer.aboutLink, href: '#about' },
                { label: t.footer.contactLink, href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-cairo text-white/50 hover:text-lime-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-cairo font-bold text-white text-base mb-5">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <a
                  href="tel:0581584123"
                  className="font-cairo text-white/80 hover:text-lime-400 text-base font-semibold transition-colors ltr-content"
                  dir="ltr"
                >
                  058 158 4123
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-cairo text-white/70 hover:text-[#25D366] text-sm transition-colors font-cairo"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-4 sm:px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-cairo text-white/30 text-xs text-center sm:text-start">
            {t.footer.rights}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/30 hover:text-white/70 text-xs font-cairo transition-colors group"
          >
            {lang === 'ar' ? 'العودة للأعلى' : 'Back to top'}
            <div className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group-hover:-translate-y-0.5 duration-200">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
