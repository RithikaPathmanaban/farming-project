export const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Process', path: '/process' },
  { label: 'About & Factory', path: '/about' },
  { label: 'Contact', path: '/contact' },
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

export const processSteps = [
  {
    step: '01',
    title: 'Coconut Harvesting',
    badge: 'Step 01',
    iconName: 'TreePalm',
    summary: 'Fresh coconuts harvested from sustainable plantations across Tamil Nadu.',
    description: 'Fresh matured coconuts are carefully harvested from sustainable, pesticide-free coconut groves across Tamil Nadu. Coconuts are selected at optimal maturity when fibers possess maximum tensile strength, flexibility, and natural resilience.',
    highlights: [
      'Sustainably cultivated coastal and inland plantations',
      'Hand-picked at peak husk maturity',
      'Consistent organic raw material supply',
    ],
    metric: 'Selected Mature Husks',
  },
  {
    step: '02',
    title: 'Husk Collection',
    badge: 'Step 02',
    iconName: 'Package',
    summary: 'Husks collected as natural byproducts, giving new life to organic materials.',
    description: 'Coconut husks are systematically gathered from agricultural operations and copra yards. Rather than discarding or burning husks, our zero-waste pipeline converts 100% of the raw husk into premium industrial fiber and agricultural peat substrates.',
    highlights: [
      '100% eco-responsible circular manufacturing',
      'Zero-waste raw material handling',
      'Sorting and segregation for quality consistency',
    ],
    metric: '100% Eco Upcycling',
  },
  {
    step: '03',
    title: 'Fiber Extraction',
    badge: 'Step 03',
    iconName: 'Cpu',
    summary: 'Advanced mechanized decortication separating high-tensile fiber from fine pith.',
    description: 'Using high-speed decorticator drums and automated beaters, we extract high-grade coconut fibers from husks, cleanly separating long bristle fibers from the absorbent spongy coir pith dust.',
    highlights: [
      'High bristle content and low baby fiber waste',
      'Clean mechanical separation without harsh chemicals',
      'Automated dust extraction systems',
    ],
    metric: 'Modern High-Yield Drums',
  },
  {
    step: '04',
    title: 'Processing & Washing',
    badge: 'Step 04',
    iconName: 'Droplets',
    summary: 'Thorough freshwater washing to regulate salinity and electrical conductivity.',
    description: 'Extracted coco peat is transferred to specialized concrete washing basins where it undergoes thorough freshwater washing to leach out natural sodium and potassium salts. We offer both Low EC (< 0.5 mS/cm) and High EC grades suited for specialized horticulture and agriculture.',
    highlights: [
      'Rigorous freshwater desalinization wash',
      'Controlled EC and balanced pH levels (5.5 - 6.8)',
      'Buffered options available upon contract specification',
    ],
    metric: 'Low EC < 0.5 mS/cm',
  },
  {
    step: '05',
    title: 'Drying & Grading',
    badge: 'Step 05',
    iconName: 'Sun',
    summary: 'Natural open-air sun curing to optimal moisture with precision sieve grading.',
    description: 'Coir fiber and washed coco peat are spread across vast concrete drying yards under natural sunlight until moisture drops below 15%. Precision rotary trommel screens filter out sand, short fibers, and oversized particles to ensure uniform grading.',
    highlights: [
      'Natural solar drying preserving fiber tensile elasticity',
      'Continuous rotary sieve grading',
      'Moisture meters checking every batch (<15%)',
    ],
    metric: '< 15% Controlled Moisture',
  },
  {
    step: '06',
    title: 'Compression & Packaging',
    badge: 'Step 06',
    iconName: 'Ship',
    summary: 'Hydraulic compression into dense blocks, bales, and export-ready seaworthy pallets.',
    description: 'Final products are compressed under hydraulic pressure into 5kg coco peat blocks (5:1 volumetric expansion), 120-130kg strapped fiber bales, or continuous curled coir coils. Strapped, palletized, and sealed in shipping containers for reliable global export.',
    highlights: [
      'Hydraulic pressing for maximum transport density',
      'Heavy-duty plastic strapping and weather-shield wrap',
      'Seaworthy palletized container loading (FCL / LCL)',
    ],
    metric: '400 - 700 MT Monthly',
  },
]

export const products = [
  {
    number: '01',
    id: 'curled-coir-rope',
    title: 'Curled Coir Rope',
    subtitle: 'High-resilience twisted coir rope engineered for mattress & upholstery cores',
    tag: 'Mattress & Upholstery Grade',
    category: 'Rope & Fiber',
    image: getAsset('products/coir_rope.png'),
    text: 'The Curled Coir that we produce from Coconut Fiber is profoundly regarded for its quality and strength. Our mastery in the field has made us a standout amongst the most presumed coconut coir rope fabricators in India. We manufacture Curled Coir rope out of matured chestnut Coir Fiber, produced using present day innovation.',
    longDescription: [
      'Curled coir rope is manufactured by mechanically twisting cleaned long coir fiber into a tight spring-like cord. This twisting creates an inherent mechanical springiness and permanent bounce, making it the premier core material for rubberized coir mattresses, automobile seating pads, and insulation cushions.',
      'Our factory produces more than 400 Metric Tonnes per month of curled coir rope using heavy-duty curling machines. Each coil is inspected for consistent thickness, tight twist density, and minimal moisture content to prevent mold or odor.',
      'Supplied to India’s leading mattress manufacturers and exported across European and Asian markets in uniform 30-35 kg coils ready for automated mattress assembly lines.',
    ],
    benefit: 'Specifically twisted for better bounce, strength and lifetime durability',
    details: [
      'Specially twisted for better performance, strength and durability',
      'Offered in irresistible shades, widths, and distinguished uniform finish',
      'Monthly production yield exceeding 400 MT / Month',
      '100% eco-friendly, biodegradable, and chemical-free',
    ],
    highlights: [
      'Permanent natural spring effect and high bounce resilience',
      'Consistent diameter and tight curl pitch throughout each coil',
      'Optimal low moisture content (< 15%) preventing fungal growth',
      '100% natural organic chestnut coir fiber without additives',
    ],
    applications: [
      'Rubberized coir mattress core pads',
      'Automotive and railway carriage seating cushions',
      'Acoustic insulation panels and industrial cushioning',
      'Erosion control bio-logs and civil geotextiles',
    ],
    specs: {
      formFactor: 'Continuous coiled rolls (~30-35 Kg)',
      twistDensity: 'High-tensile tight curled machine twist',
      moisture: '< 15% Max (Sun Cured)',
      monthlyYield: '400+ MT / Month',
      compliance: '100% Biodegradable & Natural',
    },
  },
  {
    number: '02',
    id: 'coir-fibre-bales',
    title: 'Coir Fibre Bales',
    subtitle: 'Water-resistant, high-bristle natural coir fiber strapped for export and manufacturing',
    tag: 'Raw Fiber',
    category: 'Rope & Fiber',
    image: getAsset('products/coir-fibre-bales.png'),
    text: 'Our Natural Coir Fibre bales are highly regarded for their water-resistant quality and natural impermeability to salt water. Coconut Coir Fiber is extracted from the stringy external husk of the Coconut Plant. Coir Fiber is compressed and baled with heavy-duty plastic straps to guarantee high utility and safe overseas transport.',
    longDescription: [
      'Coir fiber is one of the strongest and most durable natural fibers known, possessing high lignin content that grants exceptional resistance to rot, weathering, and saltwater degradation. Extracted from raw husks through mechanized decortication, the fibers are sieved to remove short baby fibers and excess pith.',
      'After natural sun curing in our open yards, the clean coir fiber is hydraulically compressed into dense 120-130 kg bales reinforced with rust-proof strapping bands. This high compression maximizes container shipping efficiency, allowing up to 20-24 MT per 40ft High Cube container.',
      'Widely utilized in needle felt non-woven fabrics, geo-textiles, coir twine spinning, rubberized coir sheets, and sound absorption panels.',
    ],
    benefit: 'Higher fiber thickness, high bristle content, and minimal pith residue',
    details: [
      'Higher fiber thickness ensuring superior tensile load bearing',
      'High bristle content with minimal short baby fibers',
      'Low moisture content (< 15%) and minimum pith content',
      'Best suited for non-woven needle-felt coir fabrics',
      'Ideal for rubberized coir production and mattress cores',
    ],
    highlights: [
      'Natural high lignin content providing rot and salt-water resistance',
      'Hydraulically compressed into 120-130 kg strapped export bales',
      'Uniform golden-brown color and clean fiber texture',
      'Zero chemical additives or synthetic binders',
    ],
    applications: [
      'Needle-felt non-woven geotextiles and erosion blankets',
      'Rubberized coir mattress and cushion manufacturing',
      'Brush and broom manufacturing bristles',
      'Coir yarn and braided twine fabrication',
    ],
    specs: {
      formFactor: 'Hydraulic strapped bales (120-130 Kg)',
      fiberLength: '5 cm to 25 cm mixed bristle grade',
      moisture: '< 15% Optimal Low Moisture',
      monthlyYield: 'High capacity decortication run',
      compliance: '100% Biodegradable & Organic',
    },
  },
  {
    number: '03',
    id: 'coir-peat',
    title: 'Coco Peat (Coco Pith 5Kg Blocks)',
    subtitle: 'Premium washed and sieved coco pith blocks for professional horticulture & soil-less crops',
    tag: 'Substrates & Peat',
    category: 'Peat & Substrates',
    image: getAsset('products/coir-fibre.png'),
    text: 'Coco Coir Peat is the organic binding material extracted from coconut husks. Produced during fiber decortication, it is washed, sun-dried, screened, and compressed into dense 5kg blocks. A sustainable alternative to peat moss, it provides remarkable water retention and root aeration.',
    longDescription: [
      'Coco peat (also known as coir pith) is celebrated worldwide by commercial greenhouses, hydroponic farms, and berry growers as the world’s most sustainable growing medium. Its cellular structure acts as a natural sponge, holding up to 8-9 times its weight in water while maintaining 20-25% air-filled porosity for vigorous root respiration.',
      'At Thaiagam Agros, our raw coir pith is desalted in dedicated freshwater washing bays to achieve strictly regulated EC levels. After sun curing, rotary trommels screen out dust and micro-particles before 5:1 hydraulic pressing into 5 kg blocks.',
      'Each 5kg block expands to approximately 70-75 liters of fluffy, ready-to-use potting substrate upon hydration. Available in both High EC (for general soil conditioning and landscaping) and Low EC (< 0.5 mS/cm for sensitive crops like strawberries, tomatoes, and blueberries).',
    ],
    benefit: 'Wide range of High EC & Low EC 5Kg blocks with 5:1 expansion ratio',
    details: [
      'Offering a wide range of High EC & Low EC 5Kg Blocks',
      'High lignin content ensures slow degradation maintaining water/air ratio',
      'High water retention capacity holding up to 8-9x its weight in moisture',
      'Monthly capacity exceeding 700 MT / Month',
      'Completely biodegradable, precise block sizing, 100% eco-friendly',
    ],
    highlights: [
      'Expands to 70-75 liters of premium substrate per 5kg block',
      'Ideal neutral-to-slightly-acidic pH (5.5 - 6.8)',
      'Excellent water retention with balanced oxygen drainage',
      'Slow structural decomposition over 3-5 cropping seasons',
    ],
    applications: [
      'Commercial greenhouse tomato, cucumber, and pepper cultivation',
      'Berry cultivation (strawberries, blueberries, raspberries)',
      'Nursery potting mixes, seed germination, and soil conditioning',
      'Hydroponic trough and grow bag blending',
    ],
    specs: {
      formFactor: '5 Kg Compressed Blocks (~30 x 30 x 12 cm)',
      expansion: '70 - 75 Liters per 5 Kg block',
      ecLevel: 'Low EC (< 0.5 mS/cm) & High EC (unwashed)',
      phRange: '5.5 - 6.8',
      monthlyYield: '700+ MT / Month',
    },
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
  email: 'mk.rahman0210@gmail.com',
  exportMarkets: 'European countries, Australia, China, and numerous other countries',
}
