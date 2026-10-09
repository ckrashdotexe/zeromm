import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Download } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { APPLICATIONS } from '../data/applications';
import { TECHNICAL_DOCUMENTS } from '../data/documents';


interface HomePageProps {
  onOpenEnquiry: (materialSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  // Category hover preview state for Section 03
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const featuredMaterials = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* =========================================================================
          SECTION 02 — HERO: UNCONVENTIONAL EDITORIAL COMPOSITION
          ========================================================================= */}
      <section
        ref={heroRef}
        className="relative pt-28 md:pt-36 pb-20 md:pb-28 border-b border-subtle overflow-hidden"
      >
        <div className="container-editorial">
          {/* Category kicker / Contextual label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-bronze rounded-none" />
            <span className="text-label text-muted">
              INDUSTRIAL MINERAL MATERIALS &bull; MAHARASHTRA, INDIA
            </span>
          </div>

          {/* Asymmetrical Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Column: Typographic composition (occupies 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between z-10">
              <div className="space-y-6">
                <h1 className="text-fluid-display font-medium text-ink tracking-tight">
                  <span className="block">Material,</span>
                  <span className="block font-light text-graphite/90">in its purest</span>
                  <span className="block italic font-light text-bronze">form.</span>
                </h1>

                <p className="text-sm md:text-base text-muted font-body leading-relaxed max-w-md pt-2">
                  Explore mineral powders, grains, clays and oxides for a range of demanding industrial applications. Thoughtfully sourced, strictly classified.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-8 md:pt-12 flex flex-wrap items-center gap-4">
                <Link to="/materials" className="btn-primary">
                  <span>Explore the Materials</span>
                  <ArrowRight className="w-4 h-4 text-mineral" />
                </Link>
                <button
                  onClick={() => onOpenEnquiry()}
                  className="btn-secondary"
                >
                  <span>Discuss a Requirement</span>
                </button>
              </div>

              {/* Material Index preview snippet */}
              <div className="mt-12 pt-6 border-t border-subtle grid grid-cols-3 gap-4 text-left">
                <div>
                  <span className="text-label text-mineral block">Families</span>
                  <span className="font-display text-xl font-medium text-ink">09</span>
                </div>
                <div>
                  <span className="text-label text-mineral block">Mesh Range</span>
                  <span className="font-display text-xl font-medium text-ink">2µm–3mm</span>
                </div>
                <div>
                  <span className="text-label text-mineral block">Supply</span>
                  <span className="font-display text-xl font-medium text-ink">B2B Lot</span>
                </div>
              </div>
            </div>

            {/* Right Column: Large mineral image (occupies 7 cols / ~60% visual field) */}
            <div className="lg:col-span-7 relative">
              <div className="img-reveal-frame aspect-[16/10] lg:aspect-[16/11] shadow-xl border border-subtle">
                <img
                  src="/images/hero-mineral.jpg"
                  alt="Raw natural crystalline mineral specimen with macro quartz facets on architectural plinth"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Architectural Caption Tag */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-ink/90 text-paper p-3.5 backdrop-blur-xs max-w-sm border border-stone/10">
                  <span className="text-[0.65rem] uppercase tracking-widest text-bronze font-medium block">
                    Mineralogical Specimen #001
                  </span>
                  <p className="text-xs text-stone/90 mt-0.5 font-light leading-snug">
                    Natural crystalline calcium carbonate and silicate aggregate under raking directional illumination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — MATERIAL INDEX: CATEGORY TYPOGRAPHIC NAVIGATION
          ========================================================================= */}
      <section className="py-20 md:py-28 border-b border-subtle bg-paper">
        <div className="container-editorial">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-subtle">
            <div>
              <span className="text-label text-muted mb-2 block">01 / Material Index</span>
              <h2 className="text-fluid-h2 text-ink font-medium">
                Materials for different worlds.
              </h2>
            </div>
            <p className="text-xs md:text-sm text-muted max-w-md mt-4 md:mt-0 font-body leading-relaxed">
              Our catalogue is structured into three fundamental physical classifications, serving metallurgical, chemical, coating and construction requirements.
            </p>
          </div>

          {/* Interactive Editorial Category Rows */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* List of categories */}
            <div className="lg:col-span-7 divide-y divide-subtle">
              {CATEGORIES.map((cat, idx) => (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveCategoryIndex(idx)}
                  className={`group py-8 transition-all cursor-pointer ${
                    activeCategoryIndex === idx ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-label text-bronze font-semibold">
                      CATEGORY {cat.code}
                    </span>
                    <span className="text-xs text-muted font-body">
                      {cat.productCount} Mineral {cat.productCount === 1 ? 'Family' : 'Families'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl md:text-3xl text-ink font-medium group-hover:text-bronze transition-colors">
                      {cat.name}
                    </h3>
                    <Link
                      to={`/materials?category=${cat.id}`}
                      className="p-2 border border-subtle rounded-none hover:bg-ink hover:text-white transition-colors"
                      aria-label={`View ${cat.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <p className="text-xs md:text-sm text-muted font-body mt-3 max-w-lg leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop Preview Frame */}
            <div className="hidden lg:block lg:col-span-5 sticky top-28">
              <div className="img-reveal-frame aspect-[4/3] border border-subtle shadow-md">
                <img
                  src={CATEGORIES[activeCategoryIndex].heroImage}
                  alt={CATEGORIES[activeCategoryIndex].name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute top-4 left-4 bg-ink/80 text-white px-2.5 py-1 text-[0.68rem] tracking-wider uppercase font-medium">
                  {CATEGORIES[activeCategoryIndex].name} Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — FEATURED MATERIALS: ASYMMETRIC EDITORIAL GRID
          ========================================================================= */}
      <section className="py-20 md:py-28 border-b border-subtle bg-stone/30">
        <div className="container-editorial">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-subtle">
            <div>
              <span className="text-label text-muted mb-2 block">02 / Portfolio Highlights</span>
              <h2 className="text-fluid-h2 text-ink font-medium">
                Featured Mineral Profiles
              </h2>
            </div>
            <Link
              to="/materials"
              className="text-xs font-semibold uppercase tracking-wider text-ink hover:text-bronze transition-colors flex items-center gap-1.5 mt-4 md:mt-0"
            >
              <span>Explore All 9 Families</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetric Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Primary Highlight: Large Featured Tile (Span 7) */}
            {featuredMaterials[0] && (
              <div className="lg:col-span-7 bg-paper border border-subtle p-6 md:p-8 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between text-label text-muted mb-4">
                    <span>{featuredMaterials[0].categoryName}</span>
                    <span className="font-mono text-bronze">{featuredMaterials[0].formula}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-ink mb-3 group-hover:text-bronze transition-colors">
                    {featuredMaterials[0].name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted font-body mb-6 leading-relaxed max-w-xl">
                    {featuredMaterials[0].overview}
                  </p>
                </div>

                <div className="img-reveal-frame aspect-[16/10] my-4 border border-subtle">
                  <img
                    src={featuredMaterials[0].image}
                    alt={featuredMaterials[0].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="pt-4 border-t border-subtle flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredMaterials[0].forms.slice(0, 2).map((form, i) => (
                      <span
                        key={i}
                        className="text-[0.68rem] bg-stone px-2 py-0.5 text-graphite border border-subtle"
                      >
                        {form}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      to={`/materials/${featuredMaterials[0].slug}`}
                      className="text-xs font-medium text-ink hover:text-bronze underline"
                    >
                      Technical Data &rarr;
                    </Link>
                    <button
                      onClick={() => onOpenEnquiry(featuredMaterials[0].slug)}
                      className="btn-primary text-xs py-1.5 px-3.5"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Secondary Highlight (Span 5) */}
            {featuredMaterials[1] && (
              <div className="lg:col-span-5 bg-paper border border-subtle p-6 md:p-8 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between text-label text-muted mb-4">
                    <span>{featuredMaterials[1].categoryName}</span>
                    <span className="font-mono text-bronze">{featuredMaterials[1].formula}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-ink mb-2 group-hover:text-bronze transition-colors">
                    {featuredMaterials[1].name}
                  </h3>
                  <p className="text-xs text-muted font-body mb-4 leading-relaxed">
                    {featuredMaterials[1].shortDescription}
                  </p>
                </div>

                <div className="img-reveal-frame aspect-[4/3] my-4 border border-subtle">
                  <img
                    src={featuredMaterials[1].image}
                    alt={featuredMaterials[1].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="pt-4 border-t border-subtle flex items-center justify-between">
                  <span className="text-[0.7rem] text-muted">
                    {featuredMaterials[1].technicalProperties[0]?.label}:{' '}
                    <strong className="text-ink">
                      {featuredMaterials[1].technicalProperties[0]?.value}
                    </strong>
                  </span>
                  <Link
                    to={`/materials/${featuredMaterials[1].slug}`}
                    className="text-xs font-medium text-ink hover:text-bronze flex items-center gap-1"
                  >
                    <span>Full Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Supporting Highlight 3 (Span 6) */}
            {featuredMaterials[2] && (
              <div className="lg:col-span-6 bg-paper border border-subtle p-6 flex flex-col md:flex-row gap-6 items-center justify-between group">
                <div className="w-full md:w-1/2 aspect-[4/3] img-reveal-frame border border-subtle shrink-0">
                  <img
                    src={featuredMaterials[2].image}
                    alt={featuredMaterials[2].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <span className="text-label text-muted mb-1 block">
                      {featuredMaterials[2].categoryName}
                    </span>
                    <h4 className="font-display text-xl font-medium text-ink mb-2 group-hover:text-bronze transition-colors">
                      {featuredMaterials[2].name}
                    </h4>
                    <p className="text-xs text-muted font-body mb-4 line-clamp-3">
                      {featuredMaterials[2].shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-subtle">
                    <Link
                      to={`/materials/${featuredMaterials[2].slug}`}
                      className="text-xs font-medium text-ink hover:text-bronze"
                    >
                      Specifications &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Supporting Highlight 4 (Span 6) */}
            {featuredMaterials[3] && (
              <div className="lg:col-span-6 bg-paper border border-subtle p-6 flex flex-col md:flex-row gap-6 items-center justify-between group">
                <div className="w-full md:w-1/2 aspect-[4/3] img-reveal-frame border border-subtle shrink-0">
                  <img
                    src={featuredMaterials[3].image}
                    alt={featuredMaterials[3].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <span className="text-label text-muted mb-1 block">
                      {featuredMaterials[3].categoryName}
                    </span>
                    <h4 className="font-display text-xl font-medium text-ink mb-2 group-hover:text-bronze transition-colors">
                      {featuredMaterials[3].name}
                    </h4>
                    <p className="text-xs text-muted font-body mb-4 line-clamp-3">
                      {featuredMaterials[3].shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-subtle">
                    <Link
                      to={`/materials/${featuredMaterials[3].slug}`}
                      className="text-xs font-medium text-ink hover:text-bronze"
                    >
                      Specifications &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — MATERIAL IN DETAIL: POWDERS VS GRAINS MACRO COMPARISON
          ========================================================================= */}
      <section className="py-20 md:py-28 border-b border-subtle bg-ink text-paper">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Macro split image */}
            <div className="lg:col-span-7">
              <div className="img-reveal-frame aspect-[16/10] border border-subtle-dark">
                <img
                  src="/images/macro-texture.jpg"
                  alt="Extreme macro split photograph: micronized powder smoothly transitioning to calibrated crystalline mineral grains"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-ink/90 text-stone px-3 py-2 text-[0.68rem] font-mono tracking-tight border border-subtle-dark">
                  LEFT: Micronized D97 &lt; 10µm &bull; RIGHT: Calibrated Grains 1.0–2.0mm
                </div>
              </div>
            </div>

            {/* Editorial explanation */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-label text-bronze block">03 / Material in Detail</span>
              <h2 className="text-fluid-h2 text-white font-medium">
                The physics of particle distribution.
              </h2>
              <p className="text-xs md:text-sm text-mineral/90 font-body leading-relaxed">
                Industrial performance depends directly on particle geometry. The same mineral compound behaves radically differently depending on whether it is milled into fine lamellar slip or classified into crystalline granules.
              </p>

              <div className="space-y-4 pt-4 border-t border-subtle-dark/60">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-bronze mt-1.5 shrink-0" />
                  <div>
                    <h4 className="font-display text-sm text-white font-medium">Micronized Powders</h4>
                    <p className="text-xs text-mineral/80 font-body mt-0.5">
                      Sub-sieve fractions (2µm to 500 Mesh) engineered for dispersion, high opacity, scrub-resistance, and polymer impact modification.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-bronze mt-1.5 shrink-0" />
                  <div>
                    <h4 className="font-display text-sm text-white font-medium">Calibrated Grains & Aggregates</h4>
                    <p className="text-xs text-mineral/80 font-body mt-0.5">
                      Sieved fractions (0.5mm to 3.0mm) ensuring tight void ratios, structural load-bearing capacity, and non-fading architectural terrazzo aesthetics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/quality" className="btn-secondary text-white border-white/20 hover:border-white">
                  <span>Explore Particle Size Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — INDUSTRIES AND APPLICATIONS: EDITORIAL ROWS
          ========================================================================= */}
      <section className="py-20 md:py-28 border-b border-subtle bg-paper">
        <div className="container-editorial">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-subtle">
            <div>
              <span className="text-label text-muted mb-2 block">04 / Sectors</span>
              <h2 className="text-fluid-h2 text-ink font-medium">
                Industries & Verified Application
              </h2>
            </div>
            <p className="text-xs md:text-sm text-muted max-w-md mt-4 md:mt-0 font-body leading-relaxed">
              Formulated to meet verified chemical and thermal thresholds across core manufacturing domains in India and global supply chains.
            </p>
          </div>

          {/* Structured Application Rows */}
          <div className="divide-y divide-subtle">
            {APPLICATIONS.map((app) => (
              <div
                key={app.id}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-stone/20 transition-colors p-4 -mx-4"
              >
                <div className="lg:col-span-4">
                  <h3 className="font-display text-xl font-medium text-ink">
                    {app.title}
                  </h3>
                  <p className="text-xs text-muted font-body mt-2 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-1.5">
                  <span className="text-[0.68rem] text-mineral uppercase tracking-wider block font-medium">
                    Technical Function
                  </span>
                  <ul className="space-y-1">
                    {app.keyAttributes.map((attr, idx) => (
                      <li key={idx} className="text-xs text-graphite flex items-center gap-2">
                        <span className="w-1 h-1 bg-bronze rounded-full" />
                        <span>{attr}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3 flex flex-wrap gap-1.5 lg:justify-end items-center">
                  {app.materialSlugs.map((slug) => {
                    const matchedMat = PRODUCTS.find((p) => p.slug === slug);
                    return matchedMat ? (
                      <Link
                        key={slug}
                        to={`/materials/${slug}`}
                        className="text-[0.7rem] bg-paper border border-subtle px-2.5 py-1 text-ink hover:border-bronze hover:text-bronze transition-colors"
                      >
                        {matchedMat.name.split('—')[0].trim()}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — OPERATIONS & COMPANY INFORMATION (MAHARASHTRA GEOLOGY)
          ========================================================================= */}
      <section className="py-20 md:py-28 border-b border-subtle bg-stone/25">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-label text-muted">
                <span>05 / Operational Framework</span>
                <span className="text-[0.65rem] text-bronze border border-bronze/30 px-1 py-0.2">
                  Provisional
                </span>
              </div>
              <h2 className="text-fluid-h2 text-ink font-medium">
                Geological presence in Western India.
              </h2>
              <p className="text-xs md:text-sm text-graphite/90 font-body leading-relaxed">
                Operating within Maharashtra's strategic industrial corridors, ZERO MM MINERALS LLP coordinates mineral distribution, technical classification, and commercial bulk supply to support industrial consumers across steel, glass, coatings, and infrastructure sectors.
              </p>

              {/* Four pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-subtle">
                <div className="p-4 bg-paper border border-subtle">
                  <span className="text-label text-mineral block">01 / Deposit Sourcing</span>
                  <p className="text-xs text-ink font-medium mt-1">
                    Select geological seams evaluated for chemical purity and consistent mineralogy.
                  </p>
                </div>
                <div className="p-4 bg-paper border border-subtle">
                  <span className="text-label text-mineral block">02 / Particle Control</span>
                  <p className="text-xs text-ink font-medium mt-1">
                    Precision classifying and air-sifting to tightly govern top-cut (D97) and mesh sizing.
                  </p>
                </div>
                <div className="p-4 bg-paper border border-subtle">
                  <span className="text-label text-mineral block">03 / Supply Continuity</span>
                  <p className="text-xs text-ink font-medium mt-1">
                    Commercial lot dispatch in HDPE and jumbo bags with verified moisture-barrier liners.
                  </p>
                </div>
                <div className="p-4 bg-paper border border-subtle">
                  <span className="text-label text-mineral block">04 / Technical Support</span>
                  <p className="text-xs text-ink font-medium mt-1">
                    Lot-specific analysis and trial samples for client formulation validation.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-stone/60 border border-subtle text-[0.7rem] text-muted">
                * Note: Specific company quarrying affiliations and owned facility data are held provisional pending client corporate documentation.
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="img-reveal-frame aspect-[16/11] border border-subtle shadow-lg">
                <img
                  src="/images/quarry-geology.jpg"
                  alt="Stepped geological mineral quarry rock face in Western Ghats, Maharashtra"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-ink/90 text-stone p-3 text-xs backdrop-blur-xs border border-subtle-dark">
                  <span className="text-label text-bronze block">Geological Context</span>
                  <p className="text-[0.72rem] text-mineral mt-0.5 font-light">
                    Industrial mineral supply corridors connecting Western and Central India mineral deposits to major manufacturing belts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — QUALITY AND DOCUMENTATION: TECHNICAL DATA SHEETS
          ========================================================================= */}
      <section className="py-20 md:py-28 border-b border-subtle bg-paper">
        <div className="container-editorial">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-subtle">
            <div>
              <span className="text-label text-muted mb-2 block">06 / Documentation</span>
              <h2 className="text-fluid-h2 text-ink font-medium">
                Technical Data & Specifications
              </h2>
            </div>
            <p className="text-xs md:text-sm text-muted max-w-md mt-4 md:mt-0 font-body leading-relaxed">
              Access provisional specification matrices and technical data sheets for preliminary material evaluation and laboratory review.
            </p>
          </div>

          {/* Document list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNICAL_DOCUMENTS.map((doc) => (
              <div
                key={doc.id}
                className="bg-paper border border-subtle p-6 flex flex-col justify-between hover:border-ink transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-[0.7rem]">
                    <span className="font-mono text-bronze font-semibold">{doc.code}</span>
                    <span className="px-2 py-0.5 bg-stone text-graphite border border-subtle font-medium">
                      {doc.type}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-medium text-ink group-hover:text-bronze transition-colors mb-2">
                    {doc.title}
                  </h3>
                  <div className="text-[0.72rem] text-muted">File size: {doc.size} &bull; PDF Matrix</div>
                </div>

                <div className="pt-6 border-t border-subtle mt-6 flex items-center justify-between">
                  <span className="text-[0.65rem] text-mineral tracking-wider uppercase">
                    Provisional Spec
                  </span>
                  <button
                    onClick={() => {
                      alert(`Downloading technical specification: ${doc.title} (${doc.code}). Formal client batch COA issued upon enquiry.`);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-ink hover:text-bronze transition-colors cursor-pointer"
                  >
                    <span>Download</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/quality"
              className="text-xs text-muted hover:text-ink font-medium uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>View Testing Protocols & Quality Commitments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 — CONTACT CTA: DISTINCT CLOSING COMPOSITION
          ========================================================================= */}
      <section className="py-24 md:py-36 bg-ink text-paper relative overflow-hidden">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <span className="text-label text-bronze mb-4 block">07 / Commercial Dispatch</span>
            <h2 className="text-fluid-display font-medium text-white tracking-tight mb-6">
              Looking for the right material?
            </h2>
            <p className="text-base md:text-lg text-mineral/90 font-light max-w-xl leading-relaxed mb-10">
              Share your target mineral family, chemical specification, required mesh distribution, and monthly tonnage requirements with our materials desk.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry()}
                className="btn-bronze text-sm py-3.5 px-7"
              >
                <span>Start an Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/materials"
                className="btn-secondary text-stone border-stone/20 hover:border-stone text-sm py-3.5 px-7"
              >
                <span>Browse Full Catalogue</span>
              </Link>
            </div>

            <div className="mt-14 pt-8 border-t border-subtle-dark/50 grid grid-cols-1 sm:grid-cols-3 gap-6 text-[0.75rem] text-mineral/70">
              <div>
                <strong className="text-stone block font-medium">B2B Commercial Lots</strong>
                Minimum order: 10 Metric Tonnes
              </div>
              <div>
                <strong className="text-stone block font-medium">Dispatch Coverage</strong>
                Maharashtra & Pan-India Freight
              </div>
              <div>
                <strong className="text-stone block font-medium">Quality Validation</strong>
                Lab specification verification per batch
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
