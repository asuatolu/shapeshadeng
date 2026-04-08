import { motion } from "framer-motion";
import { Search, PenTool, Wrench, ShoppingBag } from "lucide-react";
import consultationImg from "@/assets/consultation.jpg";
import designImg from "@/assets/design.jpg";
import installationImg from "@/assets/installation.jpg";
import salesImg from "@/assets/sales-supply.jpg";

const services = [
  {
    icon: Search,
    title: "Consultation",
    description: "Free site assessment and power audit to determine the right solar system for your needs and budget.",
    image: consultationImg,
  },
  {
    icon: PenTool,
    title: "System Design",
    description: "Custom solar system design by our engineers, optimized for your power consumption and roof space.",
    image: designImg,
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Professional installation by certified technicians with quality equipment and 1-5 year warranty.",
    image: installationImg,
  },
  {
    icon: ShoppingBag,
    title: "Sales & Supply",
    description: "Purchase inverters, solar panels, batteries (tubular & lithium), and all accessories directly from us.",
    image: salesImg,
  },
];

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
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card-hover transition-shadow duration-300"
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
              )}
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
