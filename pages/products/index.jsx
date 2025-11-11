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

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", color: "from-blue-500 to-cyan-500" },
    { id: "premixes", name: "Premixes", color: "from-red-500 to-pink-500" },
    { id: "additives", name: "Feed Additives", color: "from-blue-600 to-blue-400" },
    { id: "anticoccidial", name: "Anti Coccidial", color: "from-red-600 to-orange-500" },
    { id: "others", name: "Others", color: "from-purple-500 to-pink-500" },
  ];

  const products = {
    premixes: [
      { name: "Vitamin Premix - For Broiler", desc: "Specially formulated vitamin blend for optimal broiler growth" },
      { name: "Vitamin Premix - For Breeder", desc: "Essential vitamins for breeding stock health and productivity" },
      { name: "Vitamin Premix - For Layer", desc: "Complete vitamin solution for enhanced egg production" },
      { name: "Vitamin Premix - For Country Bird", desc: "Tailored nutrition for indigenous poultry breeds" },
      { name: "Poultry Feed Premix - Concentrate", desc: "High-concentration premix for large-scale operations" },
      { name: "Combo Premix", desc: "All-in-one solution combining essential nutrients" },
      { name: "Biotin 2% Premix", desc: "Specialized biotin supplementation for feather and claw health" },
      { name: "Vitamin E 50% Premix", desc: "High-potency vitamin E for immune support" },
    ],
    additives: [
      { name: "Trace Minerals - Inorganic", desc: "Essential mineral supplementation for bone and shell strength" },
      { name: "Trace Minerals - Organic", desc: "Enhanced bioavailability mineral formulation" },
      { name: "Toxin Binder", desc: "Advanced mycotoxin management solution" },
      { name: "Emulsifiers", desc: "Improves fat digestion and nutrient absorption" },
      { name: "Anti-Oxidants", desc: "Protects feed quality and extends shelf life" },
    ],
    anticoccidial: [
      { name: "Maduramycin + Nicarbazine", desc: "Dual-action coccidiosis prevention" },
      { name: "Monensin Sodium + Nicarbazine", desc: "Effective combination therapy for coccidiosis control" },
      { name: "Diclozuril 0.5%", desc: "Powerful anticoccidial for disease management" },
    ],
    others: [
      { name: "Probiotics and Prebiotics", desc: "Gut health and beneficial bacteria support" },
      { name: "Enzymes", desc: "Digestive efficiency and nutrient utilization" },
      { name: "MOP", desc: "Essential feed additive for optimal performance" },
      { name: "Coated Sodium Butyrate 30%, 50%, 90%", desc: "Gut health promoter in various concentrations" },
      { name: "Natural Growth Promotor", desc: "Organic solution for enhanced growth performance" },
      { name: "Natural Immuno Modulator", desc: "Boosts natural immunity and disease resistance" },
    ],
  };

  const getFilteredProducts = () => {
    if (selectedCategory === "all") {
      return Object.entries(products).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      );
    }
    return products[selectedCategory].map(item => ({ ...item, category: selectedCategory }));
  };

  const getCategoryColor = (category) => {
    const categoryMap = {
      premixes: "from-red-500 to-pink-500",
      additives: "from-blue-600 to-blue-400",
      anticoccidial: "from-red-600 to-orange-500",
      others: "from-purple-500 to-pink-500",
    };
    return categoryMap[category] || "from-blue-500 to-cyan-500";
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-2xl top-1/2 right-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
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
          className="text-center mb-12"
        >
          <div className="inline-block mb-6">
            <div className="px-5 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">Poultry</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium quality solutions designed for optimal poultry health and performance
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl shadow-blue-500/50 scale-105`
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-blue-500/50 hover:text-white hover:bg-white/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {getFilteredProducts().map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getCategoryColor(product.category)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(product.category)} rounded-full text-white text-xs font-semibold`}>
                  {product.category.toUpperCase()}
                </div>
              </div>

              {/* Product Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                {product.name}
              </h3>

              {/* Product Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {product.desc}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn More</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          className="text-center mt-20"
        >
          <div className="p-10 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-8">Our team of experts is ready to help you find the perfect product for your needs</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                Contact Sales Team
              </button>
              <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300">
                Download Catalog
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

export default Products;