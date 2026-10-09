import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMaterialSlug?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialMaterialSlug
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(initialMaterialSlug || 'dolomite');
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    destination: '',
    quantity: '25',
    meshGrade: '',
    packaging: 'Jumbo Bags (1.0 MT)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialMaterialSlug) {
      setSelectedSlug(initialMaterialSlug);
    }
  }, [initialMaterialSlug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  const currentProduct = PRODUCTS.find((p) => p.slug === selectedSlug);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-paper text-ink max-w-2xl w-full border border-subtle shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-subtle bg-stone/40">
          <div>
            <span className="text-label text-mineral block">Industrial Mineral Enquiry</span>
            <h3 className="font-display text-lg font-semibold text-ink">
              Discuss Material Requirements
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-muted hover:text-ink transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-bronze/10 text-bronze rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-bronze" />
            </div>
            <h4 className="font-display text-xl font-medium text-ink">
              Enquiry Received for {currentProduct?.name}
            </h4>
            <p className="text-xs text-muted max-w-md mx-auto leading-relaxed">
              Your provisional requirement for {formData.quantity} MT to {formData.destination || 'your destination'} has been logged. Our technical dispatch desk will verify batch specs against current supply schedules.
            </p>
            <div className="p-3 bg-stone/60 border border-subtle text-[0.7rem] text-mineral text-left max-w-md mx-auto">
              <strong>Notice:</strong> Prototype environment. Submission simulated. Formal technical quotation issued after client verification of commercial logistics.
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-primary mt-4"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Material Selector */}
            <div>
              <label className="block text-label text-muted mb-1.5">
                Target Mineral Family *
              </label>
              <select
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="w-full bg-white border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                required
              >
                {PRODUCTS.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name} ({p.categoryName})
                  </option>
                ))}
              </select>
            </div>

            {/* Grid 2-col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-label text-muted mb-1.5">
                  Company / Entity *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maharashtra Foundry Pvt Ltd"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-white border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                />
              </div>
              <div>
                <label className="block text-label text-muted mb-1.5">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Name and Designation"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full bg-white border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                />
              </div>
              <div>
                <label className="block text-label text-muted mb-1.5">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                />
              </div>
              <div>
                <label className="block text-label text-muted mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98000 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                />
              </div>
            </div>

            {/* Quantity and Location */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-label text-muted mb-1.5">
                  Estimated Quantity (MT) *
                </label>
                <input
                  type="number"
                  min="5"
                  step="5"
                  required
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-white border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                />
                <span className="text-[0.65rem] text-muted">Min order: 10 MT</span>
              </div>
              <div>
                <label className="block text-label text-muted mb-1.5">
                  Packaging Mode
                </label>
                <select
                  value={formData.packaging}
                  onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                  className="w-full bg-white border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                >
                  <option value="Jumbo Bags (1.0 MT)">1.0 MT Jumbo Bags with Liner</option>
                  <option value="50 kg HDPE Bags">50 kg HDPE Bags</option>
                  <option value="Bulk Tippers">Loose Bulk Tipper / Tanker</option>
                </select>
              </div>
              <div>
                <label className="block text-label text-muted mb-1.5">
                  Delivery Destination *
                </label>
                <input
                  type="text"
                  required
                  placeholder="City, State / Plant Location"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-white border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none"
                />
              </div>
            </div>

            {/* Mesh Grade and Requirements */}
            <div>
              <label className="block text-label text-muted mb-1.5">
                Technical Specifications & Mesh Requirements
              </label>
              <textarea
                rows={2}
                placeholder="e.g. 400 Mesh powder, minimum 96% whiteness, low iron requirement..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-white border border-subtle px-3 py-2 text-xs font-body focus:border-ink outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-subtle">
              <span className="text-[0.68rem] text-muted">
                B2B Industrial Supply Only &bull; Maharashtra & Pan-India
              </span>
              <button type="submit" className="btn-primary">
                <span>Submit Specification Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
