export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Get navbar height dynamically (responsive)
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight + 20 : 100;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    // Use smooth scroll with proper offset for mobile
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });
  }
};

