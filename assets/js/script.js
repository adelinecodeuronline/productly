////////////Burger nav
let menuMobile = document.querySelector('#burger');
menuMobile.addEventListener('click', displayMenu);

function displayMenu() {
    let navDisplay = document.querySelector('#menu');
    let menuBurger = document.querySelector('#burger');
    navDisplay.style.display = 'block';
    menuBurger.style.display = 'none';
  }

window.addEventListener('click', closeMenu);

function closeMenu(event) {
  if(event.target.matches('#menu')) {
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('#burger').style.display = 'block';
  }
}

////////////Carousel
document //scroll mobile
  .querySelector(".scrolling-wrapper")
  .addEventListener("scroll", (event) => {
    const scrollLeft = event.target.scrollLeft;
    document.querySelectorAll(".card").forEach((card) => {
      if (scrollLeft >= card.offsetLeft - 200) {
        document.querySelectorAll(".dots .dot").forEach((dot) => {
          dot.classList.remove("active");
        });

        document
          .querySelector(`#dot_${card.dataset.id}`)
          .classList.add("active");
      }
    });
  });
//////////////////
  const dots = document.querySelectorAll('.dot');
  const slides = document.querySelectorAll('.card');
  const buttons = document.querySelectorAll('.buttons');
  
  dots.forEach((item, index) => {
    item.addEventListener('click', function() {
      removeClass();
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    });
  });
  
  const removeClass = () => {
    slides.forEach(item => {
      item.classList.remove('active');
    });
    dots.forEach(item => {
      item.classList.remove('active');
    });
  };
  
  const buttonHandle = () => {
    const activeSlide = document.querySelector('.active');
    let ourIndex = 0;
    slides.forEach((item, index) => {
      if (item === activeSlide) {
        removeClass();
        if (index == 0) {
          ourIndex = 2;
        } else {
          ourIndex = index - 1;
        }
        slides[ourIndex].classList.add('active');
        dots[ourIndex].classList.add('active');
      }
    });
  };
  
  const buttonHandle1 = () => {
    const activeSlide = document.querySelector('.active');
    let ourIndex = 0;
    slides.forEach((item, index) => {
      if (item === activeSlide) {
        removeClass();
        if (index == 2) {
          ourIndex = 0;
        } else {
          ourIndex = index + 1;
        }
        slides[ourIndex].classList.add('active');
        dots[ourIndex].classList.add('active');
      }
    });
  };
  
  buttons[0].addEventListener("click", buttonHandle);
  buttons[1].addEventListener("click", buttonHandle1);
  

  
  
  
  
  

