// ------------------ Меню бургер ------------------------
const menuBtn = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__list');
const body = document.body;
menuBtn.addEventListener('click', function(event) {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');// Убираем прокрутку при открытом меню бургер
});

// ---------- Закрытие меню при клике на ссылку --------------
const list = document.querySelector('.menu__list');
list.addEventListener('click', function(event) {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// ---------- Плавная прокрутка к нужному разделу -------------
const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();
        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);
        window.scroll({
            top: elem.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// ---------- Плавная прокрутка вверх страницы -------------
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// Показать/скрыть хедер при прокрутке
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }
    lastScroll = scrollPosition();
});

// --------- Инициализируем Swiper -----------
// new Swiper('.image-slider', {
//   // Количество слайдов для показа
//   slidesPerView: 3,
//   // Бесконечный слайдер
//   loop: true,
//   // Пауза между прокруткой
//   autoplay: {
//     delay: 2000
//   },
//   // Скорость (плавность)
//   speed: 800
// });

// ------------- Swiper ---------------
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});