// Centralized gallery data for Narasimha Skill Sphere
// Sourced directly from /assets/gallery

export interface GalleryPhoto {
  id: string;
  category: "all" | "robotics" | "drone" | "events" | "maker-lab" | "mentorship";
  image: string;
}

export const allGalleryPhotos: GalleryPhoto[] = [
  {
    id: "gal-1",
    category: "mentorship",
    image: "/assets/gallery/1751385538541.jpg",
  },
  {
    id: "gal-2",
    category: "drone",
    image: "/assets/gallery/1764769391017.jpg",
  },
  {
    id: "gal-3",
    category: "events",
    image: "/assets/gallery/1764769394887.jpg",
  },
  {
    id: "gal-4",
    category: "events",
    image: "/assets/gallery/1764769395550.jpg",
  },
  {
    id: "gal-5",
    category: "maker-lab",
    image: "/assets/gallery/1769839567779.jpg",
  },
  {
    id: "gal-6",
    category: "drone",
    image: "/assets/gallery/1769839571781.jpg",
  },
  {
    id: "gal-7",
    category: "drone",
    image: "/assets/gallery/1751385543231.jpg",
  },
  {
    id: "gal-8",
    category: "robotics",
    image: "/assets/gallery/1751385545177.jpg",
  },
  {
    id: "gal-9",
    category: "maker-lab",
    image: "/assets/gallery/1751546977725.jpg",
  },
  {
    id: "gal-10",
    category: "robotics",
    image: "/assets/gallery/1751546977950.jpg",
  },
  {
    id: "gal-11",
    category: "robotics",
    image: "/assets/gallery/1751546978183.jpg",
  },
  {
    id: "gal-12",
    category: "maker-lab",
    image: "/assets/gallery/1751546987000.jpg",
  },
  {
    id: "gal-13",
    category: "drone",
    image: "/assets/gallery/1754414185470.jpg",
  },
  {
    id: "gal-14",
    category: "events",
    image: "/assets/gallery/1754581044790.jpg",
  },
  {
    id: "gal-15",
    category: "mentorship",
    image: "/assets/gallery/1762785768626.jpg",
  },
  {
    id: "gal-16",
    category: "drone",
    image: "/assets/gallery/1770302025979.jpg",
  },
  {
    id: "gal-17",
    category: "maker-lab",
    image: "/assets/gallery/1744576627841.jpg",
  },
  {
    id: "gal-18",
    category: "maker-lab",
    image: "/assets/gallery/1744576630347.jpg",
  },
  {
    id: "gal-19",
    category: "events",
    image: "/assets/gallery/WhatsApp Image 2026-01-14 at 8.50.33 PM (1).jpeg",
  },
  {
    id: "gal-20",
    category: "maker-lab",
    image: "/assets/gallery/WhatsApp Image 2026-01-14 at 8.50.37 PM.jpeg",
  },
  {
    id: "gal-21",
    category: "robotics",
    image: "/assets/gallery/gl12.jpeg",
  },
  {
    id: "gal-22",
    category: "drone",
    image: "/assets/gallery/gl13.jpeg",
  },
  {
    id: "gal-23",
    category: "drone",
    image: "/assets/gallery/gl14.jpeg",
  },
  {
    id: "gal-24",
    category: "robotics",
    image: "/assets/gallery/gl15.jpeg",
  },
  {
    id: "gal-25",
    category: "events",
    image: "/assets/gallery/gl22.jpeg",
  },
  {
    id: "gal-26",
    category: "maker-lab",
    image: "/assets/gallery/gl3.jpeg",
  },
  {
    id: "gal-27",
    category: "events",
    image: "/assets/gallery/gl7.jpeg",
  },
];

// Featured 6 gallery photos matching Home & Centers sections
export const featuredGalleryPhotos: GalleryPhoto[] = allGalleryPhotos.slice(0, 6);
