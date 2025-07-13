
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ShieldCheck, BarChart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { useTranslation } from 'react-i18next';

const GanaRobux = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [robuxCount, setRobuxCount] = useState(1250400);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRobuxCount(prev => prev + Math.floor(Math.random() * 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handlePollClick = () => {
    toast({
      title: "👍 ¡Gracias por tu voto!",
      description: "Tu respuesta nos ayuda a mejorar el contenido para ti."
    });
  };

  const openGuide = () => {
    setIsDialogOpen(true);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Helmet>
        <title>{t('ganaRobux.title')} - Roblox Master Zone</title>
        <meta name="description" content={t('ganaRobux.subtitle')} />
      </Helmet>

      {/* AD_SLOT_HEADER */}
      <div className="ad-placeholder">Anuncio Header</div>

      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
          {t('ganaRobux.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('ganaRobux.subtitle')}
        </p>
        {/* AD_SLOT_HERO */}
        <div className="ad-placeholder mt-8 max-w-4xl mx-auto">Anuncio Hero</div>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">{t('ganaRobux.tableTitle')}</h2>
            <div className="overflow-x-auto card-dark p-4 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 font-semibold">{t('ganaRobux.method')}</th>
                    <th className="p-4 font-semibold">{t('ganaRobux.safety')}</th>
                    <th className="p-4 font-semibold">{t('ganaRobux.effort')}</th>
                    <th className="p-4 font-semibold">{t('ganaRobux.potential')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border last:border-0 hover:bg-primary/10">
                    <td className="p-4 font-medium">{t('ganaRobux.microsoftRewards')}</td>
                    <td className="p-4 text-green-400 flex items-center"><ShieldCheck className="mr-2 h-5 w-5" />{t('ganaRobux.safe')}</td>
                    <td className="p-4">{t('ganaRobux.low')}</td>
                    <td className="p-4 text-primary">{t('ganaRobux.high')}</td>
                  </tr>
                  <tr className="border-b border-border last:border-0 hover:bg-primary/10">
                    <td className="p-4 font-medium">{t('ganaRobux.affiliateProgram')}</td>
                    <td className="p-4 text-green-400 flex items-center"><ShieldCheck className="mr-2 h-5 w-5" />{t('ganaRobux.safe')}</td>
                    <td className="p-4">{t('ganaRobux.medium')}</td>
                    <td className="p-4 text-primary">{t('ganaRobux.veryHigh')}</td>
                  </tr>
                  <tr className="border-b border-border last:border-0 hover:bg-primary/10">
                    <td className="p-4 font-medium">{t('ganaRobux.createItems')}</td>
                    <td className="p-4 text-green-400 flex items-center"><ShieldCheck className="mr-2 h-5 w-5" />{t('ganaRobux.safe')}</td>
                    <td className="p-4">{t('ganaRobux.high')}</td>
                    <td className="p-4 text-primary">{t('ganaRobux.unlimited')}</td>
                  </tr>
                  <tr className="border-b border-border last:border-0 hover:bg-primary/10">
                    <td className="p-4 font-medium">{t('ganaRobux.participateEvents')}</td>
                    <td className="p-4 text-green-400 flex items-center"><ShieldCheck className="mr-2 h-5 w-5" />{t('ganaRobux.safe')}</td>
                    <td className="p-4">{t('ganaRobux.low')}</td>
                    <td className="p-4 text-primary">{t('ganaRobux.medium')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* AD_SLOT_INTEXT1 */}
            <div className="ad-placeholder mt-8">Anuncio In-Text 1</div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 items-center card-dark p-6 rounded-lg">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('ganaRobux.easiestMethod')}</h2>
              <p className="text-muted-foreground">
                {t('ganaRobux.easiestMethodDesc')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> {t('ganaRobux.noInvestment')}</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> {t('ganaRobux.officialSafe')}</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> {t('ganaRobux.idealStart')}</li>
              </ul>
              <Button onClick={openGuide} className="neon-blue-btn">{t('ganaRobux.unlockGuide')}</Button>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center">
              <p className="text-muted-foreground text-sm">{t('ganaRobux.robuxDelivered')}</p>
              <p className="text-5xl font-bold text-primary">{new Intl.NumberFormat().format(robuxCount)}</p>
              <BarChart className="mx-auto mt-4 h-16 w-16 text-muted-foreground/50" />
            </div>
          </section>

          {/* AD_SLOT_INTEXT2 */}
          <div className="ad-placeholder">Anuncio In-Text 2</div>
        </main>
        <aside className="hidden lg:block space-y-8">
            <div className="card-dark p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">{t('ganaRobux.quickPoll')}</h3>
                <p className="text-muted-foreground mb-4">{t('ganaRobux.pollQuestion')}</p>
                <div className="space-y-2">
                    <Button onClick={handlePollClick} variant="outline" className="w-full justify-start">{t('ganaRobux.pollOpt1')}</Button>
                    <Button onClick={handlePollClick} variant="outline" className="w-full justify-start">{t('ganaRobux.pollOpt2')}</Button>
                    <Button onClick={handlePollClick} variant="outline" className="w-full justify-start">{t('ganaRobux.pollOpt3')}</Button>
                    <Button onClick={handlePollClick} variant="outline" className="w-full justify-start">{t('ganaRobux.pollOpt4')}</Button>
                </div>
            </div>
            {/* AD_SLOT_SIDEBAR */}
            <div className="sidebar-ad-placeholder sticky top-24">Anuncio Sidebar</div>
        </aside>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-secondary border-primary">
          <DialogHeader>
            <DialogTitle className="gradient-text">{t('ganaRobux.guideTitle')}</DialogTitle>
            <DialogDescription>
              {t('ganaRobux.guideDesc')}
            </DialogDescription>
          </DialogHeader>
          <div className="prose prose-invert text-muted-foreground">
              <p>{t('ganaRobux.guideStep1')}</p>
              <p>{t('ganaRobux.guideStep2')}</p>
              <p>{t('ganaRobux.guideStep3')}</p>
              <p>{t('ganaRobux.guideStep4')}</p>
              <p>{t('ganaRobux.guideStep5')}</p>
          </div>
           {/* AD_SLOT_INTEXT1 */}
           <div className="ad-placeholder my-4">Anuncio en Pop-up</div>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>{t('ganaRobux.understood')}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GanaRobux;
