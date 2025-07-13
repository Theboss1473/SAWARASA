
import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Twitter, Instagram, Youtube, Twitch } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const navLinks = [
    { name: t('navbar.earnRobux'), path: '/gana-robux' },
    { name: t('navbar.cheats'), path: '/trucos' },
    { name: t('navbar.secretEvents'), path: '/eventos-secretos' },
    { name: t('navbar.news'), path: '/novedades' },
    { name: t('navbar.generators'), path: '/generadores' },
  ];

  const legalLinks = [
    { name: t('footer.contact'), path: '/contacto' },
    { name: t('footer.terms'), path: '/terminos' },
    { name: t('footer.privacy'), path: '/privacidad' },
  ];

  const handleSocialClick = (socialName) => {
    toast({
      title: "🚀 ¡Próximamente!",
      description: `Nuestras redes sociales de ${socialName} estarán listas muy pronto. ¡Síguenos!`,
    });
  };

  const socialLinks = [
    { icon: Twitter, name: 'Twitter' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Youtube, name: 'YouTube' },
    { icon: Twitch, name: 'Twitch' },
  ];

  return (
    <footer className="bg-secondary mt-16 border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* AD_SLOT_FOOTER */}
        <div className="ad-placeholder mb-8">Anuncio Pre-Footer</div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                <Gamepad2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Roblox Master Zone</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-bold text-foreground mb-4">{t('footer.navigation')}</p>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-bold text-foreground mb-4">{t('footer.legal')}</p>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <p className="font-bold text-foreground mb-4">{t('footer.followUs')}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button key={index} onClick={() => handleSocialClick(social.name)} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright', { year })}
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
