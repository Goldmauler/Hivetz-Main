import { motion } from "framer-motion";

const Transition = () => {
  // Diagonal wipe transition
  const diagonalVariants = {
    initial: {
      scaleX: 1,
      originX: 0,
    },
    animate: {
      scaleX: [1, 0],
      originX: [0, 1],
    },
    exit: {
      scaleX: [0, 1],
      originX: 0,
    },
  };

  return (
    <>
      {/* Diagonal wipe layers */}
      <motion.div
        role="status"
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-gradient-to-br from-blue-600 to-cyan-500"
        style={{ transformOrigin: "left" }}
        variants={diagonalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
        aria-hidden
      />
      
      <motion.div
        role="status"
        className="fixed top-0 left-0 w-screen h-screen z-40 bg-gradient-to-br from-blue-700 to-blue-500"
        style={{ transformOrigin: "left" }}
        variants={diagonalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, delay: 0.05, ease: [0.87, 0, 0.13, 1] }}
        aria-hidden
      />

      <motion.div
        role="status"
        className="fixed top-0 left-0 w-screen h-screen z-30 bg-black"
        style={{ transformOrigin: "left" }}
        variants={diagonalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, delay: 0.1, ease: [0.87, 0, 0.13, 1] }}
        aria-hidden
      />

      {/* Center logo/brand element */}
      <motion.div
        role="status"
        className="fixed top-0 left-0 w-screen h-screen z-[60] flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, times: [0, 0.7, 1], ease: "easeInOut" }}
        aria-hidden
      >
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: [0, 1.2, 1, 1, 0], opacity: [0, 1, 1, 1, 0], rotate: [180, 0, 0, 0, 360] }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1.2, times: [0, 0.3, 0.5, 0.7, 1], ease: [0.87, 0, 0.13, 1] }}
          className="relative"
        >
          {/* HIVETZ text */}
          <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent tracking-wider">
            HIVETZ
          </div>
          
          {/* Decorative circles */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1, 0] }}
            exit={{ scale: 0 }}
            transition={{ duration: 1.2, times: [0, 0.3, 0.7, 1], delay: 0.2 }}
          />
          <motion.div
            className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1, 0] }}
            exit={{ scale: 0 }}
            transition={{ duration: 1.2, times: [0, 0.3, 0.7, 1], delay: 0.25 }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1, 0] }}
            exit={{ scale: 0 }}
            transition={{ duration: 1.2, times: [0, 0.3, 0.7, 1], delay: 0.3 }}
          />
        </motion.div>

        {/* Particle effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 1, 0],
              x: [0, Math.cos((i * Math.PI) / 4) * 150, Math.cos((i * Math.PI) / 4) * 200, Math.cos((i * Math.PI) / 4) * 200],
              y: [0, Math.sin((i * Math.PI) / 4) * 150, Math.sin((i * Math.PI) / 4) * 200, Math.sin((i * Math.PI) / 4) * 200],
              opacity: [0, 1, 1, 0]
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 1.2,
              times: [0, 0.4, 0.7, 1],
              delay: 0.3 + i * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Transition;