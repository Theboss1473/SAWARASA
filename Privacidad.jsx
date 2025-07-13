
import React from 'react';
import { Helmet } from 'react-helmet';
import { Lock, Cookie, UserCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Privacidad = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Helmet>
        <title>{t('privacidad.title')} - Roblox Master Zone</title>
        <meta name="description" content="Conoce cómo manejamos tu información personal en Roblox Master Zone. Tu privacidad es nuestra prioridad." />
      </Helmet>

      {/* AD_SLOT_HEADER */}
      <div className="ad-placeholder">Anuncio Header</div>

      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
          <Lock className="inline-block w-10 h-10 mr-4" />
          {t('privacidad.title')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('privacidad.lastUpdated')}
        </p>
      </header>

      <div className="card-dark p-8 rounded-lg prose prose-invert max-w-none">
        <p>{t('privacidad.p1')}</p>
        
        {/* AD_SLOT_INTEXT1 */}
        <div className="ad-placeholder my-6">Anuncio In-Text 1</div>

        <h2 className="flex items-center"><UserCheck className="w-6 h-6 mr-2 text-primary" />{t('privacidad.infoCollected')}</h2>
        <p>{t('privacidad.p2')}</p>
        
        <h2 className="flex items-center"><Cookie className="w-6 h-6 mr-2 text-primary" />{t('privacidad.cookiesAds')}</h2>
        <p>{t('privacidad.p3')}</p>
        
        {/* AD_SLOT_INTEXT2 */}
        <div className="ad-placeholder my-6">Anuncio In-Text 2</div>
        
        <p>{t('privacidad.p4')}</p>
      </div>
    </div>
  );
};

export default Privacidad;
