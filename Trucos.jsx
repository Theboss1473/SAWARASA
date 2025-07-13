
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Zap, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { useTranslation } from 'react-i18next';

const Trucos = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTrick, setSelectedTrick] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tricksPerPage = 3;

  const allTricks = t('trucos.tricks', { returnObjects: true }) || [];

  const pageCount = Math.ceil(allTricks.length / tricksPerPage);
  const currentTricks = allTricks.slice((currentPage - 1) * tricksPerPage, currentPage * tricksPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pageCount) {
      setCurrentPage(newPage);
    }
  };

  const handleTrickClick = (trick) => {
    setSelectedTrick(trick);
    setIsDialogOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Helmet>
        <title>{t('trucos.title')} - Roblox Master Zone</title>
        <meta name="description" content={t('trucos.subtitle')} />
      </Helmet>

      {/* AD_SLOT_HEADER */}
      <div className="ad-placeholder">Anuncio Header</div>

      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
          {t('trucos.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('trucos.subtitle')}
        </p>
        {/* AD_SLOT_HERO */}
        <div className="ad-placeholder mt-8 max-w-4xl mx-auto">Anuncio Hero</div>
      </header>

      <section className="space-y-8">
        {currentTricks.map((trick, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="card-dark p-6 rounded-lg cursor-pointer"
              onClick={() => handleTrickClick(trick)}
            >
              <div className="flex items-center mb-2">
                <Zap className="h-5 w-5 text-primary mr-3" />
                <span className="text-sm font-semibold bg-primary/20 text-primary px-2 py-1 rounded">{trick.game}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-foreground">{trick.trick}</p>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </motion.div>
            {index === 0 && <div className="ad-placeholder">Anuncio In-Text 1</div>}
            {index === 1 && <div className="ad-placeholder">Anuncio In-Text 2</div>}
          </React.Fragment>
        ))}
      </section>

      <div className="flex justify-center items-center space-x-4">
        <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          <ArrowLeft className="mr-2 h-4 w-4" /> {t('trucos.previous')}
        </Button>
        <span className="text-muted-foreground">{t('trucos.page')} {currentPage} {t('trucos.of')} {pageCount}</span>
        <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pageCount}>
          {t('trucos.next')} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-secondary border-primary">
          <DialogHeader>
            <DialogTitle className="gradient-text">{selectedTrick?.game}</DialogTitle>
            <DialogDescription>
              {selectedTrick?.trick}
            </DialogDescription>
          </DialogHeader>
          <div className="prose prose-invert text-muted-foreground max-h-60 overflow-y-auto pr-4">
              <p>{selectedTrick?.detail}</p>
          </div>
           {/* AD_SLOT_INTEXT1 */}
           <div className="ad-placeholder my-4">Anuncio en Pop-up</div>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>{t('trucos.understood')}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Trucos;
