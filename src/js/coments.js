const galleryItems = [
    { preview: './images/minf 4.png', fullview: './images/face 4 (1).png', alt: "alt text 1" ,width:'120px',height: '80px',widthf:'640px',heightf: '480px'},
    { preview: './images/minf 2.png', fullview: './images/face2.png', alt: "alt text 2" ,width:'120px',height: '80px', widthf:'640px',heightf: '480px'},
    { preview: './images/minf 1.png', fullview: './images/face1 (1).png', alt: "alt text 3",width:'120px',height: '80px',widthf:'640px',heightf: '480px' },
    
  ];

  let ul = document.querySelector('.sectionFive__preview');
  let div = document.querySelector('.sectionFive__fullview')


  for (let el of galleryItems){

    let li =document.createElement('li');
    let img=document.createElement('img');
    li.append(img);
    // img.style.width="50px";
    // img.style.height='50px'
    img.classList.add('sectionFive--smallImg')
    // li.classList.add('par')
    img.setAttribute('src',el.preview)
    img.setAttribute('alt',el.alt)
    img.setAttribute('data-fullview',el.fullview)
    ul.append(li)

  }
  
  function start (){
    let first = document.createElement('img');
    first.classList.add('big');
  // let flew=document.querySelector('li>img')
  // let first =flew.cloneNode(true)
  first.setAttribute('src', galleryItems[0].fullview)
  // console.log(first);
  div.prepend(first)
  }
  document.addEventListener('DOMContentLoaded',start)
  
  function move(){
  //  div.innerHTML='';
  //  let first =event.target.cloneNode(true)
  //  div.append(first) ;
  let bigImg = document.querySelector('.big');
  bigImg.setAttribute('src',event.target.dataset.fullview)
  // let mas = Arry.from(document.querySelectorAll('.par'))
  event.target.classList.add('par')



  }
  
  
//   function red(){
// // let li =document.querySelectorAll('img') 
// event.target.classList.remove('par')
//       }

  ul.addEventListener('click',move)
  // let li
//   ul.addEventListener('mouseout', red)