// nav link scroll
const menuItems = document.querySelectorAll('.container-link_scroll')

menuItems.forEach(item => {
  item.addEventListener('click', scroll_to_id_on_click);
})


function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scroll_to_id_on_click(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 100;
  scroll_to_position(to);
}

function scroll_to_position(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}


// toggleQuestion 

const myButtons = document.querySelectorAll('.toggle-button');

myButtons.forEach(item => item.addEventListener('click', toggleQuestion));

function toggleQuestion(event) {
  const element = document.getElementById(`${event.target.value}-faq-answer`);
  if (element.className.includes("hide-answer")) {
    element.classList.remove('hide-answer');
  } else {
    element.classList.add('hide-answer');
  }
}


// nav background index page

const nav = document.getElementById('nav-index-identifier');

window.addEventListener('scroll', () => {
  if (window.scrollY > 595) {
    nav.classList.add('nav-background');
  } else {
    nav.classList.remove('nav-background');
  }
})

const responsiveNavBg = document.getElementById('responsive-nav-index-identifier');

window.addEventListener('scroll', () => {
  if (window.scrollY > 595) {
    responsiveNavBg.classList.add('nav-background');
  } else {
    responsiveNavBg.classList.remove('nav-background');
  }
})

// nav background login page

const navLogin = document.getElementById('nav-login-identifier');

window.addEventListener('scroll', () => {
  if (window.scrollY > 130) {
    navLogin.classList.add('nav-background');
  } else {
    navLogin.classList.remove('nav-background');
  }
})

const responsiveNavLoginBg = document.getElementById('responsive-nav-login-identifier');

window.addEventListener('scroll', () => {
  if (window.scrollY > 130) {
    responsiveNavLoginBg.classList.add('nav-background');
  } else {
    responsiveNavLoginBg.classList.remove('nav-background');
  }
})

// carroussel

let anterior = 0;
let ativo;
let proximo = 2;

const slides = document.querySelectorAll('.myslide');

function nextSlide() {
  slides.forEach((item, index) => {
    if (item.classList.contains('active')) {
      ativo = index;
    }
  })
  slides[ativo].classList.remove('active');
  slides[ativo].classList.add('unactiveSlide');
  if (ativo === (slides.length - 1)) {
    slides[0].classList.add('active');
    slides[0].classList.remove('unactiveSlide');
  } else {
    slides[ativo + 1].classList.add('active');
    slides[ativo + 1].classList.remove('unactiveSlide');
  }
}

function previousSlide() {
  slides.forEach((item, index) => {
    if (item.classList.contains('active')) {
      ativo = index;
    }
  })
  slides[ativo].classList.remove('active');
  slides[ativo].classList.add('unactiveSlide');
  if (ativo === 0) {
    slides[slides.length - 1].classList.add('active');
    slides[slides.length - 1].classList.remove('unactiveSlide');
  } else {
    slides[ativo - 1].classList.add('active');
    slides[ativo - 1].classList.remove('unactiveSlide');
  }
}

// toggle nav

let show = true;

const responsiveNav = document.querySelector(".responsive-nav")
const menuToggle = responsiveNav.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

  document.body.style.overflow = show ? "hidden" : "initial";

  responsiveNav.classList.toggle("on", show)
  show = !show;
})

function removeOn() {
  document.body.style.overflow = show ? "hidden" : "initial";

  responsiveNav.classList.toggle("on", show)
  show = !show;
}

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  if (responsiveNav.classList.contains('on')) {
    removeOn()
  }
})

// toggle user button normal size

let showMenu = true;

const userButton = document.querySelector('.user-button');
const menuIdentifier = document.querySelector('.login-menu-identifier');
const arrowIdentifier = document.querySelector('.arrow-identifier');

userButton.addEventListener('click', () => {
  console.log(arrowIdentifier);
  menuIdentifier.classList.toggle('disable-items', !showMenu);
  arrowIdentifier.classList.toggle('up', showMenu);
  arrowIdentifier.classList.toggle('down', !showMenu);
  showMenu = !showMenu;
});


// toggle user button responsive size

let showMenuResponsive = true;

const userButtonResponsive = document.querySelector('.user-button-responsive');
const menuIdentifierResponsive = document.querySelector('.login-menu-identifier-responsive');
const arrowIdentifierResponsive = document.querySelector('.arrow-identifier-responsive');

userButtonResponsive.addEventListener('click', () => {
  console.log(menuIdentifierResponsive)
  menuIdentifierResponsive.classList.toggle('disable-items', !showMenuResponsive);
  userButtonResponsive.classList.toggle('user-button-responsive-margin', showMenuResponsive);

  arrowIdentifierResponsive.classList.toggle('up', showMenuResponsive);
  arrowIdentifierResponsive.classList.toggle('down', !showMenuResponsive);
  showMenuResponsive = !showMenuResponsive;
});
