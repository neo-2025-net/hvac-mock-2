import { Wrench, Hammer, Wind, Droplets, Package } from 'lucide-react';
import { translations, Lang } from '../translations';

interface ServicesProps {
  lang: Lang;
}

const icons = [Wrench, Hammer, Wind, Droplets, Package];

const serviceImages = [
  // 'https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=600',
  // 'https://images.pexels.com/photos/8961388/pexels-photo-8961388.jpeg?auto=compress&cs=tinysrgb&w=600',
  // 'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=600',
  // 'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=600',
  // 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',

    'https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/33379360/pexels-photo-33379360.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/14086132/pexels-photo-14086132.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/5463585/pexels-photo-5463585.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/7019311/pexels-photo-7019311.jpeg?auto=compress&cs=tinysrgb&w=600',
];

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang];

  return (
    <section
      id="services"
      className="py-24 px-4 bg-navy-950 relative overflow-hidden"
      dir={t.dir}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-800 via-lime-500 to-sky-400" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-lime-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-lime-500/15 text-lime-400 font-bold text-sm px-4 py-1.5 rounded-full mb-4 font-cairo border border-lime-500/20">
            {t.services.heading}
          </span>
          <h2 className="font-cairo font-black text-white text-3xl sm:text-4xl mb-4">
            {t.services.heading}
          </h2>
          <p className="font-cairo text-white/60 text-lg max-w-xl mx-auto">
            {t.services.subheading}
          </p>
        </div>

        {/* Services grid — 3 top, 2 bottom centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden border border-white/5 hover:border-lime-500/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-500/10 ${
                  i >= 3 ? 'lg:col-start-auto' : ''
                }`}
                style={
                  i === 3
                    ? { gridColumnStart: undefined }
                    : {}
                }
              >
                {/* Image background */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={serviceImages[i]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-11 h-11 bg-lime-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Text content */}
                <div className="bg-navy-900 p-6">
                  <h3 className="font-cairo font-bold text-white text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="font-cairo text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* CTA link */}
                  <a
                    href="tel:0581584123"
                    className="inline-flex items-center gap-2 mt-4 text-lime-400 hover:text-lime-300 font-semibold text-sm transition-colors font-cairo group-hover:gap-3"
                  >
                    {lang === 'ar' ? 'اطلب الخدمة ←' : 'Request Service →'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="tel:0581584123"
            className="inline-flex items-center gap-3 bg-lime-500 hover:bg-lime-400 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 shadow-2xl shadow-lime-500/30 hover:shadow-lime-400/40 hover:-translate-y-1 font-cairo"
          >
            {lang === 'ar' ? 'اتصل الآن للحصول على عرض سعر' : 'Call Now for a Free Quote'}
          </a>
        </div>
      </div>
    </section>
  );
}
