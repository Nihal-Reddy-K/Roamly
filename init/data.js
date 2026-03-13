const sampleListings = [
  {
    title: "Cliffside Villa in Santorini",
    description: "Wake up to sweeping caldera views in a bright white villa perched above the Aegean Sea.",
    image: {
      url: "https://picsum.photos/seed/santorini/800/500",
      filename: "listingimage"
    },
    price: 8200,
    location: "Santorini",
    country: "Greece",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [25.4615, 36.3932]
    }
  },
  {
    title: "Glass Igloo in Lapland",
    description: "Stay in a heated glass igloo and watch the northern lights from the comfort of your bed.",
    image: {
      url: "https://picsum.photos/seed/lapland/800/500",
      filename: "listingimage"
    },
    price: 10500,
    location: "Rovaniemi",
    country: "Finland",
    category: "Arctic",
    geometry: {
      type: "Point",
      coordinates: [25.7294, 66.5039]
    }
  },
  {
    title: "Canopy Treehouse Retreat",
    description: "An eco-friendly treehouse surrounded by dense forest, birdsong, and complete privacy.",
    image: {
      url: "https://picsum.photos/seed/treehouse/800/500",
      filename: "listingimage"
    },
    price: 4200,
    location: "Manaus",
    country: "Brazil",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [-60.0217, -3.1190]
    }
  },
  {
    title: "Luxury Apartment in Paris",
    description: "Elegant city stay with refined interiors, a balcony, and iconic Parisian neighborhood charm.",
    image: {
      url: "https://picsum.photos/seed/paris/800/500",
      filename: "listingimage"
    },
    price: 9500,
    location: "Paris",
    country: "France",
    category: "City",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    }
  },
  {
    title: "Overwater Bungalow in Bora Bora",
    description: "Crystal-clear lagoon views, private deck access, and a dreamy tropical escape.",
    image: {
      url: "https://picsum.photos/seed/borabora/800/500",
      filename: "listingimage"
    },
    price: 16500,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "Beach",
    geometry: {
      type: "Point",
      coordinates: [-151.7415, -16.5004]
    }
  },
  {
    title: "Desert Camp in the Sahara",
    description: "Experience starry nights, warm lantern-lit tents, and a peaceful desert atmosphere.",
    image: {
      url: "https://picsum.photos/seed/sahara/800/500",
      filename: "listingimage"
    },
    price: 3800,
    location: "Merzouga",
    country: "Morocco",
    category: "Desert",
    geometry: {
      type: "Point",
      coordinates: [-4.0134, 31.0994]
    }
  },
  {
    title: "Canal Apartment in Venice",
    description: "A romantic apartment with water views, charming interiors, and easy canal-side walks.",
    image: {
      url: "https://picsum.photos/seed/venice/800/500",
      filename: "listingimage"
    },
    price: 7200,
    location: "Venice",
    country: "Italy",
    category: "City",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408]
    }
  },
  {
    title: "Skyline Condo in Singapore",
    description: "Modern high-rise living with sleek interiors, rooftop access, and skyline views.",
    image: {
      url: "https://picsum.photos/seed/singapore/800/500",
      filename: "listingimage"
    },
    price: 8800,
    location: "Singapore",
    country: "Singapore",
    category: "Luxury",
    geometry: {
      type: "Point",
      coordinates: [103.8198, 1.3521]
    }
  },
  {
    title: "Island Hut in Palawan",
    description: "A simple tropical hut steps from the shore, perfect for sunrise lovers and slow travel.",
    image: {
      url: "https://picsum.photos/seed/palawan/800/500",
      filename: "listingimage"
    },
    price: 2900,
    location: "Palawan",
    country: "Philippines",
    category: "Beach",
    geometry: {
      type: "Point",
      coordinates: [118.7384, 9.8349]
    }
  },
  {
    title: "Countryside Barn in Lisse",
    description: "A converted rustic barn surrounded by fields, flowers, and quiet village charm.",
    image: {
      url: "https://picsum.photos/seed/lisse/800/500",
      filename: "listingimage"
    },
    price: 4600,
    location: "Lisse",
    country: "Netherlands",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [4.5575, 52.2600]
    }
  },
  {
    title: "Penthouse in Hong Kong",
    description: "A premium penthouse with dramatic skyline views and polished modern design.",
    image: {
      url: "https://picsum.photos/seed/hongkong/800/500",
      filename: "listingimage"
    },
    price: 11200,
    location: "Hong Kong",
    country: "China",
    category: "Luxury",
    geometry: {
      type: "Point",
      coordinates: [114.1694, 22.3193]
    }
  },
  {
    title: "Beach Shack on the Gold Coast",
    description: "Relaxed coastal vibes, bright interiors, and easy beach access for a fun sunny escape.",
    image: {
      url: "https://picsum.photos/seed/goldcoast/800/500",
      filename: "listingimage"
    },
    price: 5100,
    location: "Gold Coast",
    country: "Australia",
    category: "Beach",
    geometry: {
      type: "Point",
      coordinates: [153.4000, -28.0167]
    }
  },
  {
    title: "Chalet in Zermatt",
    description: "A warm alpine chalet with wooden interiors, snowy views, and mountain-town magic.",
    image: {
      url: "https://picsum.photos/seed/zermatt/800/500",
      filename: "listingimage"
    },
    price: 9800,
    location: "Zermatt",
    country: "Switzerland",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207]
    }
  },
  {
    title: "Colonial House in Havana",
    description: "A colorful heritage stay with vintage character, airy rooms, and local neighborhood charm.",
    image: {
      url: "https://picsum.photos/seed/havana/800/500",
      filename: "listingimage"
    },
    price: 3700,
    location: "Havana",
    country: "Cuba",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [-82.3666, 23.1136]
    }
  },
  {
    title: "Luxury Condo in Toronto",
    description: "A stylish urban condo with skyline views, premium amenities, and a polished city feel.",
    image: {
      url: "https://picsum.photos/seed/toronto/800/500",
      filename: "listingimage"
    },
    price: 7600,
    location: "Toronto",
    country: "Canada",
    category: "City",
    geometry: {
      type: "Point",
      coordinates: [-79.3832, 43.6532]
    }
  },
  {
    title: "Traditional Stay in Kyoto",
    description: "A calm Japanese-style stay with warm wood details, tatami textures, and timeless design.",
    image: {
      url: "https://picsum.photos/seed/kyoto/800/500",
      filename: "listingimage"
    },
    price: 6900,
    location: "Kyoto",
    country: "Japan",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116]
    }
  },
  {
    title: "Lake House in Queenstown",
    description: "A scenic retreat with lakefront views, cool air, and easy access to outdoor adventure.",
    image: {
      url: "https://picsum.photos/seed/queenstown/800/500",
      filename: "listingimage"
    },
    price: 8400,
    location: "Queenstown",
    country: "New Zealand",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [168.6626, -45.0312]
    }
  },
  {
    title: "Riad in Marrakech",
    description: "A peaceful courtyard stay with patterned interiors, warm colors, and Moroccan elegance.",
    image: {
      url: "https://picsum.photos/seed/marrakech/800/500",
      filename: "listingimage"
    },
    price: 4300,
    location: "Marrakech",
    country: "Morocco",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [-7.9811, 31.6295]
    }
  },
  {
    title: "Beach Villa in Seychelles",
    description: "A luxurious beachfront escape with turquoise water, privacy, and postcard-perfect views.",
    image: {
      url: "https://picsum.photos/seed/seychelles/800/500",
      filename: "listingimage"
    },
    price: 12800,
    location: "Mahe",
    country: "Seychelles",
    category: "Beach",
    geometry: {
      type: "Point",
      coordinates: [55.4915, -4.6796]
    }
  },
  {
    title: "Mountain Cabin in Colorado",
    description: "A rustic forest cabin with pine views, a fireplace, and a quiet mountain setting.",
    image: {
      url: "https://picsum.photos/seed/colorado/800/500",
      filename: "listingimage"
    },
    price: 5400,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [-106.8370, 39.1911]
    }
  },
  {
    title: "Infinity Pool Retreat in Ubud",
    description: "A serene tropical stay with lush surroundings, private pool access, and spa-like calm.",
    image: {
      url: "https://picsum.photos/seed/ubud/800/500",
      filename: "listingimage"
    },
    price: 7900,
    location: "Ubud",
    country: "Indonesia",
    category: "Pool",
    geometry: {
      type: "Point",
      coordinates: [115.2625, -8.5069]
    }
  },
  {
    title: "Secluded Farm Cottage in Tuscany",
    description: "A peaceful countryside cottage with rolling vineyard views and a slow, cozy atmosphere.",
    image: {
      url: "https://picsum.photos/seed/tuscany/800/500",
      filename: "listingimage"
    },
    price: 6100,
    location: "Tuscany",
    country: "Italy",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696]
    }
  }
];

module.exports = { data: sampleListings };