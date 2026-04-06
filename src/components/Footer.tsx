const Footer = () => {
  return (
    <footer className="gradient-dark py-12 border-t border-secondary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-secondary-foreground mb-2">
              <span className="text-gradient-solar">Shape & Shade</span> HiTech
            </h3>
            <p className="text-sm text-secondary-foreground/60 leading-relaxed">
              Professional solar installation and maintenance company providing reliable, affordable solar energy
              solutions for homes and businesses across Nigeria.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-secondary-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "Packages", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-secondary-foreground mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li>📍 Block 169, Jakande Estate, Amuwo Odofin, Mile 2, Lagos</li>
              <li>📞 070 6564 6005 / 081 1009 3331</li>
              <li>✉️ ShapeShadeHiTech@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="text-xs text-secondary-foreground/40">
            © {new Date().getFullYear()} Shape and Shade HiTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
