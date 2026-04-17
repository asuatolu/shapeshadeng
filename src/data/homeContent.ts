import consultationPowerAudit from "@/assets/story/consultation-power-audit.jpg";
import systemDesignRooftopLayout from "@/assets/story/system-design-rooftop-layout.jpg";
import installationTeamSetup from "@/assets/story/installation-team-setup.jpg";
import salesSupplyBatteryBank from "@/assets/story/sales-supply-battery-bank.jpg";
import galleryRoofPrep from "@/assets/story/gallery-roof-prep.jpg";
import galleryPanelsClose from "@/assets/story/gallery-panels-close.jpg";
import gallerySolarCarport from "@/assets/story/gallery-solar-carport.jpg";
import galleryRooftopFinish from "@/assets/story/gallery-rooftop-finish.jpg";
import galleryCommercialArray from "@/assets/story/gallery-commercial-array.jpg";
import galleryInverterInstall from "@/assets/story/gallery-inverter-install.jpg";

export type ServiceItem = {
  icon: "Search" | "PenTool" | "Wrench" | "ShoppingBag";
  title: string;
  description: string;
  story: string;
  image: string;
  alt: string;
};

export type PhotoAlbum = {
  title: string;
  location: string;
  story: string;
  cover: string;
  coverAlt: string;
  photos: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
};

export type TestimonialItem = {
  name: string;
  location: string;
  text: string;
  rating: number;
  project: string;
  image: string;
  alt: string;
};

export const services: ServiceItem[] = [
  {
    icon: "Search",
    title: "Consultation",
    description: "Free site assessment and power audit to determine the right solar system for your needs and budget.",
    story: "We start by inspecting existing inverter, battery, and power distribution conditions before recommending the best-fit setup.",
    image: consultationPowerAudit,
    alt: "Indoor solar consultation showing inverter and battery setup during a site assessment in Nigeria.",
  },
  {
    icon: "PenTool",
    title: "System Design",
    description: "Custom solar system design by our engineers, optimized for your power consumption and roof space.",
    story: "Roof measurements, panel layout planning, and cable routing are tailored to each building before installation begins.",
    image: systemDesignRooftopLayout,
    alt: "Technicians planning solar panel placement on a residential rooftop in Nigeria.",
  },
  {
    icon: "Wrench",
    title: "Installation",
    description: "Professional installation by certified technicians with quality equipment and 1-5 year warranty.",
    story: "Our installers mount panels, wire inverters, and commission the full backup system with careful attention to finish and safety.",
    image: installationTeamSetup,
    alt: "Solar technicians installing an inverter and battery bank inside a home in Nigeria.",
  },
  {
    icon: "ShoppingBag",
    title: "Sales & Supply",
    description: "Purchase inverters, solar panels, batteries (tubular & lithium), and all accessories directly from us.",
    story: "We supply dependable batteries, inverters, panels, and accessories that are ready for immediate deployment on residential and commercial projects.",
    image: salesSupplyBatteryBank,
    alt: "Battery bank and solar inverter equipment available for supply and installation in Nigeria.",
  },
];

export const photoAlbums: PhotoAlbum[] = [
  {
    title: "Rooftop Home Installation",
    location: "Residential project, Lagos",
    story: "A full story from roof preparation to mounted panels and a finished system ready for everyday power needs.",
    cover: galleryRooftopFinish,
    coverAlt: "Finished rooftop solar array on a residential building in Lagos.",
    photos: [
      {
        src: galleryRoofPrep,
        alt: "Technicians preparing a rooftop for solar panel installation in Lagos.",
        caption: "Roof preparation and rail alignment before panel mounting.",
      },
      {
        src: galleryPanelsClose,
        alt: "Close-up of installed solar panels on a dark roof in Lagos.",
        caption: "Clean panel placement with a neat, durable finish.",
      },
      {
        src: galleryRooftopFinish,
        alt: "Technicians standing beside a newly completed rooftop solar array in Nigeria.",
        caption: "Final checks after the array is fully installed.",
      },
    ],
  },
  {
    title: "Commercial & Estate Arrays",
    location: "Mixed commercial projects, Nigeria",
    story: "Larger installations show how we adapt layouts for long roof spans, estate buildings, and higher-demand sites.",
    cover: galleryCommercialArray,
    coverAlt: "Long commercial solar array installed on a metal roof in Nigeria.",
    photos: [
      {
        src: galleryCommercialArray,
        alt: "Commercial rooftop solar array stretching across a long metal roof in Nigeria.",
        caption: "Expanded panel coverage for larger daily loads.",
      },
      {
        src: gallerySolarCarport,
        alt: "Solar carport structure installed beside a building in Nigeria.",
        caption: "Custom structural work for shade and power generation.",
      },
      {
        src: systemDesignRooftopLayout,
        alt: "Workers aligning large solar panels on a rooftop in Nigeria.",
        caption: "Layout precision keeps performance and aesthetics aligned.",
      },
    ],
  },
  {
    title: "Power Room & Inverter Setup",
    location: "Indoor backup systems",
    story: "Beyond the roof, we build reliable indoor systems with inverters, batteries, protection devices, and clean wiring.",
    cover: galleryInverterInstall,
    coverAlt: "Technicians installing an indoor inverter and battery system in Nigeria.",
    photos: [
      {
        src: galleryInverterInstall,
        alt: "Technicians working on an inverter installation above battery banks in Nigeria.",
        caption: "Inverter mounting and connection work in progress.",
      },
      {
        src: consultationPowerAudit,
        alt: "Battery and inverter setup photographed during a site assessment in Nigeria.",
        caption: "Existing conditions help guide the right upgrade path.",
      },
      {
        src: salesSupplyBatteryBank,
        alt: "Installed battery bank and inverter setup under a staircase in Nigeria.",
        caption: "Compact backup power systems for indoor spaces.",
      },
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Adebayo O.",
    location: "Lekki, Lagos",
    text: "Shape and Shade HiTech installed a 5KVA system in my home. We no longer depend on generators. The team was professional and the installation was completed in just 2 days.",
    rating: 5,
    project: "Residential rooftop installation",
    image: galleryPanelsClose,
    alt: "Residential rooftop solar panel installation in Lagos.",
  },
  {
    name: "Mrs. Funke A.",
    location: "Akure, Ondo",
    text: "Excellent service from consultation to installation. They helped me choose the right system for my budget and the solar panels have been performing great for over a year now.",
    rating: 5,
    project: "Consultation and system design",
    image: consultationPowerAudit,
    alt: "Solar site assessment setup with inverter and battery equipment in Nigeria.",
  },
  {
    name: "Chukwu E.",
    location: "Amuwo Odofin, Lagos",
    text: "Very reliable company. I purchased a 3.6KVA system and the lithium battery option has been outstanding. Their after-sales support is top-notch.",
    rating: 5,
    project: "Battery and inverter supply",
    image: salesSupplyBatteryBank,
    alt: "Indoor battery bank and inverter system supplied and installed in Nigeria.",
  },
  {
    name: "Engr. Bola T.",
    location: "Ikeja, Lagos",
    text: "I needed a solar solution for my office and Shape & Shade delivered perfectly. The 6.2KVA system powers everything including our AC units. Highly recommended!",
    rating: 5,
    project: "Commercial array delivery",
    image: galleryCommercialArray,
    alt: "Commercial solar array installed on a large roof in Nigeria.",
  },
];
