/* этот код помечает картинки, для удобства разработки */
var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
  lis[i].style.position = 'relative';

//   lis[i].appendChild(span);
}



var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
console.log(list.children[0].children[0].children[0].width);
var listElems = carousel.querySelectorAll('li');
/* конфигурация */
let pos=list.children[0].children[0].children[0].width
if(pos>210){
  console.log(pos+'tytyeiow');
  carousel.querySelector('.next').setAttribute("disabled", "disabled")
  carousel.querySelector('.prev').setAttribute("disabled", "disabled")
}
var width = pos==100 ?pos+40:pos+140 // ширина изображения
var count = 1; // количество изображений
var position = 0; // текущий сдвиг влево

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент

  position = Math.min(position + width * count, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент

  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};