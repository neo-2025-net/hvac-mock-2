import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { translations, Lang } from '../translations';

interface ContactCTAProps {
  lang: Lang;
}

export default function ContactCTA({ lang }: ContactCTAProps) {
  const t = translations[lang];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 overflow-hidden"
      dir={t.dir}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-navy-950/70" />

      {/* Glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-lime-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-700 via-lime-500 to-sky-400" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading + contact info */}
          <div>
            <span className="inline-block bg-lime-500/20 text-lime-400 font-bold text-sm px-4 py-1.5 rounded-full mb-6 font-cairo border border-lime-500/20">
              {t.cta.heading}
            </span>
            <h2 className="font-cairo font-black text-white text-3xl sm:text-4xl leading-snug mb-4">
              {t.cta.heading}
            </h2>
            <p className="font-cairo text-white/70 text-lg leading-relaxed mb-10">
              {t.cta.subheading}
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-lime-500/20 border border-lime-500/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <div className="font-cairo text-white/50 text-xs mb-0.5">
                    {lang === 'ar' ? 'هاتف' : 'Phone'}
                  </div>
                  <a
                    href="tel:0581584123"
                    className="font-cairo font-bold text-white text-xl hover:text-lime-400 transition-colors ltr-content"
                    dir="ltr"
                  >
                    058 158 4123
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <div className="font-cairo text-white/50 text-xs mb-0.5">
                    {lang === 'ar' ? 'ساعات العمل' : 'Working Hours'}
                  </div>
                  <div className="font-cairo font-semibold text-white text-base">
                    {lang === 'ar' ? '٢٤ ساعة / ٧ أيام في الأسبوع' : '24 Hours / 7 Days a Week'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <div className="font-cairo text-white/50 text-xs mb-0.5">
                    {lang === 'ar' ? 'منطقة الخدمة' : 'Service Area'}
                  </div>
                  <div className="font-cairo font-semibold text-white text-base">
                    {lang === 'ar' ? 'تبوك، المملكة العربية السعودية' : 'Tabuk, Kingdom of Saudi Arabia'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10">
            <h3 className="font-cairo font-black text-white text-2xl mb-2">
              {lang === 'ar' ? 'احجز موعدك الآن' : 'Book Your Appointment'}
            </h3>
            <p className="font-cairo text-white/60 text-base mb-8">
              {lang === 'ar'
                ? 'تواصل معنا عبر الهاتف أو واتساب وسنرد عليك فوراً'
                : 'Contact us via phone or WhatsApp and we\'ll respond immediately'}
            </p>

            <div className="space-y-4">
              <a
                href="tel:0581584123"
                className="flex items-center justify-center gap-3 w-full bg-lime-500 hover:bg-lime-400 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-200 shadow-xl shadow-lime-500/30 hover:shadow-lime-400/40 hover:-translate-y-0.5 font-cairo"
              >
                <Phone className="w-6 h-6" />
                {lang === 'ar' ? 'اتصل بنا الآن' : 'Call Us Now'}
              </a>

              <a
                href="https://wa.me/966581584123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20c45c] text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-200 shadow-xl shadow-green-500/20 hover:-translate-y-0.5 font-cairo"
              >
                <MessageCircle className="w-6 h-6" />
                {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="font-cairo text-white/40 text-sm">
                {lang === 'ar'
                  ? 'خدمة عملاء متاحة على مدار الساعة طوال أيام الأسبوع'
                  : '24/7 customer support available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
