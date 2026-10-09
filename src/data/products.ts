import type { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'mat-01',
    slug: 'dolomite',
    name: 'Dolomite — Powder & Grains',
    formula: 'CaMg(CO3)2',
    category: 'powders-grains',
    categoryName: 'Mineral Powders & Grains',
    forms: [
      'Micro-milled Fine Powder (300–500 Mesh)',
      'Calibrated Crystalline Grains (0.5mm – 3.0mm)',
      'Raw Lumps & Graded Chips'
    ],
    formTypes: ['powder', 'grains', 'lumps'],
    shortDescription: 'High-purity double carbonate of calcium and magnesium in micro-milled and calibrated crystalline forms.',
    overview: 'A premium double carbonate mineral characterized by high chemical purity, stoichiometric consistency, and controlled particle distribution. Processed for demanding metallurgical slag-conditioning, glass container batch formulation, and high-durability coatings.',
    character: 'Angular crystalline fracture with natural thermal stability and low iron content.',
    image: '/images/dolomite.jpg',
    featured: true,
    applications: [
      'Steelmaking & Foundry Fluxing',
      'Container & Sheet Glass Manufacturing',
      'Paints, Primers & Textured Wall Coatings',
      'Ceramic Frits & Glazes',
      'Agricultural Soil Conditioning & Neutralization'
    ],
    technicalProperties: [
      { label: 'MgO Content', value: '20.5% – 21.8%' },
      { label: 'CaO Content', value: '30.2% – 31.5%' },
      { label: 'Fe2O3 (Iron)', value: '< 0.15%' },
      { label: 'Whiteness / Brightness', value: '92% – 96%' },
      { label: 'Hardness (Mohs)', value: '3.5 – 4.0' },
      { label: 'Loss on Ignition (LOI)', value: '45.0% – 47.0%' }
    ],
    meshRange: '100 Mesh to 500 Mesh & 0.5–3.0mm Grains',
    packaging: '50 kg HDPE bags / 1.0 MT jumbo bags with moisture barrier liner / Bulk dispatch',
    minOrderQuantity: '10 Metric Tonnes (commercial supply)',
    origin: 'Maharashtra & Central India Geological Deposits'
  },
  {
    id: 'mat-02',
    slug: 'calcite',
    name: 'Calcite Powder',
    formula: 'CaCO3',
    category: 'powders-grains',
    categoryName: 'Mineral Powders & Grains',
    forms: [
      'Micronized Powder (Top cut D97: 5µm, 10µm, 20µm)',
      'Industrial Ground Powder (300–500 Mesh)'
    ],
    formTypes: ['powder'],
    shortDescription: 'Ultra-fine natural crystalline calcium carbonate with exceptional optical brightness and narrow particle distribution.',
    overview: 'Naturally crystalline calcium carbonate ground from select high-purity mineral reserves. Known for outstanding opacity, high dispersibility, and chemical inertness. Serves as a critical functional spacing extender in coatings and a reinforcement filler in polymers.',
    character: 'Vibrant natural whiteness, low plasticizer absorption, and predictable rheological behavior.',
    image: '/images/calcite.jpg',
    featured: true,
    applications: [
      'Paints, Inks & Emulsion Coatings',
      'Rigid PVC Pipes, Profiles & Conduits',
      'Polymer Masterbatches & Compounds',
      'Rubber Molding & Compounding',
      'Paper Coating & Filler Applications'
    ],
    technicalProperties: [
      { label: 'CaCO3 Purity', value: '> 97.5%' },
      { label: 'Whiteness (L-value)', value: '96.5% – 98.5%' },
      { label: 'Specific Gravity', value: '2.71 g/cm³' },
      { label: 'Oil Absorption', value: '14 – 18 g/100g' },
      { label: 'Moisture Content', value: '< 0.20%' },
      { label: 'Acid Insoluble', value: '< 1.2%' }
    ],
    meshRange: 'Micronized 2µm – 20µm / 300 to 700 Mesh',
    packaging: '25 kg / 50 kg multiwall paper & HDPE bags / 1.0 MT jumbo bags',
    minOrderQuantity: '10 Metric Tonnes',
    origin: 'Western & Central India'
  },
  {
    id: 'mat-03',
    slug: 'talc-soapstone',
    name: 'Talc & Soapstone Powder',
    formula: 'Mg3Si4O10(OH)2',
    category: 'powders-grains',
    categoryName: 'Mineral Powders & Grains',
    forms: [
      'Micronized Lamellar Powder (300 to 700 Mesh)',
      'Commercial Industrial Grade Powder'
    ],
    formTypes: ['powder'],
    shortDescription: 'Naturally platy hydrous magnesium silicate engineered for polymer reinforcement, barrier paints, and technical ceramics.',
    overview: 'High-aspect-ratio hydrated magnesium silicate boasting distinct lamellar structure, extreme softness (Mohs 1), and chemical passivity. Delivers stiffness and dimensional stability in automotive polyolefins, enhances barrier properties against moisture in primers, and aids thermal shock resistance in ceramics.',
    character: 'Silky tactile hand-feel, natural hydrophobicity, and low abrasiveness.',
    image: '/images/talc-soapstone.jpg',
    featured: true,
    applications: [
      'Automotive Polypropylene Reinforcement',
      'Anti-corrosive Primers & Marine Coatings',
      'Ceramic Glazes & Thermal Shock Bodies',
      'Paper Pitch Control & Surface Sizing',
      'Rubber Molding & Cable Compounds'
    ],
    technicalProperties: [
      { label: 'SiO2 Content', value: '60.0% – 63.0%' },
      { label: 'MgO Content', value: '30.5% – 32.5%' },
      { label: 'Whiteness', value: '92% – 97%' },
      { label: 'Mohs Hardness', value: '1.0' },
      { label: 'Loss on Ignition', value: '5.2% – 6.5%' },
      { label: 'Acid Soluble Matter', value: '< 2.0%' }
    ],
    meshRange: '300 Mesh to 700 Mesh (Top cut D97 < 15µm available)',
    packaging: '25 kg valve bags / 50 kg HDPE bags / Jumbo bags',
    minOrderQuantity: '10 Metric Tonnes',
    origin: 'Selected Indian Mineral Formations'
  },
  {
    id: 'mat-04',
    slug: 'silica-sand',
    name: 'Silica — Sand & Powder',
    formula: 'SiO2',
    category: 'powders-grains',
    categoryName: 'Mineral Powders & Grains',
    forms: [
      'Calibrated Silica Sand (AFS 25–35, 45–55, 60–80)',
      'Fine Quartz Silica Flour (300–500 Mesh)'
    ],
    formTypes: ['sand', 'powder'],
    shortDescription: 'High-purity sub-angular quartz sand and pulverized silica flour with controlled grain sizing and minimal iron.',
    overview: 'High-silica industrial sand and fine quartz flour washed, classified, and dried to exacting grain-size distributions. Essential for foundry mould and core preparation, specialty construction grouts, and low-iron container and float glass production.',
    character: 'Sub-angular hard quartz grains with high thermal refractory threshold (~1710°C).',
    image: '/images/silica-sand.jpg',
    featured: false,
    applications: [
      'Foundry Casting & Resin Coated Sand',
      'Container & Float Glass Manufacture',
      'Construction Chemicals, Grouts & Epoxies',
      'Abrasive Blasting & Water Filtration',
      'Ceramic Bodies & Sanitaryware'
    ],
    technicalProperties: [
      { label: 'SiO2 Purity', value: '> 99.1%' },
      { label: 'Fe2O3 Content', value: '< 0.040% (low iron)' },
      { label: 'Al2O3', value: '< 0.35%' },
      { label: 'Fusion Point', value: '~1,710°C' },
      { label: 'Moisture (Kiln Dried)', value: '< 0.25%' },
      { label: 'Hardness (Mohs)', value: '7.0' }
    ],
    meshRange: 'Grain fractions 0.1mm to 2.0mm & 300/500 Mesh flour',
    packaging: '50 kg bags / 1.0 MT jumbo bags / Dry bulk tankers',
    minOrderQuantity: '15 Metric Tonnes',
    origin: 'Maharashtra & Regional Silica Belts'
  },
  {
    id: 'mat-05',
    slug: 'pyrophyllite',
    name: 'Pyrophyllite Powder',
    formula: 'Al2Si4O10(OH)2',
    category: 'powders-grains',
    categoryName: 'Mineral Powders & Grains',
    forms: [
      'Finely Pulverized Powder (200–400 Mesh)',
      'Refractory Grog & Calcined Grains'
    ],
    formTypes: ['powder', 'grains'],
    shortDescription: 'Refractory hydrous aluminium silicate displaying near-zero thermal expansion and high slag resistance.',
    overview: 'A hydrous aluminium silicate mineral with lamellar habit and extraordinary refractory properties. Pyrophyllite features minimal reversible thermal expansion and withstands aggressive corrosive slag in metal foundries, making it a foundation material for refractory castables and kiln furniture.',
    character: 'Lustrous pearlescent cleavage with stable high-temperature volume stability.',
    image: '/images/pyrophyllite.jpg',
    featured: false,
    applications: [
      'Refractory Castables, Monolithics & Bricks',
      'Ceramic Tiles & Sanitaryware Bodies',
      'Foundry Dressing Coatings',
      'Carrier for Agricultural Formulations',
      'Fiberglass Formulation Batch'
    ],
    technicalProperties: [
      { label: 'Al2O3 Content', value: '20.0% – 28.0%' },
      { label: 'SiO2 Content', value: '65.0% – 72.0%' },
      { label: 'Fe2O3 Content', value: '< 0.70%' },
      { label: 'Pyrometric Cone (PCE)', value: 'Cone 28 – 31' },
      { label: 'Mohs Hardness', value: '1.5 – 2.0' },
      { label: 'Loss on Ignition', value: '4.5% – 5.8%' }
    ],
    meshRange: '200 Mesh to 400 Mesh',
    packaging: '50 kg HDPE bags / 1.0 MT jumbo bags',
    minOrderQuantity: '10 Metric Tonnes',
    origin: 'Central Indian Pyrophyllite Deposits'
  },
  {
    id: 'mat-06',
    slug: 'kaolin-clay',
    name: 'China Clay & Kaolin Clay Powder',
    formula: 'Al2Si2O5(OH)4',
    category: 'clays-oxides',
    categoryName: 'Clays & Oxides',
    forms: [
      'Hydrous Micronized Clay Powder (300–500 Mesh)',
      'Refined Levigated Clay Lumps',
      'Calcined High-Whiteness Grade'
    ],
    formTypes: ['powder', 'lumps'],
    shortDescription: 'Hydrated aluminium silicate with high plasticity, fine particle distribution, and excellent dielectric properties.',
    overview: 'Carefully beneficiated china clay exhibiting natural laminar platelets, high chemical stability, and balanced rheology. Utilized extensively in paper coatings, vitrified ceramics, emulsion paints for sheen and titanium dioxide spacing, and rubber reinforcement.',
    character: 'Smooth, plastic slip feel with controlled calcination options for higher brightness.',
    image: '/images/kaolin-clay.jpg',
    featured: true,
    applications: [
      'Ceramics, Porcelain & Sanitaryware',
      'Paints, Primers & Architectural Emulsions',
      'Paper Gloss Coating & Wet-end Fillers',
      'Rubber Compounds & Cable Insulations',
      'Fiberglass Manufacture & Refractory Slip'
    ],
    technicalProperties: [
      { label: 'Al2O3 Content', value: '35.0% – 38.5%' },
      { label: 'SiO2 Content', value: '46.0% – 48.0%' },
      { label: 'ISO Brightness', value: '84% – 89%' },
      { label: 'Fraction < 2 Micron', value: '60% – 80%' },
      { label: 'pH Value', value: '6.5 – 7.5' },
      { label: 'Specific Gravity', value: '2.60 g/cm³' }
    ],
    meshRange: '300 Mesh to 500 Mesh',
    packaging: '50 kg bags / 1.0 MT jumbo bags with inner liner',
    minOrderQuantity: '10 Metric Tonnes',
    origin: 'Selected Indian Kaolin Reserves'
  },
  {
    id: 'mat-07',
    slug: 'iron-oxide',
    name: 'Iron Oxide & Red Oxide Powder',
    formula: 'Fe2O3',
    category: 'clays-oxides',
    categoryName: 'Clays & Oxides',
    forms: [
      'Natural Red Hematite Powder (300–500 Mesh)',
      'Fine Micronized Red Oxide Pigment'
    ],
    formTypes: ['powder'],
    shortDescription: 'High-tinting natural hematite mineral pigment providing anti-corrosive protection and chromatic durability.',
    overview: 'Dense, naturally occurring ferric oxide pigment selected for intense tinting power, resistance to atmospheric degradation, and lightfastness. Crucial for anti-corrosive primer systems for structural steel and color consistency in exterior concrete masonry pavers.',
    character: 'Rich earthy terracotta to deep crimson pigment with heavy density.',
    image: '/images/iron-oxide.jpg',
    featured: false,
    applications: [
      'Anti-corrosive Metal Primers & Structural Coatings',
      'Concrete Pavers, Tiles & Masonry Mortars',
      'Ceramic Body Stains & Vitrified Colorants',
      'Plastics & Rubber Color Compounding',
      'Foundry Sand Coating Formulations'
    ],
    technicalProperties: [
      { label: 'Fe2O3 Content', value: '85.0% – 94.0%' },
      { label: 'Tinting Strength', value: '100 ± 5% (vs standard)' },
      { label: 'Specific Gravity', value: '4.8 – 5.1 g/cm³' },
      { label: 'Moisture', value: '< 0.50%' },
      { label: 'pH Value', value: '6.0 – 8.0' },
      { label: 'Residue on 300 Mesh', value: '< 0.5%' }
    ],
    meshRange: '300 Mesh to 500 Mesh',
    packaging: '25 kg / 50 kg multi-layer paper & HDPE bags',
    minOrderQuantity: '5 Metric Tonnes',
    origin: 'Indian Hematite Mineral Belts'
  },
  {
    id: 'mat-08',
    slug: 'coloured-grains',
    name: 'Coloured Grains & Aggregates',
    formula: 'Natural Silicate & Carbonate Aggregates',
    category: 'clays-oxides',
    categoryName: 'Clays & Oxides',
    forms: [
      'Calibrated Screened Grains (0.5–1mm, 1–2mm, 2–4mm)',
      'Architectural Micro-Aggregates'
    ],
    formTypes: ['grains', 'aggregates'],
    shortDescription: 'Calibrated natural stone granules and mineral aggregates sieved for architectural terrazzo and exterior finishes.',
    overview: 'Precision-screened natural mineral grains sourced from durable geological formations. Graded to tight sieve tolerances to produce uniform texture and chromatic depth in seamless epoxy terrazzo, exposed aggregate plasters, and architectural facade panels.',
    character: 'Natural earthy tones (ochre, graphite, terracotta, stone), UV-stable and non-fading.',
    image: '/images/coloured-grains.jpg',
    featured: false,
    applications: [
      'Seamless Epoxy Terrazzo Flooring',
      'Exposed Aggregate Wall Plasters & Facades',
      'Architectural Landscaping & Pathway Binder Systems',
      'Resin-bound Surfacing & Stone Carpets',
      'Textured Exterior Wall Coatings'
    ],
    technicalProperties: [
      { label: 'Grain Hardness (Mohs)', value: '6.0 – 7.0' },
      { label: 'Water Absorption', value: '< 0.40%' },
      { label: 'UV Resistance', value: '100% natural, fade-resistant' },
      { label: 'Bulk Density', value: '1.45 – 1.60 g/cm³' },
      { label: 'Particle Shape', value: 'Calibrated sub-angular' }
    ],
    meshRange: '0.5mm to 4.0mm calibrated fractions',
    packaging: '50 kg bags / 1.0 MT jumbo bags',
    minOrderQuantity: '10 Metric Tonnes',
    origin: 'Selected Western India Quarries'
  },
  {
    id: 'mat-09',
    slug: 'white-marble-powder',
    name: 'White Marble Powder',
    formula: 'CaCO3',
    category: 'white-marble',
    categoryName: 'White Marble Powder',
    forms: [
      'Ultra-fine Micronized Marble Powder (300–400 Mesh)',
      'Screened Marble Grit & Crystalline Chips (0.2–1.2mm)'
    ],
    formTypes: ['powder', 'grains'],
    shortDescription: 'Pure metamorphic marble powder possessing high crystalline sparkle, optimal packing, and optical clarity.',
    overview: 'Finely pulverized metamorphic calcium carbonate derived from select high-clarity white marble boulders. Delivers crisp surface whiteness, smooth trowelability, and structural durability in wall putties, Venetian Marmorino plasters, and cast cultured marble.',
    character: 'Crystalline light reflection, uniform fineness, and neutral chemical reaction.',
    image: '/images/white-marble.jpg',
    featured: true,
    applications: [
      'Polymer Wall Putty & Skim Coat Compounds',
      'Architectural Venetian Stucco & Marmorino',
      'Cultured Marble & Engineered Solid Surfaces',
      'Dry-Mix Tile Adhesives & Grouts',
      'Decorative White Concrete Formulations'
    ],
    technicalProperties: [
      { label: 'CaCO3 Content', value: '> 96.5%' },
      { label: 'Whiteness / Brightness', value: '95.0% – 98.0%' },
      { label: 'Specific Gravity', value: '2.70 g/cm³' },
      { label: 'Mesh Sizes Available', value: '100, 200, 300, 400 Mesh' },
      { label: 'Moisture', value: '< 0.30%' },
      { label: 'Insoluble Matter', value: '< 1.5%' }
    ],
    meshRange: '100 Mesh to 400 Mesh & Screened Grit',
    packaging: '50 kg HDPE bags / 1.0 MT jumbo bags',
    minOrderQuantity: '10 Metric Tonnes',
    origin: 'Select Crystalline Marble Formations'
  }
];

export const CATEGORIES = [
  {
    id: 'powders-grains',
    name: 'Mineral Powders & Grains',
    code: '01',
    description: 'High-purity carbonates, silicates, and quartz milled and classified for foundry, glass, and advanced coating formulations.',
    productCount: 5,
    heroImage: '/images/dolomite.jpg'
  },
  {
    id: 'clays-oxides',
    name: 'Clays & Oxides',
    code: '02',
    description: 'Refined hydrous aluminosilicates, natural hematite pigments, and calibrated architectural mineral granules.',
    productCount: 3,
    heroImage: '/images/iron-oxide.jpg'
  },
  {
    id: 'white-marble',
    name: 'White Marble Powder',
    code: '03',
    description: 'Pristine metamorphic calcium carbonate processed for high-brightness wall putties, architectural plasters, and cast stone.',
    productCount: 1,
    heroImage: '/images/white-marble.jpg'
  }
];
