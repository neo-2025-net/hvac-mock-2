import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { Lang } from './translations';

export default function App() {
  const [lang, setLang] = useState<Lang>('ar');

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  useEffect(() => {
    const html = document.documentElement;
    const isAr = lang === 'ar';
    html.setAttribute('lang', isAr ? 'ar' : 'en');
    html.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    document.body.style.direction = isAr ? 'rtl' : 'ltr';
    document.body.style.textAlign = isAr ? 'right' : 'left';
  }, [lang]);

  return (
    <div className="font-cairo" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Header lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <ContactCTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
