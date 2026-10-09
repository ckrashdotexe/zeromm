import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Truck, Cpu } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/company';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-paper">
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-subtle">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-bronze" />
            <span className="text-label text-muted">Company & Sourcing Philosophy</span>
          </div>
          <h1 className="text-fluid-h1 font-medium text-ink tracking-tight max-w-3xl">
            Materiality, Precision & Industrial Credibility.
          </h1>
          <p className="text-xs md:text-sm text-muted font-body max-w-2xl mt-4 leading-relaxed">
            {COMPANY_CONFIG.tagline} {COMPANY_CONFIG.supportingPositioning}
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 pb-16 border-b border-subtle">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-label text-bronze block">Origins & Approach</span>
            <h2 className="text-fluid-h2 text-ink font-medium">
              Sourced for application. Graded with discipline.
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-graphite/90 font-body leading-relaxed">
              <p>
                ZERO MM MINERALS LLP was founded on a singular conviction: industrial mineral supply should be evaluated by particle physics, chemical predictability, and delivery integrity rather than generic corporate claims.
              </p>
              <p>
                From the mineral-rich geological formations of Maharashtra and adjacent Western Indian belts, we curate and classify essential carbonates, silicates, clays, and oxides. We bridge geological deposits and high-precision manufacturing plants.
              </p>
              <p>
                Our team understands the severe costs of batch inconsistency—whether it is an unexpected iron peak ruining a glass melt or coarse oversize clogging an extrusion nozzle. We govern our supply lines with strict technical oversight.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="img-reveal-frame aspect-[16/11] border border-subtle shadow-md">
              <img
                src="/images/quarry-geology.jpg"
                alt="Western Ghats mineral strata in Maharashtra, India"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-ink/90 text-stone px-3 py-2 text-[0.68rem]">
                Geological Formations &bull; Western India Corridors
              </div>
            </div>
          </div>
        </div>

        {/* Operational Values */}
        <div className="mb-20">
          <div className="mb-10">
            <span className="text-label text-muted block mb-1">Our Operating Standards</span>
            <h3 className="font-display text-2xl font-medium text-ink">
              The Four Cornerstones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-subtle space-y-3">
              <Compass className="w-5 h-5 text-bronze" />
              <h4 className="font-display text-base font-medium text-ink">Strict Classification</h4>
              <p className="text-xs text-muted font-body leading-relaxed">
                Clear mesh and top-cut definitions (D97) with zero ambiguity on sizing tolerances and oversize residue.
              </p>
            </div>

            <div className="p-6 bg-white border border-subtle space-y-3">
              <Cpu className="w-5 h-5 text-bronze" />
              <h4 className="font-display text-base font-medium text-ink">Chemical Stability</h4>
              <p className="text-xs text-muted font-body leading-relaxed">
                Guaranteed ranges for active oxides (CaO, MgO, SiO2, Al2O3) and controlled trace contaminants.
              </p>
            </div>

            <div className="p-6 bg-white border border-subtle space-y-3">
              <Shield className="w-5 h-5 text-bronze" />
              <h4 className="font-display text-base font-medium text-ink">Moisture Protection</h4>
              <p className="text-xs text-muted font-body leading-relaxed">
                HDPE and heavy-duty jumbo bags with verified inner moisture barrier liners preventing hygroscopic lumping.
              </p>
            </div>

            <div className="p-6 bg-white border border-subtle space-y-3">
              <Truck className="w-5 h-5 text-bronze" />
              <h4 className="font-display text-base font-medium text-ink">Logistics Continuity</h4>
              <p className="text-xs text-muted font-body leading-relaxed">
                Coordinated road freight schedules and buffer inventory ensuring seamless factory consumption without shutdown.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Status Disclosure */}
        <div className="p-8 bg-stone/40 border border-subtle">
          <div className="max-w-3xl">
            <span className="text-label text-mineral block mb-2">Corporate Information Note</span>
            <h4 className="font-display text-lg font-medium text-ink mb-2">
              ZERO MM MINERALS LLP &bull; Registered in Maharashtra, India
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              This digital platform reflects the provisional commercial and technical framework of ZERO MM MINERALS LLP. Specific operational facilities, quarry allocations, and verified laboratory certifications are presented for preliminary client review and B2B engagement.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary text-xs">
                <span>Contact Commercial Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
