/**
 * ZERO MM MINERALS LLP — Central Content & Client Verification Configuration
 * 
 * NOTE: Fields marked with `verified: false` represent neutral, provisional copy
 * prepared for client review and legal confirmation before production dispatch.
 */

export const COMPANY_CONFIG = {
  name: 'ZERO MM MINERALS LLP',
  shortName: 'ZERO MM',
  tagline: 'Material, in its purest form.',
  supportingPositioning: 'Industrial minerals. Thoughtfully sourced. Built for application.',
  entityType: 'Limited Liability Partnership (LLP)',
  region: 'Maharashtra, India',
  
  // Operational model status (to be updated upon client confirmation)
  operationalModel: {
    status: 'Provisional Commercial Framework',
    description: 'Engagement across industrial mineral supply, sourcing coordination, and commercial distribution across industrial sectors in Maharashtra and western India.',
    verified: false,
    disclaimer: 'Operational footprint, processing facilities, and quarrying affiliations are subject to ongoing client verification.'
  },

  // Contact details (clearly designated provisional / client approval pending)
  contact: {
    primaryEmail: 'enquiries@zerommminerals.com', // [Client to confirm official domain]
    phone: '+91 (0) 20 0000 0000', // [Client to provide primary dispatch number]
    address: 'Industrial Supply Network, Maharashtra, India', // [Client to provide registered LLP office address]
    hours: 'Monday – Friday, 09:00 – 18:00 IST',
    verified: false
  },

  // Logistics & Supply notes
  supply: {
    minimumOrderQuantity: '10 Metric Tonnes (commercial standard)',
    modes: ['Road Freight / Covered Tippers', 'Containerized HDPE Bags', 'Jumbo Bags (1.0 MT)'],
    dispatchZones: 'Western India & Nationwide Inter-State Logistics',
    verified: false
  },

  // Unconfirmed client markers for UI warnings & internal review
  reviewNotice: 'Provisional industrial specifications. Batch-specific Certificates of Analysis (COA) and Technical Data Sheets (TDS) provided upon formal enquiry.'
};
