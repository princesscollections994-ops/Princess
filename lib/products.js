
export const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1520975682031-c6ca0c6c6b91?q=80&w=1200&auto=format&fit=crop";
export const seedProducts = [
  { id: "p1", name: "Velvet Lace Bralette (Sample)", price: 2200, tag: "Lingerie", img: PLACEHOLDER_IMG, desc: "Soft lace, bold silhouette.", featured: true, newArrival: true },
  { id: "p2", name: "Satin Push‑Up Set (Sample)", price: 3200, tag: "Lingerie", img: PLACEHOLDER_IMG, desc: "Satin finish with sculpt support.", featured: true, newArrival: false },
  { id: "p3", name: "High‑Waist Shaper (Sample)", price: 1800, tag: "Essentials", img: PLACEHOLDER_IMG, desc: "Snatched comfort all day.", featured: false, newArrival: false },
  { id: "p4", name: "Ribbed Crop Top (Sample)", price: 1500, tag: "Clothing", img: PLACEHOLDER_IMG, desc: "Everyday chic.", featured: false, newArrival: true },
  { id: "p5", name: "Pleated Midi Dress (Sample)", price: 4500, tag: "Clothing", img: PLACEHOLDER_IMG, desc: "Twirl‑worthy statement.", featured: true, newArrival: true },
];
export const formatKES = (n) => new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);
