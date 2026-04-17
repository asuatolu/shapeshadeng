import { motion } from "framer-motion";
import { Search, PenTool, Wrench, ShoppingBag } from "lucide-react";
import { services } from "@/data/homeContent";

const iconMap = {
  Search,
  PenTool,
  Wrench,
  ShoppingBag,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent-foreground uppercase tracking-widest">What We Do</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            End-to-End Solar Solutions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From consultation to installation and maintenance, we handle everything so you can enjoy uninterrupted power.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{service.story}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
