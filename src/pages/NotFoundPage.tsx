import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-36 pb-24 flex items-center justify-center bg-paper">
      <div className="container-editorial text-center max-w-lg">
        <span className="text-label text-mineral block mb-3">Error 404 &bull; Page Not Found</span>
        <h1 className="text-fluid-h1 font-medium text-ink mb-4">
          Material Specimen Unlocated
        </h1>
        <p className="text-xs md:text-sm text-muted font-body mb-8 leading-relaxed">
          The requested catalogue page or resource does not exist in the current directory. Please return to the portfolio index.
        </p>
        <Link to="/" className="btn-primary inline-flex">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
