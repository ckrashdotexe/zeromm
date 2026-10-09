import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Checks if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Reveal animation for display headings using mask clipping
 */
export const animateHeadingReveal = (
  element: HTMLElement | null,
  options?: { delay?: number; stagger?: number }
) => {
  if (!element || prefersReducedMotion()) return;

  const lines = element.querySelectorAll('.reveal-line');
  if (lines.length === 0) {
    gsap.fromTo(
      element,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        delay: options?.delay || 0.1,
        clearProps: 'transform,opacity'
      }
    );
    return;
  }

  gsap.fromTo(
    lines,
    { yPercent: 110, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.85,
      stagger: options?.stagger || 0.08,
      ease: 'power3.out',
      delay: options?.delay || 0.1,
      clearProps: 'transform,opacity'
    }
  );
};

/**
 * Reveal image with clipped frame and subtle scale
 */
export const animateImageReveal = (
  container: HTMLElement | null,
  image: HTMLElement | null,
  options?: { delay?: number }
) => {
  if (!container || !image || prefersReducedMotion()) return;

  const tl = gsap.timeline({
    delay: options?.delay || 0,
    defaults: { ease: 'power3.out' }
  });

  tl.fromTo(
    container,
    { clipPath: 'inset(10% 0% 10% 0%)', opacity: 0 },
    { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.1 }
  );

  tl.fromTo(
    image,
    { scale: 1.08 },
    { scale: 1.0, duration: 1.2 },
    '-=1.0'
  );

  return tl;
};
