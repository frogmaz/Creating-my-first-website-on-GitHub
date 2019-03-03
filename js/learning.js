var slider = document.querySelector('.swiper-container');
var arrows = document.querySelector('#arrows');
//osluskujem element koji sadrzi strelice
arrows.addEventListener('click', function(e){
  //uzimam vrednost *procesovane* CSS osobine i skidam poslednja dva karaktera ("px" u ovom slucaju)
  //to radim unutar funkcije da bih mogao da dodajem i oduzimam vrednost osobine
  const sliderStyleLeft = window.getComputedStyle(slider).getPropertyValue('left').slice(0,-2);
  //
  if(e.target.classList.contains('goLeft') && sliderStyleLeft < -150){
    slider.style.left = (parseInt(sliderStyleLeft) + 300) + 'px';
    document.querySelector('.goRight').style.opacity = "0.8";
    //ovako osvezavam suprotnu strelicu kad ostane bleda
    return;
  } else if(e.target.classList.contains('goRight') && sliderStyleLeft > -1350){ //malo lufta
    slider.style.left = (parseInt(sliderStyleLeft) - 300) + 'px';
    document.querySelector('.goLeft').style.opacity = "0.8";
    return;
  } //ako funkcija stigne dovde, znaci da nijedan od uslova nije ispunjen
  e.target.style.opacity = "0.1"; //dakle, mozemo slobodno pobledeti kliknuti element
})

//NAPOMENA: nisam imao vremena da provalim kako da ovo menjanje OPACITY-ja ne
//          utice na vidljivost elementa tokom ":hover" efekta


//padajuci meni
const hamburger = document.querySelector("#hamburger");
const meni = document.querySelector("#buttonArea nav");

hamburger.addEventListener('click',function(e){
  const meniDisplay = window.getComputedStyle(meni).getPropertyValue("display");
  if(meniDisplay == "none"){
    meni.style.display = "flex";
  }else if(meniDisplay == "flex"){
    meni.style.display = "none";
  }
})
//problem sto meni (ako smo ga ijednom koristili) nestaje zajedno s hamburgerom kada se vratimo na desktop sirinu s mobilne

// const btnArea = document.querySelector("#buttonArea");
//
// btnArea.onresize = function(e){
  //   if(btn.offsetWidth > 591){
    //     meni.style.display = "flex";
    //   }
    // }
