import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Phone, CalendarCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const buildingTypes = ["Residential", "Business", "Office", "Estate"];
const serviceTypes = ["Consultation", "Installation", "System Upgrade"];
const applianceOptions = ["Fridge", "AC", "TV", "Lighting", "Fans", "Office Equipment", "Deep Freezer", "Water Pump"];
const budgetOptions = ["Under ₦2M", "₦2M – ₦4M", "₦4M – ₦6M", "₦6M+"];
const consultationTypes = ["Phone Call", "WhatsApp", "Physical Inspection"];

const ConsultationPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    buildingType: "",
    serviceType: "",
    appliances: [] as string[],
    budget: "",
    consultationType: "",
    message: "",
  });

  const toggleAppliance = (a: string) => {
    setForm((prev) => ({
      ...prev,
      appliances: prev.appliances.includes(a)
        ? prev.appliances.filter((x) => x !== a)
        : [...prev.appliances, a],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.location || !form.buildingType) {
      toast({ title: "Please fill required fields", description: "Name, phone, location, and building type are required.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const lines = [
      `*New Consultation Booking*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      `*Location:* ${form.location}`,
      `*Building Type:* ${form.buildingType}`,
      form.serviceType ? `*Service Type:* ${form.serviceType}` : null,
      form.appliances.length ? `*Appliances:* ${form.appliances.join(", ")}` : null,
      form.budget ? `*Budget:* ${form.budget}` : null,
      form.consultationType ? `*Consultation Type:* ${form.consultationType}` : null,
      form.message ? `\n*Notes:*\n${form.message}` : null,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/2347065646005?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Opening WhatsApp...", description: "Please send the pre-filled message to complete your booking." });
      setForm({ name: "", phone: "", email: "", location: "", buildingType: "", serviceType: "", appliances: [], budget: "", consultationType: "", message: "" });
    }, 800);
  };

  const inputClass =
    "w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow text-sm";

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary-foreground mb-4">
              Book a <span className="text-gradient-solar">Consultation</span>
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
              Tell us about your power needs and we'll design the perfect solar solution for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Personal info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <input type="text" className={inputClass} placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                  <input type="tel" className={inputClass} placeholder="080XXXXXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                  <input type="email" className={inputClass} placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Location *</label>
                  <input type="text" className={inputClass} placeholder="City, State" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
                </div>
              </div>

              {/* Building & Service */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Type of Building *</label>
                  <select className={inputClass} value={form.buildingType} onChange={(e) => setForm({ ...form, buildingType: e.target.value })}>
                    <option value="">Select type</option>
                    {buildingTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Type of Service</label>
                  <select className={inputClass} value={form.serviceType} onChange={(e) => setForm({ ...form, serviceType: e.target.value })}>
                    <option value="">Select service</option>
                    {serviceTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Appliances */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">What appliances will you power?</label>
                <div className="flex flex-wrap gap-2">
                  {applianceOptions.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => toggleAppliance(a)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
                        form.appliances.includes(a)
                          ? "gradient-solar text-primary-foreground border-primary"
                          : "bg-card border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget & Consultation type */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Estimated Budget</label>
                  <select className={inputClass} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                    <option value="">Select budget</option>
                    {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Consultation Type</label>
                  <select className={inputClass} value={form.consultationType} onChange={(e) => setForm({ ...form, consultationType: e.target.value })}>
                    <option value="">Select type</option>
                    {consultationTypes.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Additional Notes</label>
                <textarea className={`${inputClass} min-h-[100px] resize-none`} placeholder="Tell us more about your power needs..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full gradient-solar text-primary-foreground py-4 rounded-xl font-semibold text-base shadow-solar hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {loading ? "Submitting..." : "Book Consultation"}
              </button>
            </motion.form>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-accent rounded-2xl p-6">
                <CalendarCheck className="w-8 h-8 text-accent-foreground mb-3" />
                <h3 className="font-heading font-bold text-foreground mb-2">What happens next?</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="font-bold text-accent-foreground">1.</span> We review your submission</li>
                  <li className="flex gap-2"><span className="font-bold text-accent-foreground">2.</span> Our team contacts you within 24 hrs</li>
                  <li className="flex gap-2"><span className="font-bold text-accent-foreground">3.</span> We schedule your consultation</li>
                  <li className="flex gap-2"><span className="font-bold text-accent-foreground">4.</span> Site assessment & custom quote</li>
                </ol>
              </div>

              <div className="bg-accent rounded-2xl p-6">
                <Phone className="w-8 h-8 text-accent-foreground mb-3" />
                <h3 className="font-heading font-bold text-foreground mb-2">Prefer to call?</h3>
                <p className="text-sm text-muted-foreground mb-3">Speak directly with our solar experts.</p>
                <a href="tel:07065646005" className="block text-sm font-semibold text-foreground hover:text-primary transition-colors">070 6564 6005</a>
                <a href="tel:08110093331" className="block text-sm font-semibold text-foreground hover:text-primary transition-colors">081 1009 3331</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultationPage;
