import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { APPLICATIONS } from '../data/applications';
import { PRODUCTS } from '../data/products';

interface ApplicationsPageProps {
  onOpenEnquiry: (materialSlug?: string) => void;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-paper">
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-14 pb-8 border-b border-subtle">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-bronze" />
            <span className="text-label text-muted">Industrial Applications Guide</span>
          </div>
          <h1 className="text-fluid-h1 font-medium text-ink tracking-tight">
            Mineral Science Across Industries
          </h1>
          <p className="text-xs md:text-sm text-muted font-body max-w-2xl mt-3 leading-relaxed">
            From metallurgical blast furnace fluxing to high-shear polymer compounding and barrier coatings, our mineral families are classified to meet rigorous chemical purity and thermal parameters.
          </p>
        </div>

        {/* Detailed Application Cards */}
        <div className="space-y-12">
          {APPLICATIONS.map((app, index) => (
            <div
              key={app.id}
              className="bg-paper border border-subtle p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Sector Title & Number (Span 4) */}
              <div className="lg:col-span-4">
                <span className="text-label text-bronze block mb-2 font-mono">
                  SECTOR {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-2xl font-medium text-ink mb-3">
                  {app.title}
                </h2>
                <p className="text-xs md:text-sm text-muted font-body leading-relaxed">
                  {app.description}
                </p>
              </div>

              {/* Functional Attributes (Span 4) */}
              <div className="lg:col-span-4 space-y-3">
                <span className="text-label text-mineral block font-semibold">
                  Key Technical Demands
                </span>
                <ul className="space-y-2">
                  {app.keyAttributes.map((attr, i) => (
                    <li key={i} className="text-xs text-graphite flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-bronze mt-1.5 shrink-0" />
                      <span className="leading-snug">{attr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Mineral Families (Span 4) */}
              <div className="lg:col-span-4 bg-stone/30 border border-subtle p-5">
                <span className="text-label text-muted block mb-3 font-semibold">
                  Recommended Mineral Families
                </span>
                <div className="space-y-3">
                  {app.materialSlugs.map((slug) => {
                    const product = PRODUCTS.find((p) => p.slug === slug);
                    if (!product) return null;
                    return (
                      <div
                        key={slug}
                        className="flex items-center justify-between pb-2 border-b border-subtle/50 text-xs"
                      >
                        <div className="flex flex-col">
                          <Link
                            to={`/materials/${product.slug}`}
                            className="font-medium text-ink hover:text-bronze transition-colors"
                          >
                            {product.name}
                          </Link>
                          <span className="text-[0.68rem] text-muted">{product.meshRange}</span>
                        </div>
                        <button
                          onClick={() => onOpenEnquiry(product.slug)}
                          className="text-[0.7rem] uppercase tracking-wider text-bronze hover:underline font-semibold"
                        >
                          Enquire
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-16 p-8 bg-ink text-paper flex flex-col md:flex-row items-center justify-between gap-6 border border-subtle-dark">
          <div>
            <h3 className="font-display text-lg text-white font-medium">
              Have a specialized formulation requirement?
            </h3>
            <p className="text-xs text-mineral/80 mt-1 max-w-xl">
              We coordinate custom particle sizing, controlled low-iron batches, and surface-treated mineral grades for proprietary manufacturing needs.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry()}
            className="btn-bronze text-xs py-3 px-6 shrink-0"
          >
            <span>Discuss Custom Parameters</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
