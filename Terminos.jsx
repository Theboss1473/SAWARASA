
import React from 'react';
import { Helmet } from 'react-helmet';
import { FileText, Shield, Gavel } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Terminos = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Helmet>
        <title>{t('terminos.title')} - Roblox Master Zone</title>
        <meta name="description" content="Lee nuestros términos y condiciones de servicio para el uso de Roblox Master Zone." />
      </Helmet>

      {/* AD_SLOT_HEADER */}
      <div className="ad-placeholder">Anuncio Header</div>

      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
          <FileText className="inline-block w-10 h-10 mr-4" />
          {t('terminos.title')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('terminos.lastUpdated')}
        </p>
      </header>

      <div className="card-dark p-8 rounded-lg prose prose-invert max-w-none">
        <p>{t('terminos.p1')}</p>
        
        {/* AD_SLOT_INTEXT1 */}
        <div className="ad-placeholder my-6">Anuncio In-Text 1</div>

        <h2 className="flex items-center"><Shield className="w-6 h-6 mr-2 text-primary" />{t('terminos.siteUsage')}</h2>
        <p>{t('terminos.p2')}</p>
        
        <h2 className="flex items-center"><Gavel className="w-6 h-6 mr-2 text-primary" />{t('terminos.contentIP')}</h2>
        <p>{t('terminos.p3')}</p>
        
        {/* AD_SLOT_INTEXT2 */}
        <div className="ad-placeholder my-6">Anuncio In-Text 2</div>

        <h2 className="flex items-center">{t('terminos.disclaimer')}</h2>
        <p>{t('terminos.p4')}</p>
      </div>
    </div>
  );
};

export default Terminos;
