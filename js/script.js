// Слайдер
var slideIndex = 1;
showSlides(slideIndex);
autoSlider();
/* функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

/* функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);
}

/* устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* основная функция слайдера */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("slider-dots_item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
/* авто прокрутка слайдера */
function autoSlider() {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("slider-dots_item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(autoSlider, 3000); // Изменеие значения авто прокрутки в миллисекундах (ms), пример 6000 это 6 секунд
}
//слайдер


var button = document.querySelector(".button-write");
var form = document.querySelector(".modal-write");
var close = document.querySelector(".modal-close");

button.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.add("modal-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (form.classList.contains("modal-show")) {
      form.classList.remove("modal-show");

    }
  }
});
