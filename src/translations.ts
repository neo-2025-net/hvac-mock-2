export type Lang = 'ar' | 'en';

export const translations = {
  ar: {
    dir: 'rtl' as const,
    lang: 'ar',
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      about: 'من نحن',
      contact: 'تواصل معنا',
      callNow: 'اتصل الآن',
      langSwitch: 'English',
    },
    hero: {
      badge: 'الموثوق لخدمات التكييف والتبريد',
      title: 'أعمال الصفا',
      titleSub: 'للتكييف والتبريد',
      tagline: 'خبرة ... جودة .. إلتزام',
      subTagline: 'راحة تدوم، هواء أنقى',
      cta: 'تواصل معنا الآن',
      ctaPhone: 'اتصل: ٠٥٨ ١٥٨ ٤١٢٣',
    },
    features: {
      heading: 'لماذا تختارنا؟',
      subheading: 'نقدم لك خدمة متميزة بمعايير احترافية عالية',
      items: [
        {
          title: 'خدمة على مدار الساعة',
          desc: 'فريق الدعم متاح 24/7 للرد على استفساراتك وحل مشاكلك في أي وقت.',
        },
        {
          title: 'ضمان على جميع الخدمات',
          desc: 'نضمن جودة أعمالنا بضمان شامل يغطي جميع الخدمات والقطع المُركَّبة.',
        },
        {
          title: 'سرعة في التنفيذ',
          desc: 'نلتزم بمواعيدك ونُنجز العمل بكفاءة عالية دون تأخير أو تأجيل.',
        },
        {
          title: 'فنيون متخصصون',
          desc: 'طاقم من الفنيين المدرَّبين والمعتمدين ذوي خبرة واسعة في التكييف والتبريد.',
        },
      ],
    },
    services: {
      heading: 'خدماتنا',
      subheading: 'خدمات متكاملة بأعلى جودة وأفضل سعر',
      items: [
        {
          title: 'صيانة المكيفات',
          desc: 'صيانة دورية وطارئة لجميع أنواع وماركات المكيفات لضمان أداء مثالي.',
        },
        {
          title: 'تركيب احترافي',
          desc: 'تركيب مكيفات سبليت ومركزية بأيدي فنيين معتمدين وبأعلى دقة.',
        },
        {
          title: 'تنظيف بالبخار',
          desc: 'تنظيف عميق وشامل للمكيفات باستخدام البخار لإزالة الجراثيم والأتربة.',
        },
        {
          title: 'شحن الفريون',
          desc: 'إعادة شحن الفريون بالكميات الصحيحة لاستعادة كفاءة التبريد الكاملة.',
        },
        {
          title: 'قطع غيار أصلية',
          desc: 'نستخدم فقط قطع الغيار الأصلية المعتمدة من الشركات المصنِّعة.',
        },
      ],
    },
    about: {
      heading: 'من نحن',
      body: 'أعمال الصفا للتكييف والتبريد شركة رائدة في مجال صيانة وتركيب وتنظيف أنظمة التكييف والتبريد. انطلقنا بهدف واضح وهو تقديم خدمات احترافية عالية الجودة تجمع بين الخبرة العملية والأمانة في التعامل. نخدم عملاءنا في المنازل والمنشآت التجارية والصناعية بكفاءة واحترافية.',
      stat3: '24/7',
      stat3Label: 'خدمة متواصلة',
    },
    cta: {
      heading: 'هل تحتاج إلى خدمة تكييف الآن؟',
      subheading: 'تواصل معنا فوراً وسيصل فنيّنا إليك في أقرب وقت.',
      phone: 'اتصل: 058 158 4123',
      whatsapp: 'واتساب',
    },
    footer: {
      desc: 'خبرة ... جودة .. إلتزام | راحة تدوم، هواء أنقى.',
      quickLinks: 'روابط سريعة',
      servicesLink: 'خدماتنا',
      aboutLink: 'من نحن',
      contactLink: 'تواصل معنا',
      contactTitle: 'تواصل معنا',
      phone: '058 158 4123',
      rights: '© 2026 أعمال الصفا للتكييف والتبريد. جميع الحقوق محفوظة.',
    },
  },
  en: {
    dir: 'ltr' as const,
    lang: 'en',
    nav: {
      home: 'Home',
      services: 'Our Services',
      about: 'About Us',
      contact: 'Contact',
      callNow: 'Call Now',
      langSwitch: 'عربي',
    },
    hero: {
      badge: 'Your Trusted Partner for AC & Refrigeration Services',
      title: 'Establishment',
      titleSub: 'For Air Conditioning & Refrigeration',
      tagline: 'Experience... Quality... Commitment',
      subTagline: 'Lasting Comfort, Cleaner Air',
      cta: 'Connect With Us Now',
      ctaPhone: 'Call: 058 158 4123',
    },
    features: {
      heading: 'Why Choose Us?',
      subheading: 'We deliver outstanding service with professional standards',
      items: [
        {
          title: '24/7 Customer Service',
          desc: 'Our support team is available around the clock to answer your questions and resolve issues.',
        },
        {
          title: 'Warranty on All Services',
          desc: 'We guarantee the quality of all our work with a comprehensive warranty on services and parts.',
        },
        {
          title: 'Fast Execution',
          desc: 'We respect your schedule and complete work efficiently without delays.',
        },
        {
          title: 'Specialized Technicians',
          desc: 'A team of trained, certified technicians with extensive expertise in AC and refrigeration.',
        },
      ],
    },
    services: {
      heading: 'Our Services',
      subheading: 'Integrated services with the highest quality and best price',
      items: [
        {
          title: 'AC Maintenance',
          desc: 'Regular and emergency maintenance for all types and brands of air conditioners.',
        },
        {
          title: 'Professional Installation',
          desc: 'Split and central AC installation by certified technicians with precision.',
        },
        {
          title: 'Steam Cleaning',
          desc: 'Deep steam cleaning to eliminate bacteria, dust, and allergens from your AC unit.',
        },
        {
          title: 'Freon Recharging',
          desc: 'Recharging refrigerant to exact specifications to restore full cooling efficiency.',
        },
        {
          title: 'Original Spare Parts',
          desc: 'We only use genuine, manufacturer-approved spare parts for all repairs.',
        },
      ],
    },
    about: {
      heading: 'About Us',
      body: 'Establishment for Air Conditioning and Refrigeration is a leading company in AC maintenance, installation, and cleaning. Founded with a clear goal of delivering professional, high-quality services combining practical expertise with integrity. We serve residential, commercial, and industrial clients with efficiency and professionalism.',
      stat3: '24/7',
      stat3Label: 'Support',
    },
    cta: {
      heading: 'Need AC Service Right Now?',
      subheading: 'Contact us immediately and our technician will reach you as soon as possible.',
      phone: 'Call: 058 158 4123',
      whatsapp: 'WhatsApp',
    },
    footer: {
      desc: 'Experience... Quality... Commitment | Lasting Comfort, Cleaner Air.',
      quickLinks: 'Quick Links',
      servicesLink: 'Our Services',
      aboutLink: 'About Us',
      contactLink: 'Contact',
      contactTitle: 'Contact Us',
      phone: '058 158 4123',
      rights: '© 2026 Establishment for AC & Refrigeration. All rights reserved.',
    },
  },
};
