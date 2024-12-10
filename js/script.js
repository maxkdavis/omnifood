'use strict';

console.log('hello world');

// const h1 = document.querySelector('.heading-primary');
// console.log(h1);

// h1.addEventListener('click', function () {
//   h1.textContent = 'Max Davis';
//   h1.style.backgroundColor = 'red';
//   h1.style.padding = '5rem';
// });
///////////////////////////////////////
//set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////
//Make Mobile Navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////
//Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    //scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    //close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

///////////////////////////
//Sticky Navigation
const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    //In the viewport
    root: null, //null means viewport
    threshold: 0, //means this will fire an event as soon as 0% of hero section is inside viewport. So we set this to zero so that event fires once hero section is completely out of the viewport.
    rootMargin: '-80px', // so we're able to see 'featured-in' section when we first intersect
  }
);

obs.observe(sectionHeroEl);
