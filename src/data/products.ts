export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  details: string[];
  rating: number;
  reviews: number;
  isFeatured?: boolean;
  isNew?: boolean;
  slug: string;
}

export const products: Product[] = [
  {
    id: "aurelia-diamond-ring",
    name: "Aurelia Diamond Solitaire",
    price: 3450,
    category: "rings",
    slug: "aurelia-diamond-solitaire",
    description: "An exquisite 18-karat yellow gold ring crowned with a hand-selected 1.5-carat round brilliant-cut solitaire diamond. Reflecting timeless elegance, the band features micro-pavé diamonds along the shoulders for a subtle sparkle from every angle.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
    ],
    details: [
      "18k Solid Yellow Gold",
      "1.5 Carat Solitaire Diamond (GIA Certified, VS1 Clarity, F Color)",
      "0.35 Carat Total Weight Pavé Accents",
      "Handcrafted in Italy",
      "Complimentary Bespoke Resizing & Inside Ring Engraving"
    ],
    rating: 4.9,
    reviews: 42,
    isFeatured: true,
    isNew: true
  },
  {
    id: "empress-emerald-pendant",
    name: "Empress Emerald Pendant",
    price: 4200,
    category: "necklaces",
    slug: "empress-emerald-pendant",
    description: "A breathtaking pear-cut Colombian emerald suspended from a delicate 18-karat gold chain. The vibrant emerald is embraced by a halo of marquise and round brilliant diamonds, evoking the royal designs of historical dynasties.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
    ],
    details: [
      "18k Solid Yellow Gold",
      "2.2 Carat Natural Pear-Cut Colombian Emerald",
      "0.85 Carat Total Weight Brilliant Diamonds",
      "18-inch Cable Chain with Adjustable Loop at 16 inches",
      "Secure Lobster Clasp Fastening"
    ],
    rating: 5.0,
    reviews: 18,
    isFeatured: true
  },
  {
    id: "aurora-drop-earrings",
    name: "Aurora Diamond Drops",
    price: 2800,
    category: "earrings",
    slug: "aurora-diamond-drops",
    description: "Capturing the flowing lights of the northern sky, these drop earrings feature cascading lines of white gold set with alternating marquise and round diamonds, terminating in two pristine tear-drop diamonds that sway with every step.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop"
    ],
    details: [
      "18k Solid White Gold",
      "1.8 Carat Total Weight Round & Marquise Diamonds (VS2, G Color)",
      "Leverback Clasp for Pierced Ears",
      "Overall Drop Length: 32mm",
      "Designed & Finished in Antwerp"
    ],
    rating: 4.8,
    reviews: 29,
    isFeatured: true,
    isNew: true
  },
  {
    id: "elysian-gold-cuff",
    name: "Elysian Hammered Cuff",
    price: 1950,
    category: "bracelets",
    slug: "elysian-hammered-cuff",
    description: "A bold statement of minimalism and craft. This wide cuff is hand-forged from recycled 18-karat yellow gold. The textured, hammered finish captures and diffuses light in a soft, satin shimmer, lending a modern look to an ancient art form.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop"
    ],
    details: [
      "18k Solid Yellow Gold",
      "Recycled & Ethically Sourced Metals",
      "Width: 25mm",
      "Flexible Open-Back Fit",
      "Engraved Internally with Aurum Hallmark"
    ],
    rating: 4.7,
    reviews: 15,
    isFeatured: false
  },
  {
    id: "solitaire-sapphire-pendant",
    name: "Celeste Sapphire Necklace",
    price: 3100,
    category: "necklaces",
    slug: "celeste-sapphire-necklace",
    description: "Deep, mysterious ocean hues in a modern geometric pendant. A cushion-cut royal blue sapphire is held by four gold claw prongs and framed by a floating structural triangle of pave-set diamonds.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
    ],
    details: [
      "18k Solid Yellow Gold",
      "1.8 Carat Cushion-Cut Natural Royal Blue Sapphire",
      "0.22 Carat Pavé Diamonds",
      "16-inch Solid Gold Chain",
      "Signature Aurum Toggle Toggle Clasp"
    ],
    rating: 4.9,
    reviews: 24,
    isFeatured: false,
    isNew: true
  },
  {
    id: "classic-tennis-bracelet",
    name: "Classic Diamond Tennis",
    price: 5900,
    category: "bracelets",
    slug: "classic-diamond-tennis",
    description: "The epitome of understated luxury. A continuous, flexible line of 52 matching round brilliant-cut diamonds, meticulously set in four-prong platinum baskets to allow maximum light transmission.",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop"
    ],
    details: [
      "950 Platinum",
      "4.5 Carat Total Weight Round Brilliant Diamonds (SI1 Clarity, F-G Color)",
      "Length: 7 inches (customizable upon request)",
      "Double-Latch Security Clasp",
      "Includes Appraisal Certificate"
    ],
    rating: 5.0,
    reviews: 31,
    isFeatured: true
  },
  {
    id: "opulent-pearl-studs",
    name: "Baroque Pearl Hoops",
    price: 1250,
    category: "earrings",
    slug: "baroque-pearl-hoops",
    description: "Lustrous, organic-shaped white South Sea baroque pearls suspended from polished solid gold huggie hoops. Every pearl is naturally unique, exhibiting exquisite iridescent overtones of pink and silver.",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800&auto=format&fit=crop"
    ],
    details: [
      "18k Solid Yellow Gold",
      "11-12mm Baroque South Sea Cultured Pearls",
      "High Luster & Clean Surfaces",
      "Hinged Snap Closure for Comfort",
      "Handmade in Paris"
    ],
    rating: 4.6,
    reviews: 14,
    isFeatured: false
  },
  {
    id: "eternity-gold-band",
    name: "Eternity Diamond Band",
    price: 2400,
    category: "rings",
    slug: "eternity-diamond-band",
    description: "An endless circle of fire. A full eternity band set with emerald-cut diamonds positioned horizontally in a low-profile shared-prong setting, creating an elegant ribbon of pure brilliance.",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
    ],
    details: [
      "18k Solid White Gold (also available in Platinum)",
      "2.0 Carat Total Weight Emerald-Cut Diamonds (VS2, E-F Color)",
      "Flat Profile Comfort Fit Interior",
      "Width: 3.5mm",
      "Individually Matched Diamond Alignments"
    ],
    rating: 4.9,
    reviews: 56,
    isFeatured: false,
    isNew: true
  },
  {
    id: "luna-gold-choker",
    name: "Luna Gold Herringbone",
    price: 1650,
    category: "necklaces",
    slug: "luna-gold-herringbone",
    description: "Sleek and liquid-like. This classic herringbone chain is flat-woven with high-precision micro-links that rest flush against the collarbone, contouring effortlessly to the body for a fluid golden gleam.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop"
    ],
    details: [
      "18k Solid Yellow Gold",
      "Fluid Herringbone Weave Style",
      "Width: 5mm",
      "Length: 15 inches with 2-inch Extension Chain",
      "Satin Polish Finish"
    ],
    rating: 4.7,
    reviews: 38,
    isFeatured: false
  },
  {
    id: "solstice-diamond-hoops",
    name: "Solstice Diamond Hoops",
    price: 3600,
    category: "earrings",
    slug: "solstice-diamond-hoops",
    description: "Classic hoops elevated. Showcasing an 'inside-out' design where diamonds line the front exterior and the rear interior, ensuring that from the front, only shimmering fire is visible.",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop"
    ],
    details: [
      "18k Solid White Gold",
      "2.5 Carat Total Weight Round Brilliant Diamonds",
      "Inside-Out Prong Setting Style",
      "Diameter: 30mm",
      "Internal Snap Lock Security Closure"
    ],
    rating: 4.9,
    reviews: 21,
    isFeatured: true
  },
  {
    id: "sculptural-gold-bangle",
    name: "Gilded Helix Bangle",
    price: 2100,
    category: "bracelets",
    slug: "gilded-helix-bangle",
    description: "A continuous helix twist crafted from high-polished gold wire, accented by pavé diamond ends that cross over the wrist in an organic wrap. Striking on its own or layered in a stack.",
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop"
    ],
    details: [
      "18k Solid Yellow Gold",
      "0.15 Carat Pavé Diamond Accented Tips",
      "Hinged Oval Shape for Ergonomic Fit",
      "Internal Measurements: 58mm x 48mm",
      "Handcrafted in Milan"
    ],
    rating: 4.8,
    reviews: 12,
    isFeatured: false,
    isNew: true
  },
  // {
  //   id: "emerald-cut-vintage-ring",
  //   name: "Venezia Emerald-Cut Diamond Ring",
  //   price: 4900,
  //   category: "rings",
  //   slug: "venezia-emerald-cut-diamond-ring",
  //   description: "Inspired by Venetian architecture, this vintage-inspired engagement ring centers a 2.0-carat emerald-cut diamond, flanked by tapered baguette diamonds on a slender platinum band.",
  //   images: [
  //     "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop"
  //   ],
  //   details: [
  //     "950 Platinum",
  //     "2.0 Carat Emerald-Cut Center Diamond (VS1, E Color, GIA Certified)",
  //     "0.40 Carat Baguette Shoulder Accent Diamonds",
  //     "Delicate Milgrain & Filigree Detailing",
  //     "Lifetime Warranty & Free Annual Re-polishing"
  //   ],
  //   rating: 5.0,
  //   reviews: 8,
  //   isFeatured: true
  // }
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}
