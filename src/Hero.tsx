import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Lab<span className="highlight">PrajX</span>
        </h1>
        <p> Level A Built Projects</p>
      </motion.div>
    </section>
  );
}

export default Hero;