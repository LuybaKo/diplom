$(function () {

});



function myFunction(x) {
	x.classList.toggle("change");
	var hiddenLinks = document.getElementById("sidebar");
	if (hiddenLinks.style.display === 'block') {
		hiddenLinks.style.display = 'none';
	} else {
		hiddenLinks.style.display = 'block';
	}
}



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

// -------------------------
// slider
// -------------------------
'use strict';
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
          _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
          getMin: 0,
          getMax: _items.length - 1,
        }

        var _transformItem = function (direction) {
          if (direction === 'right') {
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
              return;
            }
            if (!_sliderControlLeft.classList.contains('slider__control_show')) {
              _sliderControlLeft.classList.add('slider__control_show');
            }
            if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
              _sliderControlRight.classList.remove('slider__control_show');
            }
            _positionLeftItem++;
            _transform -= _step;
          }
          if (direction === 'left') {
            if (_positionLeftItem <= position.getMin) {
              return;
            }
            if (!_sliderControlRight.classList.contains('slider__control_show')) {
              _sliderControlRight.classList.add('slider__control_show');
            }
            if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
              _sliderControlLeft.classList.remove('slider__control_show');
            }
            _positionLeftItem--;
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




// var burger = document.getElementById("burger");
// burger.onclick = function () {
// 	var hiddenLinks = document.querySelectorAll(".hide");
// 	for (var i = 0; i < hiddenLinks.length; i++) {
// 		var hiddenLink = hiddenLinks[i];
// 		if (hiddenLink.style.visibility === 'hidden') {
// 			hiddenLink.style.visibility = 'visible';
// 		} else {
// 			hiddenLink.style.visibility = 'hidden';
// 		}
// 	}
// }