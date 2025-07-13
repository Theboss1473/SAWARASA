
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Coins, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-16">
      <Helmet>
        <title>{t('home.title')} - Roblox Master Zone</title>
        <meta name="description" content={t('home.subtitle')} />
      </Helmet>

      {/* AD_SLOT_HEADER */}
      <div className="ad-placeholder mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">Anuncio Header</div>

      {/* Hero Section */}
      <header className="relative text-center pt-10 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background -z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-foreground">
            {t('home.title').replace('Roblox', '')} <span className="gradient-text">Roblox</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="neon-purple-btn text-lg py-6 px-8">
              <Link to="/gana-robux">
                <Coins className="mr-2 h-5 w-5" /> {t('home.earnRobuxButton')}
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-lg py-6 px-8 border-primary/50 hover:bg-primary/10 hover:text-primary">
              <Link to="/trucos">
                <Zap className="mr-2 h-5 w-5" /> {t('home.exploreCheatsButton')}
              </Link>
            </Button>
          </div>
        </motion.div>
        {/* AD_SLOT_HERO */}
        <div className="ad-placeholder mt-8 max-w-4xl mx-auto">Anuncio Hero</div>
      </header>

      {/* Featured Articles Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">{t('home.featuredArticles')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/gana-robux" className="card-dark rounded-lg overflow-hidden group h-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-full flex flex-col"
            >
              <div className="w-full h-48 overflow-hidden">
                <img  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Una pila de monedas virtuales brillantes con un logo estilo Roblox" src="https://images.unsplash.com/photo-1616462314882-e7e82cc2c6aa" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t('home.article1Title')}</h3>
                <p className="text-muted-foreground mb-4 text-sm flex-grow">{t('home.article1Desc')}</p>
                <div className="ad-placeholder my-4">Anuncio In-Text 1</div>
                <div className="mt-auto text-primary hover:text-primary/80 font-semibold flex items-center">
                  {t('home.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          </Link>
          <Link to="/eventos-secretos" className="card-dark rounded-lg overflow-hidden group h-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full flex flex-col"
            >
              <div className="w-full h-48 overflow-hidden">
                <img  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Una isla tropical con un cofre del tesoro oculto en un juego de Roblox" src="https://images.unsplash.com/photo-1581088714434-e854646c7277" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t('home.article2Title')}</h3>
                <p className="text-muted-foreground mb-4 text-sm flex-grow">{t('home.article2Desc')}</p>
                <div className="mt-auto text-primary hover:text-primary/80 font-semibold flex items-center">
                  {t('home.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          </Link>
          <Link to="/trucos" className="card-dark rounded-lg overflow-hidden group h-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-full flex flex-col"
            >
              <div className="w-full h-48 overflow-hidden">
                <img  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Un personaje en un juego de Roblox usando un poderoso ataque de espada" src="https://images.unsplash.com/photo-1689179772870-4fc1dd4dba3d" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t('home.article3Title')}</h3>
                <p className="text-muted-foreground mb-4 text-sm flex-grow">{t('home.article3Desc')}</p>
                <div className="mt-auto text-primary hover:text-primary/80 font-semibold flex items-center">
                  {t('home.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>
      
      {/* AD_SLOT_INTEXT2 */}
      <div className="ad-placeholder max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">Anuncio In-Text 2</div>

      {/* Latest Posts & Sidebar Ad */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-8">{t('home.latestPosts')}</h2>
          <div className="space-y-4">
            <Link to="/novedades" className="block p-4 rounded-lg card-dark transition-all duration-300 hover:bg-primary/10">
              <p className="text-lg font-semibold text-foreground">{t('home.post1')}</p>
            </Link>
            <Link to="/generadores" className="block p-4 rounded-lg card-dark transition-all duration-300 hover:bg-primary/10">
              <p className="text-lg font-semibold text-foreground">{t('home.post2')}</p>
            </Link>
            <Link to="/trucos" className="block p-4 rounded-lg card-dark transition-all duration-300 hover:bg-primary/10">
              <p className="text-lg font-semibold text-foreground">{t('home.post3')}</p>
            </Link>
          </div>
        </div>
        <aside className="hidden lg:block">
          <h3 className="text-2xl font-bold mb-4">{t('home.advertising')}</h3>
          {/* AD_SLOT_SIDEBAR */}
          <div className="sidebar-ad-placeholder sticky top-24">Anuncio Sidebar</div>
        </aside>
      </section>
    </div>
  );
};

export default Home;
