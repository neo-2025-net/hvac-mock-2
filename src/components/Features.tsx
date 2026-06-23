import { HeadphonesIcon, ShieldCheck, Zap, UserCheck } from 'lucide-react';
import { translations, Lang } from '../translations';

interface FeaturesProps {
  lang: Lang;
}

const icons = [HeadphonesIcon, ShieldCheck, Zap, UserCheck];

export default function Features({ lang }: FeaturesProps) {
  const t = translations[lang];

  return (
    <section id="features" className="bg-gradient-to-b from-slate-50 to-white py-20 px-4" dir={t.dir}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-lime-100 text-lime-700 font-bold text-sm px-4 py-1.5 rounded-full mb-4 font-cairo">
            {t.features.heading}
          </span>
          <h2 className="font-cairo font-black text-navy-900 text-3xl sm:text-4xl mb-4">
            {t.features.heading}
          </h2>
          <p className="font-cairo text-slate-500 text-lg max-w-xl mx-auto">
            {t.features.subheading}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-slate-100 hover:border-lime-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative bg circle */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-navy-50 opacity-60 group-hover:bg-lime-50 transition-colors duration-300" />

                {/* Icon */}
                <div className="relative mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-900 group-hover:bg-lime-500 transition-colors duration-300 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Text */}
                <h3 className="font-cairo font-bold text-navy-900 text-xl mb-2 relative">
                  {item.title}
                </h3>
                <p className="font-cairo text-slate-500 text-sm leading-relaxed relative">
                  {item.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-800 to-lime-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
