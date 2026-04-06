import { motion } from "framer-motion";
import { Search, PenTool, Wrench, ShoppingBag, Settings, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Search,
    title: "Solar Consultation",
    description: "Our experts assess your energy needs and recommend the best solar solution for your budget and location.",
    details: [
      "Energy consumption analysis",
      "Appliance audit & load calculation",
      "Budget assessment",
      "Installation feasibility study",
      "Site inspection & roof assessment",
    ],
  },
  {
    icon: PenTool,
    title: "Solar System Design",
    description: "Custom system design tailored to your specific requirements by our experienced engineers.",
    details: [
      "Load requirements analysis",
      "Battery backup sizing",
      "Panel configuration design",
      "Inverter capacity planning",
      "Budget-optimized options",
    ],
  },
  {
    icon: Wrench,
    title: "Solar Installation",
    description: "Professional, clean installation by certified technicians with quality equipment and warranty.",
    details: [
      "Solar panel mounting & wiring",
      "Inverter installation & configuration",
      "Battery bank setup",
      "Electrical wiring & distribution",
      "System testing & commissioning",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Equipment Sales",
    description: "Purchase high-quality solar equipment directly from us at competitive prices.",
    details: [
      "Solar panels (monocrystalline & polycrystalline)",
      "Lithium (LiFePO₄) batteries",
      "Tubular batteries",
      "Inverters (3.6KVA, 5KVA, 6.2KVA+)",
      "Mounting systems & accessories",
    ],
  },
  {
    icon: Settings,
    title: "Maintenance & Repairs",
    description: "Keep your solar system running at peak performance with our maintenance and repair services.",
    details: [
      "Regular system inspection",
      "Battery servicing & health checks",
      "Fault diagnosis & troubleshooting",
      "Panel cleaning & optimization",
      "Inverter servicing",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary-foreground mb-4">
              Our <span className="text-gradient-solar">Services</span>
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
              Complete solar energy solutions from consultation to installation and ongoing maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl gradient-solar flex items-center justify-center mb-4 shadow-solar">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full lg:max-w-md">
                <div className="bg-accent rounded-2xl p-8 border border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Interested in {service.title.toLowerCase()}? Get in touch and our team will guide you through the process.
                  </p>
                  <Link
                    to={service.title.includes("Consultation") ? "/consultation" : "/contact"}
                    className="inline-block gradient-solar text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold shadow-solar hover:opacity-90 transition-opacity"
                  >
                    {service.title.includes("Consultation") ? "Book Consultation" : "Get in Touch"}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
