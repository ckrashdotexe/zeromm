import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry?: (preselectedMaterial?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Materials', path: '/materials' },
    { label: 'Applications', path: '/applications' },
    { label: 'Quality & Specs', path: '/quality' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-paper/95 backdrop-blur-md border-b border-subtle py-3.5 shadow-xs'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-editorial flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="group flex flex-col items-start focus:outline-none"
            aria-label="ZERO MM MINERALS LLP Homepage"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-lg md:text-xl font-semibold tracking-tight text-ink group-hover:text-graphite transition-colors">
                ZERO MM
              </span>
              <span className="text-[0.68rem] tracking-widest text-muted font-body font-medium uppercase">
                MINERALS
              </span>
              <span className="text-[0.55rem] text-bronze font-semibold uppercase tracking-wider ml-0.5 border border-bronze/40 px-1 py-0.2">
                LLP
              </span>
            </div>
            <span className="text-[0.62rem] text-muted tracking-widest uppercase hidden md:inline-block">
              Maharashtra, India
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[0.8125rem] tracking-wide font-medium transition-colors relative py-1 ${
                  isActive(link.path)
                    ? 'text-ink font-semibold'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-bronze" />
                )}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenEnquiry?.()}
              className="btn-primary text-xs py-2 px-4.5 cursor-pointer"
            >
              <span>Enquire</span>
              <ArrowRight className="w-3.5 h-3.5 text-mineral group-hover:text-white" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => onOpenEnquiry?.()}
              className="text-xs uppercase tracking-wider text-ink font-medium px-2.5 py-1.5 border border-ink/20 sm:hidden"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink hover:text-graphite focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-ink/40 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-paper p-6 pt-24 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="border-b border-subtle pb-4 mb-6">
                <p className="text-label text-muted">Navigation</p>
                <p className="font-display text-lg font-semibold text-ink mt-1">
                  ZERO MM MINERALS LLP
                </p>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-base font-display py-2 border-b border-subtle/50 flex items-center justify-between ${
                      isActive(link.path)
                        ? 'text-ink font-semibold'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-mineral" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-subtle">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry?.();
                }}
                className="btn-primary w-full justify-between"
              >
                <span>Start Direct Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-4 text-[0.7rem] text-muted text-center">
                Material supply across Maharashtra & Pan-India
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
