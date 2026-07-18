import { CheckCircle2 } from 'lucide-react';
import { translations, Lang } from '../translations';

interface AboutProps {
  lang: Lang;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang];

  const checkPoints =
    lang === 'ar'
      ? [
          'فنيون معتمدون ومدرَّبون على أحدث التقنيات',
          'خدمة لجميع الأنواع والماركات العالمية',
          'ضمان معتمد على جميع الأعمال والقطع',
          'أسعار تنافسية وشفافة بدون تكاليف خفية',
          'خدمة طوارئ متاحة على مدار الساعة',
        ]
      : [
          'Certified technicians trained on the latest technology',
          'Service for all brands and international makes',
          'Certified warranty on all work and parts',
          'Competitive, transparent pricing with no hidden fees',
          'Emergency service available around the clock',
        ];

  return (
    <section id="about" className="py-24 px-4 bg-white" dir={t.dir}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                // src="https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=800"
                src="https://images.pexels.com/photos/16600100/pexels-photo-16600100.jpeg?auto=compress&cs=tinysrgb&w=800"
                
                alt={lang === 'ar' ? 'أعمال الصفا' : 'HVAC Technicians'}
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>

            {/* Floating stat card — 24/7 only */}
            <div className="absolute -bottom-6 right-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
              <div className="text-center">
                <div className="font-cairo font-black text-sky-600 text-3xl">{t.about.stat3}</div>
                <div className="font-cairo text-slate-500 text-sm">{t.about.stat3Label}</div>
              </div>
            </div>

            {/* Accent shapes */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-lime-500/15 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy-100 rounded-full -z-10" />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-lime-100 text-lime-700 font-bold text-sm px-4 py-1.5 rounded-full mb-5 font-cairo">
              {t.about.heading}
            </span>
            <h2 className="font-cairo font-black text-navy-900 text-3xl sm:text-4xl leading-snug mb-6">
              {lang === 'ar'
                ? 'نحن شركاؤك الموثوقون في راحتك'
                : 'Your Trusted Partner in Comfort'}
            </h2>
            <p className="font-cairo text-slate-600 text-base leading-loose mb-8">
              {t.about.body}
            </p>

            {/* Check list */}
            <ul className="space-y-3 mb-8">
              {checkPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                  <span className="font-cairo text-slate-700 text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:0581584123"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 px-8 rounded-2xl text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5 font-cairo"
            >
              {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
