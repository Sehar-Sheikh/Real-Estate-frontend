

// const stars = document.querySelectorAll(".star");
// const ratingInput = document.getElementById("rating");

// stars.forEach((star) => {
//   star.addEventListener("click", () => {
//     const value = star.getAttribute("data-value");
//     ratingInput.value = value; // Save rating to hidden input
//     updateStars(value);
//   });
// });

// function updateStars(value) {
//   stars.forEach((star) => {
//     star.classList.remove("rated");
//     if (star.getAttribute("data-value") <= value) {
//       star.classList.add("rated");
//     }
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const ratingInput = document.getElementById("rating");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const value = star.getAttribute("data-value");
      ratingInput.value = value; // Save rating to hidden input
      updateStars(value);
    });
  });

  function updateStars(value) {
    stars.forEach((star) => {
      star.classList.remove("rated");
      if (star.getAttribute("data-value") <= value) {
        star.classList.add("rated");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".typing-text, .animate-fade-in-left, .animate-fade-in-right, .animate-fade-in-up, .animate-card-down, .animate-card-up, .animate-bounce"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationClass = [...element.classList].find(
            (className) => className.startsWith("animate-")
          );

          // Handle other animations
          if (animationClass) {
            // Remove the class to reset the animation
            element.classList.remove(animationClass);
            requestAnimationFrame(() => {
              // Delay for the browser to register the removal
              setTimeout(() => {
                element.classList.add(animationClass); // Re-add the class to trigger the animation
              }, 10); // Short delay for smooth re-adding
            });
          }
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is in view
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});


document.getElementById('toggleFooter').addEventListener('click', function () {
  const footer = document.getElementById('footer');
  footer.classList.toggle('hidden'); // Toggle the 'hidden' class
});
