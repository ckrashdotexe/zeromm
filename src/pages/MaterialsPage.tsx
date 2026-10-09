import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, X, ArrowUpRight, Filter } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import type { MaterialForm } from '../types/product';

interface MaterialsPageProps {
  onOpenEnquiry: (materialSlug?: string) => void;
}

export const MaterialsPage: React.FC<MaterialsPageProps> = ({ onOpenEnquiry }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedForm, setSelectedForm] = useState<string>('all');

  const availableForms: { label: string; value: string }[] = [
    { label: 'All Forms', value: 'all' },
    { label: 'Micronized Powder', value: 'powder' },
    { label: 'Calibrated Grains', value: 'grains' },
    { label: 'Industrial Sand', value: 'sand' },
    { label: 'Mineral Aggregates', value: 'aggregates' },
    { label: 'Lumps / Chips', value: 'lumps' },
  ];

  const handleCategoryChange = (catId: string) => {
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (categoryParam !== 'all' && product.category !== categoryParam) {
        return false;
      }
      // Form match
      if (selectedForm !== 'all' && !product.formTypes.includes(selectedForm as MaterialForm)) {
        return false;
      }
      // Search query match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);
        const matchesOverview = product.overview.toLowerCase().includes(q);
        const matchesApps = product.applications.some((app) => app.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesOverview && !matchesApps) {
          return false;
        }
      }
      return true;
    });
  }, [categoryParam, selectedForm, searchQuery]);

  const hasActiveFilters = categoryParam !== 'all' || selectedForm !== 'all' || searchQuery !== '';

  const clearFilters = () => {
    setSearchParams({});
    setSelectedForm('all');
    setSearchQuery('');
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-paper">
      <div className="container-editorial">
        {/* Page Header */}
        <div className="mb-12 pb-8 border-b border-subtle">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-bronze" />
            <span className="text-label text-muted">Complete Material Catalogue</span>
          </div>
          <h1 className="text-fluid-h1 font-medium text-ink tracking-tight">
            Industrial Minerals Portfolio
          </h1>
          <p className="text-xs md:text-sm text-muted font-body max-w-2xl mt-3 leading-relaxed">
            Nine distinct mineral families classified for particle fineness, chemical purity, and thermal endurance. Sourced and processed for industrial consumers across Maharashtra and pan-India.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-stone/30 border border-subtle p-4 md:p-6 mb-12 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search mineral, mesh size, application..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-subtle pl-10 pr-8 py-2 text-xs font-body focus:border-ink outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`text-xs px-3 py-1.5 border transition-colors cursor-pointer ${
                  categoryParam === 'all'
                    ? 'bg-ink text-white border-ink font-medium'
                    : 'bg-white text-graphite border-subtle hover:border-ink'
                }`}
              >
                All Families (09)
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`text-xs px-3 py-1.5 border transition-colors cursor-pointer ${
                    categoryParam === cat.id
                      ? 'bg-ink text-white border-ink font-medium'
                      : 'bg-white text-graphite border-subtle hover:border-ink'
                  }`}
                >
                  {cat.name} ({cat.productCount})
                </button>
              ))}
            </div>
          </div>

          {/* Form Filter Row */}
          <div className="pt-3 border-t border-subtle flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-label text-mineral flex items-center gap-1">
                <Filter className="w-3 h-3 text-bronze" /> Form:
              </span>
              <div className="flex flex-wrap gap-1">
                {availableForms.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setSelectedForm(f.value)}
                    className={`text-[0.72rem] px-2 py-0.5 border transition-colors cursor-pointer ${
                      selectedForm === f.value
                        ? 'bg-bronze text-white border-bronze font-medium'
                        : 'bg-white text-muted border-subtle hover:text-ink'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-[0.72rem] text-muted hover:text-ink underline flex items-center gap-1 cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-subtle text-xs text-muted">
          <span>
            Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} mineral families
          </span>
          <span className="text-label text-mineral">
            B2B Commercial Supply &bull; Standard MOQ 10 MT
          </span>
        </div>

        {/* Product Grid / Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="p-16 text-center border border-dashed border-subtle bg-stone/20 space-y-4">
            <h3 className="font-display text-xl text-ink font-medium">No materials match your criteria</h3>
            <p className="text-xs text-muted max-w-md mx-auto">
              Try adjusting your search query, selecting "All Families", or resetting the form filters.
            </p>
            <button onClick={clearFilters} className="btn-primary text-xs">
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-paper border border-subtle p-6 flex flex-col justify-between group hover:border-ink transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-label text-mineral mb-3">
                    <span>{product.categoryName}</span>
                    {product.formula && (
                      <span className="font-mono text-bronze text-xs">{product.formula}</span>
                    )}
                  </div>

                  <h2 className="font-display text-xl font-medium text-ink mb-2 group-hover:text-bronze transition-colors">
                    {product.name}
                  </h2>

                  <p className="text-xs text-muted font-body mb-5 leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>

                  <div className="img-reveal-frame aspect-[4/3] border border-subtle mb-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Forms Badges */}
                  <div className="space-y-1.5 mb-5">
                    <span className="text-[0.65rem] text-mineral uppercase tracking-wider block font-medium">
                      Available Forms
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {product.forms.map((form, idx) => (
                        <span
                          key={idx}
                          className="text-[0.68rem] bg-stone px-2 py-0.5 text-graphite border border-subtle/70"
                        >
                          {form}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key spec snippet */}
                  <div className="bg-stone/30 border border-subtle p-2.5 mb-5 text-[0.72rem] text-graphite">
                    <div className="flex justify-between items-center">
                      <span className="text-muted">{product.technicalProperties[0]?.label}:</span>
                      <strong className="text-ink font-semibold">
                        {product.technicalProperties[0]?.value}
                      </strong>
                    </div>
                    {product.technicalProperties[1] && (
                      <div className="flex justify-between items-center mt-1 pt-1 border-t border-subtle/40">
                        <span className="text-muted">{product.technicalProperties[1]?.label}:</span>
                        <strong className="text-ink font-semibold">
                          {product.technicalProperties[1]?.value}
                        </strong>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-subtle flex items-center justify-between">
                  <Link
                    to={`/materials/${product.slug}`}
                    className="text-xs font-semibold text-ink hover:text-bronze flex items-center gap-1"
                  >
                    <span>Full Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenEnquiry(product.slug)}
                    className="btn-primary text-xs py-1.5 px-3.5"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
