import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Youtube, Linkedin, Send, CheckCircle, ArrowRight, Sparkles, Zap, Target, Award, Shield } from 'lucide-react';

const HivetzWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const ThemeToggle = () => (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-14 h-14 rounded-full transition-all duration-300 overflow-hidden group flex items-center justify-center"
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
          : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
      }}
    >
      <div className="text-2xl">
        {darkMode ? '🌙' : '☀️'}
      </div>
    </button>
  );

  const bgClass = darkMode ? 'bg-gray-950' : 'bg-gray-50';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';
  const cardBg = darkMode ? 'bg-gray-900' : 'bg-white';
  const borderClass = darkMode ? 'border-gray-800' : 'border-gray-200';
  const navTextClass = darkMode ? 'text-gray-300' : 'text-gray-700';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${bgClass}`}>
      {/* Animated Background Gradient - MetaMask Style */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[1000px] h-[1000px] rounded-full blur-3xl opacity-20 transition-all duration-1000"
          style={{
            background: darkMode
              ? 'radial-gradient(circle, #6366f1 0%, #8b5cf6 50%, transparent 70%)'
              : 'radial-gradient(circle, #fbbf24 0%, #f97316 50%, transparent 70%)',
            left: `${mousePosition.x - 500}px`,
            top: `${mousePosition.y - 500}px`,
          }}
        />
      </div>

      {/* Modern Navigation - MetaMask Inspired */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? 'bg-gray-950/95 backdrop-blur-2xl border-b border-gray-800 shadow-2xl'
              : 'bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-lg'
            : darkMode
            ? 'bg-gray-950/50 backdrop-blur-xl'
            : 'bg-white/50 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🐔</span>
                </div>
              </div>
              <div>
                <span className={`text-2xl font-black tracking-tight ${textClass}`}>HIVETZ</span>
                <div className={`text-xs font-medium ${textSecondary}`}>Poultry Excellence</div>
              </div>
            </div>

            {/* Desktop Menu & Actions */}
            <div className="flex items-center space-x-1">
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-1 mr-4">
                {['home', 'about', 'products', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`relative px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 rounded-xl ${
                      activeSection === section
                        ? darkMode 
                          ? 'text-white bg-gray-800' 
                          : 'text-gray-900 bg-gray-100'
                        : navTextClass + ' hover:bg-opacity-50 ' + (darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100')
                    }`}
                  >
                    <span className="relative">{section}</span>
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden ml-3 w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className={textClass} size={24} />
                ) : (
                  <Menu className={textClass} size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 py-6 space-y-2 ${darkMode ? 'bg-gray-900/98' : 'bg-white/98'} backdrop-blur-xl rounded-3xl shadow-2xl border ${borderClass} z-50`}>
              {['home', 'about', 'products', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                      : darkMode
                      ? 'text-gray-300 hover:bg-gray-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* HOME SECTION - MetaMask Hero Style */}
      {activeSection === 'home' && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Geometric Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}
              style={{
                backgroundImage: `
                  linear-gradient(${darkMode ? '#374151' : '#d1d5db'} 2px, transparent 2px),
                  linear-gradient(90deg, ${darkMode ? '#374151' : '#d1d5db'} 2px, transparent 2px),
                  linear-gradient(${darkMode ? '#374151' : '#d1d5db'} 1px, transparent 1px),
                  linear-gradient(90deg, ${darkMode ? '#374151' : '#d1d5db'} 1px, transparent 1px)
                `,
                backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
                backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 backdrop-blur-sm rounded-full border border-yellow-400/20 mb-8">
              <Shield size={18} className="text-yellow-500" />
              <span className={`text-sm font-bold ${textClass}`}>Premium Poultry Nutrition Solutions</span>
            </div>

            {/* Main Headline - MetaMask Style */}
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 ${textClass} leading-tight`}>
              <span className="inline-block">Transform Your</span>
              <br />
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                Poultry Business
              </span>
            </h1>

            <p className={`text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
              Advanced feed solutions engineered for peak performance, optimal health, and maximum profitability.
              <span className={`block mt-2 font-bold ${darkMode ? 'text-yellow-400' : 'text-orange-600'}`}>
                Science-backed. Results-driven.
              </span>
            </p>

            {/* CTA Buttons - MetaMask Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <button
                onClick={() => setActiveSection('products')}
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 overflow-hidden"
              >
                <span className="relative flex items-center space-x-2 z-10">
                  <span>Explore Products</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`px-8 py-4 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 border-gray-700' : 'bg-white hover:bg-gray-50 border-gray-300'} ${textClass} font-bold rounded-2xl transition-all transform hover:scale-105 border-2 shadow-lg`}
              >
                Get In Touch
              </button>
            </div>

            {/* Feature Stats Cards - MetaMask Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: '🏭', label: 'Production Capacity', value: '50K+ tons/year', gradient: 'from-blue-500 to-cyan-500' },
                { icon: '🔬', label: 'R&D Investment', value: 'State-of-art Lab', gradient: 'from-purple-500 to-pink-500' },
                { icon: '🌍', label: 'Global Standards', value: 'ISO Certified', gradient: 'from-green-500 to-emerald-500' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`relative ${cardBg} backdrop-blur-sm p-8 rounded-3xl border ${borderClass} hover:border-yellow-400/50 transition-all hover:-translate-y-2 shadow-xl group overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative">
                    <div className="text-5xl mb-4">{stat.icon}</div>
                    <div className={`text-sm font-bold ${textSecondary} mb-2 uppercase tracking-wide`}>{stat.label}</div>
                    <div className={`text-2xl font-black ${textClass}`}>{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className={`w-8 h-12 rounded-full border-2 ${borderClass} flex items-start justify-center p-2`}>
              <div className={`w-1.5 h-3 ${darkMode ? 'bg-white' : 'bg-gray-900'} rounded-full animate-pulse`}></div>
            </div>
          </div>
        </section>
      )}

      {/* ABOUT SECTION */}
      {activeSection === 'about' && (
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 backdrop-blur-sm rounded-full border border-yellow-400/20 mb-6">
                <Target size={18} className="text-yellow-500" />
                <span className={`text-sm font-bold ${textClass}`}>Who We Are</span>
              </div>
              <h2 className={`text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 ${textClass}`}>
                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Hivetz</span>
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${textSecondary}`}>
                Leading the future of poultry nutrition with innovation, quality, and commitment
              </p>
            </div>

            {/* Hero Content Card */}
            <div className={`${cardBg} rounded-3xl p-8 md:p-12 mb-12 border ${borderClass} shadow-2xl`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative mb-8 inline-block">
                    <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-2xl opacity-30"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl">
                      <span className="text-5xl">🐔</span>
                    </div>
                  </div>
                  <h3 className={`text-3xl font-black mb-4 ${textClass}`}>Hivetz Nutri India Private Limited</h3>
                  <p className={`text-lg leading-relaxed ${textSecondary}`}>
                    State-of-the-art manufacturing facility producing premium quality premixes, ingredients, and formulations. 
                    Annual capacity of 25,000 tons expandable to 50,000 tons.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: '📅', label: 'Established', value: 'May 2019' },
                    { icon: '🏭', label: 'Facility', value: 'World-class Lab & Production' },
                    { icon: '🤝', label: 'Partners', value: 'Global Suppliers Network' },
                    { icon: '👥', label: 'Experience', value: '20+ Years Expertise' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-4 group">
                      <div className={`w-14 h-14 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <div className={`text-sm font-bold ${textSecondary} uppercase tracking-wide`}>{item.label}</div>
                        <div className={`text-xl font-black ${textClass}`}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision, Values, Mission */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`${cardBg} rounded-3xl p-8 border ${borderClass} hover:border-blue-400/50 transition-all hover:-translate-y-2 shadow-xl group`}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className={`text-2xl font-black mb-4 ${textClass}`}>Vision</h3>
                <p className={textSecondary}>
                  Establish and Develop Hivetz Business delivering Hi-quality, Hi-performance & Hi-value across the value chain
                </p>
              </div>

              <div className="relative overflow-hidden rounded-3xl p-8 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Award size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-white">Values</h3>
                  <p className="text-white/95 font-medium">
                    Consistent Quality, Transparency, Timely Delivery, Professional Ethics, and Personal Touch in all relationships
                  </p>
                </div>
              </div>

              <div className={`${cardBg} rounded-3xl p-8 border ${borderClass} hover:border-green-400/50 transition-all hover:-translate-y-2 shadow-xl group`}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Zap size={32} className="text-white" />
                </div>
                <h3 className={`text-2xl font-black mb-4 ${textClass}`}>Mission</h3>
                <div className="space-y-3">
                  {['Today', 'Tomorrow', 'Forever'].map((item, idx) => (
                    <p key={idx} className={`flex items-center font-bold ${textClass}`}>
                      <span className="text-yellow-500 mr-3 text-2xl">•</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PRODUCTS SECTION */}
      {activeSection === 'products' && (
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 backdrop-blur-sm rounded-full border border-yellow-400/20 mb-6">
                <Sparkles size={18} className="text-yellow-500" />
                <span className={`text-sm font-bold ${textClass}`}>Premium Solutions</span>
              </div>
              <h2 className={`text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 ${textClass}`}>
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Products</span>
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${textSecondary}`}>
                Comprehensive range of scientifically formulated feed solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'PREMIXES',
                  icon: '🥚',
                  gradient: 'from-yellow-400 to-orange-500',
                  items: ["Vitamin Premix - Broiler", "Vitamin Premix - Breeder", "Vitamin Premix - Layer", "Vitamin Premix - Country Bird", "Poultry Feed Concentrate", "Combo Premix", "Biotin 2% Premix", "Vitamin E 50% Premix"]
                },
                {
                  title: 'FEED ADDITIVES',
                  icon: '🌾',
                  gradient: 'from-green-400 to-emerald-500',
                  items: ["Trace Minerals - Inorganic", "Trace Minerals - Organic", "Toxin Binder", "Emulsifiers", "Anti-Oxidants"]
                },
                {
                  title: 'ANTI COCCIDIAL',
                  icon: '💊',
                  gradient: 'from-red-400 to-pink-500',
                  items: ["Maduramycin + Nicarbazine", "Monensin sodium + Nicarbazine", "Diclozuril 0.5%"]
                },
                {
                  title: 'OTHERS',
                  icon: '⚡',
                  gradient: 'from-purple-400 to-indigo-500',
                  items: ["Probiotics and Prebiotics", "Enzymes", "MOP", "Coated Sodium Butyrate", "Natural Growth Promotor", "Natural Immuno Modulator"]
                }
              ].map((product, idx) => (
                <div key={idx} className={`${cardBg} rounded-3xl p-8 border ${borderClass} hover:border-yellow-400/30 transition-all hover:-translate-y-2 shadow-xl group`}>
                  <div className="relative mb-6 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <span className="text-3xl">{product.icon}</span>
                    </div>
                  </div>
                  <h3 className={`text-xl font-black mb-6 ${textClass} uppercase tracking-wide`}>{product.title}</h3>
                  <ul className="space-y-3">
                    {product.items.map((item, itemIdx) => (
                      <li key={itemIdx} className={`flex items-start text-sm ${textSecondary} font-medium`}>
                        <span className="text-yellow-500 mr-2 mt-0.5 font-bold">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT SECTION */}
      {activeSection === 'contact' && (
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 backdrop-blur-sm rounded-full border border-yellow-400/20 mb-6">
                <Send size={18} className="text-yellow-500" />
                <span className={`text-sm font-bold ${textClass}`}>Get In Touch</span>
              </div>
              <h2 className={`text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 ${textClass}`}>
                Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Connect</span>
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${textSecondary}`}>
                Have questions? We're here to help you grow your business
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className={`${cardBg} rounded-3xl p-8 md:p-12 border ${borderClass} shadow-2xl`}>
                {formSubmitted ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <CheckCircle className="text-white" size={48} />
                    </div>
                    <h3 className={`text-3xl font-black mb-4 ${textClass}`}>Message Sent! 🎉</h3>
                    <p className={textSecondary}>We'll get back to you within 24 hours</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-bold mb-3 ${textClass} uppercase tracking-wide`}>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className={`w-full px-6 py-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} border-2 rounded-2xl focus:outline-none focus:border-yellow-400 transition-all ${textClass} font-medium`}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-bold mb-3 ${textClass} uppercase tracking-wide`}>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className={`w-full px-6 py-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} border-2 rounded-2xl focus:outline-none focus:border-yellow-400 transition-all ${textClass} font-medium`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={`block text-sm font-bold mb-3 ${textClass} uppercase tracking-wide`}>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help?"
                        required
                        className={`w-full px-6 py-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} border-2 rounded-2xl focus:outline-none focus:border-yellow-400 transition-all ${textClass} font-medium`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-bold mb-3 ${textClass} uppercase tracking-wide`}>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your requirements..."
                        required
                        rows="6"
                        className={`w-full px-6 py-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'} border-2 rounded-2xl focus:outline-none focus:border-yellow-400 transition-all resize-none ${textClass} font-medium`}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl"
                    >
                      <span>Send Message</span>
                      <Send size={20} />
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Head Office */}
                <div className="relative overflow-hidden rounded-3xl p-8 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <MapPin size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-6">Head Office</h3>
                    <div className="space-y-4 text-white/95 font-medium">
                      <p className="font-bold">Hivetz Nutri India Private Limited</p>
                      <p className="leading-relaxed">
                        B-103, Orbit 11, Akshaya 1432<br />
                        Trichy Road<br />
                        Coimbatore - 641 018
                      </p>
                      <div className="flex items-center space-x-3 pt-4 border-t border-white/20">
                        <Phone size={20} />
                        <span className="font-bold">+91 89 407 68881</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 gap-6">
                  <div className={`${cardBg} rounded-3xl p-6 border ${borderClass} hover:border-yellow-400/50 transition-all shadow-lg group`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail size={24} className="text-white" />
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${textSecondary} uppercase tracking-wide mb-1`}>Email Us</div>
                        <div className={`text-lg font-black ${textClass}`}>info@florabiochem.com</div>
                      </div>
                    </div>
                  </div>

                  <div className={`${cardBg} rounded-3xl p-6 border ${borderClass} hover:border-yellow-400/50 transition-all shadow-lg group`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone size={24} className="text-white" />
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${textSecondary} uppercase tracking-wide mb-1`}>Call Us</div>
                        <div className={`text-lg font-black ${textClass}`}>+91 89 407 68881</div>
                        <p className={`text-sm ${textSecondary} mt-1`}>Mon-Sat: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className={`${cardBg} rounded-3xl p-6 border ${borderClass} hover:border-yellow-400/50 transition-all shadow-lg group`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin size={24} className="text-white" />
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${textSecondary} uppercase tracking-wide mb-1`}>Factory</div>
                        <div className={`text-lg font-black ${textClass}`}>276/1A, Periyapatti</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER - Modern & Sleek */}
      <footer className={`relative ${darkMode ? 'bg-black' : 'bg-gray-900'} text-white py-16 mt-20 overflow-hidden`}>
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                               linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🐔</span>
                  </div>
                </div>
                <div>
                  <span className="text-3xl font-black">HIVETZ</span>
                  <div className="text-sm text-gray-400">Poultry Excellence</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Leading the future of poultry nutrition with state-of-the-art manufacturing, 
                innovative formulations, and unwavering commitment to quality.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Youtube, label: 'Youtube' },
                  { icon: Linkedin, label: 'LinkedIn' }
                ].map((social, idx) => (
                  <button 
                    key={idx}
                    className="relative group w-12 h-12 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 overflow-hidden bg-white/10 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500"
                  >
                    <social.icon size={20} className="relative z-10" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="relative">
              <h4 className="text-lg font-black mb-6 uppercase tracking-wide">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'About', 'Products', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => setActiveSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-yellow-400 transition-all font-medium"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="relative">
              <h4 className="text-lg font-black mb-6 uppercase tracking-wide">Contact</h4>
              <div className="space-y-4 text-gray-400">
                {[
                  { icon: Phone, text: '+91 89 407 68881' },
                  { icon: Mail, text: 'info@florabiochem.com' },
                  { icon: MapPin, text: 'Coimbatore, Tamil Nadu' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 group">
                    <item.icon size={18} className="text-yellow-400 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="text-sm group-hover:text-gray-300 transition-colors font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-400">© 2024 Hivetz. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HivetzWebsite;