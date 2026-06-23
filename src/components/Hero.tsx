import { Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { translations, Lang } from '../translations';

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir={t.dir}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            // 'url(https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            
            'url(https://images.pexels.com/photos/10961006/pexels-photo-10961006.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      />

      {/* Layered overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-900/80 to-navy-950/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/30" />

      {/* Decorative blue glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-lime-500/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto pt-24 pb-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-lime-500/20 border border-lime-400/30 text-lime-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 font-cairo backdrop-blur-sm">
          <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Logo centered on hero */}
        <div className="flex justify-center mb-8">
          <img
            src="/image.png"
            alt="مؤسسة أعمال الصفا"
            className="h-36 sm:h-44 w-auto object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 8px 32px rgba(101,176,16,0.35))' }}
          />
        </div>

        {/* Main heading */}
        <h1 className="font-cairo font-black text-white text-shadow leading-tight mb-2">
          <span className="block text-3xl sm:text-4xl md:text-5xl text-white/90">
            {t.hero.title}
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl text-lime-400 mt-1">
            {t.hero.titleSub}
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-lime-400/60" />
          <div className="w-2 h-2 bg-lime-400 rounded-full" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-lime-400/60" />
        </div>

        {/* Taglines */}
        <p className="font-cairo font-bold text-sky-300 text-xl sm:text-2xl text-shadow-sm mb-2">
          {t.hero.tagline}
        </p>
        <p className="font-cairo text-white/80 text-lg sm:text-xl text-shadow-sm mb-10">
          {t.hero.subTagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/966581584123"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-lime-500 hover:bg-lime-400 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-2xl shadow-lime-500/40 hover:shadow-lime-400/50 hover:-translate-y-1 font-cairo w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            {t.hero.cta}
          </a>
          <a
            href="tel:0581584123"
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 font-cairo w-full sm:w-auto justify-center"
          >
            <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
            {t.hero.ctaPhone}
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors group"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
}
