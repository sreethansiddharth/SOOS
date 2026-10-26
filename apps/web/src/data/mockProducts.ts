import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    "id": "cat_all",
    "name": "All Categories",
    "slug": "all",
    "description": "Explore our complete catalog of certified tech & workspace gear.",
    "itemCount": 198,
    "imageUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "cat_smartphones",
    "name": "Smartphones & Flagships",
    "slug": "smartphones",
    "description": "Next-gen titanium flagships with pro optical zoom and on-device AI processors.",
    "itemCount": 22,
    "imageUrl": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "cat_laptops",
    "name": "Laptops & Workstations",
    "slug": "laptops",
    "description": "M3 Max silicon powerhouses, OLED color-critical displays, and creator workstations.",
    "itemCount": 22,
    "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "cat_audio",
    "name": "Headphones & Audio",
    "slug": "audio",
    "description": "Reference-grade spatial audio, lossless planar transducers, and ANC leaders.",
    "itemCount": 22,
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "cat_gaming",
    "name": "Gaming & Consoles",
    "slug": "gaming",
    "description": "Next-gen ray-traced gaming hardware, high refresh OLED panels, and haptic gear.",
    "itemCount": 22,
    "imageUrl": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "cat_keyboards",
    "name": "Custom Keyboards",
    "slug": "keyboards",
    "description": "CNC gasket-mount mechanical keyboards with pre-lubed switches and hot-swap sockets.",
    "itemCount": 22,
    "imageUrl": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "cat_accessories",
    "name": "Precision Peripherals",
    "slug": "accessories",
    "description": "Electromagnetic scroll mice, Thunderbolt 4 hubs, drone tech, and stream controllers.",
    "itemCount": 22,
    "imageUrl": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "cat_wearables",
    "name": "Smart Wearables",
    "slug": "wearables",
    "description": "Titanium aerospace multisport GPS watches and biometric health trackers.",
    "itemCount": 22,
    "imageUrl": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "cat_desk_setup",
    "name": "Desk Architecture",
    "slug": "desk-setup",
    "description": "Handcrafted solid walnut risers, optical light bars, and ergonomic active chairs.",
    "itemCount": 22,
    "imageUrl": "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "cat_cameras",
    "name": "Cameras & Pro Optics",
    "slug": "cameras",
    "description": "Full-frame mirrorless powerhouses, legendary film simulations, and pro video rigs.",
    "itemCount": 22,
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    "productId": "prod_iphone_15_pro_max",
    "slug": "apple-iphone-15-pro-max-256gb",
    "name": "Apple iPhone 15 Pro Max (256 GB) - Natural Titanium",
    "subtitle": "A17 Pro Chip, 6.7\" Super Retina XDR, 5X Telephoto Optical Zoom",
    "description": "Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and 5x optical telephoto zoom.",
    "category": "smartphones",
    "brand": "Apple",
    "pricePaise": 14890000,
    "mrpPaise": 15990000,
    "discountPercent": 7,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 2450,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "BESTSELLER",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.7\" Super Retina XDR 120Hz"
      },
      {
        "label": "Processor",
        "value": "Apple A17 Pro 3nm"
      },
      {
        "label": "Storage",
        "value": "256 GB NVMe"
      },
      {
        "label": "Chassis",
        "value": "Grade 5 Titanium"
      }
    ],
    "highlights": [
      "Titanium Frame",
      "A17 Pro Chip",
      "5x Telephoto",
      "Action Button"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_iphone_15_pro",
    "slug": "apple-iphone-15-pro-128gb-blue",
    "name": "Apple iPhone 15 Pro (128 GB) - Blue Titanium",
    "subtitle": "A17 Pro Chip, 6.1\" Super Retina XDR, Pro Camera System with 48MP Main",
    "description": "Supercompact titanium powerhouse with customizable action button and USB-C with USB 3 speeds up to 10Gb/s.",
    "category": "smartphones",
    "brand": "Apple",
    "pricePaise": 12790000,
    "mrpPaise": 13490000,
    "discountPercent": 5,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1890,
    "inStock": true,
    "availableStock": 16,
    "reservedStock": 0,
    "badge": "TITANIUM PRO",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.1\" Super Retina XDR 120Hz"
      },
      {
        "label": "Processor",
        "value": "Apple A17 Pro"
      },
      {
        "label": "Weight",
        "value": "187g Lightweight"
      }
    ],
    "highlights": [
      "Compact 6.1\" Size",
      "Grade 5 Titanium",
      "ProMotion 120Hz",
      "USB 3 Transfer"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_iphone_15",
    "slug": "apple-iphone-15-128gb-black",
    "name": "Apple iPhone 15 (128 GB) - Black",
    "subtitle": "Dynamic Island, 48MP Main Camera, Ceramic Shield, All-Day Battery",
    "description": "Dynamic Island bubbles up alerts and Live Activities. Color-infused glass and aluminum design.",
    "category": "smartphones",
    "brand": "Apple",
    "pricePaise": 6990000,
    "mrpPaise": 7990000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 3400,
    "inStock": true,
    "availableStock": 24,
    "reservedStock": 0,
    "badge": "POPULAR",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.1\" Super Retina XDR"
      },
      {
        "label": "Processor",
        "value": "A16 Bionic"
      },
      {
        "label": "Camera",
        "value": "48MP 2x Telephoto"
      }
    ],
    "highlights": [
      "Dynamic Island",
      "48MP Camera",
      "USB-C Charging",
      "All-Day Battery"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_iphone_15_plus",
    "slug": "apple-iphone-15-plus-256gb-pink",
    "name": "Apple iPhone 15 Plus (256 GB) - Pastel Pink",
    "subtitle": "Huge 6.7\" Display, Dynamic Island, Extreme 26-Hour Battery Life",
    "description": "Enjoy the immersive 6.7-inch display and the longest battery life ever in a standard iPhone.",
    "category": "smartphones",
    "brand": "Apple",
    "pricePaise": 8990000,
    "mrpPaise": 9990000,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1220,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "MASSIVE BATTERY",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.7\" Super Retina XDR"
      },
      {
        "label": "Battery",
        "value": "Up to 26 hours video playback"
      },
      {
        "label": "Port",
        "value": "USB-C universal"
      }
    ],
    "highlights": [
      "26h Battery Life",
      "Large 6.7\" Screen",
      "Dynamic Island",
      "Color-Infused Glass"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_iphone_14",
    "slug": "apple-iphone-14-128gb-midnight",
    "name": "Apple iPhone 14 (128 GB) - Midnight",
    "subtitle": "Super Retina XDR, A15 Bionic 5-Core GPU, Photonic Engine",
    "description": "Dependable, durable, and packed with high-end pro features at an exceptional value.",
    "category": "smartphones",
    "brand": "Apple",
    "pricePaise": 5699000,
    "mrpPaise": 6990000,
    "discountPercent": 18,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 4520,
    "inStock": true,
    "availableStock": 20,
    "reservedStock": 0,
    "badge": "VALUE PICK",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.1\" OLED Display"
      },
      {
        "label": "Processor",
        "value": "A15 Bionic 5-core GPU"
      }
    ],
    "highlights": [
      "Photonic Engine",
      "Action Mode Video",
      "Crash Detection",
      "Ceramic Shield"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_s24_ultra",
    "slug": "samsung-galaxy-s24-ultra-5g-titanium",
    "name": "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 12GB RAM, 256GB)",
    "subtitle": "Galaxy AI Enabled, Built-in S Pen, 200MP Camera, Snapdragon 8 Gen 3",
    "description": "Welcome to the era of mobile AI. Circle to Search, Live Call Translate, and Note Assist transform productivity.",
    "category": "smartphones",
    "brand": "Samsung",
    "pricePaise": 11999900,
    "mrpPaise": 13499900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1820,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "AI FLAGSHIP",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.8\" Dynamic AMOLED 2X 2600 nits"
      },
      {
        "label": "Processor",
        "value": "Snapdragon 8 Gen 3 for Galaxy"
      },
      {
        "label": "Stylus",
        "value": "Embedded S-Pen"
      }
    ],
    "highlights": [
      "Galaxy AI Onboard",
      "200MP Camera",
      "Titanium Frame",
      "Flat 2600-nit Screen"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_s24_plus",
    "slug": "samsung-galaxy-s24-plus-5g-onyx-black",
    "name": "Samsung Galaxy S24+ 5G (Onyx Black, 12GB RAM, 256GB)",
    "subtitle": "QHD+ Display, 4900mAh Battery, Armor Aluminum 2.0, Galaxy AI",
    "description": "The sweet spot flagship with a gorgeous QHD+ 120Hz display and full Galaxy AI suite.",
    "category": "smartphones",
    "brand": "Samsung",
    "pricePaise": 8499900,
    "mrpPaise": 9999900,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 1120,
    "inStock": true,
    "availableStock": 15,
    "reservedStock": 0,
    "badge": "SWEET SPOT",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.7\" QHD+ Dynamic AMOLED 2X"
      },
      {
        "label": "Battery",
        "value": "4900 mAh Fast Charge"
      }
    ],
    "highlights": [
      "QHD+ Screen",
      "12GB RAM Standard",
      "Galaxy AI Suite",
      "Armor Aluminum"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_s24",
    "slug": "samsung-galaxy-s24-5g-amber-yellow",
    "name": "Samsung Galaxy S24 5G (Amber Yellow, 8GB RAM, 128GB)",
    "subtitle": "Compact 6.2\" Form Factor, 2600 nits Peak Brightness, Galaxy AI",
    "description": "Incredible flagship power in a pocket-friendly, lightweight 167g chassis.",
    "category": "smartphones",
    "brand": "Samsung",
    "pricePaise": 6499900,
    "mrpPaise": 7499900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.6,
    "reviewCount": 940,
    "inStock": true,
    "availableStock": 18,
    "reservedStock": 0,
    "badge": "COMPACT POWER",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.2\" FHD+ Dynamic AMOLED 2X"
      },
      {
        "label": "Weight",
        "value": "167 grams lightweight"
      }
    ],
    "highlights": [
      "Compact Size",
      "2600 nits Brightness",
      "7-Year OS Upgrades",
      "Triple Cameras"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_z_fold5",
    "slug": "samsung-galaxy-z-fold-5-phantom-black",
    "name": "Samsung Galaxy Z Fold 5 5G (12GB RAM, 512GB Storage)",
    "subtitle": "7.6\" Dynamic AMOLED 2X Foldable, Flex Hinge, Multi-Window Taskbar",
    "description": "A massive screen in your pocket. Unfold an expansive canvas for multi-app multitasking and cinematic gaming.",
    "category": "smartphones",
    "brand": "Samsung",
    "pricePaise": 14499900,
    "mrpPaise": 16999900,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 830,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "FOLDABLE PRO",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Main Display",
        "value": "7.6\" QXGA+ Dynamic AMOLED 2X 120Hz"
      },
      {
        "label": "Cover Screen",
        "value": "6.2\" Dynamic AMOLED 2X"
      }
    ],
    "highlights": [
      "Zero-Gap Flex Hinge",
      "Taskbar Multitasking",
      "S Pen Fold Edition",
      "IPX8 Water Resistant"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_z_flip5",
    "slug": "samsung-galaxy-z-flip-5-mint",
    "name": "Samsung Galaxy Z Flip 5 5G (8GB RAM, 256GB Storage)",
    "subtitle": "3.4\" Flex Window Outer Screen, Compact Pocketable Foldable, Hands-Free Cam",
    "description": "The ultimate pocketable fashion icon with a large 3.4\" outer Flex Window for widgets and selfies.",
    "category": "smartphones",
    "brand": "Samsung",
    "pricePaise": 7999900,
    "mrpPaise": 9999900,
    "discountPercent": 20,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.6,
    "reviewCount": 1420,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "POCKET CHIC",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Cover Screen",
        "value": "3.4\" Super AMOLED Flex Window"
      },
      {
        "label": "Main Display",
        "value": "6.7\" FHD+ 120Hz Foldable"
      }
    ],
    "highlights": [
      "3.4\" Flex Window",
      "FlexCam Hands-Free",
      "Armor Aluminum Frame",
      "Snapdragon 8 Gen 2"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_s23_fe",
    "slug": "samsung-galaxy-s23-fe-graphite",
    "name": "Samsung Galaxy S23 FE 5G (8GB RAM, 128GB Storage)",
    "subtitle": "Pro-Grade 50MP Camera, Dynamic AMOLED 2X, Nightography, IP68",
    "description": "Flagship camera, vibrant display, and premium metal-and-glass design at an accessible price.",
    "category": "smartphones",
    "brand": "Samsung",
    "pricePaise": 3999900,
    "mrpPaise": 5499900,
    "discountPercent": 27,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.5,
    "reviewCount": 2900,
    "inStock": true,
    "availableStock": 25,
    "reservedStock": 0,
    "badge": "VALUE DEAL",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Camera",
        "value": "50MP with Nightography"
      },
      {
        "label": "Protection",
        "value": "IP68 Water & Dust Resistance"
      }
    ],
    "highlights": [
      "Pro-Grade Camera",
      "Gorilla Glass 5",
      "Dynamic AMOLED 2X",
      "Fast Wireless Charge"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_pixel_9_pro_xl",
    "slug": "google-pixel-9-pro-xl-obsidian",
    "name": "Google Pixel 9 Pro XL 5G (Obsidian Black, 16GB RAM, 256GB)",
    "subtitle": "Google Tensor G4, Gemini Nano Multimodal AI, Super Res Zoom 30x",
    "description": "Engineered by Google, Pixel 9 Pro XL is the most powerful Pixel yet with 16GB RAM for on-device Gemini Live.",
    "category": "smartphones",
    "brand": "Google",
    "pricePaise": 12499900,
    "mrpPaise": 13999900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 960,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "NEW ARRIVAL",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.8\" Super Actua OLED 3000 nits"
      },
      {
        "label": "Processor",
        "value": "Google Tensor G4 + Titan M2"
      },
      {
        "label": "RAM",
        "value": "16 GB LPDDR5X"
      }
    ],
    "highlights": [
      "Tensor G4 Chip",
      "Gemini Nano AI",
      "3000-nit Actua Screen",
      "7 Years OS Updates"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_pixel_9_pro",
    "slug": "google-pixel-9-pro-porcelain",
    "name": "Google Pixel 9 Pro 5G (Porcelain, 16GB RAM, 128GB)",
    "subtitle": "Compact Pro 6.3\" Super Actua Display, Tensor G4, 5x Telephoto",
    "description": "All the pro camera hardware and 16GB RAM of the XL model in a comfortable 6.3-inch hand-friendly profile.",
    "category": "smartphones",
    "brand": "Google",
    "pricePaise": 10999900,
    "mrpPaise": 11999900,
    "discountPercent": 8,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 620,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "PRO COMPACT",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.3\" Super Actua LTPO OLED (1-120Hz)"
      },
      {
        "label": "Camera",
        "value": "Triple 50MP + 48MP + 48MP Pro System"
      }
    ],
    "highlights": [
      "Compact 6.3\" Pro",
      "16GB RAM for AI",
      "48MP 5x Telephoto",
      "Super Actua Display"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_pixel_9",
    "slug": "google-pixel-9-wintergreen",
    "name": "Google Pixel 9 5G (Wintergreen, 12GB RAM, 128GB)",
    "subtitle": "Google Tensor G4, 50MP Dual Rear Camera, Actua OLED 120Hz",
    "description": "Sleek satin glass back with a sculpted camera bar, powered by the flagship Tensor G4 and 12GB RAM.",
    "category": "smartphones",
    "brand": "Google",
    "pricePaise": 7999900,
    "mrpPaise": 8999900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 880,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "FRESH DESIGN",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.3\" Actua Display (60-120Hz)"
      },
      {
        "label": "RAM",
        "value": "12 GB LPDDR5X"
      }
    ],
    "highlights": [
      "Tensor G4 Processor",
      "Best Take & Magic Editor",
      "All-Day 4700mAh Battery",
      "7 Years Pixel Drops"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_pixel_8a",
    "slug": "google-pixel-8a-bay-blue",
    "name": "Google Pixel 8a 5G (Bay Blue, 8GB RAM, 128GB)",
    "subtitle": "Google Tensor G3, Best Take, Audio Magic Eraser, 120Hz Actua Display",
    "description": "Flagship AI smarts and Google computational camera mastery at unbeatable everyday value.",
    "category": "smartphones",
    "brand": "Google",
    "pricePaise": 4699900,
    "mrpPaise": 5299900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.6,
    "reviewCount": 2100,
    "inStock": true,
    "availableStock": 22,
    "reservedStock": 0,
    "badge": "BEST BUDGET AI",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "6.1\" Actua 120Hz OLED"
      },
      {
        "label": "Processor",
        "value": "Google Tensor G3"
      }
    ],
    "highlights": [
      "120Hz Actua Display",
      "Audio Magic Eraser",
      "Circle to Search",
      "IP67 Durability"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_pixel_8_pro",
    "slug": "google-pixel-8-pro-hazel",
    "name": "Google Pixel 8 Pro 5G (Hazel, 12GB RAM, 128GB)",
    "subtitle": "Google Tensor G3, Pro Camera Controls, Temperature Sensor, Super Actua",
    "description": "The acclaimed 2023 Google flagship with manual camera shutter controls and built-in infrared thermometer.",
    "category": "smartphones",
    "brand": "Google",
    "pricePaise": 7699900,
    "mrpPaise": 10699900,
    "discountPercent": 28,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 3200,
    "inStock": true,
    "availableStock": 15,
    "reservedStock": 0,
    "badge": "HUGE SAVINGS",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Sensor",
        "value": "Object Temperature Sensor"
      },
      {
        "label": "Display",
        "value": "6.7\" LTPO OLED 2400 nits"
      }
    ],
    "highlights": [
      "Pro Manual Controls",
      "28% Discount",
      "Temperature Sensor",
      "Night Sight Video"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_oneplus_12",
    "slug": "oneplus-12-5g-flowy-emerald",
    "name": "OnePlus 12 5G (Flowy Emerald, 16GB RAM, 512GB Storage)",
    "subtitle": "Snapdragon 8 Gen 3, 4th Gen Hasselblad Camera, 100W SUPERVOOC Charge",
    "description": "An elite flagship redefining fast and smooth. Powered by Snapdragon 8 Gen 3 with 2K 120Hz ProXDR screen.",
    "category": "smartphones",
    "brand": "OnePlus",
    "pricePaise": 6999900,
    "mrpPaise": 7999900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1511707171634-5f897ff02596?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02596?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 3120,
    "inStock": true,
    "availableStock": 18,
    "reservedStock": 0,
    "badge": "VALUE FLAGSHIP",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Charging",
        "value": "100W Wired + 50W Wireless AIRVOOC"
      },
      {
        "label": "Battery",
        "value": "5400 mAh Dual-Cell"
      }
    ],
    "highlights": [
      "100W Fast Charging",
      "Hasselblad 4th Gen",
      "5400mAh Battery",
      "2K ProXDR Screen"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_oneplus_12r",
    "slug": "oneplus-12r-5g-cool-blue",
    "name": "OnePlus 12R 5G (Cool Blue, 16GB RAM, 256GB Storage)",
    "subtitle": "Snapdragon 8 Gen 2, 4th Gen LTPO 120Hz, 5500 mAh Monster Battery",
    "description": "The ultimate performance flagship killer. Biggest battery ever in a OnePlus phone paired with 100W charging.",
    "category": "smartphones",
    "brand": "OnePlus",
    "pricePaise": 4299900,
    "mrpPaise": 4599900,
    "discountPercent": 7,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1511707171634-5f897ff02596?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02596?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 4800,
    "inStock": true,
    "availableStock": 28,
    "reservedStock": 0,
    "badge": "FLAGSHIP KILLER",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Battery",
        "value": "5500 mAh (Biggest ever)"
      },
      {
        "label": "Display",
        "value": "1.5K 120Hz 4th Gen LTPO"
      }
    ],
    "highlights": [
      "5500mAh Huge Battery",
      "100W SUPERVOOC",
      "Snapdragon 8 Gen 2",
      "Aqua Touch Display"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_oneplus_open",
    "slug": "oneplus-open-voyager-black",
    "name": "OnePlus Open Foldable (Voyager Black, 16GB RAM, 512GB)",
    "subtitle": "Lightweight 239g Foldable, Dual 2K 120Hz Displays, Hasselblad Triple Cam",
    "description": "Ultra-thin titanium and carbon fiber construction with virtually invisible crease and Open Canvas multi-tasking.",
    "category": "smartphones",
    "brand": "OnePlus",
    "pricePaise": 13999900,
    "mrpPaise": 14999900,
    "discountPercent": 7,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 640,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "CREASELESS FOLD",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Weight",
        "value": "239g (Lighter than iPhone Pro Max)"
      },
      {
        "label": "Main Screen",
        "value": "7.82\" 2K Flexi-fluid AMOLED"
      }
    ],
    "highlights": [
      "Open Canvas Multitasking",
      "Virtually No Crease",
      "Dual 2K 120Hz Displays",
      "Hasselblad Optics"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_nothing_phone_2",
    "slug": "nothing-phone-2-glyph-dark-grey",
    "name": "Nothing Phone (2) 5G (Dark Grey, 12GB RAM, 256GB Storage)",
    "subtitle": "Glyph Interface 2.0, Nothing OS 2.5, 50MP Dual Rear Camera, LTPO OLED",
    "description": "Iconic transparent hardware design paired with the revolutionary Glyph Interface.",
    "category": "smartphones",
    "brand": "Nothing",
    "pricePaise": 3799900,
    "mrpPaise": 4999900,
    "discountPercent": 24,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.6,
    "reviewCount": 1420,
    "inStock": true,
    "availableStock": 9,
    "reservedStock": 0,
    "badge": "ICONIC DESIGN",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Interface",
        "value": "Glyph Interface with 33 LED zones"
      },
      {
        "label": "Chipset",
        "value": "Snapdragon 8+ Gen 1 4nm"
      }
    ],
    "highlights": [
      "Transparent Design",
      "Glyph Interface 2.0",
      "Clean Nothing OS",
      "LTPO 120Hz"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_nothing_phone_2a",
    "slug": "nothing-phone-2a-white",
    "name": "Nothing Phone (2a) 5G (Special White, 8GB RAM, 128GB)",
    "subtitle": "Custom Dimensity 7200 Pro, 50MP OIS Dual Cam, Transparent Coil Design",
    "description": "Delivering core smartphone excellence with playful aesthetics, vibrant symmetrical bezels, and 120Hz AMOLED.",
    "category": "smartphones",
    "brand": "Nothing",
    "pricePaise": 2399900,
    "mrpPaise": 2599900,
    "discountPercent": 8,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.6,
    "reviewCount": 3200,
    "inStock": true,
    "availableStock": 20,
    "reservedStock": 0,
    "badge": "BUDGET ICON",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Chipset",
        "value": "Custom MediaTek Dimensity 7200 Pro"
      },
      {
        "label": "Screen",
        "value": "6.7\" Flexible AMOLED 120Hz"
      }
    ],
    "highlights": [
      "Symmetrical Bezels",
      "Nothing OS 2.5",
      "Glyph Essential Lighting",
      "50MP Dual OIS"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_xiaomi_14_ultra",
    "slug": "xiaomi-14-ultra-5g-black-leica",
    "name": "Xiaomi 14 Ultra 5G (Black, 16GB RAM, 512GB, Leica Quad Cam)",
    "subtitle": "1-inch LYT-900 Sensor, Stepless Variable Aperture, WQHD+ 120Hz AMOLED",
    "description": "A true optical powerhouse developed with Leica. Four 50MP sensors covering focal lengths from 12mm to 240mm.",
    "category": "smartphones",
    "brand": "Xiaomi",
    "pricePaise": 9999900,
    "mrpPaise": 11999900,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 510,
    "inStock": true,
    "availableStock": 7,
    "reservedStock": 0,
    "badge": "LEICA OPTICS",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Sensor",
        "value": "1-inch Sony LYT-900 Stepless Aperture"
      },
      {
        "label": "Audio",
        "value": "Dolby Atmos Stereo Speakers"
      }
    ],
    "highlights": [
      "1-inch Leica Sensor",
      "Quad 50MP Focal Range",
      "Snapdragon 8 Gen 3",
      "Shield Glass Protection"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_macbook_pro_16_m3_max",
    "slug": "apple-macbook-pro-16-m3-max-space-black",
    "name": "Apple MacBook Pro 16\" (M3 Max, 16-Core CPU, 40-Core GPU, 36GB RAM, 1TB SSD) - Space Black",
    "subtitle": "Liquid Retina XDR, Extreme Dynamic Range, 22-Hour Battery, Hardware Ray Tracing",
    "description": "The ultimate professional laptop for 8K ProRes video editing, 3D simulation, and machine learning.",
    "category": "laptops",
    "brand": "Apple",
    "pricePaise": 34990000,
    "mrpPaise": 39990000,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 890,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "CREATOR TITAN",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Processor",
        "value": "Apple M3 Max 16-Core CPU"
      },
      {
        "label": "Memory",
        "value": "36GB Unified 300GB/s"
      },
      {
        "label": "Display",
        "value": "16.2\" Liquid Retina XDR 120Hz"
      }
    ],
    "highlights": [
      "M3 Max 40-Core GPU",
      "16.2\" Liquid XDR",
      "Space Black Seal",
      "22-Hour Battery"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_macbook_pro_14_m3_pro",
    "slug": "apple-macbook-pro-14-m3-pro-space-black",
    "name": "Apple MacBook Pro 14\" (M3 Pro, 11-Core CPU, 14-Core GPU, 18GB RAM, 512GB SSD)",
    "subtitle": "ProMotion 120Hz, HDMI 2.1, SDXC Slot, Studio-Quality 3-Mic Array",
    "description": "Pro capability in a compact form factor. Flies through heavy code compilation and Photoshop suites.",
    "category": "laptops",
    "brand": "Apple",
    "pricePaise": 19990000,
    "mrpPaise": 21990000,
    "discountPercent": 9,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 1420,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "PRO COMPACT",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Chip",
        "value": "Apple M3 Pro"
      },
      {
        "label": "Display",
        "value": "14.2\" Liquid Retina XDR"
      },
      {
        "label": "Ports",
        "value": "3x Thunderbolt 4, HDMI, SDXC"
      }
    ],
    "highlights": [
      "18GB Unified RAM",
      "Liquid Retina XDR",
      "18hr Battery",
      "HDMI & SD Slot"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_macbook_air_15_m3",
    "slug": "apple-macbook-air-15-m3-chip-midnight",
    "name": "Apple 2024 MacBook Air 15\" Laptop with M3 chip (16GB RAM, 512GB SSD) - Midnight",
    "subtitle": "Liquid Retina Display, 1080p FaceTime HD Camera, 18hr Battery, Fanless Silence",
    "description": "Lean, mean M3 machine. Silent fanless design with up to 18 hours of battery life.",
    "category": "laptops",
    "brand": "Apple",
    "pricePaise": 13490000,
    "mrpPaise": 15490000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 1240,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "TOP SELLER",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Processor",
        "value": "Apple M3 (8-core CPU, 10-core GPU)"
      },
      {
        "label": "Memory",
        "value": "16GB Unified RAM"
      },
      {
        "label": "Weight",
        "value": "1.51 kg Ultra-Thin"
      }
    ],
    "highlights": [
      "Apple Silicon M3",
      "15.3\" Liquid Retina",
      "Silent Fanless Design",
      "18hr Battery"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_macbook_air_13_m3",
    "slug": "apple-macbook-air-13-m3-space-gray",
    "name": "Apple 2024 MacBook Air 13\" Laptop with M3 chip (16GB RAM, 256GB SSD) - Space Gray",
    "subtitle": "Superportable 1.24 kg, Dual External Display Support, MagSafe 3",
    "description": "The worlds most popular laptop, now faster with M3, faster Wi-Fi 6E, and support for up to two external displays.",
    "category": "laptops",
    "brand": "Apple",
    "pricePaise": 11490000,
    "mrpPaise": 12490000,
    "discountPercent": 8,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 2100,
    "inStock": true,
    "availableStock": 15,
    "reservedStock": 0,
    "badge": "STUDENT & PRO",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Weight",
        "value": "1.24 kg Featherweight"
      },
      {
        "label": "Display",
        "value": "13.6\" Liquid Retina True Tone"
      }
    ],
    "highlights": [
      "Dual External Monitors",
      "MagSafe Charging",
      "Fanless Silent",
      "18hr Battery"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_macbook_pro_14_m3",
    "slug": "apple-macbook-pro-14-m3-silver",
    "name": "Apple MacBook Pro 14\" (M3 Base, 8-Core CPU, 10-Core GPU, 16GB RAM, 512GB SSD) - Silver",
    "subtitle": "Liquid Retina XDR, Full Port Selection, Active Cooling for Sustained Pro Workloads",
    "description": "Brings pro cooling architecture, HDMI, and stunning XDR brightness to the base M3 chip.",
    "category": "laptops",
    "brand": "Apple",
    "pricePaise": 16990000,
    "mrpPaise": 18990000,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 760,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "BALANCED PRO",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "14.2\" XDR 1000 nits sustained"
      },
      {
        "label": "Thermal",
        "value": "Active Fan Heat Pipe Cooling"
      }
    ],
    "highlights": [
      "Active Pro Cooling",
      "Liquid Retina XDR",
      "MagSafe & HDMI",
      "22hr Battery"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dell_xps_16",
    "slug": "dell-xps-16-oled-intel-core-ultra-9-rtx-4070",
    "name": "Dell XPS 16 9640 (Intel Core Ultra 9, RTX 4070 8GB, 32GB RAM, 1TB SSD, 4K+ OLED Touch)",
    "subtitle": "CNC Machined Aluminum, Seamless Glass Haptic Touchpad, Gorilla Glass Victus",
    "description": "A masterwork of industrial design. Powered by the Intel Core Ultra 9 185H with integrated NPU AI engine.",
    "category": "laptops",
    "brand": "Dell",
    "pricePaise": 29999000,
    "mrpPaise": 34999000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 420,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "LUXURY WORKSTATION",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "CPU",
        "value": "Intel Core Ultra 9 185H (16 Cores)"
      },
      {
        "label": "GPU",
        "value": "NVIDIA RTX 4070 8GB GDDR6"
      },
      {
        "label": "Display",
        "value": "16.3\" 4K+ OLED Touch 100% DCI-P3"
      }
    ],
    "highlights": [
      "4K+ OLED Touch",
      "Intel Ultra 9 + RTX 4070",
      "Seamless Glass Touchpad",
      "Dolby Atmos Audio"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dell_xps_14",
    "slug": "dell-xps-14-oled-intel-core-ultra-7-rtx-4050",
    "name": "Dell XPS 14 (Intel Core Ultra 7 155H, RTX 4050, 32GB RAM, 1TB SSD, 3.2K OLED)",
    "subtitle": "Capacitive Touch Function Row, Zero-Lattice Keyboard, Micro-Border InfinityEdge",
    "description": "Compact powerhouse with dedicated NVIDIA graphics and high-resolution 3.2K 120Hz OLED touch panel.",
    "category": "laptops",
    "brand": "Dell",
    "pricePaise": 23999000,
    "mrpPaise": 26999000,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 340,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "SLEEK COMPACT",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Display",
        "value": "14.5\" 3.2K 120Hz OLED Touch"
      },
      {
        "label": "GPU",
        "value": "NVIDIA GeForce RTX 4050 6GB"
      }
    ],
    "highlights": [
      "3.2K 120Hz OLED",
      "CNC Aluminum Unibody",
      "Intel AI Boost NPU",
      "Haptic Trackpad"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dell_xps_13",
    "slug": "dell-xps-13-plus-intel-core-ultra-7-platinum",
    "name": "Dell XPS 13 (Intel Core Ultra 7 155H, 16GB RAM, 512GB SSD, FHD+ 120Hz, Platinum)",
    "subtitle": "Minimalist 1.19 kg Ultrabook, Edge-to-Edge Glass Interior, Quad Stereo Speakers",
    "description": "The purest expression of ultraportable computing with zero wasted space and extreme battery efficiency.",
    "category": "laptops",
    "brand": "Dell",
    "pricePaise": 14999000,
    "mrpPaise": 16999000,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 610,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "MINIMALIST ICON",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Weight",
        "value": "1.19 kg Featherlight"
      },
      {
        "label": "Screen",
        "value": "13.4\" FHD+ 120Hz 500 nits"
      }
    ],
    "highlights": [
      "1.19kg Ultralight",
      "Invisible Haptic Trackpad",
      "Intel Core Ultra 7",
      "Thunderbolt 4 x2"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dell_alienware_m16_r2",
    "slug": "alienware-m16-r2-gaming-laptop-rtx4070",
    "name": "Dell Alienware m16 R2 Gaming Laptop (Core Ultra 7, RTX 4070, 32GB, 1TB, 240Hz QHD+)",
    "subtitle": "Cryo-tech Thermal Cooling, Stealth Mode Key, AlienFX Per-Key RGB, Anodized Dark Metallic",
    "description": "Redesigned for versatile performance. Switch from stealth workstation mode to full 140W gaming fury.",
    "category": "laptops",
    "brand": "Dell",
    "pricePaise": 18999000,
    "mrpPaise": 21999000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 520,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "STEALTH GAMING",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "GPU",
        "value": "NVIDIA RTX 4070 8GB GDDR6 (140W)"
      },
      {
        "label": "Display",
        "value": "16\" QHD+ 240Hz 3ms G-SYNC"
      }
    ],
    "highlights": [
      "Cryo-tech Cooling",
      "Stealth Mode Toggle",
      "240Hz QHD+ Panel",
      "AlienFX RGB Lighting"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dell_latitude_9440",
    "slug": "dell-latitude-9440-2in1-business-laptop",
    "name": "Dell Latitude 9440 2-in-1 (Intel Core i7-1365U, 32GB RAM, 1TB SSD, QHD+ Touch)",
    "subtitle": "Collaboration Touchpad with Zoom Controls, CNC Aluminum, 360-degree Convertible",
    "description": "The ultimate business executive 2-in-1 with haptic meeting controls embedded into the touchpad glass.",
    "category": "laptops",
    "brand": "Dell",
    "pricePaise": 22499000,
    "mrpPaise": 25999000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 290,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "EXECUTIVE 2-IN-1",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Form",
        "value": "360° Convertible Touch Laptop"
      },
      {
        "label": "Touchpad",
        "value": "Haptic Zoom Collaboration Touchpad"
      }
    ],
    "highlights": [
      "Collaboration Touchpad",
      "Zero-Lattice Keyboard",
      "QHD+ IPS Touch",
      "Enterprise vPro"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_lenovo_x1_carbon_g12",
    "slug": "lenovo-thinkpad-x1-carbon-gen-12-core-ultra-7",
    "name": "Lenovo ThinkPad X1 Carbon Gen 12 (Core Ultra 7 155H, 32GB RAM, 1TB SSD, 2.8K OLED)",
    "subtitle": "Legendary Carbon Fiber Shell, 1.09 kg Ultra-Featherweight, Military Spec MIL-STD-810H",
    "description": "The executive benchmark for enterprise computing. Ultralight carbon fiber construction weighing 1.09 kg.",
    "category": "laptops",
    "brand": "Lenovo",
    "pricePaise": 21990000,
    "mrpPaise": 25990000,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 610,
    "inStock": true,
    "availableStock": 7,
    "reservedStock": 0,
    "badge": "BUSINESS BENCHMARK",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Weight",
        "value": "1.09 kg (2.42 lbs) Carbon Fiber"
      },
      {
        "label": "Display",
        "value": "14\" 2.8K 120Hz OLED 100% DCI-P3"
      }
    ],
    "highlights": [
      "1.09kg Carbon Fiber",
      "2.8K 120Hz OLED",
      "Legendary Ergonomic Keyboard",
      "All-Day Enterprise Battery"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_lenovo_legion_pro_7i",
    "slug": "lenovo-legion-pro-7i-gen-9-rtx-4090",
    "name": "Lenovo Legion Pro 7i Gen 9 (Intel Core i9-14900HX, RTX 4090 16GB, 32GB RAM, 2TB SSD)",
    "subtitle": "Coldfront Vapor Chamber Cooling, 16\" 240Hz WQXGA PureSight Display, 175W Max TGP",
    "description": "Unchecked desktop replacement performance. NVIDIA RTX 4090 with 16GB VRAM delivers ultra-high frame rates.",
    "category": "laptops",
    "brand": "Lenovo",
    "pricePaise": 31999000,
    "mrpPaise": 36999000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 390,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "RTX 4090 BEAST",
    "isDealOfTheDay": true,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "GPU",
        "value": "NVIDIA RTX 4090 16GB GDDR6 (175W TGP)"
      },
      {
        "label": "CPU",
        "value": "Intel Core i9-14900HX 24-Core"
      }
    ],
    "highlights": [
      "RTX 4090 16GB VRAM",
      "Coldfront Vapor Chamber",
      "240Hz PureSight Panel",
      "2TB Gen4 Storage"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_lenovo_yoga_9i",
    "slug": "lenovo-yoga-9i-dual-oled-2in1",
    "name": "Lenovo Yoga Book 9i Dual Screen 2-in-1 (Dual 13.3\" 2.8K OLED, Core Ultra 7, 16GB, 1TB)",
    "subtitle": "World-First Full Dual PureSight OLED Screens, Bowers & Wilkins Soundbar, Folio Stand",
    "description": "Revolutionary productivity machine with two full-size OLED displays that can stack vertically or horizontally.",
    "category": "laptops",
    "brand": "Lenovo",
    "pricePaise": 19999000,
    "mrpPaise": 23999000,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 310,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "DUAL OLED",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Screens",
        "value": "Dual 13.3\" 2.8K (2880x1800) OLED Touch"
      },
      {
        "label": "Audio",
        "value": "Rotating Bowers & Wilkins Soundbar"
      }
    ],
    "highlights": [
      "Dual Full OLED Displays",
      "Vertical Stack Mode",
      "B&W Soundbar Hinge",
      "Bluetooth Keyboard Included"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_lenovo_thinkpad_t14s",
    "slug": "lenovo-thinkpad-t14s-gen-5-snapdragon-x-elite",
    "name": "Lenovo ThinkPad T14s Gen 5 (Snapdragon X Elite 12-Core, 32GB RAM, 1TB SSD, 45 TOPS NPU)",
    "subtitle": "Copilot+ PC, Multi-Day 28-Hour Battery Life, 1.24 kg Magnesium Top, Wi-Fi 7",
    "description": "Next-generation ARM Windows architecture. Lightning-fast responsiveness with multi-day silent battery endurance.",
    "category": "laptops",
    "brand": "Lenovo",
    "pricePaise": 17499000,
    "mrpPaise": 19499000,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 430,
    "inStock": true,
    "availableStock": 9,
    "reservedStock": 0,
    "badge": "COPILOT+ PC",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Processor",
        "value": "Qualcomm Snapdragon X Elite (12 Cores)"
      },
      {
        "label": "NPU",
        "value": "Qualcomm Hexagon 45 TOPS"
      }
    ],
    "highlights": [
      "28h Multi-Day Battery",
      "Snapdragon X Elite",
      "45 TOPS AI NPU",
      "ThinkPad Spill-Proof Keys"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_asus_rog_g16",
    "slug": "asus-rog-strix-g16-gaming-laptop-rtx4070",
    "name": "ASUS ROG Strix G16 Gaming Laptop (Intel Core i9-14900HX, RTX 4070 8GB, 32GB RAM, 1TB SSD)",
    "subtitle": "ROG Nebula 240Hz 2.5K 16:10 QHD Display, Tri-Fan Cooling with Conductonaut Extreme",
    "description": "Dominate esports with Intel Core i9-14900HX and an NVIDIA RTX 4070 running at 140W max TGP.",
    "category": "laptops",
    "brand": "ASUS",
    "pricePaise": 18499000,
    "mrpPaise": 21999000,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 780,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "ESPORTS BEAST",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "CPU",
        "value": "Intel Core i9-14900HX 24 cores"
      },
      {
        "label": "GPU",
        "value": "NVIDIA RTX 4070 8GB GDDR6 (140W TGP)"
      }
    ],
    "highlights": [
      "Intel Core i9-14900HX",
      "RTX 4070 140W",
      "240Hz QHD+ ROG Nebula",
      "Per-Key RGB Keyboard"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_asus_zephyrus_g14",
    "slug": "asus-rog-zephyrus-g14-oled-rtx4070-white",
    "name": "ASUS ROG Zephyrus G14 (AMD Ryzen 9 8945HS, RTX 4070, 32GB, 1TB, 3K 120Hz OLED, White)",
    "subtitle": "Slash Lighting CNC Aluminum Chassis, 1.5 kg Ultra-Sleek, G-SYNC ROG Nebula OLED",
    "description": "The gold standard in compact gaming laptops. CNC machined aluminum body with razor-sharp 3K 120Hz OLED.",
    "category": "laptops",
    "brand": "ASUS",
    "pricePaise": 19999000,
    "mrpPaise": 22999000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 910,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "PORTABLE POWER",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "14\" 3K (2880x1800) 120Hz 0.2ms OLED"
      },
      {
        "label": "Weight",
        "value": "1.50 kg Ultra-Sleek Profile"
      }
    ],
    "highlights": [
      "3K 120Hz OLED Display",
      "Slash Lighting Lid",
      "AMD Ryzen 9 8945HS",
      "100W USB-C PD Charging"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_asus_zephyrus_g16",
    "slug": "asus-rog-zephyrus-g16-intel-core-ultra-9-rtx4080",
    "name": "ASUS ROG Zephyrus G16 (Intel Core Ultra 9, RTX 4080 12GB, 32GB, 2TB, 2.5K 240Hz OLED)",
    "subtitle": "Vapor Chamber Thermal System, 6-Speaker Sound System, 1.85 kg CNC Unibody",
    "description": "Packs an NVIDIA RTX 4080 12GB into a svelte 1.85 kg chassis with lightning-quick 240Hz OLED visuals.",
    "category": "laptops",
    "brand": "ASUS",
    "pricePaise": 27999000,
    "mrpPaise": 31999000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 440,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "RTX 4080 THIN",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "GPU",
        "value": "NVIDIA GeForce RTX 4080 12GB GDDR6"
      },
      {
        "label": "Display",
        "value": "16\" 2.5K 240Hz OLED 0.2ms G-SYNC"
      }
    ],
    "highlights": [
      "RTX 4080 12GB VRAM",
      "240Hz 0.2ms OLED",
      "Vapor Chamber Cooling",
      "1.85kg Featherlight"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_asus_zenbook_14_oled",
    "slug": "asus-zenbook-14-oled-intel-core-ultra-7",
    "name": "ASUS Zenbook 14 OLED (Intel Core Ultra 7 155H, 16GB RAM, 1TB SSD, 3K 120Hz OLED Touch)",
    "subtitle": "1.2 kg All-Metal Chassis, 75Wh High-Capacity Battery, Harman Kardon Audio",
    "description": "Ultra-portable productivity master with eye-popping 3K 120Hz OLED display and 15+ hour real-world battery.",
    "category": "laptops",
    "brand": "ASUS",
    "pricePaise": 11499000,
    "mrpPaise": 12999000,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1150,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "OLED VALUE",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "14\" 3K 120Hz ASUS Lumina OLED Touch"
      },
      {
        "label": "Battery",
        "value": "75Wh (Up to 15 hours)"
      }
    ],
    "highlights": [
      "3K 120Hz Lumina OLED",
      "1.2kg Lightweight Metal",
      "75Wh Big Battery",
      "FHD IR Webcam"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_hp_spectre_x360_16",
    "slug": "hp-spectre-x360-16-oled-core-ultra-7",
    "name": "HP Spectre x360 16\" 2-in-1 (Intel Core Ultra 7 155H, RTX 4050, 32GB, 2TB, 2.8K OLED Touch)",
    "subtitle": "9MP AI Wide-Vision Webcam, Gem-Cut Aluminum Corners, HP Rechargeable Tilt Pen",
    "description": "The pinnacle of large-screen convertible laptops. Stun with a 16-inch 2.8K OLED screen and studio audio.",
    "category": "laptops",
    "brand": "HP",
    "pricePaise": 19499000,
    "mrpPaise": 22999000,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 360,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "PREMIUM CONVERTIBLE",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Camera",
        "value": "9MP IR AI Smart Webcam with Auto-Framing"
      },
      {
        "label": "Screen",
        "value": "16\" 2.8K OLED 120Hz Touch"
      }
    ],
    "highlights": [
      "9MP Studio Webcam",
      "RTX 4050 Graphics",
      "Tilt Pen Included",
      "Gem-Cut Aluminum"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_hp_omen_transcend_14",
    "slug": "hp-omen-transcend-14-gaming-laptop",
    "name": "HP OMEN Transcend 14 (Intel Core Ultra 9 185H, RTX 4070, 32GB, 1TB, 2.8K 120Hz OLED)",
    "subtitle": "World’s Lightest 14\" Gaming Laptop (1.63 kg), HyperX Wireless Audio Audio Embedded",
    "description": "Created for hybrid gaming and content creators. Built-in HyperX low-latency wireless audio dongle inside.",
    "category": "laptops",
    "brand": "HP",
    "pricePaise": 17499000,
    "mrpPaise": 19999000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 480,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "FEATHERWEIGHT GAMER",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Weight",
        "value": "1.63 kg Compact Metal Chassis"
      },
      {
        "label": "Audio",
        "value": "Embedded HyperX 2.4GHz Wireless Audio"
      }
    ],
    "highlights": [
      "2.8K 120Hz OLED",
      "Embedded HyperX Audio",
      "Intel Core Ultra 9",
      "140W USB-C Fast Charge"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_razer_blade_16",
    "slug": "razer-blade-16-dual-mode-miniled-rtx4090",
    "name": "Razer Blade 16 (Intel Core i9-14900HX, RTX 4090 16GB, 64GB RAM, 4TB SSD, Dual-Mode Mini-LED)",
    "subtitle": "World-First Dual-Mode Display (UHD+ 120Hz Creator / FHD+ 240Hz Gamer), T6 CNC Aluminum",
    "description": "Zero-compromise desktop replacement in an immaculate anodized black CNC unibody with vapor chamber.",
    "category": "laptops",
    "brand": "Razer",
    "pricePaise": 42999000,
    "mrpPaise": 48999000,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 180,
    "inStock": true,
    "availableStock": 3,
    "reservedStock": 0,
    "badge": "APEX LAPTOP",
    "isDealOfTheDay": true,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Display",
        "value": "Dual-Mode Mini-LED (4K 120Hz / FHD 240Hz)"
      },
      {
        "label": "GPU",
        "value": "NVIDIA GeForce RTX 4090 16GB (175W)"
      }
    ],
    "highlights": [
      "Dual-Mode Mini-LED",
      "RTX 4090 16GB VRAM",
      "64GB High-Speed RAM",
      "Vapor Chamber Cooling"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_lenovo_legion_go",
    "slug": "lenovo-legion-pro-5i-rtx4060",
    "name": "Lenovo Legion Pro 5i (Intel Core i7-14700HX, RTX 4060 8GB, 16GB RAM, 1TB SSD, 240Hz WQXGA)",
    "subtitle": "Legion Coldfront 5.0, AI Engine+ Tuning, 100% sRGB 500-nit PureSight Gaming Screen",
    "description": "The definitive esports value benchmark. Delivers rock-solid 140W RTX 4060 gaming with pristine thermals.",
    "category": "laptops",
    "brand": "Lenovo",
    "pricePaise": 14299000,
    "mrpPaise": 16499000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1450,
    "inStock": true,
    "availableStock": 16,
    "reservedStock": 0,
    "badge": "ESPORTS VALUE",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "CPU",
        "value": "Intel Core i7-14700HX (20 cores, 28 threads)"
      },
      {
        "label": "GPU",
        "value": "NVIDIA RTX 4060 8GB GDDR6 (140W)"
      }
    ],
    "highlights": [
      "Intel i7-14700HX 20-Core",
      "RTX 4060 140W TGP",
      "240Hz 500-nit WQXGA",
      "Legion Coldfront 5.0"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sony_wh1000xm5",
    "slug": "sony-wh-1000xm5-wireless-anc-headphones",
    "name": "Sony WH-1000XM5 Wireless Industry-Leading Noise Cancelling Headphones",
    "subtitle": "Auto NC Optimizer, 30-Hour Battery, Crystal Clear Hands-Free Calling, LDAC Hi-Res",
    "description": "Two processors and eight microphones for unprecedented noise cancellation and pristine call quality.",
    "category": "audio",
    "brand": "Sony",
    "pricePaise": 2899000,
    "mrpPaise": 3499000,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 3890,
    "inStock": true,
    "availableStock": 25,
    "reservedStock": 0,
    "badge": "INDUSTRY LEADER",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Driver",
        "value": "30mm Carbon Fiber Composite"
      },
      {
        "label": "Battery",
        "value": "30 hours (ANC ON)"
      }
    ],
    "highlights": [
      "Industry-Leading ANC",
      "30-Hour Battery",
      "Hi-Res Audio Wireless",
      "Multipoint Bluetooth"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sony_wf1000xm5",
    "slug": "sony-wf-1000xm5-true-wireless-earbuds",
    "name": "Sony WF-1000XM5 True Wireless Noise Cancelling Earbuds (Black)",
    "subtitle": "Dynamic Driver X, Integrated Processor V2, Bone Conduction Sensor, IPX4",
    "description": "Astonishing sound quality and the best noise canceling in a true wireless earbud. Crystal-clear calls.",
    "category": "audio",
    "brand": "Sony",
    "pricePaise": 2199000,
    "mrpPaise": 2999000,
    "discountPercent": 27,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 2410,
    "inStock": true,
    "availableStock": 20,
    "reservedStock": 0,
    "badge": "BEST ANC BUDS",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Driver",
        "value": "8.4mm Dynamic Driver X"
      },
      {
        "label": "Battery",
        "value": "8h buds + 16h case (24h total)"
      }
    ],
    "highlights": [
      "Bone Conduction Calling",
      "LDAC & Hi-Res Wireless",
      "Dynamic Driver X",
      "Multipoint Connection"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sony_wh1000xm4",
    "slug": "sony-wh-1000xm4-wireless-noise-cancelling-headphones",
    "name": "Sony WH-1000XM4 Wireless Overhead ANC Headphones (Foldable Silver)",
    "subtitle": "HD Noise Cancelling Processor QN1, Speak-to-Chat, Foldable Travel Design",
    "description": "The legendary comfortable travel classic with swivel-and-fold hinges and plush pressure-relieving cushions.",
    "category": "audio",
    "brand": "Sony",
    "pricePaise": 1999000,
    "mrpPaise": 2999000,
    "discountPercent": 33,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 8520,
    "inStock": true,
    "availableStock": 30,
    "reservedStock": 0,
    "badge": "BEST VALUE ANC",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Design",
        "value": "Foldable Swivel Headband with Hard Case"
      },
      {
        "label": "Battery",
        "value": "30 Hours Quick Charge"
      }
    ],
    "highlights": [
      "Swivel Foldable Design",
      "33% Massive Discount",
      "Speak-to-Chat Tech",
      "Dual Device Multipoint"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_airpods_max_usbc",
    "slug": "apple-airpods-max-usbc-midnight",
    "name": "Apple AirPods Max (USB-C, Active Noise Cancellation, Personalized Spatial Audio) - Midnight",
    "subtitle": "Custom Dynamic Driver, Computational Audio, Stainless Steel Frame, Breathable Knit Mesh",
    "description": "The ultimate over-ear listening experience. An Apple-designed custom dynamic driver provides immersive fidelity.",
    "category": "audio",
    "brand": "Apple",
    "pricePaise": 5490000,
    "mrpPaise": 5990000,
    "discountPercent": 8,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 1650,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "SPATIAL AUDIO",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Port",
        "value": "USB-C Lossless Audio & Charge"
      },
      {
        "label": "Frame",
        "value": "Stainless Steel with Knit Mesh Canopy"
      }
    ],
    "highlights": [
      "USB-C Charging",
      "Lossless Spatial Audio",
      "Anodized Aluminum Cups",
      "Crown Control"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_airpods_pro_2",
    "slug": "apple-airpods-pro-2nd-gen-usbc",
    "name": "Apple AirPods Pro (2nd Generation with MagSafe Case USB-C)",
    "subtitle": "Up to 2x More Active Noise Cancellation, Adaptive Audio, Conversation Awareness",
    "description": "Powered by the Apple H2 chip. Pushes audio performance even further with custom amplifier and low-distortion driver.",
    "category": "audio",
    "brand": "Apple",
    "pricePaise": 2190000,
    "mrpPaise": 2490000,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 6200,
    "inStock": true,
    "availableStock": 35,
    "reservedStock": 0,
    "badge": "TOP TWS PICK",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Chip",
        "value": "Apple H2 Headphone Chip"
      },
      {
        "label": "Durability",
        "value": "IP54 Dust & Sweat Resistant"
      }
    ],
    "highlights": [
      "2x Active Noise Cancel",
      "Adaptive Audio Mode",
      "Precision Finding Case",
      "Touch Volume Swipe"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_bose_qc_ultra_earbuds",
    "slug": "bose-quietcomfort-ultra-wireless-noise-cancelling-earbuds",
    "name": "Bose QuietComfort Ultra Wireless Earbuds with Immersive Spatial Audio",
    "subtitle": "CustomTune Sound Calibration, World-Class ANC, Ultra-Comfort Silicone Fit Kit",
    "description": "Breakthrough spatialized audio makes your music feel more real than ever with CustomTune calibration.",
    "category": "audio",
    "brand": "Bose",
    "pricePaise": 2399900,
    "mrpPaise": 2990000,
    "discountPercent": 20,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 1540,
    "inStock": true,
    "availableStock": 16,
    "reservedStock": 0,
    "badge": "IMMERSIVE AUDIO",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Spatial",
        "value": "Bose Immersive Audio"
      },
      {
        "label": "Fit",
        "value": "9 Ear Tip & Stability Band Combos"
      }
    ],
    "highlights": [
      "Bose Immersive Audio",
      "CustomTune Ear Calibration",
      "Snapdragon Sound",
      "24h Total Battery"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_bose_qc_ultra_headphones",
    "slug": "bose-quietcomfort-ultra-wireless-headphones-black",
    "name": "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones (Black / Sandstone)",
    "subtitle": "Bose Immersive Audio, World-Class Quiet Mode, Ultra-Plush Protein Leather, 24hr Play",
    "description": "Elevates everyday listening with monumental noise cancellation and custom spatial acoustic engineering.",
    "category": "audio",
    "brand": "Bose",
    "pricePaise": 3490000,
    "mrpPaise": 3990000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1120,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "PLUSH LUXURY",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Battery",
        "value": "24 Hours (Up to 18 Hours with Immersive Audio)"
      },
      {
        "label": "Bluetooth",
        "value": "Bluetooth 5.3 AptX Adaptive"
      }
    ],
    "highlights": [
      "World-Class ANC",
      "Immersive Spatial Audio",
      "Cast Aluminum Arms",
      "Ultra-Plush Ear Cushions"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sennheiser_hd660s2",
    "slug": "sennheiser-hd-660s2-audiophile-headphones",
    "name": "Sennheiser HD 660S2 Open-Back Reference Studio Headphones (300-Ohm)",
    "subtitle": "Audiophile Transducer, Sub-Bass Precision, Ventilated Magnet System, Made in Ireland",
    "description": "Intimate listening with deep, impactful sub-bass and pristine resolution for discerning audiophiles.",
    "category": "audio",
    "brand": "Sennheiser",
    "pricePaise": 4499000,
    "mrpPaise": 5499000,
    "discountPercent": 18,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 470,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "AUDIOPHILE GRADE",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Impedance",
        "value": "300 Ohms"
      },
      {
        "label": "Frequency",
        "value": "8 Hz - 41,500 Hz"
      }
    ],
    "highlights": [
      "Sub-Bass Extension",
      "300Ω Studio Impedance",
      "Open-Back Soundstage",
      "Crafted in Ireland"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sennheiser_momentum_4",
    "slug": "sennheiser-momentum-4-wireless-headphones",
    "name": "Sennheiser Momentum 4 Wireless Headphones (60-Hour Battery, Audiophile Sound)",
    "subtitle": "60-Hour Record Battery Life, 42mm Transducer System, Adaptive Noise Cancellation",
    "description": "Unrivaled 60-hour playback per charge paired with Sennheiser signature audiophile sound dynamics.",
    "category": "audio",
    "brand": "Sennheiser",
    "pricePaise": 2499000,
    "mrpPaise": 3499000,
    "discountPercent": 29,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 2350,
    "inStock": true,
    "availableStock": 18,
    "reservedStock": 0,
    "badge": "60-HOUR BATTERY",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Battery",
        "value": "60 Hours on a Single Charge"
      },
      {
        "label": "Transducer",
        "value": "42mm Audiophile-Inspired"
      }
    ],
    "highlights": [
      "60-Hour Battery Life",
      "42mm Sound Driver",
      "Adaptive ANC",
      "Customizable Sound EQ"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sennheiser_ie600",
    "slug": "sennheiser-ie-600-in-ear-audiophile-monitors",
    "name": "Sennheiser IE 600 High-Fidelity In-Ear Audio Monitors (AML Alloy 3D-Printed Housing)",
    "subtitle": "Resilient ZR01 Amorphous Zirconium Housing, TrueResponse 7mm Transducer, Dual Resonators",
    "description": "Housing 3D-printed from aerospace zirconium alloy with hardness exceeding surgical steel.",
    "category": "audio",
    "brand": "Sennheiser",
    "pricePaise": 5999000,
    "mrpPaise": 6999000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 210,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "PRECISION ALLOY",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Housing",
        "value": "3D-Printed ZR01 Amorphous Zirconium"
      },
      {
        "label": "Driver",
        "value": "7mm Extra-Wide Band TrueResponse"
      }
    ],
    "highlights": [
      "Aerospace Zirconium Shell",
      "7mm TrueResponse Driver",
      "Neutral Tuning",
      "Gold-Plated MMCX Cables"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_devialet_phantom_2",
    "slug": "devialet-phantom-ii-98db-wireless-speaker",
    "name": "Devialet Phantom II 98dB Wireless High-Fidelity Speaker (Iconic White, 400W RMS)",
    "subtitle": "Heart Bass Implosion (18Hz Bass), ADH Hybrid Amplification, Zero Distortion",
    "description": "An acoustic marvel of modern engineering. Packed into a compact architecture delivering 98 dB SPL.",
    "category": "audio",
    "brand": "Devialet",
    "pricePaise": 12900000,
    "mrpPaise": 14500000,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 310,
    "inStock": true,
    "availableStock": 3,
    "reservedStock": 0,
    "badge": "FRENCH LUXURY",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Output",
        "value": "98 dB SPL at 1 meter"
      },
      {
        "label": "Power",
        "value": "400 Watts RMS"
      }
    ],
    "highlights": [
      "18Hz Sub-Bass Implosion",
      "400W RMS ADH Hybrid",
      "Zero Distortion Tech",
      "Iconic Sculptural Design"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_devialet_gemini_2",
    "slug": "devialet-gemini-ii-true-wireless-earbuds-matte-black",
    "name": "Devialet Gemini II True Wireless Earbuds (Devialet Adaptive Noise Cancellation)",
    "subtitle": "Titanium-Coated 10mm Driver, Wind-Free Voice Technology, Bluetooth 5.2 Multipoint",
    "description": "Luxury ergonomics meet audiophile grade sound with patented Internal Delay Compensation.",
    "category": "audio",
    "brand": "Devialet",
    "pricePaise": 3999900,
    "mrpPaise": 4499900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 190,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "PREMIUM TWS",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Driver",
        "value": "10mm Titanium-Coated High Excursion"
      },
      {
        "label": "ANC",
        "value": "Devialet Adaptive Noise Cancellation"
      }
    ],
    "highlights": [
      "Patented IDC Algorithm",
      "Titanium 10mm Drivers",
      "Wind-Free Clear Calls",
      "Qi Wireless Case"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_marshall_stanmore_3",
    "slug": "marshall-stanmore-iii-bluetooth-speaker",
    "name": "Marshall Stanmore III Wireless Bluetooth Home Speaker (Original Black & Brass)",
    "subtitle": "Wider Soundstage, Dynamic Loudness, Iconic Vintage Script Logo, Brass Control Knobs",
    "description": "Home-filling Marshall signature sound re-engineered for an even more immersive acoustic experience.",
    "category": "audio",
    "brand": "Marshall",
    "pricePaise": 3199900,
    "mrpPaise": 3699900,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 980,
    "inStock": true,
    "availableStock": 9,
    "reservedStock": 0,
    "badge": "ICONIC ACOUSTICS",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Amplifier",
        "value": "50W Class D Woofer + 2x 15W Tweeters"
      },
      {
        "label": "Connectivity",
        "value": "Bluetooth 5.2, RCA, 3.5mm Aux"
      }
    ],
    "highlights": [
      "Iconic Marshall Vintage Styling",
      "Brass Knobs",
      "Wider Stereo Soundstage",
      "Bluetooth 5.2"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_marshall_acton_3",
    "slug": "marshall-acton-iii-compact-bluetooth-speaker",
    "name": "Marshall Acton III Compact Home Bluetooth Speaker (Cream White)",
    "subtitle": "Compact Footprint, Room-Filling Dynamic Audio, Eco-Friendly 70% Recycled Plastic",
    "description": "The most discreet home speaker in the Marshall range with an expansive soundstage that fills small rooms.",
    "category": "audio",
    "brand": "Marshall",
    "pricePaise": 2499900,
    "mrpPaise": 2999900,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1420,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "VINTAGE COMPACT",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Cabinet",
        "value": "Bass-Reflex Wood Cabinet"
      },
      {
        "label": "Controls",
        "value": "Analogue Brass Knobs"
      }
    ],
    "highlights": [
      "Classic Cream Aesthetic",
      "Analogue Brass Dials",
      "Bluetooth 5.2 LE",
      "Room-Filling Acoustic"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_marshall_emberton_2",
    "slug": "marshall-emberton-ii-portable-ip67-speaker",
    "name": "Marshall Emberton II Portable Waterproof Bluetooth Speaker (Black & Steel)",
    "subtitle": "30+ Hours Portable Playtime, IP67 Dust and Water Resistant, Stack Mode Pairing",
    "description": "Tough and resilient portable speaker with multi-directional True Stereophonic 360-degree sound.",
    "category": "audio",
    "brand": "Marshall",
    "pricePaise": 1499900,
    "mrpPaise": 1799900,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 3100,
    "inStock": true,
    "availableStock": 22,
    "reservedStock": 0,
    "badge": "PORTABLE BEAT",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Battery",
        "value": "30+ Hours Portable Play"
      },
      {
        "label": "Durability",
        "value": "IP67 Waterproof & Dustproof"
      }
    ],
    "highlights": [
      "True Stereophonic 360°",
      "30+ Hour Battery",
      "IP67 Waterproof",
      "Stack Mode Daisy Chain"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_shure_aonic_50_g2",
    "slug": "shure-aonic-50-gen-2-wireless-headphones",
    "name": "Shure AONIC 50 Gen 2 Wireless Studio Headphones with Spatial Audio",
    "subtitle": "50mm Custom Drivers, Qualcomm aptX Adaptive, Snapdragon Sound, 45-Hour Battery",
    "description": "Engineered from decades of stage and studio experience to deliver unmatched high-resolution audio.",
    "category": "audio",
    "brand": "Shure",
    "pricePaise": 3299000,
    "mrpPaise": 3999000,
    "discountPercent": 18,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 380,
    "inStock": true,
    "availableStock": 7,
    "reservedStock": 0,
    "badge": "STUDIO ACCURACY",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Driver",
        "value": "50mm Dynamic Neodymium Magnet"
      },
      {
        "label": "Codecs",
        "value": "aptX Adaptive, LDAC, AAC, SBC"
      }
    ],
    "highlights": [
      "50mm Studio Drivers",
      "Snapdragon Sound Hi-Res",
      "45-Hour Battery Life",
      "Customizable ShurePlus App"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_audio_technica_m50xbt2",
    "slug": "audio-technica-ath-m50xbt2-wireless-studio-monitor",
    "name": "Audio-Technica ATH-M50xBT2 Wireless Studio Monitor Headphones",
    "subtitle": "Proprietary 45mm Large-Aperture Drivers, AK4331 Advanced DAC, 50-Hour Battery Life",
    "description": "Critically acclaimed sonic performance of the legendary M50x professional studio monitor in wireless form.",
    "category": "audio",
    "brand": "Audio-Technica",
    "pricePaise": 1899000,
    "mrpPaise": 2399000,
    "discountPercent": 21,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 4120,
    "inStock": true,
    "availableStock": 18,
    "reservedStock": 0,
    "badge": "STUDIO STANDARD",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "DAC",
        "value": "AK4331 Audio DAC + Headphone Amp"
      },
      {
        "label": "Battery",
        "value": "50 Hours Continuous Play"
      }
    ],
    "highlights": [
      "Legendary M50x Sound",
      "50-Hour Battery",
      "Low Latency Gaming Mode",
      "Multipoint Pairing"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_apple_homepod_2",
    "slug": "apple-homepod-2nd-gen-midnight",
    "name": "Apple HomePod (2nd Generation, Midnight Sound System)",
    "subtitle": "High-Excursion Woofer, Beamforming 5-Tweeter Array, Room Sensing, Spatial Audio",
    "description": "Pro-grade computational audio. Room-sensing technology automatically tunes acoustics to walls and placement.",
    "category": "audio",
    "brand": "Apple",
    "pricePaise": 3290000,
    "mrpPaise": 3490000,
    "discountPercent": 6,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 890,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "SMART ACOUSTIC",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Acoustics",
        "value": "4\" High-Excursion Woofer + 5 Beamforming Tweeters"
      },
      {
        "label": "Sensors",
        "value": "Real-Time Room Sensing & Temperature"
      }
    ],
    "highlights": [
      "Spatial Audio Dolby Atmos",
      "Room Sensing Acoustic",
      "Smart Home Hub Matter",
      "Stereo Pair Capable"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_bang_olufsen_beoplay_h95",
    "slug": "bang-olufsen-beoplay-h95-ultimate-headphones",
    "name": "Bang & Olufsen Beoplay H95 Flagship ANC Headphones (Nordic Ice Titanium)",
    "subtitle": "Custom Titanium Drivers, Lambskin Ear Cushions, Mechanical Aluminum Precision Dials",
    "description": "The masterpiece of acoustic luxury. Lambskin leather, brushed aluminum, and adaptive electro-acoustic noise cancel.",
    "category": "audio",
    "brand": "Bang & Olufsen",
    "pricePaise": 8999000,
    "mrpPaise": 9999000,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 140,
    "inStock": true,
    "availableStock": 2,
    "reservedStock": 0,
    "badge": "ULTRA LUXURY",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Material",
        "value": "Titanium, Lambskin, Cowhide, Anodized Aluminum"
      },
      {
        "label": "Battery",
        "value": "38 Hours with ANC active"
      }
    ],
    "highlights": [
      "Lambskin Leather Cushions",
      "Titanium 40mm Drivers",
      "Mechanical Control Dials",
      "Hard Aluminum Flight Case"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_focal_bathys_anc",
    "slug": "focal-bathys-hi-fi-anc-headphones",
    "name": "Focal Bathys Wireless Hi-Fi Active Noise Cancelling Headphones (Black Silver)",
    "subtitle": "Made in France Aluminum/Magnesium \"M\"-Dome Drivers, USB-DAC 24-bit/192kHz Mode",
    "description": "The first high-fidelity wireless headphones with active noise cancellation from French acoustic master Focal.",
    "category": "audio",
    "brand": "Focal",
    "pricePaise": 6999000,
    "mrpPaise": 7999000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 280,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "FRENCH HI-FI",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Transducer",
        "value": "40mm Aluminum-Magnesium \"M\"-Dome"
      },
      {
        "label": "USB-DAC",
        "value": "Integrated 24-bit/192kHz DAC Mode"
      }
    ],
    "highlights": [
      "Made in France M-Dome",
      "24-bit/192kHz USB-DAC",
      "Backlit Focal Logo",
      "Hi-Fi Sound Profiling"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_shure_sm7b",
    "slug": "shure-sm7b-vocal-dynamic-microphone",
    "name": "Shure SM7B Cardioid Dynamic Studio Vocal Microphone",
    "subtitle": "Air Suspension Shock Isolation, Electromagnetic Shielding, Flat Wide-Range Frequency",
    "description": "The worldwide gold standard for broadcast, studio recording, podcasting, and voiceover capture.",
    "category": "audio",
    "brand": "Shure",
    "pricePaise": 3699000,
    "mrpPaise": 4299000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 6800,
    "inStock": true,
    "availableStock": 15,
    "reservedStock": 0,
    "badge": "BROADCAST GOLD",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Type",
        "value": "Dynamic Cardioid"
      },
      {
        "label": "Shielding",
        "value": "Internal Electromagnetic Hum-Canceling"
      }
    ],
    "highlights": [
      "The Studio Standard",
      "Smooth Warm Vocals",
      "Built-in Pop Filter",
      "XLR Connection"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_rode_wireless_pro",
    "slug": "rode-wireless-pro-dual-channel-microphone-kit",
    "name": "Røde Wireless PRO Dual-Channel Compact Wireless Microphone System",
    "subtitle": "32-Bit Float On-Board Recording, Timecode Sync, Series IV 2.4GHz Digital Transmission",
    "description": "Never clip audio again. 32-bit float internal memory guarantees clean sound even at explosive dynamic volume.",
    "category": "audio",
    "brand": "Rode",
    "pricePaise": 3499000,
    "mrpPaise": 3999000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 920,
    "inStock": true,
    "availableStock": 11,
    "reservedStock": 0,
    "badge": "32-BIT FLOAT",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Recording",
        "value": "32-Bit Float On-Board 32GB Memory"
      },
      {
        "label": "Range",
        "value": "Up to 260m Line of Sight"
      }
    ],
    "highlights": [
      "32-Bit Float No Clipping",
      "Timecode Synchronization",
      "Dual Lav Mic Inclusions",
      "Smart Charge Case"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sony_ps5_slim",
    "slug": "sony-playstation-5-slim-console-1tb",
    "name": "Sony PlayStation 5 Slim Console (1TB SSD, DualSense Wireless Controller)",
    "subtitle": "Lightning-Fast Custom SSD, Tempest 3D AudioTech, Ray Tracing 4K 120fps",
    "description": "Experience lightning-fast loading with an ultra-high speed SSD and deeper immersion with DualSense haptics.",
    "category": "gaming",
    "brand": "Sony",
    "pricePaise": 4999000,
    "mrpPaise": 5499000,
    "discountPercent": 9,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 4120,
    "inStock": true,
    "availableStock": 15,
    "reservedStock": 0,
    "badge": "CONSOLE CHAMPION",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Storage",
        "value": "1TB Custom NVMe SSD"
      },
      {
        "label": "GPU",
        "value": "AMD RDNA 2 Ray Tracing 4K 120Hz"
      }
    ],
    "highlights": [
      "1TB Custom High-Speed SSD",
      "DualSense Haptics",
      "Ray Tracing 4K 120fps",
      "Tempest 3D Audio"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sony_ps5_digital",
    "slug": "sony-playstation-5-slim-digital-edition",
    "name": "Sony PlayStation 5 Slim Digital Edition (1TB SSD)",
    "subtitle": "All-Digital Ultra-Sleek Design, Custom High-Speed SSD, DualSense Wireless Haptics",
    "description": "All the performance of PS5 in a streamlined disc-free chassis. Download top AAA games from PlayStation Store.",
    "category": "gaming",
    "brand": "Sony",
    "pricePaise": 4499000,
    "mrpPaise": 4999000,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1850,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "DIGITAL SLIM",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Storage",
        "value": "1TB Custom High-Speed SSD"
      },
      {
        "label": "Design",
        "value": "Slim Disc-Free Enclosure"
      }
    ],
    "highlights": [
      "1TB SSD Storage",
      "DualSense Haptics",
      "Ray Tracing HDR",
      "Optional Disc Drive"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_playstation_portal",
    "slug": "playstation-portal-remote-player-ps5",
    "name": "PlayStation Portal Remote Player for PS5 Console",
    "subtitle": "8-inch Full HD 60fps LCD Screen, DualSense Integrated Haptic Features",
    "description": "Put your PS5 in the palm of your hand. Stream installed PS5 games over home Wi-Fi with zero TV sharing contention.",
    "category": "gaming",
    "brand": "Sony",
    "pricePaise": 1899000,
    "mrpPaise": 2199000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 1140,
    "inStock": true,
    "availableStock": 9,
    "reservedStock": 0,
    "badge": "REMOTE GAMING",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Screen",
        "value": "8\" Full HD 1080p 60fps LCD"
      },
      {
        "label": "Controls",
        "value": "Integrated DualSense Adaptive Triggers"
      }
    ],
    "highlights": [
      "8\" 1080p 60fps Display",
      "Full DualSense Haptics",
      "Remote Play Stream",
      "Zero TV Contention"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dualsense_edge",
    "slug": "sony-dualsense-edge-wireless-controller",
    "name": "Sony DualSense Edge Pro Wireless Controller for PS5 & PC",
    "subtitle": "Swappable Stick Modules, Remappable Back Buttons, Adjustable Trigger Stops",
    "description": "Precision engineered for competitive edge. Customize trigger sensitivity, dead zones, and switch profiles on the fly.",
    "category": "gaming",
    "brand": "Sony",
    "pricePaise": 1799000,
    "mrpPaise": 2099000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 920,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "PRO CONTROLLER",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Customization",
        "value": "Swappable Stick Modules & Back Paddles"
      },
      {
        "label": "Software",
        "value": "On-Controller Profile Switcher"
      }
    ],
    "highlights": [
      "Swappable Stick Modules",
      "Adjustable Hair Triggers",
      "Remappable Back Paddles",
      "Braided Cable with Lock"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_playstation_vr2",
    "slug": "playstation-vr2-horizon-call-of-the-mountain-bundle",
    "name": "PlayStation VR2 Horizon Call of the Mountain Bundle",
    "subtitle": "Dual 4K HDR OLED Displays, Eye Tracking, Headset Feedback, Sense Controllers",
    "description": "Escape into virtual worlds that feel truly real. 4K HDR visuals with 110-degree field of view and 3D audio.",
    "category": "gaming",
    "brand": "Sony",
    "pricePaise": 5299000,
    "mrpPaise": 6199000,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 580,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "NEXT-GEN VR",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Displays",
        "value": "Dual 2000x2040 OLED per eye (4K HDR)"
      },
      {
        "label": "Tracking",
        "value": "Internal Camera Inside-Out + Eye Tracking"
      }
    ],
    "highlights": [
      "4K HDR OLED Displays",
      "Eye Tracking Tech",
      "Headset Haptic Feedback",
      "Sense Controllers"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_steam_deck_oled_1tb",
    "slug": "valve-steam-deck-oled-1tb-handheld-gaming",
    "name": "Valve Steam Deck OLED Handheld Gaming Console (1TB NVMe, 90Hz HDR OLED)",
    "subtitle": "Premium Anti-Glare Etched Glass, 50Wh Battery, Custom 6nm AMD APU, SteamOS 3.5",
    "description": "The pinnacle of handheld PC gaming. The 7.4\" HDR OLED display boasts 1000 nits peak brightness at 90Hz.",
    "category": "gaming",
    "brand": "Valve",
    "pricePaise": 6499900,
    "mrpPaise": 7499900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1612287232252-87063f25b5a2?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1612287232252-87063f25b5a2?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 1890,
    "inStock": true,
    "availableStock": 7,
    "reservedStock": 0,
    "badge": "HANDHELD KING",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Display",
        "value": "7.4\" 90Hz HDR OLED 1000 nits"
      },
      {
        "label": "APU",
        "value": "6nm AMD Zen 2 + RDNA 2"
      }
    ],
    "highlights": [
      "90Hz HDR OLED",
      "1TB High-Speed SSD",
      "Wi-Fi 6E Fast Downloads",
      "SteamOS Ecosystem"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_steam_deck_oled_512",
    "slug": "valve-steam-deck-oled-512gb",
    "name": "Valve Steam Deck OLED Handheld Gaming Console (512GB NVMe SSD)",
    "subtitle": "Vibrant 7.4\" 90Hz OLED, 3-12 Hour Battery Life, Premium Carrying Case",
    "description": "Experience breathtaking contrast and HDR color fidelity on the full PC gaming catalog wherever you go.",
    "category": "gaming",
    "brand": "Valve",
    "pricePaise": 5499900,
    "mrpPaise": 6199900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1612287232252-87063f25b5a2?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1612287232252-87063f25b5a2?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 2410,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "VALUE OLED",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "7.4\" 90Hz OLED 1,000,000:1 contrast"
      },
      {
        "label": "Storage",
        "value": "512GB High-Speed NVMe SSD"
      }
    ],
    "highlights": [
      "90Hz OLED Screen",
      "SteamOS Console UI",
      "Wi-Fi 6E Downloads",
      "Ergonomic Trackpads"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_nintendo_switch_oled",
    "slug": "nintendo-switch-oled-white-joycon",
    "name": "Nintendo Switch - OLED Model (White Joy-Con, 64GB Internal Storage)",
    "subtitle": "Vibrant 7-inch OLED Screen, Wide Adjustable Stand, Wired LAN Dock, Enhanced Audio",
    "description": "Feast your eyes on vivid colors and crisp contrast when you play on the go or connected to your 4K TV.",
    "category": "gaming",
    "brand": "Nintendo",
    "pricePaise": 3199900,
    "mrpPaise": 3799900,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1578303512597-8be92383c267?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1578303512597-8be92383c267?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 3100,
    "inStock": true,
    "availableStock": 18,
    "reservedStock": 0,
    "badge": "FAMILY FAVORITE",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Screen",
        "value": "7.0\" Multi-Touch OLED (1280x720)"
      },
      {
        "label": "Dock",
        "value": "Wired LAN Port Built-in"
      }
    ],
    "highlights": [
      "7\" OLED Vivid Display",
      "Wired LAN Dock Port",
      "Wide Adjustable Stand",
      "Enhanced Audio Speakers"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_nintendo_switch_lite",
    "slug": "nintendo-switch-lite-turquoise",
    "name": "Nintendo Switch Lite Handheld Gaming Console (Turquoise)",
    "subtitle": "Ultra-Compact Dedicated Handheld, Built-in +Control Pad, 5.5\" Screen",
    "description": "Optimized for personal handheld play. Lightweight, sleek, and compatible with all handheld Switch titles.",
    "category": "gaming",
    "brand": "Nintendo",
    "pricePaise": 1749900,
    "mrpPaise": 2199900,
    "discountPercent": 20,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1578303512597-8be92383c267?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1578303512597-8be92383c267?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 4200,
    "inStock": true,
    "availableStock": 22,
    "reservedStock": 0,
    "badge": "COMPACT HANDHELD",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Weight",
        "value": "275 grams ultra-light"
      },
      {
        "label": "Battery",
        "value": "3 to 7 hours gameplay"
      }
    ],
    "highlights": [
      "Dedicated Handheld Design",
      "Built-in D-Pad",
      "Lightweight 275g",
      "All Switch Handheld Games"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_switch_pro_controller",
    "slug": "nintendo-switch-pro-controller",
    "name": "Nintendo Switch Pro Controller (Black, Motion Controls, HD Rumble)",
    "subtitle": "Ergonomic Grip, HD Rumble Haptics, Built-in amiibo NFC Reader, 40hr Battery",
    "description": "Take your gaming sessions up a notch with premium comfort, motion controls, and astonishing 40-hour battery life.",
    "category": "gaming",
    "brand": "Nintendo",
    "pricePaise": 649900,
    "mrpPaise": 799900,
    "discountPercent": 19,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 5100,
    "inStock": true,
    "availableStock": 25,
    "reservedStock": 0,
    "badge": "OFFICIAL PRO",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Battery",
        "value": "40 Hours Rechargeable"
      },
      {
        "label": "Features",
        "value": "HD Rumble & Motion Controls"
      }
    ],
    "highlights": [
      "40-Hour Battery",
      "HD Rumble Haptics",
      "amiibo NFC Reader",
      "Ergonomic Grip"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_xbox_series_x",
    "slug": "microsoft-xbox-series-x-1tb-console",
    "name": "Microsoft Xbox Series X Console (1TB SSD, 12 Teraflops GPU, 4K 120fps)",
    "subtitle": "Xbox Velocity Architecture, Quick Resume, DirectX Hardware Raytracing, Game Pass Ready",
    "description": "The fastest, most powerful Xbox ever. Explore rich worlds with 12 teraflops of raw graphic processing power.",
    "category": "gaming",
    "brand": "Microsoft",
    "pricePaise": 4899000,
    "mrpPaise": 5599000,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 2210,
    "inStock": true,
    "availableStock": 11,
    "reservedStock": 0,
    "badge": "12 TERAFLOPS",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "GPU",
        "value": "12 TFLOPS AMD RDNA 2 GPU"
      },
      {
        "label": "Storage",
        "value": "1TB Custom NVMe SSD"
      }
    ],
    "highlights": [
      "12 Teraflops GPU",
      "Quick Resume Switching",
      "DirectX Raytracing",
      "Xbox Velocity SSD"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_xbox_series_s_1tb",
    "slug": "microsoft-xbox-series-s-1tb-carbon-black",
    "name": "Microsoft Xbox Series S (1TB SSD, Carbon Black Edition)",
    "subtitle": "Next-Gen Performance in Compact Footprint, 1TB SSD, 1440p up to 120FPS",
    "description": "All-digital next-gen gaming with double the storage in a sleek matte Carbon Black finish.",
    "category": "gaming",
    "brand": "Microsoft",
    "pricePaise": 3499000,
    "mrpPaise": 3999000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 1890,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "COMPACT DIGITAL",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Storage",
        "value": "1TB High-Speed SSD"
      },
      {
        "label": "Target",
        "value": "1440p up to 120 FPS"
      }
    ],
    "highlights": [
      "1TB Storage Boost",
      "Carbon Black Matte Finish",
      "Quick Resume Across Games",
      "Game Pass Optimized"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_xbox_elite_series_2",
    "slug": "xbox-elite-wireless-controller-series-2",
    "name": "Xbox Elite Wireless Controller Series 2 (Adjustable-Tension Thumbsticks)",
    "subtitle": "Short Hair Trigger Locks, Wrap-Around Rubberized Grip, 40-Hour Battery, Custom Profiles",
    "description": "Engineered to meet the needs of competitive gamers with over 30 new ways to play like a pro.",
    "category": "gaming",
    "brand": "Microsoft",
    "pricePaise": 1599000,
    "mrpPaise": 1899000,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 2150,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "COMPETITIVE GEAR",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Battery",
        "value": "Up to 40 hours per charge"
      },
      {
        "label": "Customization",
        "value": "Interchangeable Thumbsticks & Paddles"
      }
    ],
    "highlights": [
      "Adjustable Thumbstick Tension",
      "Shorter Hair Trigger Locks",
      "40hr Battery Life",
      "Custom Key Mapping"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_asus_rog_ally_x",
    "slug": "asus-rog-ally-x-handheld-gaming-console",
    "name": "ASUS ROG Ally X Handheld Gaming PC (AMD Z1 Extreme, 24GB RAM, 1TB SSD, 80Wh Battery)",
    "subtitle": "Massive 80Wh Battery, 24GB LPDDR5X-7500 RAM, Dual USB-C with USB4, 120Hz VRR",
    "description": "The reigning king of Windows gaming handhelds. 2x battery life, upgraded joysticks, and 24GB high-bandwidth RAM.",
    "category": "gaming",
    "brand": "ASUS",
    "pricePaise": 8999900,
    "mrpPaise": 9999900,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1612287232252-87063f25b5a2?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1612287232252-87063f25b5a2?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 870,
    "inStock": true,
    "availableStock": 7,
    "reservedStock": 0,
    "badge": "WINDOWS HANDHELD",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Battery",
        "value": "80Wh (Double previous capacity)"
      },
      {
        "label": "RAM",
        "value": "24GB LPDDR5X 7500MHz"
      },
      {
        "label": "Screen",
        "value": "7\" FHD 120Hz 500-nit FreeSync Premium"
      }
    ],
    "highlights": [
      "80Wh Double Battery",
      "24GB High-Speed RAM",
      "Full 1TB SSD",
      "120Hz VRR FreeSync"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_meta_quest_3",
    "slug": "meta-quest-3-512gb-breakthrough-mixed-reality",
    "name": "Meta Quest 3 Breakthrough Mixed Reality VR Headset (512GB Storage)",
    "subtitle": "Snapdragon XR2 Gen 2, 4K+ Infinite Display, Full-Color High-Res Passthrough",
    "description": "Transform your home into an interactive playground. Blends virtual elements into your physical space seamlessly.",
    "category": "gaming",
    "brand": "Meta",
    "pricePaise": 5999900,
    "mrpPaise": 6999900,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1450,
    "inStock": true,
    "availableStock": 9,
    "reservedStock": 0,
    "badge": "MIXED REALITY",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Processor",
        "value": "Snapdragon XR2 Gen 2 (2x GPU power)"
      },
      {
        "label": "Display",
        "value": "2064x2208 per eye 4K+ Infinite"
      }
    ],
    "highlights": [
      "Color Mixed Reality Passthrough",
      "Snapdragon XR2 Gen 2",
      "Pancake Optical Lenses",
      "Touch Plus Haptic Remotes"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_scuf_reflex_pro",
    "slug": "scuf-reflex-pro-wireless-ps5-pc-controller",
    "name": "SCUF Reflex Pro Wireless Performance Controller (Steel Gray)",
    "subtitle": "Four Remappable Rear Paddles, Adaptive Triggers, High-Performance Non-Slip Grip",
    "description": "Designed for players looking to shave milliseconds off their reaction times in Call of Duty and Apex Legends.",
    "category": "gaming",
    "brand": "SCUF",
    "pricePaise": 2299900,
    "mrpPaise": 2699900,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 410,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "ESPORTS PADDLES",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Paddles",
        "value": "4 Ergonomic Remappable Rear Paddles"
      },
      {
        "label": "Grip",
        "value": "High-Performance Contoured Rubber"
      }
    ],
    "highlights": [
      "4 Remappable Paddles",
      "On-Board Profile Memory",
      "Non-Slip Performance Grip",
      "Adaptive Trigger Support"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_8bitdo_ultimate",
    "slug": "8bitdo-ultimate-bluetooth-controller-with-charging-dock",
    "name": "8BitDo Ultimate Bluetooth Controller with Charging Dock (Hall Effect Joysticks)",
    "subtitle": "Anti-Drift Hall Effect Sensing, 2.4G & Bluetooth, Custom Macro Software, Charging Dock",
    "description": "Say goodbye to stick drift forever. Hall Effect electromagnetic sensors deliver eternal precision.",
    "category": "gaming",
    "brand": "8BitDo",
    "pricePaise": 599900,
    "mrpPaise": 749900,
    "discountPercent": 20,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 3800,
    "inStock": true,
    "availableStock": 20,
    "reservedStock": 0,
    "badge": "ANTI-DRIFT HALL",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Joysticks",
        "value": "Hall Effect Electromagnetic Sensing Joysticks"
      },
      {
        "label": "Dock",
        "value": "Multifunctional Magnetic Charging Dock"
      }
    ],
    "highlights": [
      "Hall Effect No-Drift Sticks",
      "Included Magnetic Dock",
      "Switch & PC Bluetooth/2.4G",
      "Rear Paddle Macros"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_backbone_one_usbc",
    "slug": "backbone-one-usb-c-mobile-gaming-controller",
    "name": "Backbone One Mobile Gaming Controller (USB-C, PlayStation Edition)",
    "subtitle": "Direct Low-Latency USB-C Connection, Pass-Through Charging, 3.5mm Headphone Jack",
    "description": "Turns your iPhone 15 or Android smartphone into the ultimate portable PlayStation gaming powerhouse.",
    "category": "gaming",
    "brand": "Backbone",
    "pricePaise": 999900,
    "mrpPaise": 1199900,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 2100,
    "inStock": true,
    "availableStock": 16,
    "reservedStock": 0,
    "badge": "MOBILE CLOUD",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Connection",
        "value": "Zero-Latency USB-C Direct Connection"
      },
      {
        "label": "Port",
        "value": "3.5mm Headphone Jack + Passthrough Charging"
      }
    ],
    "highlights": [
      "Direct USB-C Latency Free",
      "PlayStation Official License",
      "PS Remote Play Optimized",
      "Compact Collapsible"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_razer_wolverine_v2_pro",
    "slug": "razer-wolverine-v2-pro-wireless-esports-controller",
    "name": "Razer Wolverine V2 Pro Wireless Esports Controller for PS5 & PC (White)",
    "subtitle": "Razer Mecha-Tactile Action Buttons, HyperTrigger Shorter Pulls, Micro-Switch D-Pad",
    "description": "Ultra-fast wireless response powered by Razer HyperSpeed 2.4GHz with 3 million click mechanical switches.",
    "category": "gaming",
    "brand": "Razer",
    "pricePaise": 2499900,
    "mrpPaise": 2899900,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.6,
    "reviewCount": 320,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "MECHA TACTILE",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Switches",
        "value": "Razer Mecha-Tactile (0.65mm actuation)"
      },
      {
        "label": "Triggers",
        "value": "Razer HyperTrigger Short Locks"
      }
    ],
    "highlights": [
      "Mecha-Tactile Action Buttons",
      "HyperTrigger Hair Locks",
      "8-Way Microswitch D-Pad",
      "HyperSpeed 2.4G Wireless"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_logitech_g_cloud",
    "slug": "logitech-g-cloud-gaming-handheld",
    "name": "Logitech G CLOUD Gaming Handheld (7\" 1080p FHD Screen, 12+ Hour Battery)",
    "subtitle": "Xbox Cloud Gaming, GeForce NOW, Steam Link, Ergonomic Lightweight 463g",
    "description": "Purpose-built for cloud streaming with an epic 12+ hour battery and vibrant 7-inch 1080p 60Hz touchscreen.",
    "category": "gaming",
    "brand": "Logitech",
    "pricePaise": 2999900,
    "mrpPaise": 3499900,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1612287232252-87063f25b5a2?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1612287232252-87063f25b5a2?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.6,
    "reviewCount": 680,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "CLOUD CHAMPION",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Battery",
        "value": "12+ Hours Battery Life"
      },
      {
        "label": "Screen",
        "value": "7\" 1080p 60Hz 16:9 IPS Touchscreen"
      }
    ],
    "highlights": [
      "12+ Hour Cloud Battery",
      "Lightweight 463g",
      "Xbox & GeForce NOW Ready",
      "Precision Console Controls"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_razer_kitsune_arcade",
    "slug": "razer-kitsune-all-optical-arcade-controller",
    "name": "Razer Kitsune All-Optical Leverless Arcade Controller for PS5 & PC",
    "subtitle": "Quad Movement Buttons, Low-Profile Linear Optical Switches, Slim Aluminum Plate",
    "description": "Evolve past joysticks. Quad button layout and optical actuation eliminate input errors in fighting games.",
    "category": "gaming",
    "brand": "Razer",
    "pricePaise": 2999900,
    "mrpPaise": 3499900,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 290,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "FIGHTSTICK PRO",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Switches",
        "value": "Razer Low-Profile Linear Optical"
      },
      {
        "label": "Format",
        "value": "All-Button Leverless Arcade Layout"
      }
    ],
    "highlights": [
      "Leverless Quad Buttons",
      "Optical Instant Actuation",
      "Tournament Cable Lock",
      "Slim Aluminum Top Plate"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_elgato_hd60_x",
    "slug": "elgato-hd60-x-external-capture-card",
    "name": "Elgato HD60 X External Video Capture Card (4K30 / 1080p60 HDR10 Pass-Through)",
    "subtitle": "Ultra-Low Latency, VRR Passthrough up to 144Hz, Plug and Play on OBS Studio",
    "description": "Capture console gameplay like a pro. Seamless VRR passthrough keeps your TV gaming buttery smooth.",
    "category": "gaming",
    "brand": "Elgato",
    "pricePaise": 1799900,
    "mrpPaise": 2099900,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1450,
    "inStock": true,
    "availableStock": 15,
    "reservedStock": 0,
    "badge": "STREAM CAPTURE",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Passthrough",
        "value": "4K60 HDR10, 1440p120, 1080p240 VRR"
      },
      {
        "label": "Capture",
        "value": "1080p60 HDR10 or 4K30"
      }
    ],
    "highlights": [
      "VRR Variable Refresh Pass",
      "Ultra-Low Latency USB 3.0",
      "Instant Gameview OBS",
      "Console Stream Ready"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_keychron_q1_pro",
    "slug": "keychron-q1-pro-qmk-via-wireless-custom-keyboard",
    "name": "Keychron Q1 Pro QMK/VIA Wireless Custom Mechanical Keyboard (Carbon Black)",
    "subtitle": "Full Aluminum CNC Body, Double-Gasket Design, Hot-Swappable K Pro Red Switches",
    "description": "An all-metal QMK/VIA wireless mechanical keyboard with double-gasket acoustic mounting architecture.",
    "category": "keyboards",
    "brand": "Keychron",
    "pricePaise": 1749900,
    "mrpPaise": 1999900,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 940,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "ENTHUSIAST CHOICE",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Body",
        "value": "Full CNC Machined 6063 Aluminum"
      },
      {
        "label": "Mount",
        "value": "Double-Gasket Acoustic Architecture"
      }
    ],
    "highlights": [
      "Full CNC Aluminum",
      "QMK/VIA Programmable",
      "Double Gasket Mount",
      "Hot-Swappable PCB"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_keychron_q2_pro",
    "slug": "keychron-q2-pro-65-percent-custom-keyboard",
    "name": "Keychron Q2 Pro QMK/VIA Wireless 65% Compact Mechanical Keyboard (Silver Grey)",
    "subtitle": "65% Space-Saving Layout, Rotary Encoder Knob, South-Facing RGB, Mac/Win Switch",
    "description": "Compact 65% aluminum chassis engineered for maximum desktop mouse space without losing arrow keys.",
    "category": "keyboards",
    "brand": "Keychron",
    "pricePaise": 1649900,
    "mrpPaise": 1899900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 620,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "COMPACT 65%",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Layout",
        "value": "65% Compact Layout with Programmable Knob"
      },
      {
        "label": "Connectivity",
        "value": "Bluetooth 5.1 + Type-C 1000Hz"
      }
    ],
    "highlights": [
      "65% Desktop Space Saver",
      "Brass Rotary Knob",
      "Hot-Swappable Sockets",
      "OSA PBT Keycaps"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_keychron_q3_max",
    "slug": "keychron-q3-max-24ghz-wireless-tkl-keyboard",
    "name": "Keychron Q3 Max 2.4GHz & Bluetooth TKL Custom Mechanical Keyboard",
    "subtitle": "Tenkeyless Layout, 2.4GHz 1000Hz Polling, Acoustic Foam Package (IXPE + PET)",
    "description": "Upgraded acoustic foam pads transform switch acoustics into a deep, creamy acoustic report.",
    "category": "keyboards",
    "brand": "Keychron",
    "pricePaise": 1999900,
    "mrpPaise": 2299900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 410,
    "inStock": true,
    "availableStock": 7,
    "reservedStock": 0,
    "badge": "2.4G WIRELESS",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Wireless",
        "value": "2.4GHz Ultra-Fast 1000Hz + Bluetooth 5.1"
      },
      {
        "label": "Acoustic",
        "value": "Acoustic Sound Absorbing Foam Layering"
      }
    ],
    "highlights": [
      "2.4GHz Lag-Free Wireless",
      "TKL Layout",
      "IXPE Acoustic Dampening",
      "South-Facing RGB"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_keychron_k3_pro",
    "slug": "keychron-k3-pro-ultra-slim-wireless-keyboard",
    "name": "Keychron K3 Pro Ultra-Slim Wireless Custom Mechanical Keyboard (Gateron Low Profile)",
    "subtitle": "75% Layout, Low-Profile Double-Shot PBT, Ergonomic Angle, White Backlight",
    "description": "Ultra-slim low-profile keyboard that fits neatly into any laptop backpack while retaining mechanical feel.",
    "category": "keyboards",
    "brand": "Keychron",
    "pricePaise": 999900,
    "mrpPaise": 1199900,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 1850,
    "inStock": true,
    "availableStock": 18,
    "reservedStock": 0,
    "badge": "TRAVEL FAVORITE",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Height",
        "value": "Ultra-Slim Low-Profile Switches"
      },
      {
        "label": "Layout",
        "value": "75% Compact 84-Key"
      }
    ],
    "highlights": [
      "Ultra-Slim Travel Body",
      "Gateron Low-Profile Switches",
      "QMK/VIA Key Remapping",
      "Mac/Windows Native"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_keychron_v1_max",
    "slug": "keychron-v1-max-gasket-mount-custom-keyboard",
    "name": "Keychron V1 Max 75% Gasket Mount Wireless Keyboard (Frosted Black)",
    "subtitle": "Gasket Mount Polycarbonate Case, 2.4G Wireless, Pre-Lubed Jupiter Switches",
    "description": "Premium gasket bounce and creamy sound profile at an entry-level accessible price point.",
    "category": "keyboards",
    "brand": "Keychron",
    "pricePaise": 899900,
    "mrpPaise": 1049900,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1541140532154-b024d705b909?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1541140532154-b024d705b909?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 2400,
    "inStock": true,
    "availableStock": 25,
    "reservedStock": 0,
    "badge": "ENTRY CHAMPION",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Case",
        "value": "Frosted Translucent ABS/Polycarbonate"
      },
      {
        "label": "Switches",
        "value": "Factory Lubed Gateron Jupiter"
      }
    ],
    "highlights": [
      "Gasket Mount Cushioning",
      "2.4G & Bluetooth",
      "Jupiter Switch Acoustics",
      "Frosted Modern Case"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_lofree_flow_84",
    "slug": "lofree-flow-low-profile-mechanical-keyboard",
    "name": "Lofree Flow 84-Key Ultra-Slim Low-Profile Mechanical Keyboard (Silver White)",
    "subtitle": "Kailh Full POM Ghost Switches, Gasket Mount, Full Aluminum Unibody, PBT Keycaps",
    "description": "The worlds first low-profile keyboard with genuine gasket mount and Kailh full-POM switches.",
    "category": "keyboards",
    "brand": "Lofree",
    "pricePaise": 1499900,
    "mrpPaise": 1799900,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 520,
    "inStock": true,
    "availableStock": 11,
    "reservedStock": 0,
    "badge": "ULTRA SLIM",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Switches",
        "value": "Kailh Full-POM Ghost Linear Switches"
      },
      {
        "label": "Body",
        "value": "All-Aluminum Unibody"
      }
    ],
    "highlights": [
      "Full POM Switches",
      "Ultra-Slim Gasket Mount",
      "Dye-Sub PBT Keycaps",
      "Side Ambient Lighting"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_lofree_block_98",
    "slug": "lofree-block-98-retro-wireless-keyboard",
    "name": "Lofree Block 98 Wireless Mechanical Keyboard (Retro Grey / Orange Knobs)",
    "subtitle": "Vintage Braun Industrial Aesthetic, Dual Status Dials, Full Numpad 98-Key",
    "description": "A tribute to legendary Dieter Rams industrial aesthetics with tactile rotary volume and status dials.",
    "category": "keyboards",
    "brand": "Lofree",
    "pricePaise": 1699900,
    "mrpPaise": 1999900,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1541140532154-b024d705b909?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1541140532154-b024d705b909?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 380,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "RETRO MASTER",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Design",
        "value": "Minimalist Retro Braun Aesthetic"
      },
      {
        "label": "Dials",
        "value": "Dual Analog Volume & Mode Dials"
      }
    ],
    "highlights": [
      "Dieter Rams Retro Styling",
      "Dual Analog Knobs",
      "98-Key Compact Numpad",
      "Self-Lubed Switches"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_lofree_1_percent",
    "slug": "lofree-1-percent-transparent-mechanical-keyboard",
    "name": "Lofree 1% \"Misty\" Fully Transparent Wireless Mechanical Keyboard",
    "subtitle": "100% Transparent Polycarbonate Chassis, Clear Keycaps, Kailh Jellyfish Switches",
    "description": "Stunning optical clarity with frosted transparent keycaps and custom transparent linear mechanical switches.",
    "category": "keyboards",
    "brand": "Lofree",
    "pricePaise": 1899900,
    "mrpPaise": 2199900,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1541140532154-b024d705b909?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1541140532154-b024d705b909?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 290,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "TRANSPARENT ART",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Chassis",
        "value": "High-Purity Transparent Polycarbonate"
      },
      {
        "label": "Switches",
        "value": "Kailh Jellyfish Clear Linear"
      }
    ],
    "highlights": [
      "100% Transparent Build",
      "Kailh Jellyfish Switches",
      "White LED Light Effects",
      "Plated Stainless Top"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_mode_sonnet_custom",
    "slug": "mode-sonnet-custom-mechanical-keyboard",
    "name": "Mode Sonnet Premium Custom Mechanical Keyboard (Brushed Brass Accent, Hot-Swap)",
    "subtitle": "Artisan CNC Construction, Stacked Silicone Dampening, FR4 Plate, Anodized Navy",
    "description": "A monument to custom keyboard engineering with chamfered edges and interchangeable accent plates.",
    "category": "keyboards",
    "brand": "Mode",
    "pricePaise": 3899900,
    "mrpPaise": 4499900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 190,
    "inStock": true,
    "availableStock": 3,
    "reservedStock": 0,
    "badge": "ARTISAN LUXURY",
    "isDealOfTheDay": true,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Material",
        "value": "Solid 6063 Aluminum + Brass Accent Bar"
      },
      {
        "label": "Plate",
        "value": "Custom FR4 Multi-Layout Hot-Swap"
      }
    ],
    "highlights": [
      "Brushed Brass Accent",
      "Solid Aluminum CNC",
      "Silicone Isolation Dampening",
      "Hot-Swap PCB"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_mode_envoy_65",
    "slug": "mode-envoy-65-custom-mechanical-keyboard",
    "name": "Mode Envoy 65% Custom Mechanical Keyboard (Mirrored Copper Weight)",
    "subtitle": "Lattice Block Mounting, Seamless Screwless Exterior, Solid Copper Rear Weight",
    "description": "Boutique custom 65% keyboard with innovative lattice block mounting blocks for plush acoustics.",
    "category": "keyboards",
    "brand": "Mode",
    "pricePaise": 3299900,
    "mrpPaise": 3799900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 140,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "BOUTIQUE 65%",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Weight Bar",
        "value": "Solid Polished Mirror Copper"
      },
      {
        "label": "Mounting",
        "value": "Flexible Lattice Block Suspension"
      }
    ],
    "highlights": [
      "Mirrored Copper Weight",
      "Lattice Block Suspension",
      "Screwless Seamless Design",
      "Deep Thock Acoustics"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_nuphy_air75_v2",
    "slug": "nuphy-air75-v2-wireless-low-profile-keyboard",
    "name": "NuPhy Air75 V2 Ultra-Slim Wireless Mechanical Keyboard (Cowberry 1000Hz)",
    "subtitle": "1000Hz 2.4G Polling, AirFeet Laptop Stacking, Gateron Low-Profile Cowberry Switches",
    "description": "The ultimate laptop companion. Sits directly over your MacBook keyboard with rubber AirFeet rails.",
    "category": "keyboards",
    "brand": "NuPhy",
    "pricePaise": 1399900,
    "mrpPaise": 1599900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1620,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "LAPTOP COMPANION",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Polling",
        "value": "1000Hz 2.4GHz Gaming-Grade Wireless"
      },
      {
        "label": "Compatibility",
        "value": "AirFeet MacBook Keyboard Overlap"
      }
    ],
    "highlights": [
      "AirFeet Laptop Stacking",
      "1000Hz Polling Rate",
      "Cowberry Linear Switches",
      "Ultra-Slim Travel Profile"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_nuphy_halo75",
    "slug": "nuphy-halo75-wireless-mechanical-keyboard",
    "name": "NuPhy Halo75 Wireless Mechanical Keyboard (Night Breeze Switches, Halo Band)",
    "subtitle": "Solid Aluminum Top, RGB Halo Light Ring, Double-Shot PBT Keycaps, GhostBar Spacebar",
    "description": "Engineered with sound-dampening GhostBar spacebar that eliminates hollow spacebar rattle completely.",
    "category": "keyboards",
    "brand": "NuPhy",
    "pricePaise": 1549900,
    "mrpPaise": 1799900,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1541140532154-b024d705b909?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1541140532154-b024d705b909?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 980,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "GHOSTBAR TECH",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Lighting",
        "value": "Continuous Halo RGB Perimeter Ring"
      },
      {
        "label": "Acoustic",
        "value": "GhostBar Silicone-Injected Spacebar"
      }
    ],
    "highlights": [
      "GhostBar Silent Spacebar",
      "Halo Light Ring",
      "Solid Aluminum Top Frame",
      "Night Breeze Lubed Switches"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_epomaker_rt100",
    "slug": "epomaker-rt100-retro-mechanical-keyboard-tv",
    "name": "Epomaker RT100 Retro Mechanical Keyboard with Mini Smart TV (Sea Salt Silent)",
    "subtitle": "Detachable Smart Mini TV Screen (Clock/CPU/GIFs), Retro 97-Key Gasket Mount",
    "description": "Features a cute modular retro mini TV screen that displays live CPU temperatures, date, and animated GIFs.",
    "category": "keyboards",
    "brand": "Epomaker",
    "pricePaise": 999900,
    "mrpPaise": 1299900,
    "discountPercent": 23,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1541140532154-b024d705b909?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1541140532154-b024d705b909?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.6,
    "reviewCount": 2150,
    "inStock": true,
    "availableStock": 18,
    "reservedStock": 0,
    "badge": "SMART MINI TV",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "Detachable Customizable Smart Mini Display"
      },
      {
        "label": "Switches",
        "value": "Epomaker Sea Salt Silent Switches"
      }
    ],
    "highlights": [
      "Mini Smart TV Display",
      "Retro Mechanical Aesthetic",
      "Sea Salt Silent Switches",
      "Multi-Function Rotary Knob"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_epomaker_th80_pro",
    "slug": "epomaker-th80-pro-v2-wireless-mechanical-keyboard",
    "name": "Epomaker TH80 Pro V2 75% Hot-Swap Mechanical Keyboard (Flamingo Switches)",
    "subtitle": "75% Compact Gasket Structure, South-Facing RGB, Factory-Lubed Stabilizers",
    "description": "One of the most praised enthusiast budget boards with satisfying thocky bottom-out sound right out of the box.",
    "category": "keyboards",
    "brand": "Epomaker",
    "pricePaise": 799900,
    "mrpPaise": 999900,
    "discountPercent": 20,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 3400,
    "inStock": true,
    "availableStock": 22,
    "reservedStock": 0,
    "badge": "BUDGET THOCK",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Mounting",
        "value": "Gasket Mounted with Poron Foam Layering"
      },
      {
        "label": "Battery",
        "value": "4000 mAh High Capacity"
      }
    ],
    "highlights": [
      "Factory Lubed Flamingo Switches",
      "Poron Gasket Damping",
      "4000mAh Battery",
      "Customizable Knob"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_wooting_60he_plus",
    "slug": "wooting-60he-plus-analog-hall-effect-keyboard",
    "name": "Wooting 60HE+ Analog Hall Effect Gaming Keyboard (Rapid Trigger 0.1mm)",
    "subtitle": "Gateron Lekker Hall Effect Magnetic Switches, Rapid Trigger, 0.1mm to 4.0mm Actuation",
    "description": "The undisputed esports king in Valorant and CS2. Magnetic switches allow instantaneous reset and analog movement.",
    "category": "keyboards",
    "brand": "Wooting",
    "pricePaise": 2499900,
    "mrpPaise": 2899900,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 1250,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "ESPORTS APEX",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Switches",
        "value": "Lekker Hall Effect Magnetic Sensors"
      },
      {
        "label": "Actuation",
        "value": "Fully Adjustable 0.1mm to 4.0mm"
      }
    ],
    "highlights": [
      "Rapid Trigger 0.1mm",
      "Hall Effect Magnetic Switches",
      "Analog Stick Movement",
      "Tournament Verified"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_razer_huntsman_v3_pro",
    "slug": "razer-huntsman-v3-pro-analog-optical-keyboard",
    "name": "Razer Huntsman V3 Pro TKL Analog Optical Gaming Keyboard (Rapid Trigger Mode)",
    "subtitle": "2nd Gen Analog Optical Switches, Rapid Trigger, Textured Doubleshot PBT, Multi-Dial",
    "description": "Packs rapid trigger and adjustable actuation into an aircraft-grade aluminum top plate with magnetic wrist rest.",
    "category": "keyboards",
    "brand": "Razer",
    "pricePaise": 2199900,
    "mrpPaise": 2599900,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 840,
    "inStock": true,
    "availableStock": 11,
    "reservedStock": 0,
    "badge": "RAPID TRIGGER",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Actuation",
        "value": "0.1mm to 4.0mm Rapid Trigger Mode"
      },
      {
        "label": "Plate",
        "value": "5052 Brushed Aluminum Alloy"
      }
    ],
    "highlights": [
      "Gen-2 Analog Optical Switches",
      "Rapid Trigger Mode",
      "Magnetic Leatherette Wrist Rest",
      "Digital LED Array Indicator"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_hhkb_hybrid_types",
    "slug": "hhkb-professional-hybrid-type-s-topre",
    "name": "HHKB Professional Hybrid Type-S (Topre Electrostatic Capacitive, Charcoal)",
    "subtitle": "Silent Topre 45g Capacitive Switches, Minimalist Unix Layout, PBT Dye-Sub Keycaps",
    "description": "The holy grail of programming keyboards. Ultra-smooth electrostatic capacitive Topre switches made in Japan.",
    "category": "keyboards",
    "brand": "HHKB",
    "pricePaise": 3299900,
    "mrpPaise": 3699900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 580,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "DEV LEGEND",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Switches",
        "value": "Topre Electrostatic Capacitive 45g (Silent)"
      },
      {
        "label": "Layout",
        "value": "Ergonomic Control-Centric Unix Layout"
      }
    ],
    "highlights": [
      "Topre Silent Switches",
      "Legendary Unix Layout",
      "Made in Japan",
      "Bluetooth & USB-C Hybrid"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_realforce_r3_topre",
    "slug": "realforce-r3-wireless-topre-keyboard",
    "name": "Realforce R3 TKL Wireless Topre Mechanical Keyboard (Black, Silent 45g)",
    "subtitle": "Topre Electrostatic Capacitive Switches, APC 4-Level Adjustable Actuation, Bluetooth 5.0",
    "description": "Japanese craftsmanship with APC (Actuation Point Change) technology to adjust switch depth on the fly.",
    "category": "keyboards",
    "brand": "Realforce",
    "pricePaise": 3199900,
    "mrpPaise": 3599900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 320,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "TOPRE APC",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Technology",
        "value": "Topre APC (Actuation Point Changer: 0.8 to 3.0mm)"
      },
      {
        "label": "Connectivity",
        "value": "Bluetooth 5.0 + Type-C 4-Device Memory"
      }
    ],
    "highlights": [
      "APC Adjustable Actuation",
      "Silent Topre Switches",
      "Made in Japan",
      "4-Device Bluetooth Switch"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dygma_raise_2",
    "slug": "dygma-raise-2-split-ergonomic-mechanical-keyboard",
    "name": "Dygma Raise 2 Split Ergonomic Wireless Mechanical Keyboard (Underglow RGB, Palm Rests)",
    "subtitle": "Split Ergonomic Body, 8 Thumb Keys, Hot-Swappable Switches, Wireless RF & BT",
    "description": "Unite ergonomics and typing speed with an adjustable split angle and 8 dedicated thumb keys.",
    "category": "keyboards",
    "brand": "Dygma",
    "pricePaise": 3999900,
    "mrpPaise": 4599900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 190,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "SPLIT ERGO",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Design",
        "value": "True Split Ergonomic with Magnetic Lock Bridge"
      },
      {
        "label": "Thumb Cluster",
        "value": "8 Dedicated Thumb Keys"
      }
    ],
    "highlights": [
      "True Split Ergonomics",
      "8 Thumb Keys Cluster",
      "Hot-Swappable PCB",
      "Integrated Palm Rests"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_zsa_moonlander",
    "slug": "zsa-moonlander-mark-1-split-ergonomic-keyboard",
    "name": "ZSA Moonlander Mark I Split Ergonomic Ortholinear Keyboard (White, Kailh Box Red)",
    "subtitle": "Ortholinear Columnar Grid, Adjustable Tenting Wing Legs, Hot-Swap, Open Source Oryx",
    "description": "Columnar keys align with your fingers natural reach, reducing hand fatigue over long coding sessions.",
    "category": "keyboards",
    "brand": "ZSA",
    "pricePaise": 3699900,
    "mrpPaise": 4199900,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 280,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "COLUMNAR ERGO",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Layout",
        "value": "Ortholinear Columnar Finger Layout"
      },
      {
        "label": "Tenting",
        "value": "Independent Tenting Angles with Wing Legs"
      }
    ],
    "highlights": [
      "Ortholinear Column Layout",
      "Adjustable Tenting Wings",
      "Oryx Open Firmware Config",
      "Hot-Swappable Sockets"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_drop_ctrl_high_profile",
    "slug": "drop-ctrl-high-profile-mechanical-keyboard",
    "name": "Drop CTRL High-Profile Mechanical Keyboard (Solid Anodized Space Gray Aluminum)",
    "subtitle": "CNC Heavy Aluminum Block, Custom Diffuser RGB Ring, Hot-Swap, QMK Firmware",
    "description": "Machined from a monolithic block of aircraft aluminum with tall borders that conceal switches.",
    "category": "keyboards",
    "brand": "Drop",
    "pricePaise": 2199900,
    "mrpPaise": 2599900,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 1420,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "HEAVY CNC",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Chassis",
        "value": "Heavy Monolithic CNC Anodized Aluminum Block"
      },
      {
        "label": "Lighting",
        "value": "Dual USB-C Pass + Perimeter RGB Diffuser Ring"
      }
    ],
    "highlights": [
      "Heavyweight Aluminum Block",
      "Dual USB-C Hub Ports",
      "Custom Diffuser Light Ring",
      "QMK Open Configuration"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_logitech_g915_tkl",
    "slug": "logitech-g915-tkl-lightspeed-wireless-keyboard",
    "name": "Logitech G915 TKL LIGHTSPEED Wireless RGB Mechanical Keyboard (GL Tactile)",
    "subtitle": "Ultra-Thin Aircraft Aluminum, LIGHTSPEED 1ms Wireless, 40hr Battery with RGB On",
    "description": "Pro-grade 1ms wireless performance in an impossibly slim 22mm brushed aluminum chassis.",
    "category": "keyboards",
    "brand": "Logitech",
    "pricePaise": 1899500,
    "mrpPaise": 2299500,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 4500,
    "inStock": true,
    "availableStock": 20,
    "reservedStock": 0,
    "badge": "SLIM WIRELESS",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Height",
        "value": "22mm Ultra-Thin Brushed Aircraft Aluminum"
      },
      {
        "label": "Wireless",
        "value": "LIGHTSPEED 1ms + Bluetooth"
      }
    ],
    "highlights": [
      "LIGHTSPEED 1ms Wireless",
      "GL Low-Profile Switches",
      "Aircraft-Grade 5052 Alloy",
      "40hr Battery Life"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_logitech_mx_master_3s",
    "slug": "logitech-mx-master-3s-performance-wireless-mouse",
    "name": "Logitech MX Master 3S Performance Wireless Mouse (Pale Gray / Graphite)",
    "subtitle": "8K DPI Any-Surface Tracking, Quiet Clicks, MagSpeed Electromagnetic Scroll Wheel",
    "description": "An iconic master mouse remastered with quiet clicks and an 8,000 DPI track-on-glass sensor.",
    "category": "accessories",
    "brand": "Logitech",
    "pricePaise": 949500,
    "mrpPaise": 1099500,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 5410,
    "inStock": true,
    "availableStock": 30,
    "reservedStock": 0,
    "badge": "WORKBENCH ESSENTIAL",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Sensor",
        "value": "Darkfield 8,000 DPI (Tracks on glass)"
      },
      {
        "label": "Scroll",
        "value": "MagSpeed Electromagnetic (1,000 lines/sec)"
      }
    ],
    "highlights": [
      "8,000 DPI Any-Surface Sensor",
      "MagSpeed Electromagnetic Scroll",
      "90% Quieter Clicks",
      "Logi Bolt + Bluetooth"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_logitech_mx_vertical",
    "slug": "logitech-mx-vertical-ergonomic-wireless-mouse",
    "name": "Logitech MX Vertical Advanced Ergonomic Wireless Mouse",
    "subtitle": "Natural 57-degree Handshake Angle, 4000 DPI High-Precision Sensor, USB-C Fast Charge",
    "description": "Reduces muscle strain by 10% compared to a traditional mouse, promoting an ergonomic forearm posture.",
    "category": "accessories",
    "brand": "Logitech",
    "pricePaise": 899500,
    "mrpPaise": 1049500,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 2800,
    "inStock": true,
    "availableStock": 16,
    "reservedStock": 0,
    "badge": "ERGONOMIC MASTER",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Angle",
        "value": "57° Natural Ergonomic Handshake Posture"
      },
      {
        "label": "Battery",
        "value": "Up to 4 months per charge"
      }
    ],
    "highlights": [
      "57° Handshake Ergonomics",
      "Reduces Muscle Strain 10%",
      "Quick 1-Min Charge = 3 Hours",
      "Logi Flow Multi-Device"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_logitech_lift_ergo",
    "slug": "logitech-lift-vertical-ergonomic-mouse-rose",
    "name": "Logitech Lift Vertical Ergonomic Wireless Mouse (Rose / Graphite / Off-White)",
    "subtitle": "Designed for Small to Medium Hands, Whisper-Quiet Clicks, SmartWheel Scroll",
    "description": "Perfect fit for smaller hands with smooth rubber grip and whisper-quiet click buttons.",
    "category": "accessories",
    "brand": "Logitech",
    "pricePaise": 649500,
    "mrpPaise": 749500,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1950,
    "inStock": true,
    "availableStock": 20,
    "reservedStock": 0,
    "badge": "SMALL HAND FIT",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Fit",
        "value": "Specially Contoured for Small to Medium Hands"
      },
      {
        "label": "Battery",
        "value": "Up to 2 Years on 1 AA Battery"
      }
    ],
    "highlights": [
      "57° Posture Angle",
      "Whisper-Quiet Click",
      "SmartWheel Precision Scroll",
      "2-Year Battery Life"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_razer_viper_v3_pro",
    "slug": "razer-viper-v3-pro-wireless-esports-mouse",
    "name": "Razer Viper V3 Pro Ultra-Lightweight Wireless Esports Mouse (54g, 8000Hz HyperPolling)",
    "subtitle": "Focus Pro 35K Gen-2 Optical Sensor, Optical Mouse Switches Gen-3, Symmetrical Pro Shape",
    "description": "Engineered in close collaboration with premier Counter-Strike and Valorant esports champions.",
    "category": "accessories",
    "brand": "Razer",
    "pricePaise": 1599900,
    "mrpPaise": 1899900,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 910,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "ESPORTS CERTIFIED",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Weight",
        "value": "54 grams Featherweight Chassis"
      },
      {
        "label": "Polling",
        "value": "True 8000Hz Wireless HyperPolling"
      }
    ],
    "highlights": [
      "54g Ultra-Lightweight",
      "8000Hz HyperPolling",
      "Focus Pro 35K Sensor",
      "95h Battery Life"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_razer_deathadder_v3_pro",
    "slug": "razer-deathadder-v3-pro-ergonomic-mouse",
    "name": "Razer DeathAdder V3 Pro Wireless Ergonomic Esports Mouse (63g, Black)",
    "subtitle": "Iconic Ergonomic Shape Refined, Focus Pro 30K Optical Sensor, Optical Gen-3 Switches",
    "description": "The winningest mouse shape in competitive gaming history, trimmed down to a featherlight 63 grams.",
    "category": "accessories",
    "brand": "Razer",
    "pricePaise": 1299900,
    "mrpPaise": 1599900,
    "discountPercent": 19,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 3200,
    "inStock": true,
    "availableStock": 18,
    "reservedStock": 0,
    "badge": "LEGENDARY ERGO",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Weight",
        "value": "63 grams Ergonomic Form"
      },
      {
        "label": "Battery",
        "value": "Up to 90 Hours Continuous Gaming"
      }
    ],
    "highlights": [
      "Iconic Ergonomic Shape",
      "63g Lightweight",
      "Focus Pro 30K Sensor",
      "90h Long Battery"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_pulsar_x2v2",
    "slug": "pulsar-x2v2-wireless-gaming-mouse-black",
    "name": "Pulsar X2V2 Wireless Ultra-Lightweight Gaming Mouse (53g, Optical Clicks)",
    "subtitle": "Optical Switches (No Double Click), PixArt PAW3395 Sensor, 4K Polling Ready",
    "description": "Clean symmetrical shape with zero holes in the outer shell, weighing a featherlight 53 grams.",
    "category": "accessories",
    "brand": "Pulsar",
    "pricePaise": 899900,
    "mrpPaise": 1099900,
    "discountPercent": 18,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 740,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "FEATHERLIGHT",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Weight",
        "value": "53 grams Solid Shell"
      },
      {
        "label": "Sensor",
        "value": "PixArt PAW3395 26K DPI"
      }
    ],
    "highlights": [
      "53g Solid Shell No Holes",
      "Optical Switches No Double Clicks",
      "PAW3395 Sensor",
      "Pulsar Blue Encoder"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_caldigit_ts4_dock",
    "slug": "caldigit-ts4-thunderbolt-4-dock-18-ports",
    "name": "CalDigit TS4 Thunderbolt 4 Docking Station (18 Ports, 98W Charging, Dual 6K Displays)",
    "subtitle": "The Ultimate Workstation Hub, 2.5GbE Ethernet, 3x Thunderbolt 4 Ports, UHS-II SD Card",
    "description": "Offering an unprecedented 18 ports of connectivity, up to 98W host laptop power delivery, and dual 6K support.",
    "category": "accessories",
    "brand": "CalDigit",
    "pricePaise": 3899900,
    "mrpPaise": 4499900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 820,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "PRO HUB",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Ports",
        "value": "18 Dedicated Expansion Ports"
      },
      {
        "label": "Power Delivery",
        "value": "98 Watts Continuous Charging"
      }
    ],
    "highlights": [
      "18 Ports Expansion",
      "98W Laptop Charging",
      "2.5GbE Network",
      "Dual 6K Displays"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_caldigit_element_hub",
    "slug": "caldigit-thunderbolt-4-element-hub",
    "name": "CalDigit Thunderbolt 4 Element Hub (4x Thunderbolt 4 Ports, 4x USB-A 10Gb/s)",
    "subtitle": "Pure High-Speed Thunderbolt 4 & USB4 Architecture, 60W Laptop Charging",
    "description": "A compact powerhouse for creators who want multiple ultra-high-speed Thunderbolt 4 and USB 3.2 Gen2 ports.",
    "category": "accessories",
    "brand": "CalDigit",
    "pricePaise": 2199900,
    "mrpPaise": 2599900,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 460,
    "inStock": true,
    "availableStock": 9,
    "reservedStock": 0,
    "badge": "COMPACT TB4",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Ports",
        "value": "4x Thunderbolt 4 / USB4 + 4x USB-A 10Gb/s"
      },
      {
        "label": "Display",
        "value": "Supports Single 8K or Dual 4K 60Hz"
      }
    ],
    "highlights": [
      "4x Thunderbolt 4 Ports",
      "4x 10Gb/s USB-A Ports",
      "60W Power Delivery",
      "Compact Solid Aluminum"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_anker_778_dock",
    "slug": "anker-778-thunderbolt-4-dock-12in1",
    "name": "Anker 778 Thunderbolt 4 Docking Station (12-in-1, 100W Charging, 8K Display)",
    "subtitle": "Thunderbolt 4 Upstream, Gigabit Ethernet, 100W Max Laptop PD, Triple Monitor Ready",
    "description": "Expand single-cable workstation capabilities with fast 10Gbps USB data transfers and triple screen displays.",
    "category": "accessories",
    "brand": "Anker",
    "pricePaise": 2699900,
    "mrpPaise": 3199900,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 620,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "ANKER DOCK",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Power",
        "value": "100W Max Laptop Charging"
      },
      {
        "label": "Displays",
        "value": "Triple Display Support (DisplayPort + HDMI)"
      }
    ],
    "highlights": [
      "100W Fast Laptop Charging",
      "Thunderbolt 4 40Gb/s",
      "Triple Display Output",
      "Compact Ribbed Design"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_satechi_usb4_multiport",
    "slug": "satechi-usb4-multiport-adapter-8k",
    "name": "Satechi USB4 Multiport Adapter with 8K HDMI (Space Gray Aluminum)",
    "subtitle": "8K 60Hz HDMI 2.1, 2.5Gbps Ethernet, 100W PD Charging, USB-C 10Gbps Data",
    "description": "Sleek travel-ready anodized aluminum adapter unleashing next-gen USB4 protocol transfer speeds.",
    "category": "accessories",
    "brand": "Satechi",
    "pricePaise": 999900,
    "mrpPaise": 1249900,
    "discountPercent": 20,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 890,
    "inStock": true,
    "availableStock": 15,
    "reservedStock": 0,
    "badge": "TRAVEL USB4",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Video",
        "value": "8K 60Hz or 4K 120Hz HDMI 2.1"
      },
      {
        "label": "Ethernet",
        "value": "2.5 Gigabit Ethernet Port"
      }
    ],
    "highlights": [
      "8K 60Hz HDMI 2.1 Output",
      "2.5Gbps Fast Ethernet",
      "100W Pass-Through Charging",
      "Anodized Space Gray"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_elgato_stream_deck_plus",
    "slug": "elgato-stream-deck-plus-audio-mixer-controller",
    "name": "Elgato Stream Deck + Studio Audio Console & Controller (8 LCD Keys, 4 Dials, Touch Strip)",
    "subtitle": "Tactile Rotary Knobs, Dynamic LCD Touch Strip, Wave Link Virtual Mixer Integration",
    "description": "Audio mixer, studio controller, production console with satisfying rotary encoders.",
    "category": "accessories",
    "brand": "Elgato",
    "pricePaise": 1999900,
    "mrpPaise": 2399900,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 670,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "STREAM MASTER",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Controls",
        "value": "8 Customizable LCD Keys + 4 Push Dials"
      },
      {
        "label": "Touch",
        "value": "108 x 14 mm Dynamic LCD Touch Strip"
      }
    ],
    "highlights": [
      "4 Tactile Rotary Dials",
      "8 Custom LCD Keys",
      "Dynamic Touch Strip",
      "Wave Link Studio Mixer"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_elgato_stream_deck_mk2",
    "slug": "elgato-stream-deck-mk2-15-keys",
    "name": "Elgato Stream Deck MK.2 (15 Customizable LCD Keys, Detachable Stand, White / Black)",
    "subtitle": "15 Transparent Glass LCD Key Badges, Hotkey Actions, Stream & Studio Macros",
    "description": "Trigger unlimited actions with a tap. Launch apps, mute audio, toggle lights, and switch scenes.",
    "category": "accessories",
    "brand": "Elgato",
    "pricePaise": 1449900,
    "mrpPaise": 1699900,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 3900,
    "inStock": true,
    "availableStock": 18,
    "reservedStock": 0,
    "badge": "STUDIO STANDARD",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Keys",
        "value": "15 Customizable Color LCD Keys"
      },
      {
        "label": "Stand",
        "value": "45° Ergonomic Magnetic Stand"
      }
    ],
    "highlights": [
      "15 Custom LCD Keys",
      "OBS & Discord Integration",
      "Detachable Faceplate",
      "One-Touch Macro Triggers"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_elgato_wave_3",
    "slug": "elgato-wave-3-premium-usb-microphone",
    "name": "Elgato Wave:3 Premium USB Condenser Microphone & Digital Mixer (Clipguard Tech)",
    "subtitle": "24-bit/96kHz Converter, Proprietary Clipguard Anti-Distortion, Wave Link Digital Mixer",
    "description": "Broadcast-grade condenser capsule with anti-distortion Clipguard so your voice never peaks or crackles.",
    "category": "accessories",
    "brand": "Elgato",
    "pricePaise": 1399900,
    "mrpPaise": 1699900,
    "discountPercent": 18,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 2450,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "PODCAST CONDENSER",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Audio",
        "value": "24-Bit / 96kHz Analog-to-Digital"
      },
      {
        "label": "Safety",
        "value": "Proprietary Clipguard Limiter"
      }
    ],
    "highlights": [
      "Clipguard Anti-Distortion",
      "Capacitive Tap-to-Mute",
      "Wave Link Virtual Mixer",
      "24-bit/96kHz Resolution"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dell_ultrasharp_32_4k",
    "slug": "dell-ultrasharp-32-4k-usb-c-hub-monitor-u3223qe",
    "name": "Dell UltraSharp 32 4K USB-C Hub Monitor (IPS Black, 2000:1 Contrast, 90W PD)",
    "subtitle": "Brilliant 4K UHD, 98% DCI-P3 Color Accuracy, Built-in RJ45 KVM Switch",
    "description": "Features groundbreaking IPS Black technology with 2000:1 contrast and comprehensive USB-C single-cable dock.",
    "category": "accessories",
    "brand": "Dell",
    "pricePaise": 7999900,
    "mrpPaise": 9499900,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 690,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "CREATOR REFERENCE",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Panel",
        "value": "31.5\" 4K UHD IPS Black Technology"
      },
      {
        "label": "Contrast",
        "value": "2000:1 Contrast Ratio (Deep Blacks)"
      }
    ],
    "highlights": [
      "IPS Black 2000:1 Contrast",
      "4K UHD Resolution",
      "90W USB-C Single-Cable Hub",
      "Built-in KVM Switch"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_viewfinity_s9_5k",
    "slug": "samsung-viewfinity-s9-27-5k-studio-monitor",
    "name": "Samsung ViewFinity S9 27\" 5K Studio Display (5120 x 2880, Matte Screen, 4K SlimFit Cam)",
    "subtitle": "99% DCI-P3, Smart Calibration via Smartphone, Thunderbolt 4 90W, Matte Anti-Glare",
    "description": "Crisp 218 PPI 5K resolution designed specifically for graphic designers, photographers, and Mac creators.",
    "category": "accessories",
    "brand": "Samsung",
    "pricePaise": 9999900,
    "mrpPaise": 12999900,
    "discountPercent": 23,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 480,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "5K STUDIO",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Resolution",
        "value": "27\" 5K UHD (5120 x 2880, 218 PPI)"
      },
      {
        "label": "Webcam",
        "value": "Magnetic 4K SlimFit Camera Included"
      }
    ],
    "highlights": [
      "5K 5120x2880 Resolution",
      "Matte Anti-Glare Display",
      "Thunderbolt 4 90W Hub",
      "Smart Calibration App"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sandisk_pro_blade_ssd",
    "slug": "sandisk-professional-pro-blade-transport-2tb-nvme",
    "name": "SanDisk Professional PRO-BLADE Transport 2TB Modular NVMe SSD (2000MB/s)",
    "subtitle": "Modular SSD Mag Ecosystem, Ultra-Rugged Aluminum Heat-Dissipating Enclosure, USB-C 20Gbps",
    "description": "Hot-swap internal SSD Mags seamlessly between field shoot rigs and workstation desktop hubs.",
    "category": "accessories",
    "brand": "SanDisk",
    "pricePaise": 2499900,
    "mrpPaise": 2999900,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 380,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "MODULAR PRO SSD",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Speed",
        "value": "Up to 2,000 MB/s Read & Write"
      },
      {
        "label": "Ecosystem",
        "value": "Modular Interchangeable SSD Mags"
      }
    ],
    "highlights": [
      "2,000 MB/s NVMe Transfer",
      "Modular Hot-Swap Mags",
      "Tactile Aluminum Heat Sink",
      "Drop Resistant up to 3m"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_t9_ssd_2tb",
    "slug": "samsung-t9-portable-ssd-2tb-usb32-gen2x2",
    "name": "Samsung T9 Portable SSD 2TB (USB 3.2 Gen 2x2, Speeds up to 2,000MB/s)",
    "subtitle": "Rugged Non-Slip Rubber Shield, Dynamic Thermal Guard, 3-Meter Drop Protection",
    "description": "Twice as fast as the previous T7 shield. Move 4K video files and game libraries in seconds.",
    "category": "accessories",
    "brand": "Samsung",
    "pricePaise": 1899900,
    "mrpPaise": 2399900,
    "discountPercent": 21,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 1850,
    "inStock": true,
    "availableStock": 20,
    "reservedStock": 0,
    "badge": "HIGH SPEED 2TB",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Speed",
        "value": "Up to 2,000 MB/s (USB 3.2 Gen 2x2)"
      },
      {
        "label": "Protection",
        "value": "3-Meter Drop Resistance"
      }
    ],
    "highlights": [
      "2,000 MB/s Transfer Speed",
      "Rugged Silicon Shield",
      "Dynamic Thermal Guard",
      "Compact Pocket Form"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_anker_prime_20k",
    "slug": "anker-prime-20000mah-200w-power-bank",
    "name": "Anker Prime 20,000mAh Power Bank (200W Output, Smart Digital Display)",
    "subtitle": "Simultaneous 100W Dual Laptop Charging, Ultra-Compact Aviation Grade",
    "description": "Equipped with two high-powered USB-C ports totaling 200W output, charging two laptops at once.",
    "category": "accessories",
    "brand": "Anker",
    "pricePaise": 1199900,
    "mrpPaise": 1499900,
    "discountPercent": 20,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1622445262464-84b14e0745b1?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1622445262464-84b14e0745b1?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 2150,
    "inStock": true,
    "availableStock": 22,
    "reservedStock": 0,
    "badge": "MUST HAVE TRAVEL",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Capacity",
        "value": "20,000mAh (72Wh - TSA Flight Safe)"
      },
      {
        "label": "Output",
        "value": "200W Total (Dual 100W USB-C Ports)"
      }
    ],
    "highlights": [
      "200W Total Output",
      "Dual 100W Laptop Charging",
      "Smart Digital Stats",
      "TSA Carry-On Safe"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_anker_prime_27k",
    "slug": "anker-prime-27650mah-250w-power-bank",
    "name": "Anker Prime 27,650mAh Power Bank (250W Max Output, Bluetooth App Control)",
    "subtitle": "Charge 3 Devices Fast, Smart App Monitoring, Real-Time Power Curves, TSA Approved 99.5Wh",
    "description": "The ultimate high-capacity power bank. Monitor charging curves and locate your battery via Bluetooth app.",
    "category": "accessories",
    "brand": "Anker",
    "pricePaise": 1699900,
    "mrpPaise": 2099900,
    "discountPercent": 19,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1622445262464-84b14e0745b1?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1622445262464-84b14e0745b1?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 1140,
    "inStock": true,
    "availableStock": 15,
    "reservedStock": 0,
    "badge": "MONSTER 250W",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Capacity",
        "value": "27,650mAh (99.54Wh Aviation Safe)"
      },
      {
        "label": "Output",
        "value": "250W Multi-Port Simultaneous"
      }
    ],
    "highlights": [
      "250W Multi-Device Output",
      "Bluetooth Smart App Stats",
      "170W Hyper Fast Self-Charge",
      "TSA Carry-On Approved"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dji_mini_4_pro",
    "slug": "dji-mini-4-pro-drone-fly-more-combo",
    "name": "DJI Mini 4 Pro Drone with RC 2 Smart Controller (Omnidirectional Obstacle Sensing)",
    "subtitle": "Under 249g Ultralight, 4K/60fps HDR True Vertical Shooting, 34-Min Flight",
    "description": "Our most advanced mini-camera drone with ActiveTrack 360° and 20km FHD transmission. Under 249g.",
    "category": "accessories",
    "brand": "DJI",
    "pricePaise": 9499000,
    "mrpPaise": 10999000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 640,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "CREATOR TOOL",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Weight",
        "value": "< 249g Regulation-Friendly"
      },
      {
        "label": "Camera",
        "value": "4K/60fps HDR True Vertical 48MP"
      }
    ],
    "highlights": [
      "Under 249g Weight",
      "4K/60fps HDR Vertical Shoot",
      "360° Obstacle Sensing",
      "DJI RC 2 Included"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dji_mic_2",
    "slug": "dji-mic-2-wireless-microphone-dual-tx-rx",
    "name": "DJI Mic 2 Dual-Transmitter Wireless Microphone Kit with Charging Case",
    "subtitle": "32-Bit Float Internal Recording, Intelligent Active Noise Cancelling, 18-Hour Battery",
    "description": "Premium glass touchscreen receiver, crystal-clear 32-bit float audio, and magnetic clip transmitters.",
    "category": "accessories",
    "brand": "DJI",
    "pricePaise": 3399000,
    "mrpPaise": 3999000,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 820,
    "inStock": true,
    "availableStock": 11,
    "reservedStock": 0,
    "badge": "VLOG AUDIO",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Recording",
        "value": "32-Bit Float Internal Back-Up"
      },
      {
        "label": "Range",
        "value": "250m Transmission Range"
      }
    ],
    "highlights": [
      "32-Bit Float Onboard",
      "Intelligent Noise Canceling",
      "OLED Touchscreen Receiver",
      "Magnetic Clip-On Design"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_benq_screenbar_plus",
    "slug": "benq-screenbar-plus-e-reading-led-lamp",
    "name": "BenQ ScreenBar Plus Auto-Dimming LED Monitor Light with Desktop Dial",
    "subtitle": "Zero Screen Glare Optical Design, Auto-Dimming Ambient Sensor, Space-Saving Clip",
    "description": "Eliminates desktop clutter and eye strain with precision forward-angle light that illuminates only the desk.",
    "category": "accessories",
    "brand": "BenQ",
    "pricePaise": 1299000,
    "mrpPaise": 1599000,
    "discountPercent": 19,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 3100,
    "inStock": true,
    "availableStock": 20,
    "reservedStock": 0,
    "badge": "EYE RELIEF",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Optics",
        "value": "Patented Asymmetric Glare-Free Optics"
      },
      {
        "label": "Sensor",
        "value": "Built-in Desktop Ambient Light Sensor"
      }
    ],
    "highlights": [
      "Zero Screen Glare",
      "Desktop Rotary Dial",
      "Automatic Dimming",
      "No Lamp Base Needed"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_apple_watch_ultra_2",
    "slug": "apple-watch-ultra-2-gps-cellular-titanium",
    "name": "Apple Watch Ultra 2 (GPS + Cellular, 49mm Titanium Case with Ocean Band)",
    "subtitle": "Precision Dual-Frequency GPS, 3000-nit Display, Depth Gauge, 36hr Battery",
    "description": "The most capable and rugged Apple Watch pushes boundaries with S9 SiP and 3000-nit screen.",
    "category": "wearables",
    "brand": "Apple",
    "pricePaise": 8990000,
    "mrpPaise": 9990000,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 1120,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "EXPEDITION READY",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Case",
        "value": "49mm Aerospace Grade 5 Titanium"
      },
      {
        "label": "Display",
        "value": "Always-On Retina OLED 3,000 nits"
      }
    ],
    "highlights": [
      "49mm Titanium Body",
      "3000-nit Brightness",
      "Precision Dual GPS",
      "Action Button Custom"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_apple_watch_series_9",
    "slug": "apple-watch-series-9-gps-cellular-45mm",
    "name": "Apple Watch Series 9 (GPS + Cellular, 45mm Midnight Aluminum)",
    "subtitle": "S9 SiP, Double Tap Gesture, 2000-nit Display, ECG & Blood Oxygen Apps",
    "description": "A magical new way to interact without touching the screen using Double Tap pinch gestures.",
    "category": "wearables",
    "brand": "Apple",
    "pricePaise": 5190000,
    "mrpPaise": 5490000,
    "discountPercent": 5,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 3400,
    "inStock": true,
    "availableStock": 24,
    "reservedStock": 0,
    "badge": "EVERYDAY PRO",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Processor",
        "value": "Apple S9 SiP with 4-Core Neural Engine"
      },
      {
        "label": "Gesture",
        "value": "Magic Double-Tap Finger Pinch"
      }
    ],
    "highlights": [
      "Double Tap Gesture",
      "ECG & Blood Oxygen",
      "2000-nit Bright Screen",
      "Fast Magnetic Charge"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_apple_watch_se_2",
    "slug": "apple-watch-se-2nd-gen-gps-44mm",
    "name": "Apple Watch SE (2nd Generation, GPS, 44mm Starlight Aluminum)",
    "subtitle": "Crash Detection, Heart Rate Notifications, Swimproof 50m, Sleep Tracking",
    "description": "All the essential fitness, health, and safety features in an accessible, featherlight package.",
    "category": "wearables",
    "brand": "Apple",
    "pricePaise": 2990000,
    "mrpPaise": 3290000,
    "discountPercent": 9,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 4900,
    "inStock": true,
    "availableStock": 28,
    "reservedStock": 0,
    "badge": "ACCESSIBLE PICK",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Water",
        "value": "50m Swimproof Water Resistance"
      },
      {
        "label": "Safety",
        "value": "Crash Detection & Fall Detection"
      }
    ],
    "highlights": [
      "Crash Detection Safety",
      "Retina OLED Display",
      "Swimproof 50m",
      "Sleep Stages Tracking"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_garmin_epix_pro_gen2",
    "slug": "garmin-epix-pro-gen-2-sapphire-51mm",
    "name": "Garmin Epix Pro Gen 2 Sapphire Edition (51mm, Titanium with Carbon Gray DLC)",
    "subtitle": "Brilliant AMOLED Display, Built-in LED Flashlight, 31-Day Battery Life, TopoActive Maps",
    "description": "The ultimate high-performance smartwatch with sapphire crystal lens, titanium bezel, and LED torch.",
    "category": "wearables",
    "brand": "Garmin",
    "pricePaise": 11299000,
    "mrpPaise": 12499000,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 390,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "ENDURANCE PRO",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Battery",
        "value": "Up to 31 Days (Smartwatch Mode)"
      },
      {
        "label": "Torch",
        "value": "Integrated Multi-LED Tactical Flashlight"
      }
    ],
    "highlights": [
      "31-Day Battery Life",
      "Built-in LED Flashlight",
      "1.4\" AMOLED Sapphire Screen",
      "Multi-Band GPS SatIQ"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_garmin_fenix_7_pro",
    "slug": "garmin-fenix-7-pro-solar-sapphire-47mm",
    "name": "Garmin Fenix 7 Pro Solar Sapphire Multisport Watch (47mm Carbon Gray DLC)",
    "subtitle": "Power Sapphire Solar Charging (Up to 22 Days), Memory-in-Pixel Display, LED Flashlight",
    "description": "Harness the suns power for endless outdoor expeditions with sunlight-readable MIP display.",
    "category": "wearables",
    "brand": "Garmin",
    "pricePaise": 9999000,
    "mrpPaise": 10999000,
    "discountPercent": 9,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 620,
    "inStock": true,
    "availableStock": 7,
    "reservedStock": 0,
    "badge": "SOLAR POWER",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Solar",
        "value": "Power Sapphire Solar Charging Glass"
      },
      {
        "label": "Battery",
        "value": "Up to 22 Days with Solar Exposure"
      }
    ],
    "highlights": [
      "Solar Charging Glass",
      "Sunlight-Visible MIP Screen",
      "Built-in LED Flashlight",
      "Endurance Score Metric"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_garmin_forerunner_965",
    "slug": "garmin-forerunner-965-titanium-bezel-running-watch",
    "name": "Garmin Forerunner 965 Premium GPS Running Smartwatch (Titanium Bezel, AMOLED)",
    "subtitle": "1.4\" AMOLED Touchscreen, Built-in Full-Color Topo Maps, Training Readiness, 23-Day Battery",
    "description": "Engineered for dedicated marathoners and triathletes with advanced VO2 Max and HRV metrics.",
    "category": "wearables",
    "brand": "Garmin",
    "pricePaise": 6749000,
    "mrpPaise": 7499000,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 810,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "MARATHON KING",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Display",
        "value": "1.4\" Vivid AMOLED Color Touchscreen"
      },
      {
        "label": "Maps",
        "value": "Preloaded Full-Color TopoActive Maps"
      }
    ],
    "highlights": [
      "1.4\" AMOLED Touch Display",
      "Titanium Lightweight Bezel",
      "Training Readiness Metric",
      "23-Day Battery Life"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_garmin_venu_3",
    "slug": "garmin-venu-3-health-fitness-smartwatch-black",
    "name": "Garmin Venu 3 GPS Health & Fitness Smartwatch (1.4\" AMOLED, Speaker & Mic)",
    "subtitle": "Wheelchair Mode, Sleep Coach, Nap Detection, On-Wrist Phone Calls, 14-Day Battery",
    "description": "Know the real you with personalized Sleep Coach, daytime nap tracking, and on-wrist voice calling.",
    "category": "wearables",
    "brand": "Garmin",
    "pricePaise": 4999000,
    "mrpPaise": 5499000,
    "discountPercent": 9,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1140,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "HEALTH COACH",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Voice",
        "value": "Built-in Speaker & Mic for Phone Calls"
      },
      {
        "label": "Battery",
        "value": "Up to 14 Days in Smartwatch Mode"
      }
    ],
    "highlights": [
      "Sleep Coach & Nap Tracker",
      "Voice Calls on Wrist",
      "14-Day Battery Life",
      "Body Battery Energy Monitor"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_galaxy_watch_ultra",
    "slug": "samsung-galaxy-watch-ultra-47mm-titanium",
    "name": "Samsung Galaxy Watch Ultra (47mm LTE Titanium, Dual GPS, Sapphire Crystal)",
    "subtitle": "10ATM Water Resistance, Emergency Siren, BioActive Sensor, Quick Button",
    "description": "Withstands up to 55°C heat, 9,000m altitude, and 10ATM water pressure with 3nm processor.",
    "category": "wearables",
    "brand": "Samsung",
    "pricePaise": 5999900,
    "mrpPaise": 6999900,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 560,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "RUGGED LTE",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Durability",
        "value": "10ATM + IP68 + MIL-STD-810H"
      },
      {
        "label": "Processor",
        "value": "3nm Exynos W1000 5-Core"
      }
    ],
    "highlights": [
      "10ATM Water Resistance",
      "Grade 4 Titanium",
      "3nm Exynos Processor",
      "100h Power Save"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_galaxy_watch_6_classic",
    "slug": "samsung-galaxy-watch-6-classic-47mm-black",
    "name": "Samsung Galaxy Watch 6 Classic (47mm Bluetooth, Rotating Bezel)",
    "subtitle": "Iconic Physical Rotating Bezel, Sapphire Crystal Glass, Advanced Sleep Coaching",
    "description": "The satisfying physical rotating bezel is back. Navigate menus effortlessly on a 30% larger screen.",
    "category": "wearables",
    "brand": "Samsung",
    "pricePaise": 3299900,
    "mrpPaise": 4399900,
    "discountPercent": 25,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 2100,
    "inStock": true,
    "availableStock": 18,
    "reservedStock": 0,
    "badge": "ROTATING BEZEL",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Bezel",
        "value": "Physical Precision Mechanical Rotating Bezel"
      },
      {
        "label": "Screen",
        "value": "1.5\" Super AMOLED Sapphire Crystal"
      }
    ],
    "highlights": [
      "Physical Rotating Bezel",
      "25% Massive Discount",
      "Advanced Sleep Coaching",
      "Body Composition BIA"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_galaxy_watch_6",
    "slug": "samsung-galaxy-watch-6-44mm-graphite",
    "name": "Samsung Galaxy Watch 6 (44mm Bluetooth, Aluminum)",
    "subtitle": "Slimmer Bezel, Fast One-Click Bands, ECG, Heart Rate Zones, BIA Sensor",
    "description": "Clean, modern everyday smartwatch with comprehensive heart health and sleep tracking.",
    "category": "wearables",
    "brand": "Samsung",
    "pricePaise": 2499900,
    "mrpPaise": 3399900,
    "discountPercent": 26,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.6,
    "reviewCount": 2800,
    "inStock": true,
    "availableStock": 22,
    "reservedStock": 0,
    "badge": "DAILY ESSENTIAL",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Sensor",
        "value": "3-in-1 BioActive Sensor (ECG, HR, BIA)"
      },
      {
        "label": "Glass",
        "value": "Sapphire Crystal Glass Screen"
      }
    ],
    "highlights": [
      "Slimmer Bezel Design",
      "One-Click Quick Bands",
      "Custom Heart Rate Zones",
      "Sleep Animal Coaching"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_google_pixel_watch_3",
    "slug": "google-pixel-watch-3-45mm-matte-black",
    "name": "Google Pixel Watch 3 (45mm Wi-Fi, Actua Display 2000 nits, Fitbit Built-in)",
    "subtitle": "New Larger 45mm Size, 2000-nit Actua Screen, Advanced Running Form Metrics, Loss of Pulse",
    "description": "Features a 40% larger active screen, real-time running cadence feedback, and 24-hour battery.",
    "category": "wearables",
    "brand": "Google",
    "pricePaise": 3990000,
    "mrpPaise": 4490000,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 620,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "PIXEL FITNESS",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Size",
        "value": "45mm Larger Display with Thin Borders"
      },
      {
        "label": "Brightness",
        "value": "2,000 nits Actua Display"
      }
    ],
    "highlights": [
      "45mm Larger Screen",
      "2000-nit Actua Display",
      "Deep Fitbit Integration",
      "Loss of Pulse Detection"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_google_pixel_watch_2",
    "slug": "google-pixel-watch-2-lte-polished-silver",
    "name": "Google Pixel Watch 2 (4G LTE + Bluetooth, Polished Silver Aluminum)",
    "subtitle": "All-New Multi-Path Heart Rate Sensor, Skin Temperature, cEDA Stress Tracking",
    "description": "All-day 24-hour battery with Always-On display, aluminum enclosure, and automatic workout pause.",
    "category": "wearables",
    "brand": "Google",
    "pricePaise": 2990000,
    "mrpPaise": 3990000,
    "discountPercent": 25,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.6,
    "reviewCount": 1250,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "SMART LTE",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Connectivity",
        "value": "4G LTE Standalone Calling"
      },
      {
        "label": "Sensors",
        "value": "cEDA Continuous Stress + Skin Temp"
      }
    ],
    "highlights": [
      "Standalone 4G LTE Calling",
      "Multi-Path HR Sensor",
      "cEDA Stress Tracking",
      "Lightweight Aluminum"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_oura_ring_gen3_horizon",
    "slug": "oura-ring-gen-3-horizon-stealth",
    "name": "Oura Ring Gen 3 Horizon Smart Health Ring (Stealth Matte Titanium Finish)",
    "subtitle": "Continuous Heart Rate, Sleep Stage Analysis, Body Temperature Trends, 7-Day Battery",
    "description": "Ultra-lightweight biometric sensor wrapped in a circular titanium shell tracking sleep stages & HRV balance.",
    "category": "wearables",
    "brand": "Oura",
    "pricePaise": 3999900,
    "mrpPaise": 4499900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 840,
    "inStock": true,
    "availableStock": 7,
    "reservedStock": 0,
    "badge": "BIO TRACKER",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Material",
        "value": "Durable Titanium with Diamond-Like Carbon DLC"
      },
      {
        "label": "Weight",
        "value": "4 to 6 grams Featherlight"
      }
    ],
    "highlights": [
      "Featherlight Titanium",
      "Medical-Grade Sleep Staging",
      "7-Day Battery",
      "100m Water Proof"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_oura_ring_gen3_heritage",
    "slug": "oura-ring-gen-3-heritage-silver",
    "name": "Oura Ring Gen 3 Heritage Edition (Polished Silver Titanium)",
    "subtitle": "Classic Flat-Top Profile, Readiness Score, SpO2 Blood Oxygen, Cycle Sensing",
    "description": "The classic Oura flat-top silhouette with comprehensive recovery guidance and activity tracking.",
    "category": "wearables",
    "brand": "Oura",
    "pricePaise": 3499900,
    "mrpPaise": 3999900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 980,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "CLASSIC FLAT-TOP",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Design",
        "value": "Classic Heritage Flat-Top Silhouette"
      },
      {
        "label": "Sensors",
        "value": "Infrared PPG, NTC Temperature, 3D Accel"
      }
    ],
    "highlights": [
      "Readiness Score Guidance",
      "Body Temperature Trends",
      "SpO2 Blood Oxygen",
      "7-Day Long Battery"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_ultrahuman_ring_air",
    "slug": "ultrahuman-ring-air-raw-titanium",
    "name": "Ultrahuman Ring AIR Smart Sleep & Metabolism Ring (Raw Titanium, Ultra-Thin)",
    "subtitle": "Weighs Just 2.4 Grams, Fighter-Jet Grade Titanium, Circadian Rhythm Guidance",
    "description": "The lightest smart ring on earth at just 2.4 grams. No subscription required for complete health metrics.",
    "category": "wearables",
    "brand": "Ultrahuman",
    "pricePaise": 2899900,
    "mrpPaise": 3299900,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1420,
    "inStock": true,
    "availableStock": 15,
    "reservedStock": 0,
    "badge": "NO SUBSCRIPTION",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Weight",
        "value": "2.4 grams (World’s Lightest Smart Ring)"
      },
      {
        "label": "Subscription",
        "value": "Lifetime Zero Subscription Fees"
      }
    ],
    "highlights": [
      "2.4g World Lightest Ring",
      "Zero Subscription Fees",
      "Fighter-Jet Titanium",
      "Circadian Alignment Coach"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_samsung_galaxy_ring",
    "slug": "samsung-galaxy-ring-titanium-black",
    "name": "Samsung Galaxy Ring (Titanium Black, Energy Score, Sleep Staging, 7-Day Battery)",
    "subtitle": "Concave Lightweight Design, Galaxy AI Health Insights, Compact Charging Case",
    "description": "Seamless health monitoring. Slip on the sleek concave titanium ring for effortless Energy Score coaching.",
    "category": "wearables",
    "brand": "Samsung",
    "pricePaise": 3899900,
    "mrpPaise": 4399900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 710,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "GALAXY ECOSYSTEM",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Design",
        "value": "Concave Ergonomic Titanium Profile"
      },
      {
        "label": "Case",
        "value": "Transparent Jewelry Cradle Charging Case"
      }
    ],
    "highlights": [
      "Concave Titanium Profile",
      "Galaxy AI Energy Score",
      "Transparent Charging Cradle",
      "7-Day Battery Life"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_whoop_4_band",
    "slug": "whoop-4-health-fitness-tracker-12mo",
    "name": "WHOOP 4.0 Health, Strain & Sleep Tracker with 12-Month Membership Included",
    "subtitle": "Screen-Free Design, Strain Coaching, Continuous Skin Temp & Pulse Oximeter",
    "description": "Worn by elite Olympians and Formula 1 drivers. Measures physical strain against recovery without screen distractions.",
    "category": "wearables",
    "brand": "Whoop",
    "pricePaise": 2699900,
    "mrpPaise": 3199900,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 2400,
    "inStock": true,
    "availableStock": 16,
    "reservedStock": 0,
    "badge": "ATHLETE CHOICE",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Access",
        "value": "12-Month Full WHOOP Membership Included"
      },
      {
        "label": "Charging",
        "value": "Slide-On Waterproof Battery Pack"
      }
    ],
    "highlights": [
      "Strain & Recovery Coaching",
      "Zero Screen Distractions",
      "Waterproof Slide-On Charger",
      "12-Month Access Included"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_withings_scanwatch_2",
    "slug": "withings-scanwatch-2-hybrid-smartwatch-black",
    "name": "Withings ScanWatch 2 42mm Hybrid Smartwatch (Medical-Grade ECG, 30-Day Battery)",
    "subtitle": "Analog Watch Hands with OLED Sub-Dial, 24/7 Temperature Baseline, Sapphire Glass",
    "description": "Timeless analog luxury watch aesthetics backed by clinical-grade ECG and 30-day battery life.",
    "category": "wearables",
    "brand": "Withings",
    "pricePaise": 3699900,
    "mrpPaise": 4199900,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 310,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "HYBRID CLINICAL",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Battery",
        "value": "30 Days Continuous Battery"
      },
      {
        "label": "Sensors",
        "value": "Medical-Grade 1-Lead ECG & TempTech"
      }
    ],
    "highlights": [
      "Analog Real Hands Design",
      "30-Day Battery Life",
      "Clinical-Grade ECG",
      "Sapphire Glass & Stainless"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_suunto_race_titanium",
    "slug": "suunto-race-all-black-titanium-multisport-watch",
    "name": "Suunto Race All Black Titanium Multisport GPS Watch (1.43\" AMOLED, Free Offline Maps)",
    "subtitle": "Titanium Bezel, Digital Crown Dial, Free Worldwide Offline Outdoor Maps, HRV Recovery",
    "description": "Nordic engineering at its finest. Built for extreme trail running and mountaineering with free global topographic maps.",
    "category": "wearables",
    "brand": "Suunto",
    "pricePaise": 5499000,
    "mrpPaise": 6199000,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 290,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "NORDIC TRAIL",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Maps",
        "value": "Free Worldwide Offline Topographic Maps"
      },
      {
        "label": "Bezel",
        "value": "Grade 5 Titanium with Sapphire Crystal"
      }
    ],
    "highlights": [
      "Free Offline Global Maps",
      "Digital Crown Navigation",
      "1.43\" Vivid AMOLED",
      "Military Tested Durability"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_coros_vertix_2s",
    "slug": "coros-vertix-2s-adventure-gps-watch",
    "name": "Coros Vertix 2S Adventure GPS Watch (Space Black, Dual-Frequency GPS, 118hr Battery)",
    "subtitle": "118 Hours Continuous GPS Tracking, Next-Gen Optical HR Sensor, Sapphire & Titanium",
    "description": "The choice of mountaineers climbing Everest. Insane 118 hours of continuous full dual-frequency GPS tracking.",
    "category": "wearables",
    "brand": "Coros",
    "pricePaise": 6999000,
    "mrpPaise": 7799000,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 190,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "118-HOUR GPS",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "GPS Battery",
        "value": "118 Hours Continuous Dual-Frequency GPS"
      },
      {
        "label": "Water",
        "value": "100m Water Resistant for Extreme Environments"
      }
    ],
    "highlights": [
      "118-Hour GPS Battery",
      "Dual-Frequency All-Systems",
      "Grade 5 Titanium Bezel",
      "Global Offline Landscape Maps"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_polar_vantage_v3",
    "slug": "polar-vantage-v3-multisport-watch",
    "name": "Polar Vantage V3 Smart Multisport Watch (AMOLED Touch, Dual GPS, Offline Maps)",
    "subtitle": "Polar Elixir Biosensing Technologies, ECG on Wrist, SpO2, Dual-Frequency GPS, Skin Temp",
    "description": "Powered by Polar Elixir biosensing measuring bio-data with scientific accuracy for triathlon training.",
    "category": "wearables",
    "brand": "Polar",
    "pricePaise": 5699000,
    "mrpPaise": 6499000,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 220,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "TRIATHLON PRO",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Biosensing",
        "value": "Polar Elixir (ECG, SpO2, Skin Temp, Gen-4 OHR)"
      },
      {
        "label": "Display",
        "value": "1.39\" High-Resolution AMOLED Touchscreen"
      }
    ],
    "highlights": [
      "Polar Elixir Biosensing",
      "Wrist ECG Recording",
      "Offline Topographic Maps",
      "Dual-Frequency GPS"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_garmin_approach_s70",
    "slug": "garmin-approach-s70-premium-golf-watch",
    "name": "Garmin Approach S70 Premium GPS Golf Smartwatch (47mm Black Ceramic Bezel, AMOLED)",
    "subtitle": "43,000+ Preloaded Golf Courses, Virtual Caddie with Wind Data, PlaysLike Distance",
    "description": "Dominate the links with full-color course maps, virtual club caddie suggestions, and green contour data.",
    "category": "wearables",
    "brand": "Garmin",
    "pricePaise": 6499000,
    "mrpPaise": 7299000,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 340,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "GOLF MASTER",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Courses",
        "value": "43,000+ Preloaded Full-Color Golf Courses"
      },
      {
        "label": "Bezel",
        "value": "Ceramic Bezel with AMOLED Touchscreen"
      }
    ],
    "highlights": [
      "43,000+ Preloaded Courses",
      "Virtual Caddie Suggestions",
      "PlaysLike Slope Distance",
      "AMOLED Golf Course Maps"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_grovemade_walnut_shelf",
    "slug": "grovemade-solid-american-walnut-desk-shelf",
    "name": "Grovemade Solid American Walnut Dual Monitor Stand & Desk Shelf",
    "subtitle": "Hand-Finished Natural Hardwood, Ergonomic Eye-Level Alignment, Solid Brass Fasteners",
    "description": "Designed to elevate your displays to an ergonomic viewing level while creating a dual-tiered architecture.",
    "category": "desk-setup",
    "brand": "Grovemade",
    "pricePaise": 2250000,
    "mrpPaise": 2690000,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 520,
    "inStock": true,
    "availableStock": 11,
    "reservedStock": 0,
    "badge": "ARTISAN CRAFTED",
    "isDealOfTheDay": true,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Material",
        "value": "Solid American Eastern Walnut & Powder-Coated Aluminum"
      },
      {
        "label": "Dimensions",
        "value": "46\" Length x 9\" Depth x 4.2\" Height"
      }
    ],
    "highlights": [
      "100% Solid Hardwood",
      "Dual 32\" Monitor Fit",
      "Integrated Tray Space",
      "Ergonomic Elevation"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_grovemade_maple_shelf",
    "slug": "grovemade-solid-maple-single-monitor-stand",
    "name": "Grovemade Solid Hard Maple Single Display Stand (Natural Blonde Finish)",
    "subtitle": "Solid Eastern Hardrock Maple, Aluminum Riser Shelf, Vegetable-Tanned Leather Cushion",
    "description": "Warm minimalist Scandinavian look providing elevated clearance for laptops and notebooks.",
    "category": "desk-setup",
    "brand": "Grovemade",
    "pricePaise": 1650000,
    "mrpPaise": 1950000,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 340,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "MINIMALIST WOOD",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Wood",
        "value": "American Hardrock Eastern Maple"
      },
      {
        "label": "Finish",
        "value": "Clear Matte Vegetable Oil Seal"
      }
    ],
    "highlights": [
      "Solid Hardrock Maple",
      "Single Monitor Elevation",
      "Natural Blonde Tone",
      "Non-Slip Cork Feet"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_grovemade_wool_felt_mat",
    "slug": "grovemade-merino-wool-felt-desk-pad-extra-large",
    "name": "Grovemade Merino Wool Felt Desk Pad (Extra Large, Dark Charcoal)",
    "subtitle": "100% German Virgin Merino Wool Felt, Dense 3mm Natural Cushioning, Anti-Static",
    "description": "Brings warmth, acoustic dampening, and sophisticated texture to any wooden or glass desktop.",
    "category": "desk-setup",
    "brand": "Grovemade",
    "pricePaise": 990000,
    "mrpPaise": 1200000,
    "discountPercent": 18,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 780,
    "inStock": true,
    "availableStock": 20,
    "reservedStock": 0,
    "badge": "100% MERINO WOOL",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Material",
        "value": "100% Natural German Virgin Merino Wool"
      },
      {
        "label": "Thickness",
        "value": "3mm Dense Cushioning"
      }
    ],
    "highlights": [
      "100% German Merino Wool",
      "Acoustic Sound Dampening",
      "Anti-Static Keyboard Base",
      "Natural Warm Texture"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_grovemade_brass_pen",
    "slug": "grovemade-solid-brass-minimalist-pen-and-stand",
    "name": "Grovemade Solid Brass Machined Pen with Fluted Wooden Stand",
    "subtitle": "Solid C360 Brass Body, Schmidt P8126 Rollerball Refill, Weighted Walnut Base",
    "description": "A heavyweight desk pen machined from a single solid bar of brass with effortless balanced glide.",
    "category": "desk-setup",
    "brand": "Grovemade",
    "pricePaise": 1250000,
    "mrpPaise": 1490000,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 290,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "SOLID BRASS",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Material",
        "value": "Solid Machined C36000 Brass"
      },
      {
        "label": "Refill",
        "value": "Schmidt P8126 Capless Rollerball"
      }
    ],
    "highlights": [
      "Solid Machined Brass",
      "Schmidt Rollerball Refill",
      "Weighted Walnut Stand",
      "Develops Natural Patina"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_herman_miller_embody",
    "slug": "herman-miller-x-logitech-g-embody-gaming-chair",
    "name": "Herman Miller x Logitech G Embody Ergonomic Chair (Cyan Pixel Support Matrix)",
    "subtitle": "Pixelated Support, Copper-Fused Cooling Foam, BackFit Ergonomic Spine Alignment",
    "description": "Designed with input from over 30 physicians and PhDs to distribute weight evenly and prevent fatigue.",
    "category": "desk-setup",
    "brand": "Herman Miller",
    "pricePaise": 16500000,
    "mrpPaise": 18900000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1580481077195-c3a82104e362?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1580481077195-c3a82104e362?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 380,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "ERGONOMIC MASTER",
    "isDealOfTheDay": true,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Warranty",
        "value": "12-Year Official Herman Miller Warranty"
      },
      {
        "label": "Cooling",
        "value": "Layered Foam with Copper Particles"
      }
    ],
    "highlights": [
      "12-Year Warranty",
      "Backfit Spine Alignment",
      "Copper Cooling Foam",
      "Doctor Endorsed"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_herman_miller_aeron",
    "slug": "herman-miller-aeron-chair-graphite-size-b",
    "name": "Herman Miller Aeron Ergonomic Office Chair (Size B, Graphite, PostureFit SL)",
    "subtitle": "Pellicle 8Z Breathable Suspension, Forward Tilt Limiter, Fully Adjustable Armrests",
    "description": "The most famous ergonomic desk chair in history. 8Z Pellicle elastomeric suspension eliminates pressure points.",
    "category": "desk-setup",
    "brand": "Herman Miller",
    "pricePaise": 14900000,
    "mrpPaise": 17200000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1580481077195-c3a82104e362?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1580481077195-c3a82104e362?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 920,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "ICONIC AERON",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Suspension",
        "value": "8Z Pellicle Breathable Mesh (8 Tension Zones)"
      },
      {
        "label": "Lumbar",
        "value": "PostureFit SL Dual Sacral Support"
      }
    ],
    "highlights": [
      "Pellicle 8Z Breathable Mesh",
      "PostureFit SL Lumbar",
      "12-Year Warranty",
      "Fully Adjustable Arms"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_steelcase_gesture",
    "slug": "steelcase-gesture-ergonomic-office-chair-black",
    "name": "Steelcase Gesture Ergonomic Office Chair (Core Equalizer, 360-degree Armrests)",
    "subtitle": "360° Rotating Armrests for Mobile Device Posture, 3D LiveBack Contour, Pneumatic Lift",
    "description": "Designed specifically for how we interact with technology today. Armrests move like a human arm.",
    "category": "desk-setup",
    "brand": "Steelcase",
    "pricePaise": 13900000,
    "mrpPaise": 15900000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1580481077195-c3a82104e362?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1580481077195-c3a82104e362?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 440,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "360 ARMS",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Armrests",
        "value": "360-Degree Articulating Armrests"
      },
      {
        "label": "Mechanism",
        "value": "3D LiveBack Adaptive Spine Contour"
      }
    ],
    "highlights": [
      "360° Articulating Arms",
      "3D LiveBack Contouring",
      "Designed for Tech Postures",
      "12-Year Commercial Warranty"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_steelcase_leap_v2",
    "slug": "steelcase-leap-v2-ergonomic-chair-graphite",
    "name": "Steelcase Leap V2 Ergonomic Chair (LiveBack Technology, Natural Glide System)",
    "subtitle": "Natural Glide Recline Keeps You in Sight of Work, Upper & Lower Back Firmness Dial",
    "description": "Consistently rated the #1 ergonomic desk chair in blind tests for back pain relief.",
    "category": "desk-setup",
    "brand": "Steelcase",
    "pricePaise": 11900000,
    "mrpPaise": 13900000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1580481077195-c3a82104e362?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1580481077195-c3a82104e362?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 610,
    "inStock": true,
    "availableStock": 7,
    "reservedStock": 0,
    "badge": "BACK PAIN RELIEF",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Movement",
        "value": "Natural Glide System (Eyes Stay on Work)"
      },
      {
        "label": "Adjustment",
        "value": "Independent Lower Back Firmness Dial"
      }
    ],
    "highlights": [
      "Natural Glide Recline",
      "Lower Back Firmness Dial",
      "4D Adjustable Arms",
      "Proven Pain Relief"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_secretlab_titan_evo",
    "slug": "secretlab-titan-evo-2024-stealth-hybrid-leatherette",
    "name": "Secretlab TITAN Evo 2024 Gaming Chair (Stealth Black, Prime 2.0 Leatherette)",
    "subtitle": "L-ADAPT 4-Way Lumbar System, Magnetic Memory Foam Head Pillow, Cold-Cure Foam",
    "description": "The ultimate hybrid gaming chair with magnetic head pillow and 4-way internal lumbar support.",
    "category": "desk-setup",
    "brand": "Secretlab",
    "pricePaise": 5499900,
    "mrpPaise": 6299900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1580481077195-c3a82104e362?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1580481077195-c3a82104e362?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 4800,
    "inStock": true,
    "availableStock": 16,
    "reservedStock": 0,
    "badge": "GAMER THRONE",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Lumbar",
        "value": "L-ADAPT 4-Way Internal Lumbar System"
      },
      {
        "label": "Pillow",
        "value": "Magnetic Memory Foam Cooling Gel Pillow"
      }
    ],
    "highlights": [
      "Magnetic Head Pillow",
      "4-Way Internal Lumbar",
      "Cold-Cure High-Density Foam",
      "Full Metal 4D Armrests"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_fully_jarvis_standing_desk",
    "slug": "fully-jarvis-electric-standing-desk-bamboo-60",
    "name": "Fully Jarvis Electric Standing Desk (60\" x 30\" Eco Bamboo Top, Dual Motor Frame)",
    "subtitle": "Sustainable Solid Bamboo Desktop, 350 lbs Dual-Motor Lift Capacity, OLED Memory Handset",
    "description": "Smooth, whisper-quiet electric dual motors effortlessly transition between seated focus and standing energy.",
    "category": "desk-setup",
    "brand": "Fully",
    "pricePaise": 6999900,
    "mrpPaise": 7999900,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 1250,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "ECO BAMBOO",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Top",
        "value": "Sustainable Solid Bamboo (Urethane Clear Coat)"
      },
      {
        "label": "Motors",
        "value": "Dual Heavy-Duty Lift Motors (350 lbs capacity)"
      }
    ],
    "highlights": [
      "Solid Eco Bamboo Desktop",
      "Dual Electric Lift Motors",
      "OLED Memory Height Handset",
      "Ultra-Stable Steel Frame"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_uplift_v2_standing_desk",
    "slug": "uplift-v2-commercial-standing-desk-reclaimed-wood",
    "name": "UPLIFT V2-Commercial Standing Desk (Reclaimed Wood Top, Advanced Keypad)",
    "subtitle": "Crossbar Stability Architecture, Dual 3-Stage Legs, Anti-Collision Sensor, 355 lbs Lift",
    "description": "Commercial-grade crossbar stability frame designed for dual ultra-wide displays and heavy equipment.",
    "category": "desk-setup",
    "brand": "UPLIFT",
    "pricePaise": 8499900,
    "mrpPaise": 9999900,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 890,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "COMMERCIAL GRADE",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Structure",
        "value": "Reinforced Lower Crossbar Commercial Frame"
      },
      {
        "label": "Keypad",
        "value": "Advanced Comfort Keypad with 4 Presets"
      }
    ],
    "highlights": [
      "Commercial Crossbar Stability",
      "3-Stage Inverted Leg Columns",
      "355 lbs Heavy Lift",
      "Anti-Collision Gyro Sensor"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_benq_screenbar_halo",
    "slug": "benq-screenbar-halo-wireless-dial-monitor-light",
    "name": "BenQ ScreenBar Halo Wireless Controller Monitor Light Bar (Front & Back Ambient Illumination)",
    "subtitle": "Patented Asymmetric Optics, Dual Ambient Backlight, Wireless Smart Dial Controller",
    "description": "Features patented asymmetric optical technology that reflects zero screen glare onto curved or flat monitors.",
    "category": "desk-setup",
    "brand": "BenQ",
    "pricePaise": 1699000,
    "mrpPaise": 1999000,
    "discountPercent": 15,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 1100,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "EYE CARE PRO",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Optics",
        "value": "Patented Asymmetric Optical Glare-Free Design"
      },
      {
        "label": "Lighting",
        "value": "Front Task Light + Rear Ambient Halo Glow"
      }
    ],
    "highlights": [
      "Zero Screen Glare",
      "Rear Ambient Halo",
      "Wireless Desktop Dial",
      "Curved Monitor Compatible"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_xiaomi_monitor_lightbar",
    "slug": "xiaomi-mi-computer-monitor-light-bar-wireless-knob",
    "name": "Xiaomi Mi Computer Monitor Light Bar (2.4GHz Wireless Remote Knob)",
    "subtitle": "Custom Optical Hood Asymmetric Light, Metal Body, Ra95 High Color Rendering",
    "description": "Budget friendly monitor light bar with a heavy wireless rotary controller dial and Ra95 color rendering.",
    "category": "desk-setup",
    "brand": "Xiaomi",
    "pricePaise": 399900,
    "mrpPaise": 499900,
    "discountPercent": 20,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 3400,
    "inStock": true,
    "availableStock": 25,
    "reservedStock": 0,
    "badge": "BUDGET LIGHT BAR",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "CRI",
        "value": "Ra95 High Color Rendering Index"
      },
      {
        "label": "Remote",
        "value": "2.4GHz Wireless Metal Rotary Knob"
      }
    ],
    "highlights": [
      "Ra95 High Color Rendering",
      "Wireless Rotary Controller",
      "Zero Screen Glare",
      "Budget Friendly Price"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_ergotron_lx_arm",
    "slug": "ergotron-lx-desk-mount-single-monitor-arm-matte-black",
    "name": "Ergotron LX Desk Mount Monitor Arm (Matte Black, Up to 34\" Displays)",
    "subtitle": "Constant Force Patented Lift Technology, Tested to 10,000 Cycles, Cable Management Channel",
    "description": "Effortlessly position your monitor with a fingertip touch. Patented Constant Force spring technology.",
    "category": "desk-setup",
    "brand": "Ergotron",
    "pricePaise": 1899000,
    "mrpPaise": 2299000,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 1890,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "MONITOR ARM GOLD",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Capacity",
        "value": "Holds Monitors up to 34\" and 11.3 kg (25 lbs)"
      },
      {
        "label": "Testing",
        "value": "Tested to 10,000 Cycle Motion Durability"
      }
    ],
    "highlights": [
      "Constant Force Spring Lift",
      "10-Year Warranty",
      "Internal Cable Channels",
      "Desk Clamp & Grommet Base"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_ergotron_hx_arm",
    "slug": "ergotron-hx-heavy-duty-monitor-arm-samsung-odyssey",
    "name": "Ergotron HX Heavy Duty Desk Monitor Arm with Heavy-Duty Tilt Pivot",
    "subtitle": "Engineered for Heavy Curved Screens (e.g. 49\" Samsung Odyssey G9), 42 lbs Capacity",
    "description": "The only monitor arm capable of supporting 49-inch super ultra-wide heavy curved gaming monitors securely.",
    "category": "desk-setup",
    "brand": "Ergotron",
    "pricePaise": 3499000,
    "mrpPaise": 4199000,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 520,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "HEAVY CURVED ARM",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Capacity",
        "value": "Holds Deep Curved Screens up to 49\" & 19 kg (42 lbs)"
      },
      {
        "label": "Tilt",
        "value": "Reinforced Heavy-Duty HD Pivot"
      }
    ],
    "highlights": [
      "Supports 49\" Ultra-Wides",
      "Reinforced Heavy-Duty Pivot",
      "Zero Screen Sagging",
      "Premium Aluminum Casting"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_humanscale_m8_arm",
    "slug": "humanscale-m8-1-heavy-duty-monitor-arm-polished-aluminum",
    "name": "Humanscale M8.1 Heavy Duty Monitor Arm (Polished Aluminum with White Trim)",
    "subtitle": "Smart Stop 180° Wall Stop, Counterbalance Indicator, Weight-Compensating Spring",
    "description": "Architectural luxury monitor arm with quick-release ball joint and integrated counterbalance gauge.",
    "category": "desk-setup",
    "brand": "Humanscale",
    "pricePaise": 2899000,
    "mrpPaise": 3499000,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 310,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "ARCHITECTURAL ARM",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Design",
        "value": "Polished Aluminum with Concealed Cables"
      },
      {
        "label": "Capacity",
        "value": "Supports Displays from 2.7 to 12.7 kg"
      }
    ],
    "highlights": [
      "Polished Aluminum Luxury",
      "180° Smart Wall Stop",
      "Counterbalance Weight Gauge",
      "Quick-Release Ball Joint"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_philips_hue_gradient_lightstrip",
    "slug": "philips-hue-play-gradient-pc-lightstrip-34",
    "name": "Philips Hue Play Gradient Lightstrip for 32\"-34\" PC Monitors",
    "subtitle": "45-Degree Light Projection, Multi-Color Blending, Screen Mirroring with Hue Sync",
    "description": "Mirrors the colors on your monitor in real time, projecting dynamic surround lighting onto the back wall.",
    "category": "desk-setup",
    "brand": "Philips Hue",
    "pricePaise": 1599900,
    "mrpPaise": 1899900,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 790,
    "inStock": true,
    "availableStock": 10,
    "reservedStock": 0,
    "badge": "SCREEN MIRROR LIGHT",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Compatibility",
        "value": "Fits 32\" to 34\" Single PC Displays"
      },
      {
        "label": "Sync",
        "value": "Real-Time Screen Audio/Video Sync"
      }
    ],
    "highlights": [
      "Real-Time Color Mirroring",
      "45° Wall Projection Brackets",
      "Millions of Gradient Colors",
      "Surround Immersion Glow"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_nanoleaf_lines_60",
    "slug": "nanoleaf-lines-smarter-kit-9-light-bars",
    "name": "Nanoleaf Lines 60-Degree Smarter Kit (9 Modular Backlit LED Light Bars)",
    "subtitle": "Modular Backlit Geometric Design, Music Visualizer, Screen Mirroring, Apple Home / Matter",
    "description": "Create custom geometric backlit wall art with dual-zone color technology on each modular light bar.",
    "category": "desk-setup",
    "brand": "Nanoleaf",
    "pricePaise": 1999900,
    "mrpPaise": 2399900,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 1420,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "GEOMETRIC RGB",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Bars",
        "value": "9 Modular Backlit 60-Degree Light Bars"
      },
      {
        "label": "Integration",
        "value": "Matter, Apple Home, Google, Razer Chroma"
      }
    ],
    "highlights": [
      "Dual-Zone Color per Bar",
      "Rhythm Music Visualizer",
      "Backlit Wall Ambient Glow",
      "Modular Geometric Layouts"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dyson_solarcycle_morph",
    "slug": "dyson-solarcycle-morph-desk-light-black",
    "name": "Dyson Solarcycle Morph Desk Light (Intelligent Local Daylight Tracking)",
    "subtitle": "4-in-1 Versatile Light (Task / Ambient / Feature / Indirect), Magnetic Optical Head",
    "description": "Tracks your local daylight and adjusts color temperature and brightness to support natural body rhythm.",
    "category": "desk-setup",
    "brand": "Dyson",
    "pricePaise": 4490000,
    "mrpPaise": 4990000,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 290,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "DAYLIGHT TRACKING",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Tracking",
        "value": "Local Daylight Heat-Pipe Tracking Algorithm"
      },
      {
        "label": "Durability",
        "value": "Heat Pipe Technology Preserves Light for 60 Years"
      }
    ],
    "highlights": [
      "4-in-1 Transformable Light",
      "Tracks Local Sun Position",
      "Magnetic Ambient Dock",
      "60-Year Light Quality Heat Pipe"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_balolo_cockpit_large",
    "slug": "balolo-setup-cockpit-large-american-walnut",
    "name": "Balolo Setup Cockpit Large (American Walnut, Modular Grid System)",
    "subtitle": "Patented Mounting Grid, 45\" Solid Walnut Shelf, Dual CNC Aluminum Risers",
    "description": "German engineered workstation shelf with a patented underside mounting grid for phone docks and trays.",
    "category": "desk-setup",
    "brand": "Balolo",
    "pricePaise": 2490000,
    "mrpPaise": 2890000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 210,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "GERMAN COCKPIT",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Material",
        "value": "100% Solid American Walnut & CNC Aluminum"
      },
      {
        "label": "Grid",
        "value": "Patented Underside Accessory Mounting Grid"
      }
    ],
    "highlights": [
      "Patented Mounting Grid",
      "Solid American Walnut",
      "German Precision Crafting",
      "Dual Large Display Ready"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_ugreen_nexode_300w",
    "slug": "ugreen-nexode-300w-5-port-gan-desktop-charger",
    "name": "UGREEN Nexode 300W GaN 5-Port Fast Desktop Charger (Single Port 140W PD 3.1)",
    "subtitle": "5 USB Ports, Charge 3 Laptops Simultaneously, Thermal Guard Protection",
    "description": "The ultimate desktop charging station. Output up to 140W on a single port to charge 16\" MacBook Pro fast.",
    "category": "desk-setup",
    "brand": "UGREEN",
    "pricePaise": 1899900,
    "mrpPaise": 2299900,
    "discountPercent": 17,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 890,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "300W GAN MONSTER",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Total Output",
        "value": "300W Total Combined Output"
      },
      {
        "label": "Max Single Port",
        "value": "140W USB-C PD 3.1"
      }
    ],
    "highlights": [
      "300W High Power Output",
      "Charge 3 Laptops at Once",
      "Single Port 140W PD 3.1",
      "Thermal Guard Monitoring"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_oakylwood_dual_laptop_stand",
    "slug": "oakywood-dual-vertical-laptop-stand-walnut",
    "name": "Oakywood Dual Vertical Laptop Stand (Solid Walnut Wood, Micro-Suction Base)",
    "subtitle": "Dual Laptop Docking Slot, Solid Oak/Walnut Construction, Felt Protection Strips",
    "description": "Dock two laptops vertically on your desk in clamshell mode, saving massive desk real estate.",
    "category": "desk-setup",
    "brand": "Oakywood",
    "pricePaise": 799900,
    "mrpPaise": 949900,
    "discountPercent": 16,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 640,
    "inStock": true,
    "availableStock": 18,
    "reservedStock": 0,
    "badge": "CLAMSHELL DOCK",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Material",
        "value": "Solid Natural American Walnut Wood"
      },
      {
        "label": "Base",
        "value": "Micro-Suction Pad Prevents Sliding"
      }
    ],
    "highlights": [
      "Dual Laptop Vertical Dock",
      "Solid American Walnut",
      "Felt Inner Lining Protection",
      "Micro-Suction Desktop Grip"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sony_a7_iv",
    "slug": "sony-alpha-7-iv-full-frame-mirrorless-camera",
    "name": "Sony Alpha 7 IV Full-Frame Mirrorless Interchangeable-Lens Camera (Body Only)",
    "subtitle": "33MP BSI Exmor R Sensor, 4K 60p 10-Bit 4:2:2, Real-time Eye AF & Breathing Compensation",
    "description": "The groundbreaking all-rounder for hybrid content creators with 33MP Exmor R sensor and BIONZ XR.",
    "category": "cameras",
    "brand": "Sony",
    "pricePaise": 20999000,
    "mrpPaise": 24299000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 920,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "PRO CINEMA",
    "isDealOfTheDay": true,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Sensor",
        "value": "33.0 Megapixel Full-Frame Exmor R CMOS"
      },
      {
        "label": "Video",
        "value": "4K 60p 10-Bit 4:2:2 All-Intra"
      }
    ],
    "highlights": [
      "33MP Full-Frame Exmor R",
      "4K 60p 10-bit 4:2:2",
      "S-Cinetone Color Science",
      "BIONZ XR Processor"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sony_a7r_v",
    "slug": "sony-alpha-7r-v-61mp-mirrorless-camera",
    "name": "Sony Alpha 7R V Full-Frame Camera (61MP High Resolution, Dedicated AI Autofocus)",
    "subtitle": "61MP Exmor R Sensor, Dedicated AI Processing Unit for Deep Learning Subject Recognition",
    "description": "Uncompromising resolution meets advanced AI subject tracking for human, vehicle, insect, and bird recognition.",
    "category": "cameras",
    "brand": "Sony",
    "pricePaise": 32999000,
    "mrpPaise": 36999000,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 410,
    "inStock": true,
    "availableStock": 3,
    "reservedStock": 0,
    "badge": "61MP AI PRO",
    "isDealOfTheDay": true,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Resolution",
        "value": "61.0 MP Full-Frame Exmor R BSI CMOS"
      },
      {
        "label": "Autofocus",
        "value": "Dedicated Deep Learning AI Processing Unit"
      }
    ],
    "highlights": [
      "61MP Monster Resolution",
      "Dedicated AI Tracking Chip",
      "8-Stop In-Body Stabilization",
      "8K 24p / 4K 60p Video"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sony_fx3",
    "slug": "sony-fx3-cinema-line-full-frame-camera",
    "name": "Sony FX3 Cinema Line Full-Frame Camera (12.1MP, 4K 120p, Active Cooling Fan)",
    "subtitle": "Cage-Free 1/4-20 Thread Mounts, XLR Handle Audio Unit, Dual Base ISO 800/12800",
    "description": "Top choice for solo directors and documentarians. Active fan cooling allows infinite non-stop 4K 120p recording.",
    "category": "cameras",
    "brand": "Sony",
    "pricePaise": 38999000,
    "mrpPaise": 42999000,
    "discountPercent": 9,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 340,
    "inStock": true,
    "availableStock": 2,
    "reservedStock": 0,
    "badge": "CINEMA LINE",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Sensor",
        "value": "12.1MP Full-Frame Back-Illuminated Exmor R"
      },
      {
        "label": "Cooling",
        "value": "Active Internal Cooling Fan (Unlimited Recording)"
      }
    ],
    "highlights": [
      "Cage-Free Rig Mounting",
      "XLR Top Handle Unit",
      "Dual Base ISO 800 / 12,800",
      "4K 120p Slow Motion"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sony_zv_e1",
    "slug": "sony-zv-e1-vlogging-full-frame-camera",
    "name": "Sony ZV-E1 Full-Frame Content Creator Camera (White Body Only)",
    "subtitle": "World’s Most Compact Full-Frame Camera with Interchangeable Lenses, AI Auto-Framing",
    "description": "Packs the flagship FX3 12.1MP full-frame sensor into an ultra-compact lightweight vlogger body.",
    "category": "cameras",
    "brand": "Sony",
    "pricePaise": 18999000,
    "mrpPaise": 21499000,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 520,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "VLOG FULL-FRAME",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Sensor",
        "value": "12.1MP Full-Frame Exmor R CMOS"
      },
      {
        "label": "Weight",
        "value": "483 grams Ultra-Compact"
      }
    ],
    "highlights": [
      "World Smallest Full-Frame",
      "AI Auto-Framing Subject",
      "Dynamic Active Stabilization",
      "S-Cinetone Profile"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_sony_a6700",
    "slug": "sony-alpha-6700-aps-c-mirrorless-camera",
    "name": "Sony Alpha 6700 APS-C Mirrorless Camera (26MP Exmor R Sensor, AI AF, 4K 120p)",
    "subtitle": "26MP BSI Sensor, BIONZ XR Engine, Dedicated AI Unit, 5-Axis In-Body Stabilization",
    "description": "The ultimate compact crop-sensor camera borrowing Sony flagship full-frame algorithms and 4K 120p.",
    "category": "cameras",
    "brand": "Sony",
    "pricePaise": 13499000,
    "mrpPaise": 14999000,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 780,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "APS-C FLAGSHIP",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Sensor",
        "value": "26.0MP APS-C Back-Illuminated Exmor R"
      },
      {
        "label": "Video",
        "value": "4K 120p Slow Motion & 4K 60p 6K Oversampling"
      }
    ],
    "highlights": [
      "26MP Exmor R Sensor",
      "AI Real-Time AF Unit",
      "4K 120p Slow Motion",
      "5-Axis In-Body IBIS"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_fujifilm_x100vi",
    "slug": "fujifilm-x100vi-digital-camera-silver",
    "name": "Fujifilm X100VI Premium Compact Digital Camera (Silver, 40.2MP X-Trans CMOS 5 HR)",
    "subtitle": "Fixed 23mm F2 Lens, 6-Stop In-Body Image Stabilization, 20 Film Simulation Modes",
    "description": "The definitive tool for street and documentary photography. Timeless dials paired with 40.2MP and 6-stop IBIS.",
    "category": "cameras",
    "brand": "Fujifilm",
    "pricePaise": 16999900,
    "mrpPaise": 18999900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 450,
    "inStock": true,
    "availableStock": 2,
    "reservedStock": 0,
    "badge": "RARE COLLECTIBLE",
    "isDealOfTheDay": true,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Sensor",
        "value": "40.2MP X-Trans CMOS 5 HR Sensor"
      },
      {
        "label": "Stabilization",
        "value": "5-Axis In-Body Stabilization up to 6.0 Stops"
      }
    ],
    "highlights": [
      "40.2MP X-Trans Sensor",
      "6-Stop In-Body IBIS",
      "20 Film Simulation Modes",
      "Machined Aluminum Dials"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_fujifilm_xt5",
    "slug": "fujifilm-x-t5-mirrorless-camera-black",
    "name": "Fujifilm X-T5 Mirrorless Camera (Black Body, 40.2MP X-Trans, 3-Way Tilt LCD)",
    "subtitle": "Dedicated Dials for ISO/Shutter/Exposure, 7-Stop In-Body IBIS, 1/180,000s Shutter",
    "description": "Photography-first mirrorless camera honoring traditional analog shooting with tactile manual dials.",
    "category": "cameras",
    "brand": "Fujifilm",
    "pricePaise": 16499900,
    "mrpPaise": 18499900,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 610,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "ANALOG JOY",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Shutter",
        "value": "Ultra-Fast 1/180,000s Electronic Shutter"
      },
      {
        "label": "LCD",
        "value": "3-Way Tilting LCD Touchscreen"
      }
    ],
    "highlights": [
      "Dedicated Manual Dial Controls",
      "40.2MP X-Trans CMOS 5 HR",
      "7.0-Stop In-Body IBIS",
      "Pixel Shift Multi-Shot 160MP"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_fujifilm_gfx_100_ii",
    "slug": "fujifilm-gfx-100-ii-medium-format-camera",
    "name": "Fujifilm GFX 100 II Large Format Mirrorless Camera (102MP High-Speed Sensor)",
    "subtitle": "102MP 43.8x32.9mm Medium Format Sensor, 8K 30p Video, 8-Stop IBIS, AI Autofocus",
    "description": "Monumental medium format resolution delivering breathtaking dynamic range and three-dimensional depth.",
    "category": "cameras",
    "brand": "Fujifilm",
    "pricePaise": 69999000,
    "mrpPaise": 77999000,
    "discountPercent": 10,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 95,
    "inStock": true,
    "availableStock": 2,
    "reservedStock": 0,
    "badge": "MEDIUM FORMAT TITAN",
    "isDealOfTheDay": true,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Sensor",
        "value": "102MP High-Speed Large Format (43.8 x 32.9mm)"
      },
      {
        "label": "Video",
        "value": "8K 30p & 4K 60p 10-Bit Internal Apple ProRes"
      }
    ],
    "highlights": [
      "102MP Medium Format Sensor",
      "8-Stop In-Body Stabilization",
      "8K 30p Internal Apple ProRes",
      "3D Subject Pop & Dynamic Range"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_fujifilm_xh2s",
    "slug": "fujifilm-x-h2s-mirrorless-camera",
    "name": "Fujifilm X-H2S Flagship Hybrid Mirrorless Camera (26.1MP Stacked BSI Sensor, 40fps)",
    "subtitle": "Stacked X-Trans CMOS 5 HS Sensor, 40fps Blackout-Free Burst, 6.2K Open Gate 30p",
    "description": "High-speed stacked sensor camera engineered for wildlife action, sports, and cinema production.",
    "category": "cameras",
    "brand": "Fujifilm",
    "pricePaise": 21999900,
    "mrpPaise": 24999900,
    "discountPercent": 12,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 380,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "STACKED SPEED",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Burst",
        "value": "40 fps Blackout-Free Continuous Electronic Burst"
      },
      {
        "label": "Video",
        "value": "6.2K 30p 3:2 Open Gate & 4K 120p"
      }
    ],
    "highlights": [
      "40fps Blackout-Free Burst",
      "26.1MP Stacked X-Trans Sensor",
      "Apple ProRes Internal 4:2:2",
      "7-Stop In-Body IBIS"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_canon_eos_r5_ii",
    "slug": "canon-eos-r5-mark-ii-mirrorless-camera",
    "name": "Canon EOS R5 Mark II Full-Frame Mirrorless Camera (45MP Stacked BSI Sensor)",
    "subtitle": "Accelerated Capture Dual Engine (DIGIC X + DIGIC Accelerator), Eye Control AF, 8K 60p RAW",
    "description": "Revolutionary action & cinema camera. Control autofocus points simply by looking at your subject through EVF.",
    "category": "cameras",
    "brand": "Canon",
    "pricePaise": 39999000,
    "mrpPaise": 44999000,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 290,
    "inStock": true,
    "availableStock": 3,
    "reservedStock": 0,
    "badge": "CANON FLAGSHIP",
    "isDealOfTheDay": true,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Sensor",
        "value": "45.0 Megapixel Full-Frame Stacked BSI CMOS"
      },
      {
        "label": "Autofocus",
        "value": "Next-Gen Eye Control Autofocus System"
      }
    ],
    "highlights": [
      "Next-Gen Eye Control AF",
      "45MP Stacked BSI Sensor",
      "8K 60p RAW Light Internal",
      "Action Priority AF Tracking"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_canon_eos_r6_ii",
    "slug": "canon-eos-r6-mark-ii-mirrorless-camera",
    "name": "Canon EOS R6 Mark II Full-Frame Mirrorless Camera (24.2MP, 40fps, 4K 60p Uncropped)",
    "subtitle": "Dual Pixel CMOS AF II with Deep Learning, 6K Oversampled 4K 60p, 8.0-Stop Coordinated IS",
    "description": "The champion of wedding, portrait, and documentary photography with blistering 40fps burst shooting.",
    "category": "cameras",
    "brand": "Canon",
    "pricePaise": 20999000,
    "mrpPaise": 23999000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 1150,
    "inStock": true,
    "availableStock": 7,
    "reservedStock": 0,
    "badge": "HYBRID ALL-ROUNDER",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Burst",
        "value": "Up to 40 fps Continuous Silent Electronic Shooting"
      },
      {
        "label": "Video",
        "value": "Uncropped 4K 60p Oversampled from 6K"
      }
    ],
    "highlights": [
      "40fps Electronic Burst",
      "Uncropped 4K 60p Video",
      "Dual Pixel CMOS AF II",
      "8.0-Stop Image Stabilization"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_canon_powershot_v10",
    "slug": "canon-powershot-v10-pocket-vlog-camera",
    "name": "Canon PowerShot V10 Pocket 4K Vlogging Camera (Built-in Stand, Stereo Mic)",
    "subtitle": "1.0-inch CMOS Sensor, Wide-Angle 19mm Lens, Built-in Multi-Angle Stand, Vertical Video",
    "description": "Slip it in your jeans pocket. The all-in-one pocket vlogging studio with built-in folding kickstand.",
    "category": "cameras",
    "brand": "Canon",
    "pricePaise": 3499000,
    "mrpPaise": 3999000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.6,
    "reviewCount": 680,
    "inStock": true,
    "availableStock": 12,
    "reservedStock": 0,
    "badge": "POCKET VLOG",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Sensor",
        "value": "1.0-inch 20.9MP CMOS Sensor"
      },
      {
        "label": "Lens",
        "value": "Wide-Angle 19mm f/2.8 Fixed Lens"
      }
    ],
    "highlights": [
      "Built-in Folding Stand",
      "1.0-inch Sensor 4K Video",
      "19mm Wide Lens For Selfies",
      "Omnidirectional Stereo Mic"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_nikon_z8",
    "slug": "nikon-z8-full-frame-mirrorless-camera",
    "name": "Nikon Z8 Full-Frame Mirrorless Camera (45.7MP Stacked CMOS, Real-Time EVF)",
    "subtitle": "True \"Baby Z9\" Architecture, Zero Mechanical Shutter, 8.3K 60p N-RAW Internal",
    "description": "Full flagship Z9 capability shrunk into an agile 910g body. Incredible 45.7MP stacked sensor speed.",
    "category": "cameras",
    "brand": "Nikon",
    "pricePaise": 32999000,
    "mrpPaise": 36999000,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 480,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "BABY Z9",
    "isDealOfTheDay": true,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Sensor",
        "value": "45.7MP Full-Frame Stacked CMOS"
      },
      {
        "label": "Shutter",
        "value": "100% Fully Electronic Sensor (No Mechanical Wear)"
      }
    ],
    "highlights": [
      "No Mechanical Shutter Wear",
      "8.3K 60p N-RAW Internal",
      "45.7MP Stacked Sensor",
      "Real-Live Continuous Viewfinder"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_nikon_zf",
    "slug": "nikon-zf-retro-full-frame-mirrorless-camera",
    "name": "Nikon Zf Retro Full-Frame Mirrorless Camera (Black, Brass Dials, Expeed 7)",
    "subtitle": "Iconic FM2 Vintage Styling, 24.5MP BSI Sensor, Pixel Shift 96MP, 8-Stop Focus Point VR",
    "description": "Handcrafted brass mechanical dials that click with satisfying precision, wrapped in vintage leatherette.",
    "category": "cameras",
    "brand": "Nikon",
    "pricePaise": 17499000,
    "mrpPaise": 19999000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 820,
    "inStock": true,
    "availableStock": 6,
    "reservedStock": 0,
    "badge": "VINTAGE CHIC",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Styling",
        "value": "Inspired by Iconic Nikon FM2 Film Camera"
      },
      {
        "label": "Stabilization",
        "value": "8.0 Stops Focus Point Vibration Reduction"
      }
    ],
    "highlights": [
      "Solid Brass Tactile Dials",
      "Dedicated B&W Monochrome Switch",
      "8.0-Stop In-Body VR",
      "Pixel Shift 96MP Mode"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_nikon_z6_iii",
    "slug": "nikon-z6-iii-partially-stacked-mirrorless-camera",
    "name": "Nikon Z6 III Full-Frame Camera (24.5MP Partially Stacked Sensor, 5760k-Dot EVF)",
    "subtitle": "World’s First Partially Stacked CMOS Sensor, 4000-nit EVF, 6K 60p N-RAW Internal",
    "description": "Supercharges focus acquisition with a 3.5x faster readout partially stacked full-frame architecture.",
    "category": "cameras",
    "brand": "Nikon",
    "pricePaise": 23999000,
    "mrpPaise": 26999000,
    "discountPercent": 11,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 390,
    "inStock": true,
    "availableStock": 5,
    "reservedStock": 0,
    "badge": "FAST PARTIAL STACK",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "EVF",
        "value": "5,760,000-Dot 4,000-nit Ultra-Bright EVF"
      },
      {
        "label": "Sensor",
        "value": "24.5MP World-First Partially Stacked CMOS"
      }
    ],
    "highlights": [
      "Partially Stacked Sensor",
      "4000-nit Ultra-Bright EVF",
      "6K 60p N-RAW Internal",
      "120fps Full HD Burst"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_leica_q3",
    "slug": "leica-q3-full-frame-compact-camera",
    "name": "Leica Q3 Full-Frame Compact Camera (60MP BSI Sensor, Summilux 28mm f/1.7 ASPH)",
    "subtitle": "Triple Resolution Technology (60/36/18 MP), Tilting High-Res Touchscreen, 8K Video",
    "description": "The pinnacle of German optical elegance. Fixed Leica Summilux 28mm f/1.7 lens paired with a 60MP sensor.",
    "category": "cameras",
    "brand": "Leica",
    "pricePaise": 62500000,
    "mrpPaise": 68000000,
    "discountPercent": 8,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 120,
    "inStock": true,
    "availableStock": 2,
    "reservedStock": 0,
    "badge": "GERMAN ICON",
    "isDealOfTheDay": true,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Lens",
        "value": "Integrated Leica Summilux 28mm f/1.7 ASPH (Macro Mode)"
      },
      {
        "label": "Sensor",
        "value": "60MP BSI CMOS with Triple Resolution"
      }
    ],
    "highlights": [
      "Leica Summilux 28mm f/1.7",
      "60MP Triple-Resolution BSI",
      "Tilting High-Res Display",
      "IP52 Weather Sealed Metal"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_leica_m11",
    "slug": "leica-m11-digital-rangefinder-camera-black",
    "name": "Leica M11 Digital Rangefinder Camera (Black Aluminum, 60MP BSI CMOS Sensor)",
    "subtitle": "Pure Mechanical Rangefinder Focusing, 64GB Internal Memory, Scratch-Resistant Finish",
    "description": "The soul of photography. Focus purely by aligning the split optical rangefinder patch in an all-metal jewel.",
    "category": "cameras",
    "brand": "Leica",
    "pricePaise": 79500000,
    "mrpPaise": 85000000,
    "discountPercent": 6,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1502982720700-bfff97f2da8d?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 85,
    "inStock": true,
    "availableStock": 1,
    "reservedStock": 0,
    "badge": "HERITAGE RANGEFINDER",
    "isDealOfTheDay": false,
    "deliveryDays": 3,
    "specs": [
      {
        "label": "Focus",
        "value": "Mechanical Optical Split-Image Rangefinder"
      },
      {
        "label": "Memory",
        "value": "64GB High-Speed Internal Flash Storage"
      }
    ],
    "highlights": [
      "Pure Mechanical Rangefinder",
      "60MP BSI Full-Frame",
      "Black Aluminum Top Plate",
      "Made in Wetzlar Germany"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_panasonic_lumix_s5_iix",
    "slug": "panasonic-lumix-s5-iix-full-frame-camera",
    "name": "Panasonic Lumix S5 IIX Full-Frame Hybrid Camera (All-Black Stealth Edition)",
    "subtitle": "24.2MP BSI Sensor, Phase Hybrid AF, Apple ProRes & Blackmagic RAW via HDMI, SSD Recording",
    "description": "A videographers dream machine. Records directly to external USB-C SSDs in ProRes with active fan cooling.",
    "category": "cameras",
    "brand": "Panasonic",
    "pricePaise": 18999000,
    "mrpPaise": 21999000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 540,
    "inStock": true,
    "availableStock": 7,
    "reservedStock": 0,
    "badge": "PRORES SSD RIG",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Video",
        "value": "Direct-to-SSD USB Recording (Apple ProRes 422 HQ)"
      },
      {
        "label": "Autofocus",
        "value": "779-Point Phase Hybrid Autofocus System"
      }
    ],
    "highlights": [
      "Direct USB-C SSD Recording",
      "Phase Hybrid Autofocus",
      "Active Fan Heat Dissipation",
      "Stealth Blackout Branding"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_blackmagic_bmpcc_6k_pro",
    "slug": "blackmagic-pocket-cinema-camera-6k-pro",
    "name": "Blackmagic Pocket Cinema Camera 6K Pro (Super 35 HDR Sensor, Built-in ND Filters)",
    "subtitle": "Motorized 2/4/6 Stop IR ND Filters, 6K 50fps Blackmagic RAW, 1500-nit Tilting HDR Screen",
    "description": "Hollywood cinema workflow in a handheld camera. Features motorized mechanical ND filters inside the lens mount.",
    "category": "cameras",
    "brand": "Blackmagic",
    "pricePaise": 23999000,
    "mrpPaise": 27999000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.9,
    "reviewCount": 410,
    "inStock": true,
    "availableStock": 4,
    "reservedStock": 0,
    "badge": "HOLLYWOOD RAW",
    "isDealOfTheDay": false,
    "deliveryDays": 2,
    "specs": [
      {
        "label": "Sensor",
        "value": "Super 35 HDR (6144 x 3456) with 13 Stops Dynamic Range"
      },
      {
        "label": "ND Filters",
        "value": "Motorized Built-in 2, 4, and 6 Stop IR ND"
      }
    ],
    "highlights": [
      "Built-in Motorized ND Filters",
      "6K Blackmagic RAW Recording",
      "1500-nit Tilting HDR Screen",
      "Dual Mini XLR Audio Ports"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_insta360_ace_pro",
    "slug": "insta360-ace-pro-8k-action-camera-leica",
    "name": "Insta360 Ace Pro 8K Action Camera (Co-Engineered with Leica, 1/1.3\" Sensor)",
    "subtitle": "8K 24fps Video, 2.4\" Flip Touchscreen, 5nm AI Chip, PureVideo Night Mode, 10m Waterproof",
    "description": "The premier low-light action camera with Leica optical engineering and dedicated 5nm generative AI chip.",
    "category": "cameras",
    "brand": "Insta360",
    "pricePaise": 3699000,
    "mrpPaise": 4299000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.8,
    "reviewCount": 1620,
    "inStock": true,
    "availableStock": 14,
    "reservedStock": 0,
    "badge": "8K ACTION",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Video",
        "value": "8K 24fps & 4K 120fps Slow Motion"
      },
      {
        "label": "Sensor",
        "value": "1/1.3-inch Leica Co-Engineered Sensor"
      }
    ],
    "highlights": [
      "8K Video Resolution",
      "2.4\" Flip Touchscreen",
      "PureVideo AI Low Light",
      "10m Waterproof Standalone"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_gopro_hero_12_creator",
    "slug": "gopro-hero12-black-creator-edition",
    "name": "GoPro HERO12 Black Creator Edition (Volta Grip, Media Mod, Light Mod Included)",
    "subtitle": "5.3K 60fps HDR Video, HyperSmooth 6.0 Stabilization, Bluetooth Audio Support, 5+ Hours Run",
    "description": "All-in-one vlogging and content creation rig with powered battery grip and integrated directional mic.",
    "category": "cameras",
    "brand": "GoPro",
    "pricePaise": 5499000,
    "mrpPaise": 6299000,
    "discountPercent": 13,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 4.7,
    "reviewCount": 2800,
    "inStock": true,
    "availableStock": 16,
    "reservedStock": 0,
    "badge": "CREATOR BUNDLE",
    "isDealOfTheDay": false,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Stabilization",
        "value": "HyperSmooth 6.0 with 360° Horizon Lock"
      },
      {
        "label": "Audio",
        "value": "Directional Microphone with Windscreen + Bluetooth Mic"
      }
    ],
    "highlights": [
      "5.3K HDR Crisp Video",
      "Volta Battery Grip Included",
      "HyperSmooth 6.0 Horizon Lock",
      "Media Mod Directional Audio"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  },
  {
    "productId": "prod_dji_osmo_pocket_3",
    "slug": "dji-osmo-pocket-3-creator-combo",
    "name": "DJI Osmo Pocket 3 Creator Combo (1-inch CMOS Gimbal Camera, DJI Mic 2 Included)",
    "subtitle": "4K 120fps, 3-Axis Mechanical Gimbal Stabilization, 2-Inch Rotatable OLED Touchscreen",
    "description": "The most in-demand pocket vlogging camera on the planet. 1-inch CMOS sensor with buttery mechanical gimbal.",
    "category": "cameras",
    "brand": "DJI",
    "pricePaise": 5999000,
    "mrpPaise": 6999000,
    "discountPercent": 14,
    "currency": "INR",
    "imageUrl": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1200&auto=format&fit=crop",
    "galleryImages": [
      "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1200&auto=format&fit=crop"
    ],
    "rating": 5,
    "reviewCount": 3100,
    "inStock": true,
    "availableStock": 8,
    "reservedStock": 0,
    "badge": "VIRAL FAVORITE",
    "isDealOfTheDay": true,
    "deliveryDays": 1,
    "specs": [
      {
        "label": "Sensor",
        "value": "1-inch CMOS Large Sensor"
      },
      {
        "label": "Gimbal",
        "value": "3-Axis Mechanical Stabilization (No Crop)"
      }
    ],
    "highlights": [
      "1-inch Large CMOS Sensor",
      "2-inch Rotatable OLED Screen",
      "DJI Mic 2 Wireless Included",
      "ActiveTrack 6.0 Face Tracking"
    ],
    "active": true,
    "createdAt": "2026-10-01T10:00:00Z",
    "updatedAt": "2026-10-19T12:00:00Z"
  }
];
