import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_CONFIG } from '../data/company';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    materialSlug: 'dolomite',
    meshGrade: '',
    quantity: '20',
    packaging: '1.0 MT Jumbo Bags with Liner',
    destination: '',
    sampleRequested: false,
    notes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedProduct = PRODUCTS.find((p) => p.slug === formData.materialSlug);

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-paper">
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-14 pb-8 border-b border-subtle">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-bronze" />
            <span className="text-label text-muted">Commercial Dispatch & Enquiries</span>
          </div>
          <h1 className="text-fluid-h1 font-medium text-ink tracking-tight">
            Start a Material Requirement Enquiry
          </h1>
          <p className="text-xs md:text-sm text-muted font-body max-w-2xl mt-3 leading-relaxed">
            Submit your target mineral parameters, desired mesh distributions, and estimated tonnage. Our dispatch desk will provide technical specifications and commercial logistics quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form (Span 7) */}
          <div className="lg:col-span-7 bg-white border border-subtle p-6 md:p-8">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-bronze/10 text-bronze rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-bronze" />
                </div>
                <h3 className="font-display text-2xl font-medium text-ink">
                  Requirement Logged for {selectedProduct?.name}
                </h3>
                <p className="text-xs text-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.contactPerson}</strong>. Your requirement for {formData.quantity} MT to {formData.destination || 'your specified location'} has been received.
                </p>
                <div className="p-3 bg-stone/40 border border-subtle text-[0.7rem] text-mineral text-left max-w-md mx-auto">
                  <strong>Notice:</strong> Prototype environment. Formal quotation will be issued upon client dispatch verification.
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary text-xs mt-4"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-lg font-medium text-ink mb-1">
                    Commercial Specification Form
                  </h3>
                  <p className="text-xs text-muted">
                    B2B bulk orders (standard minimum commercial lot: 10 MT).
                  </p>
                </div>

                {/* Target Mineral */}
                <div>
                  <label className="block text-label text-muted mb-1.5">
                    Target Mineral Family *
                  </label>
                  <select
                    value={formData.materialSlug}
                    onChange={(e) => setFormData({ ...formData, materialSlug: e.target.value })}
                    className="w-full bg-paper border border-subtle px-3 py-2.5 text-xs font-body focus:border-ink outline-none"
                    required
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name} ({p.categoryName})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Company & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-label text-muted mb-1.5">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Ceramics Pvt Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-paper border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-label text-muted mb-1.5">Contact Person *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-paper border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-label text-muted mb-1.5">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-paper border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-label text-muted mb-1.5">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-paper border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                    />
                  </div>
                </div>

                {/* Sizing, Quantity & Packaging */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-label text-muted mb-1.5">Quantity (MT) *</label>
                    <input
                      type="number"
                      min="5"
                      step="5"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-paper border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-label text-muted mb-1.5">Target Mesh / Size</label>
                    <input
                      type="text"
                      placeholder="e.g. 400 Mesh or 1-2mm"
                      value={formData.meshGrade}
                      onChange={(e) => setFormData({ ...formData, meshGrade: e.target.value })}
                      className="w-full bg-paper border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-label text-muted mb-1.5">Packaging</label>
                    <select
                      value={formData.packaging}
                      onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                      className="w-full bg-paper border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                    >
                      <option value="1.0 MT Jumbo Bags with Liner">1.0 MT Jumbo Bags with Liner</option>
                      <option value="50 kg HDPE Bags">50 kg HDPE Bags</option>
                      <option value="Loose Bulk Tipper">Loose Bulk Tipper / Tanker</option>
                    </select>
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-label text-muted mb-1.5">
                    Delivery Destination / Unloading Point *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="City, District, State / Plant Address"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-paper border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-label text-muted mb-1.5">
                    Specific Chemical / Formulation Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any low-iron, brightness, or acid-insolubility requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-paper border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none resize-none"
                  />
                </div>

                {/* Sample request checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="sampleRequested"
                    checked={formData.sampleRequested}
                    onChange={(e) => setFormData({ ...formData, sampleRequested: e.target.checked })}
                    className="accent-bronze w-4 h-4"
                  />
                  <label htmlFor="sampleRequested" className="text-xs text-graphite cursor-pointer">
                    Request 1.0 kg representative laboratory test sample before bulk shipment
                  </label>
                </div>

                <div className="pt-4 border-t border-subtle flex items-center justify-between">
                  <span className="text-[0.7rem] text-muted">
                    B2B Commercial Desk &bull; Maharashtra, India
                  </span>
                  <button type="submit" className="btn-primary">
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Metadata (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone/30 border border-subtle p-6 space-y-6">
              <div>
                <span className="text-label text-muted block mb-1">Commercial Desk</span>
                <h3 className="font-display text-xl font-medium text-ink">
                  ZERO MM MINERALS LLP
                </h3>
                <p className="text-xs text-muted mt-1">
                  Limited Liability Partnership &bull; Maharashtra, India
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-subtle text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-bronze mt-0.5 shrink-0" />
                  <div>
                    <span className="text-label text-mineral block">Email Enquiries</span>
                    <span className="text-ink font-mono">{COMPANY_CONFIG.contact.primaryEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-bronze mt-0.5 shrink-0" />
                  <div>
                    <span className="text-label text-mineral block">Direct Supply Desk</span>
                    <span className="text-ink font-mono">{COMPANY_CONFIG.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-bronze mt-0.5 shrink-0" />
                  <div>
                    <span className="text-label text-mineral block">Operating Zone</span>
                    <span className="text-ink">{COMPANY_CONFIG.contact.address}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-stone/50 border border-subtle text-[0.68rem] text-muted">
                * Contact channels designated for B2B industrial procurement and client verification.
              </div>
            </div>

            {/* Logistics summary */}
            <div className="p-6 bg-paper border border-subtle space-y-3">
              <span className="text-label text-mineral block">Dispatch Terms</span>
              <h4 className="font-display text-base font-medium text-ink">
                Standard Commercial Sourcing Terms
              </h4>
              <ul className="space-y-2 text-xs text-muted font-body">
                <li>&bull; Minimum order quantity: 10 Metric Tonnes</li>
                <li>&bull; Transport: F.O.R. or Ex-works dispatch via registered road freight</li>
                <li>&bull; Documentation: Batch COA, Tax Invoice, E-Way Bill</li>
                <li>&bull; Payment terms: As agreed per commercial contract</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
