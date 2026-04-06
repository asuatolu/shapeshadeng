import { motion } from "framer-motion";
import { Battery, BatteryFull, Zap, Check } from "lucide-react";

const packages = [
  {
    name: "3.6KVA Starter",
    panel: "3KW Solar Panels",
    batteryType: "Tubular",
    battery: "5KVAH (2×12V 220A)",
    price: "₦2,144,500",
    powers: ["Photocopier", "Fridge", "Fans", "TV", "Lighting"],
    popular: false,
    icon: Battery,
  },
  {
    name: "3.6KVA Premium",
    panel: "3KW Solar Panels",
    batteryType: "Lithium (LiFePO₄)",
    battery: "5KVAH (24V 200A)",
    price: "₦2,894,500",
    powers: ["All 3.6KVA loads", "Longer backup", "5-year battery warranty"],
    popular: false,
    icon: BatteryFull,
  },
  {
    name: "5KVA Power",
    panel: "4KW Solar Panels",
    batteryType: "Tubular",
    battery: "20KVAH (8×12V 220A)",
    price: "₦4,187,000",
    powers: ["AC Units", "Deep Freezer", "Multiple Rooms", "Small Office"],
    popular: true,
    icon: Zap,
  },
  {
    name: "6.2KVA Business",
    panel: "5KW Solar Panels",
    batteryType: "Lithium (LiFePO₄)",
    battery: "20KVAH",
    price: "₦6,055,500",
    powers: ["Full Home Power", "Business Equipment", "Maximum Backup", "5-year battery warranty"],
    popular: false,
    icon: BatteryFull,
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 md:py-28 gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Packages</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground mt-3 mb-4">
            Solar Packages to Fit Your Budget
          </h2>
          <p className="text-secondary-foreground/70 max-w-xl mx-auto">
            From basic home systems to full business setups. All prices include equipment, installation, and warranty.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-6 border flex flex-col ${
                pkg.popular
                  ? "border-primary bg-primary/10 ring-2 ring-primary/30"
                  : "border-secondary-foreground/10 bg-secondary-foreground/5"
              }`}
            >
              {pkg.popular && (
                <span className="self-start gradient-solar text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <pkg.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-secondary-foreground mb-1">{pkg.name}</h3>
              <p className="text-sm text-secondary-foreground/60 mb-1">{pkg.panel}</p>
              <p className="text-sm text-secondary-foreground/60 mb-4">
                {pkg.batteryType} — {pkg.battery}
              </p>
              <div className="text-3xl font-heading font-bold text-gradient-solar mb-6">{pkg.price}</div>
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.powers.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90 ${
                  pkg.popular
                    ? "gradient-solar text-primary-foreground shadow-solar"
                    : "bg-secondary-foreground/10 text-secondary-foreground border border-secondary-foreground/20"
                }`}
              >
                Get This Package
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-secondary-foreground/50 text-sm mt-8">
          Prices are subject to change. All options are open for negotiation. Contact us for a custom quote.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
