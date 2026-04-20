import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Loader2, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceOptions = ["Consultation", "Installation", "Maintenance", "Equipment Purchase"];

const ContactPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Please fill required fields", description: "Name and phone number are required.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const lines = [
      `*New Contact Enquiry*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      form.service ? `*Service Needed:* ${form.service}` : null,
      form.message ? `\n*Message:*\n${form.message}` : null,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/2347065646005?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Opening WhatsApp...", description: "Please send the pre-filled message to complete your enquiry." });
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
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
              Contact <span className="text-gradient-solar">Us</span>
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
              Have questions? Send us a message or reach out directly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 space-y-4"
            >
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

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                <input type="email" className={inputClass} placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Service Needed</label>
                <select className={inputClass} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message / Inquiry</label>
                <textarea className={`${inputClass} min-h-[140px] resize-none`} placeholder="Tell us how we can help..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full gradient-solar text-primary-foreground py-4 rounded-xl font-semibold text-base shadow-solar hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </motion.form>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 space-y-6">
              <div className="bg-accent rounded-2xl p-6 space-y-5">
                <h3 className="font-heading text-lg font-bold text-foreground">Contact Information</h3>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone / WhatsApp</p>
                    <a href="tel:07065646005" className="text-sm text-muted-foreground hover:text-foreground">070 6564 6005</a>
                    <br />
                    <a href="tel:08110093331" className="text-sm text-muted-foreground hover:text-foreground">081 1009 3331</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:ShapeShadeHiTech@gmail.com" className="text-sm text-muted-foreground hover:text-foreground break-all">ShapeShadeHiTech@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Office Address</p>
                    <p className="text-sm text-muted-foreground">Block 169, Jakande Estate,<br />Amuwo Odofin, Mile 2, Lagos</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/2347065646005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[hsl(142,70%,40%)] text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              <div className="bg-accent rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">Follow Us</h3>
                <div className="space-y-3">
                  <a href="https://facebook.com/shapeshadehitech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-card flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </div>
                    Facebook
                  </a>
                  <a href="https://www.youtube.com/@shapeshadehitech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-card flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </div>
                    YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
