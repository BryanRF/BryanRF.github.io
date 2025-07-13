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
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/brayan-eduardo-rojas-freyre-41255414a/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/bryan.rfr/', 
      label: 'Instagram',
      color: 'hover:text-pink-400'
    },
    { 
      icon: FaTiktok, 
      href: 'https://www.tiktok.com/@edu_rf', 
      label: 'TikTok',
      color: 'hover:text-white'
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
    <footer className="bg-gray-950 border-t border-gray-800 text-white relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300 shadow-lg hover:scale-110"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-white" />
      </button>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-3xl font-light text-white hover:text-gray-300 transition-colors">
                <span className="font-normal">Brayan</span>RF
              </h3>
            </Link>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Desarrollador Full-Stack apasionado por crear soluciones tecnológicas 
              innovadoras que marquen la diferencia. Siempre en busca de nuevos 
              desafíos y oportunidades de aprendizaje.
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-gray-600 transition-colors hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Availability Status */}
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-gray-400">Actualmente bajo contrato</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6">Navegación</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group hover:translate-x-1"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6">Contacto</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group hover:translate-x-1">
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
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm font-medium">Sígueme:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-gray-400 transition-all duration-300 hover:bg-gray-800/50 rounded-lg hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <span>© {currentYear} BryanRF. Hecho con</span>
                <FaHeart className="text-red-400 mx-2 animate-pulse" />
                <span>y</span>
                <FaCode className="mx-2 text-blue-400" />
                <span>en Perú</span>
              </div>
              
              <div className="flex items-center gap-4 text-xs">
                <span>Diseñado & Desarrollado por mí</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full hidden md:block"></span>
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