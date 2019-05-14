// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
const contentSection = document.querySelector(".home .content-section");
const inverseContent = document.querySelector(".home .inverse-content");
const intro = document.querySelector('.intro h2');

// fun bus color changes on mouse over 
// and changes back to its initial color on mouse leave
logoHeading.addEventListener("mouseover", () => {
  logoHeading.setAttribute("style", "color:#FF9800");
});

logoHeading.addEventListener("mouseleave", () => {
    logoHeading.setAttribute("style", "color:black");
});

// changes the position of the middle content. the image and text are switched
window.addEventListener("keydown", () => {
  contentSection.setAttribute("style", "flex-direction:row-reverse");
  inverseContent.setAttribute("style", "flex-direction:row-reverse");
});
