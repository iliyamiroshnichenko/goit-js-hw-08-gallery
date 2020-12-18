const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
        console.log(`Box ${entry.target.textContent} пересекает Root`);
        observer.disconnect()
    }
  });
};

const options = {
    rootMargin: '100px',
    // threshold: [0, 0.25, 0.5, 0.75, 1]
};

const io = new IntersectionObserver(onEntry, options);
const boxRef = document.querySelector('.js-box');

io.observe(boxRef);