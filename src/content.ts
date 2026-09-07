export type Product = {
  number: string
  title: string
  text: string
  benefit: string
  details: string[]
  image: string
  tag: string
}

export type FactoryStory = {
  number: string
  title: string
  text: string
  galleryTitle: string
  images: string[]
}

export const navigationItems = [
  ['Products', '#products'],
  ['About us', '#about'],
  ['Field notes', '#proof'],
]

export const products: Product[] = [
  {
    number: '01',
    title: 'Curled Coir Rope',
    text: 'Made from mature chestnut coir fibre with modern production methods, our curled coir rope is valued for its dependable quality and strength.',
    benefit: 'Twisted for strength and durability',
    details: ['Specially twisted for stronger, longer-lasting performance', 'Available in varied shades, widths, finishes, and characteristics', 'Production capacity above 400 MT per month', '100% eco-friendly product'],
    image: '/products/coir_rope.png',
    tag: 'Coir rope',
  },
  {
    number: '02',
    title: 'Coir Fibre Bales',
    text: 'Natural coir fibre bales are produced from the fibrous outer layer of the coconut and secured with plastic straps for reliable quality and utility.',
    benefit: 'Dense fibre with low moisture',
    details: ['Higher fibre density', 'High bristle content with low moisture', 'Minimum pith content', 'Well suited to non-woven coir fabric', 'Ideal for rubberized coir made with needle-felt technology'],
    image: '/products/coir-fibre-bales.png',
    tag: 'Raw fibre',
  },
  {
    number: '03',
    title: 'Coir Peat',
    text: 'Coir peat is the natural binding material created as a by-product when long fibres are extracted from coconut husk. It is an eco-friendly and biodegradable growing input.',
    benefit: 'Balanced water and air retention',
    details: ['High-EC and low-EC coco pith 5 kg blocks', 'High lignin content supports slow degradation and a stable water-air ratio', 'Used as a soil-improving fertilizer', 'Production capacity above 700 MT per month', 'Completely biodegradable, precise in size, and highly eco-friendly'],
    image: '/products/coir-fibre.png',
    tag: 'Coir peat',
  },
]

export const factoryStories: FactoryStory[] = [
  {
    number: '01',
    title: 'Thaiagam Coir Products',
    text: 'We supply India\'s leading mattress companies with about 400 MT per month, all from a 100% eco-friendly production unit. Our curled coir product is specifically twisted for better performance, strength, and durability.',
    galleryTitle: 'Curled coir / coir fibre factory',
    images: Array.from({ length: 7 }, (_, index) => `/aboutus/COIR%20FIBRE%20FACTORY/p${index + 1}.jpg`),
  },
  {
    number: '02',
    title: 'Thaiagam Agros',
    text: 'With an export license from the Coir Board, we export coco peat to European countries and Australia, along with coir fibre to China and other markets. Our high-EC and low-EC coco pith products are used as fertilizers to improve soil quality.',
    galleryTitle: 'Coir peat factory',
    images: Array.from({ length: 8 }, (_, index) => `/aboutus/COIR%20PEAT%20FACTORY/p${index + 1}.jpg`),
  },
]

export const proofStats = [
  ['40', 'years of material knowledge'],
  ['700mt', 'monthly supply capacity'],
  ['100%', 'biodegradable coir fibre'],
  ['12+', 'markets within reach'],
]

