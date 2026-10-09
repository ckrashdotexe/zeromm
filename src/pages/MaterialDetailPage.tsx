import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

import { PRODUCTS } from '../data/products';
import { TECHNICAL_DOCUMENTS } from '../data/documents';

interface MaterialDetailPageProps {
  onOpenEnquiry: (materialSlug?: string) => void;
}

export const MaterialDetailPage: React.FC<MaterialDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.slug === slug);
  }, [slug]);

  if (!product) {
    return <Navigate to="/materials" replace />;
  }

  // Related products in the same category or adjacent
  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);
  const matchedDocs = TECHNICAL_DOCUMENTS.filter((d) => d.materialSlug === product.slug);

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-paper">
      <div className="container-editorial">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-ink transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/materials" className="hover:text-ink transition-colors">
            Materials
          </Link>
          <span>/</span>
          <span className="text-ink font-medium">{product.name}</span>
        </nav>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-subtle">
          {/* Visual Column (Span 6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="img-reveal-frame aspect-[4/3] border border-subtle shadow-lg">
              <img
                src={product.image}
                alt={`${product.name} studio photography`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-ink/90 text-stone px-3 py-1 text-[0.68rem] tracking-wider uppercase font-medium">
                {product.categoryName}
              </div>
            </div>

            {/* Tactile Character Callout */}
            <div className="p-4 bg-stone/40 border border-subtle">
              <span className="text-label text-mineral block mb-1">Physical Material Character</span>
              <p className="text-xs text-graphite font-body italic leading-relaxed">
                "{product.character}"
              </p>
            </div>
          </div>

          {/* Product Data Column (Span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 text-label text-mineral mb-2">
                  <span>FAMILY IDENTIFIER: {product.id.toUpperCase()}</span>
                  {product.formula && (
                    <span className="font-mono text-bronze font-semibold">{product.formula}</span>
                  )}
                </div>
                <h1 className="text-fluid-h2 font-medium text-ink tracking-tight">
                  {product.name}
                </h1>
              </div>

              <p className="text-xs md:text-sm text-graphite/90 font-body leading-relaxed">
                {product.overview}
              </p>

              {/* Available Forms */}
              <div className="space-y-2 pt-2 border-t border-subtle">
                <span className="text-label text-muted block">Supplied Forms & Granulometry</span>
                <div className="space-y-1.5">
                  {product.forms.map((form, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-ink font-medium">
                      <span className="w-1.5 h-1.5 bg-bronze" />
                      <span>{form}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Dispatch specs */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-subtle text-xs">
                <div>
                  <span className="text-label text-muted block mb-1">Standard Packaging</span>
                  <p className="text-graphite font-body text-[0.78rem] leading-snug">
                    {product.packaging}
                  </p>
                </div>
                <div>
                  <span className="text-label text-muted block mb-1">Minimum Commercial Lot</span>
                  <p className="text-graphite font-body text-[0.78rem] leading-snug">
                    {product.minOrderQuantity || '10 Metric Tonnes'}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-subtle mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry(product.slug)}
                className="btn-primary text-xs py-3 px-6"
              >
                <span>Enquire For This Material</span>
                <ArrowRight className="w-4 h-4 text-mineral" />
              </button>
              <Link to="/contact" className="btn-secondary text-xs py-3 px-6">
                <span>Request Sample Batch</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Properties Table */}
        <div className="py-16 border-b border-subtle">
          <div className="max-w-3xl mb-8">
            <span className="text-label text-muted block mb-1">Laboratory Reference Matrix</span>
            <h2 className="text-fluid-h3 text-ink font-medium">
              Verified Technical Specifications
            </h2>
            <p className="text-xs text-muted mt-2">
              Values represent typical batch parameters derived from standard chemical and sieve analyses. Batch-specific Certificate of Analysis (COA) is provided upon shipment.
            </p>
          </div>

          <div className="border border-subtle bg-white max-w-4xl overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone/50 border-b border-subtle text-label text-muted">
                  <th className="py-3 px-5 font-semibold">Specification Parameter</th>
                  <th className="py-3 px-5 font-semibold">Standard Value / Range</th>
                  <th className="py-3 px-5 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle">
                {product.technicalProperties.map((prop, idx) => (
                  <tr key={idx} className="hover:bg-stone/20 transition-colors">
                    <td className="py-3.5 px-5 font-medium text-ink">{prop.label}</td>
                    <td className="py-3.5 px-5 font-mono text-graphite font-semibold">{prop.value}</td>
                    <td className="py-3.5 px-5 text-[0.68rem] text-mineral uppercase tracking-wider">
                      Batch-Verified
                    </td>
                  </tr>
                ))}
                {product.meshRange && (
                  <tr className="hover:bg-stone/20 transition-colors">
                    <td className="py-3.5 px-5 font-medium text-ink">Granulometry / Mesh Range</td>
                    <td className="py-3.5 px-5 font-mono text-graphite font-semibold">{product.meshRange}</td>
                    <td className="py-3.5 px-5 text-[0.68rem] text-mineral uppercase tracking-wider">
                      Classification Standard
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verified Applications Section */}
        <div className="py-16 border-b border-subtle">
          <div className="mb-8">
            <span className="text-label text-muted block mb-1">Industrial Suitability</span>
            <h2 className="text-fluid-h3 text-ink font-medium">
              Verified Industrial Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.applications.map((app, idx) => (
              <div key={idx} className="p-4 bg-stone/30 border border-subtle flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-bronze mt-1.5 shrink-0" />
                <span className="text-xs text-graphite font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation Downloads for this product */}
        {matchedDocs.length > 0 && (
          <div className="py-16 border-b border-subtle">
            <div className="mb-6">
              <span className="text-label text-muted block mb-1">Technical Files</span>
              <h2 className="text-fluid-h3 text-ink font-medium">
                Related Documentation
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              {matchedDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 bg-paper border border-subtle flex items-center justify-between hover:border-ink transition-colors"
                >
                  <div>
                    <span className="font-mono text-xs text-bronze block">{doc.code}</span>
                    <h4 className="text-xs font-medium text-ink mt-0.5">{doc.title}</h4>
                    <span className="text-[0.68rem] text-muted">{doc.size}</span>
                  </div>
                  <button
                    onClick={() => {
                      alert(`Initiating download for ${doc.title}.`);
                    }}
                    className="p-2 border border-subtle hover:bg-ink hover:text-white transition-colors cursor-pointer"
                    aria-label={`Download ${doc.title}`}
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Materials Section */}
        <div className="py-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-subtle">
            <h3 className="font-display text-xl font-medium text-ink">
              Related Mineral Families
            </h3>
            <Link to="/materials" className="text-xs text-muted hover:text-ink underline">
              View All Catalogue &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                className="bg-paper border border-subtle p-5 flex flex-col justify-between group hover:border-ink transition-colors"
              >
                <div>
                  <div className="text-label text-mineral mb-2">{rel.categoryName}</div>
                  <h4 className="font-display text-base font-medium text-ink mb-2 group-hover:text-bronze transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-muted font-body mb-4 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                  <div className="img-reveal-frame aspect-[4/3] border border-subtle mb-4">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <Link
                  to={`/materials/${rel.slug}`}
                  className="text-xs font-semibold text-ink hover:text-bronze flex items-center gap-1 pt-3 border-t border-subtle"
                >
                  <span>View Material Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
