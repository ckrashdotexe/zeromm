export type MaterialCategory = 'powders-grains' | 'clays-oxides' | 'white-marble';

export type MaterialForm = 'powder' | 'grains' | 'sand' | 'aggregates' | 'lumps';

export interface TechnicalProperty {
  label: string;
  value: string;
  unit?: string;
  provisional?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  formula?: string;
  category: MaterialCategory;
  categoryName: string;
  forms: string[];
  formTypes: MaterialForm[];
  shortDescription: string;
  overview: string;
  character: string;
  image: string;
  featured?: boolean;
  applications: string[];
  technicalProperties: TechnicalProperty[];
  meshRange?: string;
  packaging: string;
  minOrderQuantity?: string;
  origin?: string;
}

export interface IndustrialApplication {
  id: string;
  title: string;
  slug: string;
  description: string;
  materialSlugs: string[];
  keyAttributes: string[];
}

export interface TechnicalDocument {
  id: string;
  title: string;
  code: string;
  materialSlug?: string;
  type: 'TDS' | 'SDS' | 'SPEC' | 'GUIDE';
  size: string;
  verifiedStatus: 'provisional-client-review' | 'verified';
}
