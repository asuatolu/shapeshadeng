import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const projects = [
  { src: gallery1, title: "Residential Rooftop Installation", location: "Lekki, Lagos", w: 800, h: 600 },
  { src: gallery2, title: "Commercial Solar Array", location: "Victoria Island, Lagos", w: 800, h: 600 },
  { src: gallery3, title: "Inverter & Battery Setup", location: "Ikeja, Lagos", w: 800, h: 600 },
  { src: gallery4, title: "Business Solar Installation", location: "Surulere, Lagos", w: 800, h: 600 },
  { src: gallery5, title: "Maintenance & Inspection", location: "Ajah, Lagos", w: 800, h: 600 },
  { src: gallery6, title: "Solar-Powered Home at Dusk", location: "Ikoyi, Lagos", w: 800, h: 600 },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent-foreground uppercase tracking-widest">Our Work</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Project Gallery
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See some of our completed solar installations across Lagos and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-muted aspect-[4/3]"
            >
              <img
                src={project.src}
                alt={project.title}
                loading="lazy"
                width={project.w}
                height={project.h}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <h3 className="font-heading font-bold text-background text-lg">{project.title}</h3>
                  <p className="text-background/70 text-sm">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/consultation"
            className="inline-block gradient-solar text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-solar hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
