import { useEffect, useState } from 'react';

interface ScrollState {
  scrollY: number;
  isScrolled: boolean;   // past 12px — used for header shadow
  isPastFold: boolean;   // past 600px — used for back-to-top button
}

export function useWindowScroll(): ScrollState {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollY,
    isScrolled: scrollY > 12,
    isPastFold: scrollY > 600,
  };
}