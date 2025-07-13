
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Contacto = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Mensaje enviado (simulación)",
      description: "Gracias por contactarnos. Te responderemos pronto. 🚀"
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Helmet>
        <title>{t('contacto.title')} - Roblox Master Zone</title>
        <meta name="description" content={t('contacto.subtitle')} />
      </Helmet>

      {/* AD_SLOT_HEADER */}
      <div className="ad-placeholder">Anuncio Header</div>

      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
          {t('contacto.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('contacto.subtitle')}
        </p>
        {/* AD_SLOT_HERO */}
        <div className="ad-placeholder mt-8 max-w-4xl mx-auto">Anuncio Hero</div>
      </header>

      <div className="card-dark p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">{t('contacto.yourName')}</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-secondary border border-border rounded-md p-3 focus:ring-primary focus:border-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">{t('contacto.yourEmail')}</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-secondary border border-border rounded-md p-3 focus:ring-primary focus:border-primary" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">{t('contacto.subject')}</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="w-full bg-secondary border border-border rounded-md p-3 focus:ring-primary focus:border-primary" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">{t('contacto.message')}</label>
            <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full bg-secondary border border-border rounded-md p-3 focus:ring-primary focus:border-primary resize-none" required />
          </div>
          {/* AD_SLOT_INTEXT1 */}
          <div className="ad-placeholder">Anuncio In-Text 1</div>
          <Button type="submit" className="w-full neon-purple-btn text-lg py-3">
            <Send className="mr-2 h-5 w-5" /> {t('contacto.sendMessage')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
