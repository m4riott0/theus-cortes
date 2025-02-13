import { useState, useEffect } from 'react';
import { Scissors, Clock, MapPin, Phone, Instagram, Menu, X, Calendar, Award, Users, Sparkles, ChevronRight } from 'lucide-react';

const services = [
  { name: 'Corte Social', price: 'R$25', duration: '30 min', description: 'Clássico e elegante, perfeito para qualquer ocasião.' },
  { name: 'Degrade', price: 'R$33', duration: '30 min', description: 'Transição suave, estilo impecável.' },
  { name: 'Degrade Navalhado', price: 'R$35', duration: '40 min', description: 'Marcante e preciso, um visual afiado.' },
  { name: 'Platinado', price: 'R$100', duration: '60 min', description: 'Fios de luz para um visual ousado.' },
  { name: 'Pigmentação', price: 'R$25', duration: '60 min', description: 'Cor vibrante, renovação total.' },
  { name: 'Barba', price: 'R$20', duration: '20 min', description: 'Definição e estilo para sua barba.' },
  { name: 'Luzes', price: 'R$100', duration: '60 min', description: 'Reflexos sutis, brilho natural.' },
  { name: 'Penteado', price: 'R$30', duration: '35 min', description: 'Fios moldados com perfeição.' },
];


const gallery = [
  {
    url: '/assets/image/americalow.png',
    title: 'America Low'
  },
  {
    url: '/assets/image/barba.png',
    title: 'Barba'
  },
  {
    url: '/assets/image/dimil.png',
    title: 'Corte Dimil'
  },
  {
    url: '/assets/image/luzes.png',
    title: 'Luzes'
  },
  {
    url: '/assets/image/pigm.png',
    title: 'Pigmentação'
  },
  {
    url: '/assets/image/platinado.png',
    title: 'Platinado'
  },
];

const stats = [
  { icon: Users, value: '5000+', label: 'Clientes satisfeitos' },
  { icon: Calendar, value: '10+', label: 'Anos de experiência' },
  { icon: Award, value: '20+', label: 'Certificados' },
  { icon: Sparkles, value: '100%', label: 'Satisfação' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => setIsLoaded(true), 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header/Nav - Enhanced with smoother transitions */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 group">
              <Scissors className={`h-6 w-6 text-white transform transition-transform group-hover:rotate-45`} />
              <span className="text-xl font-bold text-white">THEUS CORTES</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a
                href="https://w.app/barbearia-theus-cortes"
                className="bg-white text-black px-6 py-2 rounded-full hover:bg-zinc-200 transition transform hover:scale-105"
              >
                Reserve-se
              </a>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu with animations */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm transform transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="px-6 py-4 space-y-4">
            <a
              href="https://w.app/barbearia-theus-cortes"
              className="block bg-white text-black px-6 py-3 rounded-full text-center hover:bg-zinc-200 transition transform hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Reserve-se
            </a>
          </div>
        </div>
      </nav>


      {/* Enhanced Hero Section with parallax and animations */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80"
            alt="Barber Shop Interior"
            className="w-full h-full object-cover transform scale-105 origin-center"
            style={{
              transform: isScrolled ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.6s ease-out'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <h1 className={`text-7xl font-bold text-white mb-6 leading-tight ${isLoaded ? 'animate-fade-in' : 'opacity-0'
              }`}>
              Construindo confiança através do cuidado especializado
            </h1>
            <p className={`text-xl text-zinc-300 mb-8 leading-relaxed ${isLoaded ? 'animate-fade-in-delay-1' : 'opacity-0'
              }`}>
              Experimente a arte da barbearia tradicional. Onde estilo encontra precisão, e cada corte conta a sua história.
            </p>
            <div className={`flex flex-wrap gap-4 ${isLoaded ? 'animate-fade-in-delay-2' : 'opacity-0'
              }`}>
              <a
                href="https://w.app/barbearia-theus-cortes"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-zinc-200 transition transform hover:scale-105 hover:shadow-lg"
              >
                Reserve-se
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                Meus serviços
              </a>
              <a
                href="#gallery"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                meu trabalho
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section with animations */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className="text-center transform hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 rounded-full transform -rotate-6" />
                  <Icon className="h-10 w-10 mx-auto mb-4 relative" />
                </div>
                <div className="text-4xl font-bold mb-2">{value}</div>
                <div className="text-zinc-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with interactive cards */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.03),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-zinc-600 text-lg">
              De cortes clássicos a experiências de cuidado de luxo, oferecemos uma ampla gama de serviços profissionais personalizados para o seu estilo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="service-card relative bg-zinc-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setActiveService(service.name)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-5 w-5 text-black/30" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-black transition-colors">
                  {service.name}
                </h3>
                <p className="text-3xl font-bold text-black mb-3 transition-colors">
                  {service.price}
                </p>
                <p className="text-zinc-600 mb-4 group-hover:text-zinc-700 transition-colors">
                  {service.description}
                </p>
                <div className="flex items-center text-zinc-500 group-hover:text-zinc-600 transition-colors">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{service.duration}</span>
                </div>
                <div className={`absolute inset-0 bg-black/5 rounded-lg transition-opacity duration-300 ${activeService === service.name ? 'opacity-100' : 'opacity-0'
                  }`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section with better hover effects */}
      <section id="gallery" className="py-24 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.03),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold mb-4">Um pouco do meu trabalho...</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map(({ url, title }, index) => (
              <div
                key={index}
                className="gallery-image group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={url}
                  alt={title}
                  className="w-full h-96 object-cover transition duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section with better hover effects */}
      <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold mb-4">Visite-nos</h2>
            <p className="text-zinc-400 text-lg">
              Entre em nossa barbearia e sinta a diferença...
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: MapPin,
                title: 'Local',
                content: (
                  <>
                    <p className="text-zinc-400">Av. Waldomiro Cassiano Santana, 888</p>
                    <p className="text-zinc-400">Tabapuã - SP</p>
                    <a
                      href="https://maps.app.goo.gl/AtsHgs8PFnFuzoyT9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-zinc-500 hover:text-white transition group"
                    >
                      Como chegar <ChevronRight className="inline-block h-4 w-4 transform group-hover:translate-x-1 transition" />
                    </a>
                  </>
                )
              },
              {
                icon: Clock,
                title: 'Horarios',
                content: (
                  <>
                    <p className="text-zinc-400">Segunda - Sexta</p>
                    <p className="text-white mb-2">9:00h - 18:00h</p>
                    <p className="text-zinc-400">Sabados</p>
                    <p className="text-white">9:00h - 15:00h</p>
                  </>
                )
              },
              {
                icon: Phone,
                title: 'Contato',
                content: (
                  <>
                    <a href="https://w.app/barbearia-theus-cortes" className="text-white hover:text-zinc-300 transition ">
                      (17)99659-3877
                    </a>
                    <div className="flex gap-6 justify-center mt-6">
                      <a href="https://www.instagram.com/theuscortesoficial_/" className="text-zinc-400 hover:text-white transition transform hover:scale-110">
                        <Instagram className="h-6 w-6" />
                      </a>
                    </div>
                  </>
                )
              }
            ].map(({ icon: Icon, title, content }) => (
              <div key={title} className="group">
                <div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-xl hover:bg-zinc-800 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-white/10 rounded-full transform -rotate-6 group-hover:rotate-3 transition-transform" />
                    <Icon className="h-10 w-10 mx-auto relative group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 text-white mb-6 group">
                <Scissors className="h-6 w-6 transform group-hover:rotate-45 transition-transform" />
                <span className="text-xl font-bold">THEUS CORTES</span>
              </div>
              <p className="text-sm leading-relaxed">
                Confiança e estilo em um só lugar...
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Horarios</h4>
              <ul className="space-y-3">
                <li>
                  <span className="block">Segunda - Sexta</span>
                  <span className="block text-white">9:00h - 18:00h</span>
                </li>
                <li>
                  <span className="block">Sabados</span>
                  <span className="block text-white">9:00h - 15:00h</span>
                </li>
              </ul>

            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Endereço e Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Av. Waldomiro Cassiano Santana, 888<br />Tabapuã - SP</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href="https://w.app/barbearia-theus-cortes" className="hover:text-white transition-colors">
                    (17)99659-3877
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
            <p>&copy;2025 Theus Cortes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;