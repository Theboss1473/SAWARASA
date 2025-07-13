import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Shirt, Star, Copy, Heart, Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const Ropa = () => {
  const { toast } = useToast();

  const categories = [
    {
      title: 'Estilo Anime',
      icon: Sparkles,
      description: 'Outfits inspirados en tus animes favoritos. Vístete como tus personajes preferidos de Naruto, Attack on Titan, y más.',
      items: ['Naruto Shinobi', 'Attack on Titan Uniforme', 'Demon Slayer Kimono', 'My Hero Academia Traje'],
      color: 'from-pink-400 to-purple-500'
    },
    {
      title: 'Look Millonario',
      icon: Crown,
      description: 'Luce como un verdadero magnate con ropa exclusiva. Trajes de lujo, accesorios dorados y todo lo necesario para mostrar tu estatus.',
      items: ['Trajes de lujo', 'Accesorios dorados', 'Relojes premium', 'Zapatos exclusivos de marca'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Estilo Pro Gamer',
      icon: Star,
      description: 'Equipa a tu avatar con outfits tácticos y futuristas para destacar en cualquier juego competitivo y demostrar que eres un pro.',
      items: ['Uniformes tácticos', 'Máscaras de neón épicas', 'Armaduras futuristas', 'Capas legendarias animadas'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Ropa Kawaii',
      icon: Heart,
      description: 'Los estilos más adorables y coloridos que puedas imaginar. Perfecto para roleplay y para tener el avatar más cute del servidor.',
      items: ['Vestidos de colores pastel', 'Accesorios de animalitos', 'Orejas de gato y zorro', 'Efectos de partículas de corazón'],
      color: 'from-pink-300 to-rose-400'
    }
  ];

  const outfitCodes = [
    { name: 'Ninja Legendario', code: 'NJ2024-EPIC', price: '250 Robux', popular: true },
    { name: 'CEO Millonario', code: 'CEO-RICH-2024', price: '400 Robux', popular: true },
    { name: 'Mago Supremo', code: 'MAGIC-SUPREME', price: '180 Robux', popular: false },
    { name: 'Princesa Kawaii', code: 'KAWAII-PRINCESS', price: '320 Robux', popular: true },
    { name: 'Cyber Warrior', code: 'CYBER-2024', price: '290 Robux', popular: false },
    { name: 'Angel Guardian', code: 'ANGEL-GUARD', price: '350 Robux', popular: true }
  ];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "¡Código copiado! 📋",
      description: `El código ${code} se ha copiado al portapapeles`
    });
  };

  const handleCategoryClick = () => {
    toast({
      title: "🚧 Colección en construcción",
      description: "Estamos añadiendo nuevos outfits. ¡Vuelve pronto! 🚀"
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-8 px-4 page-container">
        <Helmet>
          <title>Ropa y Outfits Exclusivos - Estilos Únicos | Roblox Master Zone</title>
          <meta name="description" content="Descubre los mejores outfits para Roblox: estilos anime, looks millonarios, ropa kawaii y códigos exclusivos para copiar." />
        </Helmet>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              👗 Ropa y Outfits Exclusivos
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Encuentra los estilos más increíbles y códigos exclusivos para destacar en Roblox. ¡Actualizamos nuestra colección cada semana con las últimas tendencias!
            </p>

            {/* Top Ad */}
            <div className="ad-space mb-8 max-w-4xl mx-auto">
              <span>Anuncio Superior (728x90) - Google AdSense</span>
            </div>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 flex-grow">{category.description}</p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <Shirt className="w-4 h-4 mr-2 text-purple-500" />
                    Incluye:
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full neon-green text-white font-semibold rounded-lg mt-auto"
                  onClick={handleCategoryClick}
                >
                  Ver Colección
                </Button>
              </motion.div>
            ))}
          </div>
          
          {/* Mid-page Ad */}
          <div className="ad-space-in-content my-12 max-w-4xl mx-auto">
            <span>Anuncio Intermedio (300x250) - Google AdSense</span>
          </div>

          {/* Outfit Codes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
              🔥 Códigos de Outfits Populares
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outfitCodes.map((outfit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 card-hover relative overflow-hidden">
                  {outfit.popular && (
                    <div className="absolute top-3 -right-10 bg-red-500 text-white px-10 py-1 text-xs font-bold transform rotate-45">
                      🔥 Popular
                    </div>
                  )}
                  
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">{outfit.name}</h4>
                  <p className="text-green-600 font-semibold mb-4">{outfit.price}</p>
                  
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <code className="text-sm font-mono text-gray-700">{outfit.code}</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopyCode(outfit.code)}
                        className="ml-2 hover:bg-gray-200"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <Button 
                    className="w-full neon-green text-white text-sm rounded-lg"
                    onClick={handleCategoryClick}
                  >
                    Ver Outfit Completo
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Ad */}
          <div className="ad-space">
            <span>Anuncio Inferior (728x90) - Google AdSense</span>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Ropa;