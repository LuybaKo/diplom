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


function checkEmail(email) {
  if (!email.value) {
    mail.style.borderColor = 'red';
  }
}

function validateEmail(email) {
  var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
  if (!re.test(email.value)) {
    mail.style.borderColor = 'red';
  } else {
    mail.style.borderColor = '#dfdfe1';
  }
}

// -------------------------
// slider
// -------------------------
var multiItemSlider = (function () {
  return function (selector, config) {
    var
      _mainElement = document.querySelector(selector), // основный элемент блока
      _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
      _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
      _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
      _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
      _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
      _positionLeftItem = 0, // позиция левого активного элемента
      _transform = 0, // значение транфсофрмации .slider_wrapper
      _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
      _items = []; // массив элементов

    // наполнение массива _items
    _sliderItems.forEach(function (item, index) {
      _items.push({
        item: item,
        position: index,
        transform: 0
      });
    });

    var position = {
      getItemMin: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position < _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function () {
        var indexItem = 0;
        _items.forEach(function (item, index) {
          if (item.position > _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function () {
        return _items[position.getItemMin()].position;
      },
      getMax: function () {
        return _items[position.getItemMax()].position;
      }
    }

    var _transformItem = function (direction) {
      var nextItem;
      if (direction === 'right') {
        _positionLeftItem++;
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          _items[nextItem].position = position.getMax() + 1;
          _items[nextItem].transform += _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform -= _step;
      }
      if (direction === 'left') {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          _items[nextItem].position = position.getMin() - 1;
          _items[nextItem].transform -= _items.length * 100;
          _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
    }

    // обработчик события click для кнопок "назад" и "вперед"
    var _controlClick = function (e) {
      var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
      e.preventDefault();
      _transformItem(direction);
    };

    var _setUpListeners = function () {
      // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
      _sliderControls.forEach(function (item) {
        item.addEventListener('click', _controlClick);
      });
    }

    // инициализация
    _setUpListeners();

    return {
      right: function () { // метод right
        _transformItem('right');
      },
      left: function () { // метод left
        _transformItem('left');
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


