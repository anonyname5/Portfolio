import { useState, useEffect, useRef, useCallback } from 'react';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

// Height of the fixed navbar. Read live so it stays correct across breakpoints
// and the scrolled/expanded states.
const getNavHeight = () => {
  const navbar = document.querySelector('nav');
  return navbar ? navbar.offsetHeight : 72;
};

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  // While a click-driven smooth scroll is in flight we suppress scroll-based
  // detection so the underline doesn't flicker back to the previous section.
  const lockUntil = useRef(0);

  const computeActiveSection = useCallback(() => {
    // Probe a point just below the navbar. This is the same region a clicked
    // section lands in, so the detector and the click target always agree
    // (fixes the "underline one step behind" bug).
    const probe = getNavHeight() + 48;

    // At the very bottom the last section may never reach the probe line, so
    // force it active once we've hit the bottom of the page.
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;
    if (atBottom) return SECTIONS[SECTIONS.length - 1];

    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= probe && rect.bottom > probe) {
        return id;
      }
    }
    return null;
  }, []);

  useEffect(() => {
    const update = () => {
      setScrollPosition(window.scrollY);
      if (Date.now() < lockUntil.current) return;
      const current = computeActiveSection();
      if (current) setActiveSection(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const timeoutId = setTimeout(update, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', onScroll);
    };
  }, [computeActiveSection]);

  // Call when the user clicks a nav link: update the underline immediately and
  // ignore scroll detection until the smooth scroll settles.
  const setActiveOnClick = useCallback((id) => {
    if (SECTIONS.includes(id)) {
      setActiveSection(id);
      lockUntil.current = Date.now() + 900;
    }
  }, []);

  return { scrollPosition, activeSection, setActiveOnClick };
};
