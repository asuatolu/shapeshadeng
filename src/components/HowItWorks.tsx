import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, Wrench, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    step: "Step 1",
    title: "Book Consultation",
    description: "Schedule a free consultation call or physical site visit. We'll discuss your power needs and budget.",
  },
  {
    icon: ClipboardList,
    step: "Step 2",
    title: "Energy Assessment & System Design",
    description: "Our engineers assess your energy consumption, appliances, and location to design the optimal solar system.",
  },
  {
    icon: Wrench,
    step: "Step 3",
    title: "Installation & Setup",
    description: "Professional installation of panels, inverter, batteries, and wiring by certified technicians.",
  },
  {
    icon: BarChart3,
    step: "Step 4",
    title: "Monitoring & Maintenance",
    description: "Ongoing support, system monitoring, and maintenance to ensure peak performance year-round.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent-foreground uppercase tracking-widest">Process</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From first contact to powering your home — four simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-solar flex items-center justify-center mx-auto mb-5 shadow-solar">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-accent-foreground uppercase tracking-widest">{s.step}</span>
              <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
