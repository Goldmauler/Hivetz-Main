import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

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

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Our Story"},
    { title: "Vision"},
    { title: "Values"},
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
              <span className="text-blue-400 font-medium text-sm">Discover Our Journey</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Hivetz</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leading the future of poultry nutrition with innovation and excellence
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { number: 25000, suffix: "+", label: "Tons Annual Capacity" },
            { number: 50000, suffix: "+", label: "Expandable Capacity" },
            { number: 20, suffix: "+", label: "Years Experience" },
            { number: 2019, suffix: "", label: "Established" },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                <CountUp start={0} end={stat.number} duration={3} />
                {stat.suffix}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === i
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-blue-500/50 hover:text-white"
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto"
        >
          {/* Our Story */}
          {activeTab === 0 && (
            <div className="space-y-8">
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></span>
                  Manufacturing Excellence
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Hivetz Nutri India Private Limited has set up a state-of-the-art manufacturing unit to produce high-quality premixes, ingredients, and formulations with an annual production capacity of <span className="text-blue-400 font-semibold">25,000 tons</span>, expandable to <span className="text-blue-400 font-semibold">50,000 tons per annum</span>.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The project started in the second half of 2018 and has been fully functional since May 2019. The manufacturing facility features a state-of-the-art laboratory and formulation center.
                </p>
              </div>

              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></span>
                  Global Partnerships
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Hivetz has collaborated with various internationally reputed suppliers and manufacturers for consistent supply of high-quality raw materials and ingredients. We've also entered into strong partnerships with reputed feed manufacturers and marketers for end-to-end support.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The company has well-known industry professionals in advisory roles, ensuring best practices and innovation.
                </p>
              </div>

              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></span>
                  Expert Leadership
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The Founding Directors of Hivetz have rich and varied experience in the same industry for more than <span className="text-blue-400 font-semibold">20 years</span>, with expertise in Research and Development, Formulations, Production, Operations, Sales & Marketing, Global Sourcing & Distribution, and Finance & Administration.
                </p>
              </div>
            </div>
          )}

          {/* Vision */}
          {activeTab === 1 && (
            <div className="p-10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/30 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                "Establish and Develop Hivetz Business" with an aim of delivering{" "}
                <span className="text-blue-400 font-bold">Hi-quality</span>,{" "}
                <span className="text-cyan-400 font-bold">Hi-performance</span> &{" "}
                <span className="text-blue-300 font-bold">Hi-value</span> to its customers across the value chain.
              </p>
            </div>
          )}

          {/* Values */}
          {activeTab === 2 && (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Consistent Quality",
                  desc: "Maintaining the highest standards in every product and building a strong, reliable brand."
                },
                {
                  title: "Transparency",
                  desc: "Open communication with all stakeholders - investors, suppliers, customers, and employees."
                },
                {
                  title: "Commitment & Delivery",
                  desc: "Dedicated to meeting deadlines and exceeding customer expectations every time."
                },
                {
                  title: "Professional Ethics",
                  desc: "Upholding integrity with a personal touch, building lasting relationships with partners."
                },
              ].map((value, i) => (
                <div key={i} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{value.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          className="text-center mt-20"
        >
          <div className="p-10 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Partner with Us?</h3>
            <p className="text-gray-300 mb-8">Join us in revolutionizing poultry nutrition with cutting-edge solutions</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                Explore Products
              </button>
              <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-blue-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 border-2 border-cyan-500/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
    </div>
  );
};

export default About;