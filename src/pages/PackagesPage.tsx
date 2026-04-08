import { motion } from "framer-motion";
import { Battery, BatteryFull, Zap, Check, ArrowRight, ShieldCheck, Clock, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const packages = [
  {
    name: "3.6KVA Solar System",
    tagline: "Perfect starter for small spaces",
    suitableFor: "Small homes, shops, kiosks",
    panel: "3KW Solar Panels",
    inverter: "3.6KVA Hybrid Inverter",
    appliances: ["Fridge", "Lighting", "Fans", "TV", "Photocopier"],
    batteryOptions: [
      { type: "Tubular Battery", spec: "5KVAH (2×12V 220A)", price: "₦2,144,500", warranty: "2 years" },
      { type: "Lithium (LiFePO₄)", spec: "5KVAH (24V 200A)", price: "₦2,894,500", warranty: "5 years" },
    ],
    priceRange: "₦2.1M – ₦2.9M",
    icon: Battery,
    gradient: "from-amber-500/10 to-orange-500/5",
    borderColor: "border-amber-500/20",
  },
  {
    name: "5KVA Solar System",
    tagline: "The most popular choice",
    suitableFor: "Medium homes, offices, small businesses",
    panel: "4KW Solar Panels",
    inverter: "5KVA Hybrid Inverter",
    appliances: ["AC Units", "Deep Freezer", "Multiple Rooms", "Small Office Equipment", "All basic appliances"],
    batteryOptions: [
      { type: "Tubular Battery", spec: "20KVAH (8×12V 220A)", price: "₦4,187,000", warranty: "2 years" },
      { type: "Lithium (LiFePO₄)", spec: "20KVAH", price: "₦5,837,000", warranty: "5 years" },
    ],
    priceRange: "₦4M – ₦5.8M",
    icon: Zap,
    popular: true,
    gradient: "from-primary/15 to-orange-500/5",
    borderColor: "border-primary/30",
  },
  {
    name: "6.2KVA Solar System",
    tagline: "Maximum power for demanding needs",
    suitableFor: "Large homes, businesses, estates",
    panel: "5KW Solar Panels",
    inverter: "6.2KVA Hybrid Inverter",
    appliances: ["Full Home Power", "Business Equipment", "Multiple AC Units", "Maximum Battery Backup", "Heavy-duty appliances"],
    batteryOptions: [
      { type: "Tubular Battery", spec: "20KVAH (8×12V 220A)", price: "₦4,237,000", warranty: "2 years" },
      { type: "Lithium (LiFePO₄)", spec: "20KVAH", price: "₦6,055,500", warranty: "5 years" },
    ],
    priceRange: "₦4.2M – ₦6M",
    icon: BatteryFull,
    gradient: "from-amber-500/10 to-orange-500/5",
    borderColor: "border-amber-500/20",
  },
];

const benefits = [
  { icon: ShieldCheck, title: "Equipment Warranty", desc: "All installations come with manufacturer warranty coverage" },
  { icon: Clock, title: "Fast Installation", desc: "Professional setup completed within 1–3 business days" },
  { icon: Wrench, title: "Free Maintenance", desc: "Complimentary system checkup within first 6 months" },
];

const PackagesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4">Transparent Pricing</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary-foreground mb-4">
              Solar <span className="text-gradient-solar">Packages</span>
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg mb-8">
              Structured pricing based on your power needs. All packages include equipment, professional installation, and warranty.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-center gap-2 bg-secondary-foreground/10 rounded-full px-4 py-2">
                  <b.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-secondary-foreground/80">{b.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card border-2 rounded-3xl overflow-hidden transition-shadow hover:shadow-card-hover ${
                pkg.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="gradient-solar py-2.5 text-center">
                  <span className="text-primary-foreground text-sm font-bold tracking-wide">⚡ MOST POPULAR CHOICE</span>
                </div>
              )}
              <div className="p-6 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl gradient-solar flex items-center justify-center shadow-solar flex-shrink-0">
                        <pkg.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{pkg.name}</h2>
                        <p className="text-muted-foreground">{pkg.tagline}</p>
                        <p className="text-sm text-muted-foreground mt-1">Suitable for: <span className="text-foreground font-medium">{pkg.suitableFor}</span></p>
                      </div>
                    </div>

                    {/* System specs */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-muted rounded-xl p-3">
                        <p className="text-xs text-muted-foreground">Solar Panels</p>
                        <p className="font-heading font-semibold text-foreground text-sm">{pkg.panel}</p>
                      </div>
                      <div className="bg-muted rounded-xl p-3">
                        <p className="text-xs text-muted-foreground">Inverter</p>
                        <p className="font-heading font-semibold text-foreground text-sm">{pkg.inverter}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-heading font-semibold text-foreground mb-3 text-sm">Typical Appliances Powered</h3>
                      <div className="flex flex-wrap gap-2">
                        {pkg.appliances.map((a) => (
                          <span key={a} className="inline-flex items-center gap-1.5 text-sm bg-accent text-accent-foreground px-3 py-1.5 rounded-lg">
                            <Check className="w-3.5 h-3.5" />
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-4xl font-heading font-bold text-gradient-solar">
                      {pkg.priceRange}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Prices include equipment, installation & logistics. Subject to market changes.</p>
                  </div>

                  {/* Right battery options */}
                  <div className="flex-1 lg:max-w-sm space-y-4">
                    <h3 className="font-heading font-semibold text-foreground">Choose Your Battery</h3>
                    <p className="text-sm text-muted-foreground mb-2">Select a battery type based on your budget and backup needs.</p>
                    {pkg.batteryOptions.map((b) => (
                      <div key={b.type} className={`rounded-2xl p-5 border-2 transition-colors hover:border-primary/40 ${b.type.includes("Lithium") ? "bg-accent border-primary/20" : "bg-muted border-border"}`}>
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-heading font-bold text-foreground">{b.type}</p>
                          {b.type.includes("Lithium") && (
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Recommended</span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{b.spec}</p>
                        <p className="text-xs text-muted-foreground mb-3">Warranty: {b.warranty}</p>
                        <p className="font-heading font-bold text-foreground text-2xl">{b.price}</p>
                      </div>
                    ))}
                    <Link
                      to="/consultation"
                      className="flex items-center justify-center gap-2 gradient-solar text-primary-foreground py-3.5 rounded-xl font-semibold shadow-solar hover:opacity-90 transition-opacity"
                    >
                      Get This Package
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <div className="container mx-auto px-4 mt-12">
          <div className="bg-accent rounded-2xl p-6 md:p-8 text-center max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-foreground text-lg mb-2">Need a Custom Solution?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Every building is unique. Contact us for a tailored energy assessment and custom quote based on your specific power requirements.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 gradient-solar text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-solar hover:opacity-90 transition-opacity"
            >
              Request Custom Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default PackagesPage;
