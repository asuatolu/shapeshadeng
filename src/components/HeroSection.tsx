import { motion } from "framer-motion";
import { Sun, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const highlights = [
  { icon: Sun, text: "Expert Solar Solutions" },
  { icon: Shield, text: "1-5 Year Warranty" },
  { icon: Zap, text: "Flexible Payment Plans" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Solar panels installed on Nigerian rooftop at sunset"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-tight mb-6">
            Reliable Solar Power
            <br />
            <span className="text-gradient-solar">For Your Home & Business</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-10">
            Professional consultation, design, and installation of solar inverter systems.
            Power your life with clean, affordable energy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#contact"
            className="gradient-solar text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold shadow-solar hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            Book Free Consultation
          </a>
          <a
            href="#packages"
            className="bg-secondary-foreground/10 border border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary-foreground/20 transition-colors backdrop-blur-sm"
          >
            View Packages
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-6 md:gap-12"
        >
          {highlights.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-full gradient-solar flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-secondary-foreground/90 font-medium">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
