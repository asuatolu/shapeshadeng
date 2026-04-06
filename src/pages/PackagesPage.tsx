import { motion } from "framer-motion";
import { Battery, BatteryFull, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const packages = [
  {
    name: "3.6KVA Solar System",
    suitableFor: "Small homes, shops",
    appliances: ["Fridge", "Lighting", "Fans", "TV", "Photocopier"],
    batteryOptions: [
      { type: "Tubular Battery", spec: "5KVAH (2×12V 220A)", price: "₦2,144,500" },
      { type: "Lithium Battery (LiFePO₄)", spec: "5KVAH (24V 200A)", price: "₦2,894,500" },
    ],
    priceRange: "₦2.1M – ₦2.7M",
    icon: Battery,
    color: "bg-accent",
  },
  {
    name: "5KVA Solar System",
    suitableFor: "Medium homes, offices",
    appliances: ["AC Units", "Deep Freezer", "Multiple Rooms", "Small Office Equipment", "All basic appliances"],
    batteryOptions: [
      { type: "Tubular Battery", spec: "20KVAH (8×12V 220A)", price: "₦4,187,000" },
      { type: "Lithium Battery (LiFePO₄)", spec: "20KVAH", price: "₦5,837,000" },
    ],
    priceRange: "₦4M – ₦5.8M",
    icon: Zap,
    color: "bg-primary/10",
    popular: true,
  },
  {
    name: "6.2KVA Solar System",
    suitableFor: "Large homes, businesses",
    appliances: ["Full Home Power", "Business Equipment", "Multiple AC Units", "Maximum Battery Backup", "Heavy-duty appliances"],
    batteryOptions: [
      { type: "Tubular Battery", spec: "20KVAH (8×12V 220A)", price: "₦4,237,000" },
      { type: "Lithium Battery (LiFePO₄)", spec: "20KVAH", price: "₦6,055,500" },
    ],
    priceRange: "₦4.2M – ₦6M",
    icon: BatteryFull,
    color: "bg-accent",
  },
];

const PackagesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary-foreground mb-4">
              Solar <span className="text-gradient-solar">Packages</span>
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
              Structured pricing based on your power needs. All packages include equipment, installation, and warranty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-card border rounded-2xl overflow-hidden ${pkg.popular ? "border-primary ring-2 ring-primary/20" : "border-border"}`}
            >
              {pkg.popular && (
                <div className="gradient-solar py-2 text-center">
                  <span className="text-primary-foreground text-sm font-bold">⚡ Most Popular</span>
                </div>
              )}
              <div className="p-6 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl gradient-solar flex items-center justify-center shadow-solar">
                        <pkg.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl font-bold text-foreground">{pkg.name}</h2>
                        <p className="text-sm text-muted-foreground">Suitable for: {pkg.suitableFor}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-heading font-semibold text-foreground mb-3">Typical Appliances Powered</h3>
                      <div className="flex flex-wrap gap-2">
                        {pkg.appliances.map((a) => (
                          <span key={a} className="inline-flex items-center gap-1.5 text-sm bg-accent text-accent-foreground px-3 py-1.5 rounded-lg">
                            <Check className="w-3.5 h-3.5" />
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-3xl font-heading font-bold text-gradient-solar mb-2">
                      {pkg.priceRange}
                    </div>
                    <p className="text-xs text-muted-foreground">Prices may change due to market fluctuations.</p>
                  </div>

                  {/* Right battery options */}
                  <div className="flex-1 lg:max-w-sm space-y-4">
                    <h3 className="font-heading font-semibold text-foreground">Battery Options</h3>
                    {pkg.batteryOptions.map((b) => (
                      <div key={b.type} className="bg-muted rounded-xl p-4 border border-border">
                        <p className="font-semibold text-foreground text-sm">{b.type}</p>
                        <p className="text-xs text-muted-foreground mb-2">{b.spec}</p>
                        <p className="font-heading font-bold text-foreground text-lg">{b.price}</p>
                      </div>
                    ))}
                    <Link
                      to="/consultation"
                      className="block text-center gradient-solar text-primary-foreground py-3 rounded-xl font-semibold text-sm shadow-solar hover:opacity-90 transition-opacity"
                    >
                      Get This Package
                    </Link>
                  </div>
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

export default PackagesPage;
