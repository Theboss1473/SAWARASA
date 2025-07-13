import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import GanaRobux from '@/pages/GanaRobux';
import Trucos from '@/pages/Trucos';
import EventosSecretos from '@/pages/EventosSecretos';
import Novedades from '@/pages/Novedades';
import Generadores from '@/pages/Generadores.jsx';
import Footer from '@/components/Footer';
import Terminos from '@/pages/Terminos';
import Privacidad from '@/pages/Privacidad';
import Contacto from '@/pages/Contacto';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PageLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const el = document.documentElement;
    const scrollTop = el.scrollTop || document.body.scrollTop;
    const scrollHeight = el.scrollHeight || document.body.scrollHeight;
    const percent = (scrollTop / (scrollHeight - el.clientHeight)) * 100;
    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-1">
      <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: `${width}%` }}></div>
    </div>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-20 right-4 md:bottom-4 md:right-4 z-50 p-3 rounded-full neon-purple-btn"
        >
          <ArrowUp className="h-6 w-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Helmet>
          <title>{t('home.title')} - Roblox Master Zone</title>
          <meta name="description" content={t('home.subtitle')} />
          <body className="bg-background" />
        </Helmet>
        
        <ReadingProgressBar />
        <Navbar />
        
        <main className="pt-20 flex-grow">
          <PageLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gana-robux" element={<GanaRobux />} />
              <Route path="/trucos" element={<Trucos />} />
              <Route path="/eventos-secretos" element={<EventosSecretos />} />
              <Route path="/novedades" element={<Novedades />} />
              <Route path="/generadores" element={<Generadores />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/terminos" element={<Terminos />} />
              <Route path="/privacidad" element={<Privacidad />} />
            </Routes>
          </PageLayout>
        </main>
        
        <Footer />
        <Toaster />
        <ScrollToTopButton />
        
        {/* AD_SLOT_MOBILE_ANCHOR */}
        <div className="mobile-anchor-ad visible">
          <div className="ad-placeholder min-h-[50px] !my-0">
            Anuncio Ancla Móvil
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;