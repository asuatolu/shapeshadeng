import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const faqCategories = [
  {
    category: "Pricing & Payment",
    faqs: [
      {
        q: "How much does a solar installation cost?",
        a: "Our packages start from ₦2.1 million for a 3.6KVA system and go up to ₦6 million+ for larger 6.2KVA business setups. The exact price depends on your power needs, battery choice (tubular vs lithium), and location. All prices are negotiable.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes! We understand that solar is a significant investment. We offer flexible payment plans that can be spread over several months. Contact us to discuss a plan that fits your budget.",
      },
      {
        q: "Are prices fixed?",
        a: "Prices are subject to market fluctuations, especially for batteries and solar panels. We always provide an up-to-date quote during consultation. All prices listed are estimates and open for negotiation.",
      },
    ],
  },
  {
    category: "Technical",
    faqs: [
      {
        q: "What is the difference between tubular and lithium batteries?",
        a: "Tubular batteries are more affordable but provide minimum 50% duty (2.5KVAH from a 5KVAH battery). Lithium (LiFePO₄) batteries are more expensive but provide 80%+ duty (4KVAH from 5KVAH), last longer, and come with a 5-year warranty compared to 1 year for tubular.",
      },
      {
        q: "What appliances can solar power run?",
        a: "Depending on your system size, solar can power fans, TVs, lighting, fridge, freezer, photocopier, and even AC units. During the day, solar panels power your appliances directly. At night, battery backup takes over.",
      },
      {
        q: "Can I upgrade my system later?",
        a: "Absolutely! Our inverters are designed to accommodate upgrades. You can start with a smaller setup and add more panels, batteries, or even upgrade your inverter in the future.",
      },
      {
        q: "How long do solar panels last?",
        a: "Quality solar panels typically last 25+ years with minimal degradation. Inverters last 10-15 years. Tubular batteries last 3-5 years, while lithium batteries can last 7-10 years.",
      },
    ],
  },
  {
    category: "Installation & Service",
    faqs: [
      {
        q: "How long does installation take?",
        a: "A typical residential installation takes 1-3 days depending on the system size and site conditions. We handle everything from equipment delivery to final testing.",
      },
      {
        q: "What areas do you cover?",
        a: "We are based in Lagos (Jakande Estate, Amuwo Odofin) and serve customers across Lagos, Ondo, and other southwestern states. Transportation and logistics are included in our packages.",
      },
      {
        q: "What warranty do you provide?",
        a: "All installations and equipment come with a 1-year warranty including free service and repairs (you only pay transportation). Lithium batteries come with an extended 5-year warranty.",
      },
      {
        q: "Do you provide maintenance after installation?",
        a: "Yes, we offer ongoing maintenance and support. During the warranty period, servicing is free. After warranty, we offer affordable maintenance packages to keep your system running optimally.",
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary-foreground mb-4">
              Frequently Asked <span className="text-gradient-solar">Questions</span>
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
              Everything you need to know about our solar solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl space-y-12">
          {faqCategories.map((cat) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">{cat.category}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`${cat.category}-${i}`}
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
          ))}

          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Link
              to="/contact"
              className="inline-block gradient-solar text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-solar hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default FAQPage;
