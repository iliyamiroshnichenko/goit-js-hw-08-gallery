// Intersection Observer c unobserve (один на все)

const images = document.querySelectorAll("selector");

const options = {
  rootMargin: "100px",
};

const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.dataset.lazy;
      image.src = src;
      image.classList.add("appear");
      observer.unobserve(image);
    }
  });
};

const io = new IntersectionObserver(onEntry, options);

images.forEach((img) => io.observe(img));

// Intersection Observer c disconnect (на каждый свой)

const images = document.querySelectorAll("selector");



const lazyload = (target) => {
  const options = {
    rootMargin: "100px",
    };
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            const src = image.dataset.lazy;
            image.src = src;
            image.classList.add("appear");
            observer.disconnect();
          }
        });
    }, options);
    io.observe(target);
};

images.forEach(image => lazyload(image))