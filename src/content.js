export const navigationItems = [
  ['Home', '#top'],
  ['About Us', '#about'],
  ['Products', '#products'],
  ['Manufacturing', '#process'],
  ['Global Export', '#export'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
]


export const heroSlides = [
  {
    tag: 'Supply',
    title: 'Supplying India’s Leading Companies',
    text: 'Our group of companies supply to the India’s leading companies about 400-700mt per month and it is 100% eco-friendly.',
    badge: '400 - 700 MT / Month',
  },
  {
    tag: 'Manufacture',
    title: 'First Grade Manufacturer of Coir Fibre',
    text: 'We are the first grade manufacturer of coir fibre which is 100% biodegradable, which is produced using present day innovation.',
    badge: '100% Biodegradable',
  },
  {
    tag: 'Coir Products',
    title: '40 Years of Industrial Experience',
    text: 'We are one of the established names of the industry with 40 years of experience, engaged in supplying a qualitative range of Coir Fibre Products.',
    badge: 'Since 1972',
  },
]

const BASE_URL = import.meta.env.BASE_URL || '/'
export const getAsset = (path) => `${BASE_URL}${path.replace(/^\//, '')}`

export const products = [
  {
    number: '01',

    id: 'curled-coir-rope',
    title: 'Curled Coir Rope',
    tag: 'Coir Rope',
    image: getAsset('products/coir_rope.png'),
    text: 'The Curled Coir that we produce from Coconut Fiber is profoundly regarded for its quality and strength. Our mastery in the field has made us a standout amongst the most presumed coconut coir rope fabricator. We manufacture the Curled Coir rope out of matured chestnut Coir Fiber, which is produced using present day innovation.',
    benefit: 'Specially twisted for better performance, strength and durability',
    details: [
      'Specially twisted for better performance, strength and durability',
      'Offered in irresistible shades, widths, highly distinguished characteristics, and excellent finish',
      'We produce more than 400 MT / Month',
      '100% eco-friendly product',
    ],
  },
  {
    number: '02',
    id: 'coir-fibre-bales',
    title: 'Coir Fibre Bales',
    tag: 'Raw Fibre',
    image: getAsset('products/coir-fibre-bales.png'),
    text: 'Our Natural Coir Fibre bales highly regarded for its quality of water-resistant and impenetrable to salt water. Coconut Coir Fiber is removed from the stringy external front of the Coconut Plant. Coir Fiber is baled with the help of plastic straps, to guarantee its high quality and utility.',
    benefit: 'High bristle content and low moisture',
    details: [
      'Higher Fibre thickness',
      'High bristle content and low moisture',
      'Minimum pith content',
      'Best suited for non-woven coir fabric',
      'Most ideal for rubberized coir production based on needle felt technology',
    ],
  },
  {
    number: '03',
    id: 'coir-peat',
    title: 'Coir Peat',
    tag: 'Coco Pith',
    image: getAsset('products/coir-fibre.png'),
    text: 'Coco Coir Peat is the coupling material that originates from the fiber part of the coconut husk. It is produced as the bi-product when the extraction of long fibers from the husk is processed. We manufacture products which are eco-friendly and biodegradable.',
    benefit: 'Wide range of High EC & Low EC Coco Pith 5Kg Blocks',
    details: [
      'Offering a wide range of High EC & Low EC Coco Pith 5Kg’s Blocks',
      'Our coco pith block contains high lignin ensures slow degradation maintaining an ideal water / air ratio over a much extended period',
      'Used as fertilizers to improve the quality of the soil',
      'We produce more than 700 MT / Month',
      'Completely biodegradable, precise in size, very eco-friendly in nature',
    ],
  },
]

export const services = [
  {
    id: 'manufacturing',
    number: '01',
    title: 'Manufacturing & Raw Material Handling',
    tag: 'Factory Operations',
    image: getAsset('aboutus/Services/Ourfactory.jpg'),
    description: 'First grade manufacturer of coir fibre utilizing modern machinery and equipment. Our factory yard handles raw coconut husks with heavy hydraulic loaders to maintain consistent, high-volume production for 400-700 MT per month.',
    stats: '400 - 700 MT / Month',
    features: [
      'Heavy hydraulic mechanized handling',
      '100% natural, biodegradable raw coconut husk',
      'Modern equipment ensuring high fibre quality',
    ],
  },
  {
    id: 'curled-coir-supply',
    number: '02',
    title: 'Curled Coir Rope Supply & Logistics',
    tag: 'Mattress Industry Supply',
    image: getAsset('aboutus/Services/Thaiagamcoirproducts.jpg'),
    description: 'Supplying India’s leading mattress manufacturers with over 400 MT per month. Our curled coir rope is specifically twisted for superior resilience and durability, loaded and dispatched via dedicated transport across Tamil Nadu, Kerala, Karnataka, and nationwide.',
    stats: '400+ MT Monthly Supply',
    features: [
      'Specifically twisted for better bounce and durability',
      'Prompt dedicated fleet transport across India',
      'Trusted partner to India’s leading mattress brands',
    ],
  },
  {
    id: 'sun-drying-sorting',
    number: '03',
    title: 'Natural Sun-Drying & Quality Sorting',
    tag: 'Natural Curing',
    image: getAsset('aboutus/Services/Thaiagamagros.jpg'),
    description: 'Extensive open-air sun-drying yards under natural sunlight ensuring optimal low moisture levels and high bristle content. Handled by experienced craftsmen to guarantee superior fibre thickness before baling.',
    stats: 'Sun Cured Yards',
    features: [
      'Open-air natural sun curing for moisture balance',
      'Higher fibre thickness and high bristle content',
      'Rigorous quality sorting and grading',
    ],
  },
  {
    id: 'agro-export-loading',
    number: '04',
    title: 'Bulk Coco Peat & Agro Distribution',
    tag: 'Domestic & Overseas',
    image: getAsset('aboutus/Services/ouragroproducts.jpg'),
    description: 'Mechanized loader-to-truck loading operations for High EC & Low EC Coco Pith products and coir bales. Prepared for agricultural soil enhancement, horticulture, and international export container shipping.',
    stats: 'High & Low EC Coco Pith',
    features: [
      'Mechanized tractor-to-container bulk loading',
      'High EC & Low EC coco pith 5kg blocks',
      'Soil improvement fertilizers for global clients',
    ],
  },
]

export const factoryStories = [
  {
    number: '01',
    title: 'Thaiagam Coir Products',
    text: 'We supply to the India’s leading mattress companies about 400mt per month and it is 100% eco-friendly. Our production unit produces more than 400 MT/month of 100% eco-friendly curled coir product. Our curled coir rope is specifically twisted for better performance, strength and durability.',
    galleryTitle: 'Curled Coir / Coir Fibre Factory',
    images: Array.from({ length: 7 }, (_, index) => getAsset(`aboutus/COIR%20FIBRE%20FACTORY/p${index + 1}.jpg`)),
  },
  {
    number: '02',
    title: 'Thaiagam Agros',
    text: 'We are exporting coco peat to European countries and Australia. We also export coir Fibre to China and numerous other countries. We offer a wide range of High EC & Low EC Coco Pith products. Our Coir/Coco peat products are used as fertilizers to improve soil quality.',
    galleryTitle: 'Coir Peat Factory',
    images: Array.from({ length: 8 }, (_, index) => getAsset(`aboutus/COIR%20PEAT%20FACTORY/p${index + 1}.jpg`)),
  },
]

export const proofStats = [
  { value: 40, suffix: '+', label: 'Years of Experience', desc: 'In coir products manufacturing since 1972' },
  { value: 700, suffix: ' MT', label: 'Monthly Production Capacity', desc: '400 - 700 MT supply per month' },
  { value: 4, suffix: ' Units', label: 'Group Units', desc: 'Group comprises of four dedicated units' },
  { value: 100, suffix: '%', label: 'Eco-Friendly & Biodegradable', desc: 'Natural coir products using modern innovation' },
]

export const testimonials = [
  {
    name: 'Zhang Li',
    location: 'China',
    quote: 'Very much satisfied with the work ethic of Thaiagam group. We do business only with the disciplined team. They are extremely experienced in this field and we are greatly benefited by their products.',
    rating: 4,
  },
  {
    name: 'Guido Clauss',
    location: 'Europe',
    quote: 'I\'ve been a client of Thaiagam right from its outset, delighted in the distance in working with the group. It is more convenient than anyplace else. Thanks.',
    rating: 5,
  },
  {
    name: 'Anshu Jain',
    location: 'Rajasthan',
    quote: 'The best place to buy eco-friendly products in the market are hard to found, we are lucky to found Thaiagam team. We are pleased with buying their products and improved our soil quality to a greater extent.',
    rating: 4,
  },
  {
    name: 'Sriram Ravichandran',
    location: 'Chennai',
    quote: 'Thaiagam team does a great job in walking us through initially, simply they the best in the industry of agro products exporters in India without any doubt.',
    rating: 5,
  },
]

export const contactInfo = {
  leaders: 'Mr. Ismail and Mr. Rahman',
  address: '145, Malligai Street, Ram Nagar, Round Road, Dindigul, Tamilnadu, India.',
  phones: ['9842119772', '9443036680'],
  email: 'rithikapathmanaban1804@gmail.com',
  exportMarkets: 'European countries, Australia, China, and numerous other countries',
}

export const trustTickerItems = [
  { label: 'Monthly Capacity', value: '400 - 700 MT' },
  { label: 'Industry Heritage', value: 'Since 1972 (40+ Years)' },
  { label: 'Global Footprint', value: 'Exporting to 15+ Countries' },
  { label: 'Eco Assurance', value: '100% Biodegradable & Natural' },
  { label: 'Leading Mattress Suppliers', value: 'India’s Top Brands' },
  { label: 'High / Low EC Quality', value: 'Laboratory Tested Coir Peat' },
  { label: 'State-of-the-Art Yard', value: '4 Dedicated Manufacturing Units' },
  { label: 'Port Logistics', value: 'Direct via Tuticorin & Chennai' },
]

export const processTimeline = [
  {
    stepNumber: '01',
    stepLabel: 'Phase 01',
    title: 'Husk Sourcing & Sorting',
    subtitle: '100% Mature Organic Coconut Husks',
    description: 'We source high-density coconut husks exclusively from trusted South Indian plantations. Each batch undergoes moisture and maturity grading to ensure resilient fiber strands.',
    tag: 'Raw Material',
    stats: [
      { label: 'Origin', value: 'Tamil Nadu' },
      { label: 'Purity', value: '100% Natural' }
    ]
  },
  {
    stepNumber: '02',
    stepLabel: 'Phase 02',
    title: 'Mechanized Decortication & Extraction',
    subtitle: 'Modern Fiber Separation Technology',
    description: 'Advanced decorticating beaters separate the long structural coir bristles from the inner pith without tearing the natural cellular fiber tensile strength.',
    tag: 'Extraction',
    stats: [
      { label: 'Method', value: 'Continuous Flow' },
      { label: 'Fibre Yield', value: 'High Bristle' }
    ]
  },
  {
    stepNumber: '03',
    stepLabel: 'Phase 03',
    title: 'Natural Sun-Drying & Moisture Control',
    subtitle: 'Open Air Yard Curing Under Sunlight',
    description: 'Fibers and coco pith are laid across expansive, clean concrete yards for gentle solar curing until reaching the optimal 12-15% moisture equilibrium.',
    tag: 'Curing',
    stats: [
      { label: 'Moisture Target', value: '< 15%' },
      { label: 'Curing', value: 'Solar Yards' }
    ]
  },
  {
    stepNumber: '04',
    stepLabel: 'Phase 04',
    title: 'High-Tension Twisting & Hydraulic Baling',
    subtitle: 'Precision Twisting for Mattress Resiliency',
    description: 'Coir fibers are machine-spun into curled ropes or pressed under heavy hydraulic pressure into 100kg-120kg export bales strapped with heavy-duty bands.',
    tag: 'Baling & Twisting',
    stats: [
      { label: 'Rope Density', value: 'Custom Curls' },
      { label: 'Bale Weight', value: '100-120 KG' }
    ]
  },
  {
    stepNumber: '05',
    stepLabel: 'Phase 05',
    title: 'Quality Lab Verification & Container Loading',
    subtitle: 'Port Dispatch to Global Seaports',
    description: 'Final laboratory testing confirms electrical conductivity (EC), pH, and compaction ratios before loading directly into 40ft High Cube sea freight containers.',
    tag: 'Export Dispatch',
    stats: [
      { label: 'Sea Freight', value: '40ft HC Containers' },
      { label: 'Ports', value: 'Tuticorin / Chennai' }
    ]
  }
]

export const faqItems = [
  {
    id: 'faq-1',
    question: 'What is your monthly manufacturing and export supply capacity?',
    answer: 'Our 4 dedicated manufacturing units produce between 400 MT and 700 MT of finished coir fiber, curled coir rope, and coco peat blocks monthly. We supply both domestic market leaders across India and overseas importers continuously.'
  },
  {
    id: 'faq-2',
    question: 'What is the difference between Low EC and High EC Coco Peat?',
    answer: 'Low EC (Electrical Conductivity < 0.5 mS/cm) coco peat is thoroughly washed with fresh water to remove natural salts, making it ideal for direct greenhouse cultivation, sensitive seedlings, and potting soil blends. High EC (unwashed) is preferred for animal bedding, erosion control, and standard soil conditioning.'
  },
  {
    id: 'faq-3',
    question: 'What are the minimum order quantities (MOQ) for export containers?',
    answer: 'For international export shipments, our standard MOQ is one 40ft High Cube (HC) container, holding approximately 22 to 26 metric tons depending on the product mix (bales vs. palletized 5kg pith blocks). Customized trial shipments can be discussed on request.'
  },
  {
    id: 'faq-4',
    question: 'Which seaports do you utilize for worldwide shipping?',
    answer: 'Our manufacturing hubs in Dindigul, Tamil Nadu are strategically connected to V.O. Chidambaranar Port (Tuticorin Port) and Chennai Port. This geographic advantage enables fast inland transit, prompt customs clearance, and weekly container vessel departures to Europe, China, and Australia.'
  },
  {
    id: 'faq-5',
    question: 'How does your Curled Coir Rope improve mattress manufacturing?',
    answer: 'Our curled rope undergoes a specialized mechanical twisting process that gives coconut fibers a spring-like memory coil. When rubberized by mattress manufacturers, it delivers unmatched ventilation, spinal posture support, anti-dust-mite properties, and long-lasting elasticity.'
  },
  {
    id: 'faq-6',
    question: 'Can you supply customized packaging and private labeling?',
    answer: 'Yes. We provide bespoke packaging options including shrink-wrapped 5kg blocks with custom barcode labels, palletized container loads with corner-board protection, and bulk poly-sacks based on buyer technical specifications.'
  }
]

export const exportDestinations = [
  {
    country: 'China',
    flag: '🇨🇳',
    port: 'Shanghai / Qingdao',
    volume: '150+ MT / Month',
    products: 'Coir Fibre Bales & Curled Rope'
  },
  {
    country: 'European Union',
    flag: '🇪🇺',
    port: 'Rotterdam / Antwerp',
    volume: '200+ MT / Month',
    products: 'Low EC Coco Peat & Briquettes'
  },
  {
    country: 'Australia & NZ',
    flag: '🇦🇺',
    port: 'Melbourne / Sydney',
    volume: '120+ MT / Month',
    products: 'Washed Peat Blocks & Horticulture Slabs'
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    port: 'Los Angeles / New York',
    volume: '80+ MT / Month',
    products: 'Hydroponic Grow Media'
  },
  {
    country: 'Middle East',
    flag: '🇦🇪',
    port: 'Jebel Ali / Dammam',
    volume: '90+ MT / Month',
    products: 'Soil Conditioners & Coir Pellets'
  },
  {
    country: 'Domestic (India)',
    flag: '🇮🇳',
    port: 'Tamil Nadu / Kerala / Karnataka',
    volume: '400+ MT / Month',
    products: 'Curled Coir Rope to Mattress Brands'
  }
]

