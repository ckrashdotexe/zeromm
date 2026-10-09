import React from 'react';
import { Download, AlertCircle } from 'lucide-react';

import { TECHNICAL_DOCUMENTS } from '../data/documents';

export const QualityPage: React.FC = () => {
  const protocols = [
    {
      title: 'Granulometry & Sieve Analysis',
      standard: 'ASTM E11 / ISO 3310-1',
      description: 'Rotary air-jet sifting and wet sieve testing down to 500 Mesh (25µm), establishing strict oversize tolerances and consistent particle sizing.'
    },
    {
      title: 'Optical Whiteness & Brightness',
      standard: 'ISO 2470 / TAPPI T-452',
      description: 'Spectrophotometric reflectance analysis measured against standard barium sulphate plates (L*, a*, b* chromatic coordinates).'
    },
    {
      title: 'Chemical Purity & Trace Oxides',
      standard: 'XRF / Chemical Titration',
      description: 'Determination of primary active carbonates/silicates alongside rigorous monitoring of deleterious trace elements such as Fe2O3 and acid-insolubles.'
    },
    {
      title: 'Loss on Ignition & Moisture Content',
      standard: 'ASTM C25 / ISO 787-2',
      description: 'High-temperature gravimetric heating to quantify structural volatile components, crystallization water, and residual surface moisture.'
    }
  ];

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-paper">
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-14 pb-8 border-b border-subtle">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-bronze" />
            <span className="text-label text-muted">Quality Control & Laboratory Verification</span>
          </div>
          <h1 className="text-fluid-h1 font-medium text-ink tracking-tight">
            Testing Protocols & Specifications
          </h1>
          <p className="text-xs md:text-sm text-muted font-body max-w-2xl mt-3 leading-relaxed">
            Industrial mineral supply demands absolute batch consistency. Our evaluation framework monitors granulometry, optical reflectance, and chemical stoichiometry across every dispatch.
          </p>
        </div>

        {/* Quality Protocols Grid */}
        <div className="mb-16">
          <h2 className="text-fluid-h3 font-medium text-ink mb-6">
            Standard Analytical Protocols
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {protocols.map((p, idx) => (
              <div key={idx} className="bg-white border border-subtle p-6 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-bronze font-semibold">{p.standard}</span>
                  <span className="text-[0.68rem] text-mineral uppercase tracking-wider">Protocol #{idx + 1}</span>
                </div>
                <h3 className="font-display text-lg font-medium text-ink">{p.title}</h3>
                <p className="text-xs text-muted font-body leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Documents Table */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-fluid-h3 font-medium text-ink">
                Technical Data Sheets & Documentation Library
              </h2>
              <p className="text-xs text-muted mt-1">
                Download provisional reference specifications. Official batch-specific COA documents are released with commercial orders.
              </p>
            </div>
          </div>

          <div className="border border-subtle bg-white overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone/50 border-b border-subtle text-label text-muted">
                  <th className="py-3.5 px-6 font-semibold">Document Title</th>
                  <th className="py-3.5 px-6 font-semibold">Reference Code</th>
                  <th className="py-3.5 px-6 font-semibold">Type</th>
                  <th className="py-3.5 px-6 font-semibold">Size</th>
                  <th className="py-3.5 px-6 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle">
                {TECHNICAL_DOCUMENTS.map((doc) => (
                  <tr key={doc.id} className="hover:bg-stone/20 transition-colors">
                    <td className="py-4 px-6 font-medium text-ink">{doc.title}</td>
                    <td className="py-4 px-6 font-mono text-bronze font-semibold">{doc.code}</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-0.5 bg-stone text-graphite border border-subtle font-medium text-[0.68rem]">
                        {doc.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted">{doc.size}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => {
                          alert(`Initiating download for ${doc.title} (${doc.code}). Formal client batch COA issued upon enquiry.`);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs text-ink hover:text-bronze font-medium cursor-pointer"
                      >
                        <span>Download PDF</span>
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Integrity Notice */}
        <div className="p-6 bg-stone/40 border border-subtle flex items-start gap-4 text-xs text-graphite leading-relaxed">
          <AlertCircle className="w-5 h-5 text-bronze shrink-0 mt-0.5" />
          <div>
            <strong className="text-ink font-semibold block mb-1">
              Quality Assurance & Client Integrity Statement
            </strong>
            All listed technical tolerances, chemical analyses, and physical characteristics reflect verified mineralogical norms. Zero MM Minerals LLP verifies each commercial consignment through representative lot sampling prior to dispatch.
          </div>
        </div>
      </div>
    </div>
  );
};
