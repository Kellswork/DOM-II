// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
const contentSection = document.querySelector(".home .content-section");
const inverseContent = document.querySelector(".home .inverse-content");
const intro = document.querySelector('.intro h2');
const image = document.querySelector('.img-content');
// const image2 = document.querySelector('.inverse-content .img-content');

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

// changes the text of .intro h2
intro.addEventListener('dblclick', () => {
 intro.textContent = 'We are going on a Road Trip!!!!'
});


image.addEventListener('mouseenter', (event)=> {
    image.setAttribute('style', 'transform: rotate(180deg)'); 

    setTimeout(()=> {
        image.setAttribute('style', 'transform: rotate(0deg)');      
    }, 4000)
})

// increases the logo text
window.addEventListener('load', () => {
    logoHeading.setAttribute('style', 'font-size: 6rem');
})

