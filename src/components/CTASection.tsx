import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Ready to Switch to Solar?
          </h2>
          <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-10 text-lg">
            Take the first step towards reliable, affordable power. Book a free consultation or request a custom quote today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="gradient-solar text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold shadow-solar hover:opacity-90 transition-opacity"
            >
              Book Consultation
            </Link>
            <Link
              to="/contact"
              className="bg-secondary-foreground/10 border border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary-foreground/20 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
