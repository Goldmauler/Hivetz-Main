import { motion } from "framer-motion";

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

const Home = () => {
  return (
    <div className="min-h-screen bg-black relative">
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

      {/* Main Content - adjusted padding for mobile */}
      <div className="relative z-10 container mx-auto px-6 pt-24 md:pt-32 pb-20 md:pb-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            className="inline-block mb-6"
          >
            <div className="px-5 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-blue-400 font-medium text-sm">Leading Poultry Nutrition Solutions</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Empowering Farms With{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Premium Feed Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl"
          >
            Scientifically formulated poultry feed products designed to maximize health, 
            performance, and profitability for modern farming operations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4 mb-16 md:mb-20"
          >
            <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
              Explore Products
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300">
              Get In Touch
            </button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {title: "Natural Ingredients", desc: "Premium quality raw materials" },
              {title: "Science-Backed", desc: "Research-driven formulations" },
              {title: "Proven Results", desc: "Enhanced productivity & health" }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-blue-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 border-2 border-cyan-500/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
    </div>
  );
};

export default Home;