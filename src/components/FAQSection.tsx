import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does a solar installation cost?",
    a: "Our packages start from ₦2.1 million for a 3.6KVA system and go up to ₦6 million+ for larger 6.2KVA business setups. The exact price depends on your power needs, battery choice (tubular vs lithium), and location. We offer flexible payment plans and all prices are negotiable.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes! We understand that solar is a significant investment. We offer flexible payment plans that can be spread over several months. Contact us to discuss a plan that fits your budget.",
  },
  {
    q: "What areas do you cover?",
    a: "We are based in Lagos (Jakande Estate, Amuwo Odofin) and serve customers across Lagos, Ondo, and other southwestern states. Transportation and logistics are included in our packages.",
  },
  {
    q: "What is the difference between tubular and lithium batteries?",
    a: "Tubular batteries are more affordable but provide minimum 50% duty (2.5KVAH from a 5KVAH battery). Lithium (LiFePO₄) batteries are more expensive but provide 80%+ duty (4KVAH from 5KVAH), last longer, and come with a 5-year warranty compared to 1 year for tubular.",
  },
  {
    q: "What appliances can solar power run?",
    a: "Depending on your system size, solar can power your fans, TVs, lighting, fridge, freezer, photocopier, and even AC units. During the day, solar panels power your appliances directly. At night, your battery backup takes over. The battery size determines how long power lasts at night.",
  },
  {
    q: "What warranty do you provide?",
    a: "All installations and equipment come with a 1-year warranty including free service and repairs (you only pay transportation to your location). Lithium batteries come with an extended 5-year warranty.",
  },
  {
    q: "How long does installation take?",
    a: "A typical residential installation takes 1-3 days depending on the system size and site conditions. We handle everything from equipment delivery to final testing.",
  },
  {
    q: "Can I upgrade my system later?",
    a: "Absolutely! Our inverters are designed to accommodate upgrades. You can start with a smaller setup and add more panels, batteries, or even upgrade your inverter in the future.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-accent-foreground uppercase tracking-widest">FAQ</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card-hover transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
