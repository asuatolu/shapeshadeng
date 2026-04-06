import { motion } from "framer-motion";
import { Users, Award, ShieldCheck, Headphones, Wrench, Zap } from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced Solar Engineers", description: "Our team of certified engineers have installed hundreds of systems across Nigeria." },
  { icon: Award, title: "High-Quality Equipment", description: "We use only premium inverters, panels, and batteries from trusted manufacturers." },
  { icon: Wrench, title: "Professional Installation", description: "Clean, safe, and efficient installation with proper wiring and distribution." },
  { icon: ShieldCheck, title: "Warranty on Equipment", description: "1-year warranty on all equipment, with up to 5 years on lithium batteries." },
  { icon: Headphones, title: "Dedicated Technical Support", description: "Ongoing support and maintenance to keep your system running at peak performance." },
  { icon: Zap, title: "Flexible Payment Plans", description: "Affordable payment options to make solar accessible for every budget." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent-foreground uppercase tracking-widest">Why Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Why Choose Shape & Shade HiTech
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We deliver reliable solar solutions backed by expertise, quality equipment, and excellent support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <r.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
