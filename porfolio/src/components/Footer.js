import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaTiktok,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
  FaCode
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Sobre Mí', path: '/about' },
    { name: 'Contacto', path: '/contact' }
  ];

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/BryanRF', 
      label: 'GitHub'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/brayan-eduardo-rojas-freyre-41255414a/', 
      label: 'LinkedIn'
    },
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/bryan.rfr/', 
      label: 'Instagram'
    },
    { 
      icon: FaTiktok, 
      href: 'https://www.tiktok.com/@edu_rf', 
      label: 'TikTok'
    }
  ];

  const contactInfo = [
    { 
      icon: FaEnvelope, 
      text: 'rfreyrebrayaned@gmail.com',
      href: 'mailto:rfreyrebrayaned@gmail.com'
    },
    { 
      icon: FaWhatsapp, 
      text: '+51 998511769',
      href: 'https://wa.me/998511769'
    },
    { 
      icon: FaMapMarkerAlt, 
      text: 'Chiclayo, Perú',
      href: null
    }
  ];

  const techStack = ['React', 'Node.js', 'Python', 'PostgreSQL', 'TensorFlow'];

  return (
    <footer className="bg-white border-t-4 border-black text-black relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 p-3 bg-primary hover:bg-yellow-500 border-4 border-black rounded-full shadow-brutal hover-lift transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-black" />
      </button>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-3xl font-black text-black hover:text-gray-700 transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
                BryanRF
              </h3>
            </Link>
            
            <p className="text-black font-bold leading-relaxed mb-6 max-w-md">
              Desarrollador Full-Stack apasionado por crear soluciones tecnológicas 
              innovadoras que marquen la diferencia. Siempre en busca de nuevos 
              desafíos y oportunidades de aprendizaje.
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-light text-black text-sm font-bold border-3 border-black rounded-lg shadow-brutal-sm hover-lift"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Availability Status */}
            <div className="flex items-center text-sm bg-primary border-4 border-black rounded-lg px-4 py-3 shadow-brutal-sm inline-flex">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse mr-3"></div>
              <span className="text-black font-black">Disponible para nuevos proyectos</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black text-black mb-6 border-b-4 border-black pb-2">Navegación</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-black font-bold hover:text-gray-700 transition-colors duration-300 flex items-center group hover:translate-x-1"
                  >
                    <span className="w-2 h-2 bg-black rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black text-black mb-6 border-b-4 border-black pb-2">Contacto</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <div className="flex items-center text-black font-bold hover:text-gray-700 transition-colors duration-300 group hover:translate-x-1">
                    <IconComponent className="mr-3 text-sm group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{contact.text}</span>
                  </div>
                );

                return (
                  <li key={index}>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-16 pt-8 border-t-4 border-black">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-black text-sm font-black">Sígueme:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-black bg-white border-4 border-black rounded-lg shadow-brutal-sm hover-lift transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-black font-bold">
              <div className="flex items-center">
                <span>© {currentYear} BryanRF. Hecho con</span>
                <FaHeart className="text-red-600 mx-2 animate-pulse" />
                <span>y</span>
                <FaCode className="mx-2 text-black" />
                <span>en Perú</span>
              </div>
              
              <div className="flex items-center gap-4 text-xs">
                <span>Diseñado & Desarrollado por mí</span>
                <span className="w-1 h-1 bg-black rounded-full hidden md:block"></span>
                <span>React + Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;