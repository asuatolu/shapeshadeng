import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { photoAlbums } from "@/data/homeContent";

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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real project albums showing how our work moves from site prep and equipment setup to clean, finished solar delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {photoAlbums.map((album, i) => (
            <motion.article
              key={album.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl overflow-hidden border border-border bg-card shadow-sm"
            >
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img
                  src={album.cover}
                  alt={album.coverAlt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground mb-2">
                  Photo Album
                </p>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">{album.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{album.location}</p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-5">{album.story}</p>

                <div className="grid grid-cols-3 gap-3">
                  {album.photos.map((photo) => (
                    <figure key={photo.caption} className="space-y-2">
                      <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          width={600}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <figcaption className="text-[11px] leading-snug text-muted-foreground">
                        {photo.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </motion.article>
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
