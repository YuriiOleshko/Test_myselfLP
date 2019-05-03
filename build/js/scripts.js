"use strict";

var galleryItems = [{
  preview: './images/minf 4.png',
  fullview: './images/face 4 (1).png',
  alt: "alt text 1",
  width: '120px',
  height: '80px',
  widthf: '640px',
  heightf: '480px'
}, {
  preview: './images/minf 2.png',
  fullview: './images/face2.png',
  alt: "alt text 2",
  width: '120px',
  height: '80px',
  widthf: '640px',
  heightf: '480px'
}, {
  preview: './images/minf 1.png',
  fullview: './images/face1 (1).png',
  alt: "alt text 3",
  width: '120px',
  height: '80px',
  widthf: '640px',
  heightf: '480px'
}];
var ul = document.querySelector('.sectionFive__preview');
var div = document.querySelector('.sectionFive__fullview');

for (var _i = 0; _i < galleryItems.length; _i++) {
  var el = galleryItems[_i];
  var li = document.createElement('li');
  var img = document.createElement('img');
  li.append(img); // img.style.width="50px";
  // img.style.height='50px'

  img.classList.add('sectionFive--smallImg'); // li.classList.add('par')

  img.setAttribute('src', el.preview);
  img.setAttribute('alt', el.alt);
  img.setAttribute('data-fullview', el.fullview);
  ul.append(li);
}

function start() {
  var first = document.createElement('img');
  first.classList.add('big'); // let flew=document.querySelector('li>img')
  // let first =flew.cloneNode(true)

  first.setAttribute('src', galleryItems[0].fullview); // console.log(first);

  div.prepend(first);
}

document.addEventListener('DOMContentLoaded', start);

function move() {
  //  div.innerHTML='';
  //  let first =event.target.cloneNode(true)
  //  div.append(first) ;
  var bigImg = document.querySelector('.big');
  bigImg.setAttribute('src', event.target.dataset.fullview); // let mas = Arry.from(document.querySelectorAll('.par'))

  event.target.classList.add('par');
} //   function red(){
// // let li =document.querySelectorAll('img') 
// event.target.classList.remove('par')
//       }


ul.addEventListener('click', move); // let li
//   ul.addEventListener('mouseout', red)
"use strict";

/* этот код помечает картинки, для удобства разработки */
var lis = document.getElementsByTagName('li');

for (var i = 0; i < lis.length; i++) {
  lis[i].style.position = 'relative'; //   lis[i].appendChild(span);
}

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
console.log(list.children[0].children[0].children[0].width);
var listElems = carousel.querySelectorAll('li');
/* конфигурация */

var pos = list.children[0].children[0].children[0].width;

if (pos > 210) {
  console.log(pos + 'tytyeiow');
  carousel.querySelector('.next').setAttribute("disabled", "disabled");
  carousel.querySelector('.prev').setAttribute("disabled", "disabled");
}

var width = pos == 100 ? pos + 40 : pos + 140; // ширина изображения

var count = 1; // количество изображений

var position = 0; // текущий сдвиг влево

carousel.querySelector('.prev').onclick = function () {
  // сдвиг влево
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position + width * count, 0);
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
  // сдвиг вправо
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
"use strict";

var btn = document.querySelector('.toggle-icon');
var menu = document.querySelector('.nav__menu');
btn.addEventListener('click', function () {
  btn.classList.toggle('pushed');
  menu.classList.toggle('nav__menu--on');
});