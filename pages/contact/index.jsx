import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you for reaching out! We will get back to you ASAP."))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      detail: "info@florabiochem.com",
      link: "mailto:info@florabiochem.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      detail: "+91 89 407 68881",
      link: "tel:+918940768881"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      detail: "Coimbatore, Tamil Nadu, IN",
      link: null
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-2xl top-1/2 right-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 md:pt-32 pb-20">
        
        {/* Header Section */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="px-5 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-blue-400 font-medium text-sm">Get In Touch</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or ready to start a partnership? We're here to help you achieve success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Info Cards */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
            
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="group"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10 flex-shrink-0">
                      <div className="text-blue-400">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">{info.title}</h3>
                      <p className="text-gray-400 text-sm">{info.detail}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-white/10 flex-shrink-0">
                      <div className="text-blue-400">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-400 text-sm">{info.detail}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/30"
            >
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Monday - Friday</span>
                  <span className="text-blue-400 font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Saturday</span>
                  <span className="text-blue-400 font-semibold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
          >
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                autoCapitalize="off"
                data-netlify="true"
                className="space-y-6"
              >
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white placeholder:text-gray-500 ${
                        focusedField === 'name' ? 'border-blue-500 bg-white/10' : 'border-white/20'
                      }`}
                      disabled={isLoading}
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white placeholder:text-gray-500 ${
                        focusedField === 'email' ? 'border-blue-500 bg-white/10' : 'border-white/20'
                      }`}
                      disabled={isLoading}
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white placeholder:text-gray-500 ${
                      focusedField === 'phone' ? 'border-blue-500 bg-white/10' : 'border-white/20'
                    }`}
                    disabled={isLoading}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white placeholder:text-gray-500 ${
                      focusedField === 'subject' ? 'border-blue-500 bg-white/10' : 'border-white/20'
                    }`}
                    disabled={isLoading}
                    required
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white placeholder:text-gray-500 resize-none ${
                      focusedField === 'message' ? 'border-blue-500 bg-white/10' : 'border-white/20'
                    }`}
                    disabled={isLoading}
                    required
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-blue-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 border-2 border-cyan-500/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
    </div>
  );
};

export default Contact;