'use strict';

// menu
function myFunction(x) {
  x.classList.toggle("change");
  var hiddenLinks = document.getElementById("sidebar");
  if (hiddenLinks.style.display === 'block') {
    hiddenLinks.style.display = 'none';
  } else {
    hiddenLinks.style.display = 'block';
  }
}

// show video on pushing button
var watch = document.getElementById("play");
watch.onclick = function showVideo() {
  var video = document.getElementById("bender");
  var phone = document.getElementById("phone");
  if (video.style.display === 'block') {
    video.style.display = 'none';
  } else {
    video.style.display = 'block';
  }
  if (video.style.display === 'block') {
    phone.style.display = 'none';
  } else {
    phone.style.display = 'block';
  }
}

// choise your programm
function select() {
  var offer1 = document.getElementsByClassName('offer-block-company');
  var offer2 = document.getElementsByClassName('offer-block-individual');
  for (var i = 0; i < offer1.length; i++) {
    for (var j = 0; j < offer2.length; j++) {
      offer1[i].style.display = 'none';
      offer2[j].style.display = 'grid'
    }
  }
}

function selectPro() {
  var offer1 = document.getElementsByClassName('offer-block-company');
  var offer2 = document.getElementsByClassName('offer-block-individual');
  for (var i = 0; i < offer1.length; i++) {
    for (var j = 0; j < offer2.length; j++) {
      offer1[i].style.display = 'grid';
      offer2[j].style.display = 'none'
    }
  }
}
// email validation 
var form = document.forms['mail'];
form.onsubmit = function (e) {
  checkEmail(e.target.elements['email']);
  validateEmail(e.target.elements['email']);
  if (mail.style.borderColor === 'red') {
    return false;
  }
  alert("accepted!!!");
}
var form_invite = document.forms['invite'];
form_invite.onsubmit = function (e) {
  checkEmail(e.target.elements['email']);
  validateEmail(e.target.elements['email']);
  if (invite.style.borderColor === 'red') {
    return false;
  }
  alert("accepted!!!");
}

function checkEmail(email) {
  if (!email.value) {
    mail.style.borderColor = 'red';
    email.style.borderColor = 'red';
    invite.style.borderColor = 'red';
  }
}

function validateEmail(email) {
  var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
  if (!re.test(email.value)) {
    mail.style.borderColor = 'red';
    email.style.borderColor = 'red';
    invite.style.borderColor = 'red';
  } else {
    mail.style.borderColor = '#dfdfe1';
    email.style.borderColor = 'red';
    invite.style.borderColor = '#dfdfe1';
  }
}

// -------------------------
// slider
// -------------------------
var multiItemSlider = (function () {
  return function (selector, config) {
    var
      mainElement = document.querySelector(selector), // основный элемент блока
      sliderWrapper = mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
      sliderItems = mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
      sliderControls = mainElement.querySelectorAll('.slider__control'), // элементы управления
      wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width), // ширина обёртки
      itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width), // ширина одного элемента    
      positionLeftItem = 0, // позиция левого активного элемента
      transform = 0, // значение транфсофрмации .slider_wrapper
      step = itemWidth / wrapperWidth * 100, // величина шага (для трансформации)
      items = []; // массив элементов

    // наполнение массива _items
    sliderItems.forEach(function (item, index) {
      items.push({
        item: item,
        position: index,
        transform: 0
      });
    });

    var position = {
      getItemMin: function () {
        var indexItem = 0;
        items.forEach(function (item, index) {
          if (item.position < items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function () {
        var indexItem = 0;
        items.forEach(function (item, index) {
          if (item.position > items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function () {
        return items[position.getItemMin()].position;
      },
      getMax: function () {
        return items[position.getItemMax()].position;
      }
    }

    var transformItem = function (direction) {
      var nextItem;
      if (direction === 'right') {
        positionLeftItem++;
        if ((positionLeftItem + wrapperWidth / itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          items[nextItem].position = position.getMax() + 1;
          items[nextItem].transform += items.length * 100;
          items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
        }
        transform -= step;
      }
      if (direction === 'left') {
        positionLeftItem--;
        if (positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          items[nextItem].position = position.getMin() - 1;
          items[nextItem].transform -= items.length * 100;
          items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
        }
        transform += step;
      }
      sliderWrapper.style.transform = 'translateX(' + transform + '%)';
    }

    // обработчик события click для кнопок "назад" и "вперед"
    var controlClick = function (e) {
      var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
      transformItem(direction);
      e.preventDefault();
    };

    var setUpListeners = function () {
      // добавление к кнопкам "назад" и "вперед" обрботчика controlClick для событя click
      sliderControls.forEach(function (item) {
        item.addEventListener('click', controlClick);
      });
    }

    // инициализация
    setUpListeners();

    return {
      right: function () { // метод right
        transformItem('right');
      },
      left: function () { // метод left
        transformItem('left');
      }
    }

  }
}());

var slider = multiItemSlider('.slider')


// ------------------
// switch points on map
// -------------------

var timerId = setInterval(switchDots, 1000);

function switchDots(){
  var parentDOM = document.getElementById("map");
  var dots = parentDOM.getElementsByClassName("point");
  var rand = Math.floor(Math.random() * dots.length);
  dots[rand].classList.toggle('blue');
}

// -------------
// SWIPE-slider
// -------------
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


