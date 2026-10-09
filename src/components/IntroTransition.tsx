import React, { useEffect, useState } from 'react';

interface IntroProps {
  onComplete?: () => void;
}

export const IntroTransition: React.FC<IntroProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState<boolean>(true);
  const [fading, setFading] = useState<boolean>(false);

  useEffect(() => {
    // Check if user already saw the intro in this session
    const hasSeen = sessionStorage.getItem('zeromm_intro_seen');
    if (hasSeen) {
      setVisible(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem('zeromm_intro_seen', 'true');
        onComplete?.();
      }, 500);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-ink text-paper transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="text-center px-6">
        <div className="overflow-hidden mb-3">
          <p className="text-label text-mineral tracking-[0.25em] text-[0.7rem] uppercase">
            Industrial Mineral Materials
          </p>
        </div>
        <div className="w-16 h-px bg-bronze/60 mx-auto my-3" />
        <h1 className="font-display text-2xl md:text-3xl tracking-tight text-white font-medium">
          ZERO MM MINERALS <span className="text-xs text-mineral align-super">LLP</span>
        </h1>
        <p className="text-xs text-muted mt-2 tracking-wide font-body">Maharashtra, India</p>

        <button
          onClick={() => {
            setFading(true);
            setTimeout(() => {
              setVisible(false);
              sessionStorage.setItem('zeromm_intro_seen', 'true');
              onComplete?.();
            }, 300);
          }}
          className="mt-6 text-[0.65rem] tracking-widest uppercase text-mineral/70 hover:text-white transition-colors underline cursor-pointer"
        >
          Skip Introduction [ESC]
        </button>
      </div>
    </div>
  );
};
