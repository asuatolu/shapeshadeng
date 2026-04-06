import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo O.",
    location: "Lekki, Lagos",
    text: "Shape and Shade HiTech installed a 5KVA system in my home. We no longer depend on generators. The team was professional and the installation was completed in just 2 days.",
    rating: 5,
  },
  {
    name: "Mrs. Funke A.",
    location: "Akure, Ondo",
    text: "Excellent service from consultation to installation. They helped me choose the right system for my budget and the solar panels have been performing great for over a year now.",
    rating: 5,
  },
  {
    name: "Chukwu E.",
    location: "Amuwo Odofin, Lagos",
    text: "Very reliable company. I purchased a 3.6KVA system and the lithium battery option has been outstanding. Their after-sales support is top-notch.",
    rating: 5,
  },
  {
    name: "Engr. Bola T.",
    location: "Ikeja, Lagos",
    text: "I needed a solar solution for my office and Shape & Shade delivered perfectly. The 6.2KVA system powers everything including our AC units. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent-foreground uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
