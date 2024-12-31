let form = document.querySelector('.contact-form');

// Function to show the form
function showForm() {
  gsap.to(form, {
    duration: 0.3,
    visibility: "visible",
    opacity: 1,
  });
  gsap.to('main', {
    duration: .3,
    opacity: 0.7,
    filter: 'blur(5px)',
  });
}

// Function to hide the form
function hideForm() {
  gsap.to(form, {
    duration: 0.3,
    visibility: "hidden",
    opacity: 0,
  });
  gsap.to('main', {
    duration: .3,
    opacity: 1,
    filter: 'blur(0px)',
  });
}

// Attach event listeners to all buttons
document.querySelectorAll('#contact-btn, #foot-contact-btn, #long-contact-btn, #hybrid-contact-btn, #motion-contact-btn').forEach(button => {
  button.addEventListener('click', showForm);
});

// Attach event listener to the cross icon
document.querySelector('.contact-form>i').addEventListener('click', hideForm);

function crousel(){
  const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length;
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  let currentIndex = 0;

  function updateCarousel() {
      const translateX = -currentIndex * 100;
      slides.style.transform = `translateX(${translateX}%)`;
  }

  leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
      updateCarousel();
  });

  rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
      updateCarousel();
  });
}
function loader(){

  setTimeout(() => {
    document.querySelector('.loader h1').innerText = 'Hola.'
    }, 700);
    setTimeout(() => {
      document.querySelector('.loader h1').innerText = 'Bonjour.'
    }, 800);
    setTimeout(() => {
      document.querySelector('.loader h1').innerText = 'Ciao.'
    }, 900);
    setTimeout(() => {
      document.querySelector('.loader h1').innerText = 'こんにちは'
    }, 1000);
    setTimeout(() => {
      document.querySelector('.loader h1').innerText = 'Hallo '
    }, 1100);
    setTimeout(() => {
      document.querySelector('.loader h1').innerText = 'Habari.'
    }, 1250);
    setTimeout(() => {
      document.querySelector('.loader h1').innerText = 'Bonjour '
    }, 1400);
    setTimeout(() => {
      document.querySelector('.loader h1').innerText = 'こんにちは'
    }, 1500);
    setTimeout(() => {
      document.querySelector('.loader h1').innerText = 'Hallo.'
    }, 1600);
    setTimeout(() => {
      document.querySelector('.loader h1').innerText = 'Hello.'
    }, 1700);
 
    window.addEventListener('load',function(){
      gsap.to('.loader',{
        top:'-150%',
        delay:1,
        ease:'power3.inOut',
        duration:1,
      })
    })
}

crousel();
loader()