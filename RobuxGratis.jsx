import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Coins, Shield, Gift, CheckCircle, AlertTriangle } from 'lucide-react';
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

const RobuxGratis = () => {
  const { toast } = useToast();

  const methods = [
    {
      title: 'Microsoft Rewards',
      description: 'Gana puntos completando búsquedas diarias en Bing y canjéalos por tarjetas de regalo de Roblox. Es el método más fiable y recomendado.',
      difficulty: 'Fácil',
      time: '1-2 semanas',
      robux: '400-800',
      safe: true
    },
    {
      title: 'Roblox Affiliate Program',
      description: 'Comparte enlaces a juegos o items de Roblox. Si alguien se registra y compra a través de tu enlace, ¡tú ganas Robux!',
      difficulty: 'Medio',
      time: 'Variable',
      robux: '100-1000+',
      safe: true
    },
    {
      title: 'Crear y Vender Items',
      description: 'Si tienes creatividad, diseña ropa, accesorios o gamepasses. Si tus creaciones son populares, puedes ganar una gran cantidad de Robux.',
      difficulty: 'Difícil',
      time: '1-3 meses',
      robux: '500-5000+',
      safe: true
    },
    {
      title: 'Eventos Oficiales',
      description: 'Mantente atento a los eventos oficiales de Roblox. A menudo regalan items exclusivos o incluso Robux por participar y completar misiones.',
      difficulty: 'Fácil',
      time: 'Durante eventos',
      robux: '50-500',
      safe: true
    }
  ];

  const handleMethodClick = () => {
    toast({
      title: "🚧 Guía completa en construcción",
      description: "Estamos preparando un tutorial detallado. ¡Vuelve pronto! 🚀"
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-8 px-4 page-container">
        <Helmet>
          <title>Robux Gratis - Métodos Seguros y Legales | Roblox Master Zone</title>
          <meta name="description" content="Descubre métodos 100% seguros y legales para conseguir Robux gratis. Microsoft Rewards, programa de afiliados y más estrategias verificadas." />
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
              💰 Robux Gratis - Métodos Seguros
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Aprende las formas más seguras y legales de conseguir Robux sin gastar tu dinero. Olvídate de los generadores falsos y las estafas. Aquí te mostramos lo que realmente funciona.
            </p>
            <p className="text-md text-gray-500 max-w-2xl mx-auto">
              Nuestro equipo ha verificado cada uno de estos métodos para garantizar que tu cuenta esté siempre segura.
            </p>

            {/* Top Ad */}
            <div className="ad-space my-8 max-w-4xl mx-auto">
              <span>Anuncio Superior (728x90) - Google AdSense</span>
            </div>
          </motion.div>
          
          <div className="ad-space-in-content max-w-4xl mx-auto">
             <span>Anuncio Pre-Contenido (300x250) - Google AdSense</span>
          </div>

          {/* Warning Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-red-50 border-l-4 border-red-500 p-6 my-12 rounded-r-lg shadow-lg"
          >
            <div className="flex items-start">
              <AlertTriangle className="w-8 h-8 text-red-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ ¡Cuidado! Tu Seguridad es lo Primero</h3>
                <p className="text-red-700">
                  <strong>NUNCA</strong> confíes en generadores de Robux, hacks o sitios que te pidan la contraseña. Son estafas para robar tu cuenta. 
                  Solo utiliza métodos oficiales y 100% seguros como los que te mostramos aquí. Roblox nunca te pedirá tu contraseña fuera de su sitio oficial.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Methods Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {methods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Coins className="w-8 h-8 text-green-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">{method.title}</h3>
                  </div>
                  {method.safe && (
                    <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                      <Shield className="w-4 h-4 text-green-600 mr-1" />
                      <span className="text-xs font-medium text-green-600">Seguro</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 mb-4 flex-grow">{method.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-center bg-gray-50 p-3 rounded-lg">
                  <div>
                    <span className="text-gray-500 block">Dificultad</span>
                    <p className="font-medium text-gray-800">{method.difficulty}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Tiempo Est.</span>
                    <p className="font-medium text-gray-800">{method.time}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Robux Pot.</span>
                    <p className="font-medium text-green-600">{method.robux}</p>
                  </div>
                </div>

                <Button 
                  className="w-full neon-green text-white font-semibold rounded-lg mt-auto"
                  onClick={handleMethodClick}
                >
                  Ver Guía Completa
                </Button>
              </motion.div>
            ))}
          </div>
          
          {/* Mid-page Ad */}
          <div className="ad-space-in-content my-12 max-w-4xl mx-auto">
            <span>Anuncio Intermedio (300x250) - Google AdSense</span>
          </div>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 content-section"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text flex items-center">
              <Gift className="w-6 h-6 mr-2" />
              Consejos Pro para Maximizar tus Robux
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Sé Constante</h4>
                    <p className="text-gray-600 text-sm">Dedica 10-15 minutos diarios a Microsoft Rewards. ¡La constancia es clave para acumular puntos rápidamente y canjearlos!</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Invita Amigos</h4>
                    <p className="text-gray-600 text-sm">Comparte tu código de afiliado en redes sociales, foros de Discord y con tus amigos para maximizar tus comisiones.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Aprende a Diseñar</h4>
                    <p className="text-gray-600 text-sm">Usa herramientas gratuitas como Photopea, GIMP o Canva para crear ropa única. Investiga las tendencias para vender más.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Participa en Eventos</h4>
                    <p className="text-gray-600 text-sm">Sigue las redes sociales oficiales de Roblox y de tus juegos favoritos para no perderte ningún evento con premios gratis.</p>
                  </div>
                </div>
              </div>
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

export default RobuxGratis;