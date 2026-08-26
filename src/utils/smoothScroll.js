export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Offset for the fixed navbar plus a small gap, so the section's content
  // (heading included) sits fully below the bar instead of being clipped.
  const navbar = document.querySelector('nav');
  const navbarHeight = navbar ? navbar.offsetHeight : 80;
  const gap = 24;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - navbarHeight - gap;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: 'smooth',
  });
};
