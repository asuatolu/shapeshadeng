import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { photoAlbums } from "@/data/homeContent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectSlider = ({ album }: { album: (typeof photoAlbums)[number] }) => {
  const plugin = useRef(Autoplay({ delay: 4500, stopOnInteraction: true }));

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[plugin.current]}
      className="relative"
    >
      <CarouselContent>
        {album.photos.map((photo) => (
          <CarouselItem key={photo.caption}>
            <figure className="relative aspect-[16/10] bg-muted overflow-hidden rounded-2xl">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={1600}
                height={1000}
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent p-5 pt-16">
                <p className="text-sm md:text-base text-background font-medium leading-snug">
                  {photo.caption}
                </p>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 bg-background/90 border-border h-10 w-10" />
      <CarouselNext className="right-3 top-1/2 -translate-y-1/2 bg-background/90 border-border h-10 w-10" />
    </Carousel>
  );
};

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
            Browse real project albums showing how each job moves from site prep and equipment setup to clean, finished solar delivery.
          </p>
        </motion.div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {photoAlbums.map((album, i) => (
            <motion.article
              key={album.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm"
            >
              <header className="px-6 md:px-8 pt-7 pb-5 border-b border-border">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground mb-2">
                  Photo Album
                </p>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
                  {album.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{album.location}</span>
                </div>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  {album.story}
                </p>
              </header>

              <div className="p-4 md:p-6">
                <ProjectSlider album={album} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-14">
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
