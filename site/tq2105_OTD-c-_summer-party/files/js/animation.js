$(document).on('ready', function() {
  $(".regular").slick({
    dots: true,
  });
});




const options = {
  root: null,
  rootMargin: "0px 0px -40% 0px",
  threshold: 0,
};

const onIntersect = (target, options = {}) => {
  const observer = new IntersectionObserver(addShowClass, options);
  observer.observe(target);
};

const addShowClass = (entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add("fadeup");
    }
  }
};

const fadeup = document.querySelectorAll(".galleryItem");
fadeup.forEach((target) => onIntersect(target, options));
