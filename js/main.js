const btn = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const border1 = document.querySelector('.border1');
const border2 = document.querySelector('.border2');
const border3 = document.querySelector('.border3');

btn.addEventListener('click', function () {
  $('.welcome').toggleClass('close');
  $('.about').toggleClass('close');
  $('.service').toggleClass('close');
  $('.skill').toggleClass('close');
  $('.work').toggleClass('close');
  $('.contact').toggleClass('close');
  $('.footer').toggleClass('close');
  nav.classList.toggle('open-menu');
  border1.classList.toggle('open1');
  border2.classList.toggle('open2');
  border3.classList.toggle('open3');
});

$('.link').addEventListener('click', function () {
  $('.welcome').removeClass('close');
  $('.about').removeClass('close');
  $('.service').removeClass('close');
  $('.skill').removeClass('close');
  $('.work').removeClass('close');
  $('.contact').removeClass('close');
  $('.footer').removeClass('close');
});


if (!("scrollBehavior" in document.documentElement.style)) {
  import("scroll-behavior-polyfill");
}