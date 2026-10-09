import type { IndustrialApplication } from '../types/product';

export const APPLICATIONS: IndustrialApplication[] = [
  {
    id: 'app-steel-foundry',
    title: 'Steelmaking & Foundry',
    slug: 'steel-foundry',
    description: 'Refractory fluxing agents, slag conditioners, and silica core sands supporting furnace longevity, thermal endurance, and precise metal casting.',
    materialSlugs: ['dolomite', 'silica-sand', 'pyrophyllite'],
    keyAttributes: [
      'High thermal stability and high refractory melting points (~1710°C)',
      'Basic slag conditioning and desulphurisation support',
      'Consistent grain sizing for resin-bonded foundry moulds'
    ]
  },
  {
    id: 'app-glass-ceramics',
    title: 'Glass & Ceramics',
    slug: 'glass-ceramics',
    description: 'Chemically stable source minerals providing controlled alkaline-earth fluxes, alumina enrichment, and low-iron quartz sand for clear melting.',
    materialSlugs: ['dolomite', 'silica-sand', 'pyrophyllite', 'kaolin-clay', 'talc-soapstone'],
    keyAttributes: [
      'Strictly monitored Fe2O3 content (< 0.040% in silica)',
      'Balanced fluxing ratios of CaO and MgO',
      'Low thermal expansion and improved vitrification in ceramic bodies'
    ]
  },
  {
    id: 'app-paints-coatings',
    title: 'Paints & Coatings',
    slug: 'paints-coatings',
    description: 'Functional extenders, spacing pigments, and anti-corrosive oxides imparting opacity, scrub resistance, weathering endurance, and barrier protection.',
    materialSlugs: ['calcite', 'talc-soapstone', 'iron-oxide', 'kaolin-clay', 'dolomite'],
    keyAttributes: [
      'Exceptional optical brightness (96%–98% in calcite)',
      'Platy lamellar talc barriers against moisture and saline attack',
      'High tinting strength and non-bleeding hematite pigment'
    ]
  },
  {
    id: 'app-plastics-pvc',
    title: 'Plastics & PVC',
    slug: 'plastics-pvc',
    description: 'High-purity micro-fillers and reinforcement minerals engineered for dimensional control, flexural modulus, and smooth surface finish in polymers.',
    materialSlugs: ['calcite', 'talc-soapstone'],
    keyAttributes: [
      'Narrow particle size distribution with controlled top cut (D97)',
      'Enhanced impact strength and heat deflection temperature',
      'Low plasticizer and oil absorption for high filler loadings'
    ]
  },
  {
    id: 'app-paper-rubber',
    title: 'Paper & Rubber',
    slug: 'paper-rubber',
    description: 'Refined hydrous clays, calcites, and non-abrasive talcs providing ink receptivity, gloss retention, and rubber compounding reinforcement.',
    materialSlugs: ['kaolin-clay', 'calcite', 'talc-soapstone'],
    keyAttributes: [
      'Controlled rheology and suspension properties in coating slips',
      'Soft Mohs hardness preventing processing machinery abrasion',
      'High dielectric strength and chemical inertness'
    ]
  },
  {
    id: 'app-construction-chemicals',
    title: 'Construction Chemicals',
    slug: 'construction-chemicals',
    description: 'Calibrated aggregates, marble flours, and silica fractions for specialized grouts, dry-mix mortars, wall putties, and tile adhesives.',
    materialSlugs: ['white-marble-powder', 'silica-sand', 'dolomite', 'coloured-grains'],
    keyAttributes: [
      'Optimized granulometry and particle packing density',
      'High crystalline brightness and smooth troweling response',
      'Stable compressive strength and low shrinkage properties'
    ]
  },
  {
    id: 'app-decorative-finishes',
    title: 'Decorative Finishes & Terrazzo',
    slug: 'decorative-finishes',
    description: 'Natural coloured mineral granules, chips, and marble flours sieved for seamless resin terrazzo, Venetian Marmorino, and architectural facades.',
    materialSlugs: ['coloured-grains', 'white-marble-powder'],
    keyAttributes: [
      'UV-stable natural geological pigmentation without fading',
      'Precision sieve calibration (0.5mm – 4.0mm)',
      'Sub-angular crystalline light reflectivity'
    ]
  }
];
