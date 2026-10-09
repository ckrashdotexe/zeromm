import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_CONFIG } from '../data/company';
import { CATEGORIES } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-paper border-t border-subtle-dark pt-16 pb-12">
      <div className="container-editorial">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-subtle-dark">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-display text-2xl font-semibold tracking-tight text-white">
                  ZERO MM
                </span>
                <span className="text-xs tracking-widest text-mineral uppercase font-body font-medium">
                  MINERALS
                </span>
                <span className="text-[0.6rem] text-bronze uppercase font-semibold border border-bronze/40 px-1 py-0.5">
                  LLP
                </span>
              </div>
              <p className="font-display text-lg text-stone/90 mb-4 max-w-md font-light">
                {COMPANY_CONFIG.tagline}
              </p>
              <p className="text-xs text-mineral/80 font-body leading-relaxed max-w-sm">
                {COMPANY_CONFIG.supportingPositioning}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-subtle-dark/40 text-[0.72rem] text-mineral/70">
              <span className="inline-block w-2 h-2 rounded-full bg-bronze/80 mr-2" />
              Sourcing and supply framework based in Maharashtra, India.
            </div>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-label text-mineral/60 mb-5">Product Families</h4>
            <ul className="space-y-3">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/materials?category=${cat.id}`}
                    className="text-xs text-stone/80 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[0.65rem] text-mineral/50 group-hover:text-bronze">
                      ({cat.productCount})
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/materials"
                  className="text-xs text-bronze hover:underline tracking-wide inline-block"
                >
                  View Full Catalogue &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-label text-mineral/60 mb-5">Navigation</h4>
            <ul className="space-y-3 text-xs text-stone/80">
              <li>
                <Link to="/materials" className="hover:text-white transition-colors">
                  All Materials
                </Link>
              </li>
              <li>
                <Link to="/applications" className="hover:text-white transition-colors">
                  Industries & Use
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-white transition-colors">
                  Quality & TDS
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Company & Context
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Enquiry Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Commercial & Compliance Notice */}
          <div className="lg:col-span-2">
            <h4 className="text-label text-mineral/60 mb-5">Commercial Supply</h4>
            <div className="text-[0.72rem] text-mineral/80 space-y-2.5 leading-relaxed">
              <p>Industrial B2B dispatch only.</p>
              <p>Minimum commercial lots: 10 MT.</p>
              <p className="text-stone/60">
                Packaging in 50 kg HDPE bags & 1.0 MT jumbo bags with moisture barrier liners.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.7rem] text-mineral/60">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_CONFIG.name}. Registered in Maharashtra, India.
          </div>
          <div className="flex items-center gap-6">
            <span>Material specifications subject to client batch verification.</span>
            <Link to="/contact" className="text-bronze hover:underline">
              Request COA / TDS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
