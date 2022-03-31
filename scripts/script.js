console.log('hello');

console.log(document.querySelector('.text_1'));
console.log(document.querySelector('.text_1').innerHTML);

document.querySelector('.button1').onclick = function() {

  document.querySelector('.button_text1').classList.toggle('active');
  document.querySelector('.button_text2').classList.toggle('active');
}
let modalButtons = document.querySelectorAll('.row2 img');
let modal = document.querySelector('.advices');
let advice = modal.querySelector('.img_advise');
let overlay = document.querySelector('.overlay');
let fire = document.querySelector('.fire');
let face = document.querySelector('.face');
let bell = document.querySelector('.bell');

modalButtons.forEach(function(item, i) {
  item.addEventListener('click', function() {
    advice.setAttribute('src', "images/advise" + i + ".png");
    modal.classList.add('active');
    overlay.classList.add('active');
  });
});
overlay.addEventListener("click", function() {
  modal.classList.remove('active');
  this.classList.remove('active');
})
advice.addEventListener("click", function() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
})

face.addEventListener("click", function() {
  document.querySelector('.a1').classList.add('run-animation');
  document.querySelector('.a2').classList.add('run-animation');
  document.querySelector('.a3').classList.add('run-animation');
  document.querySelector('.a4').classList.add('run-animation');
})


window.addEventListener('scroll', function() {
  document.querySelector('.firefighter').style.top = 0.5 * window.pageYOffset + 'px';
  console.log('scroll', window.pageYOffset);
});

fire.addEventListener("click", function() {
  document.querySelector('.cloud_1.png').classList.add('show');
  document.querySelector('.cloud_1.svg').classList.add('hide');
  document.querySelector('.cloud_2.png').classList.add('show');
  document.querySelector('.cloud_2.svg').classList.add('hide');
  document.querySelector('.cloud_3.png').classList.add('show');
  document.querySelector('.cloud_3.svg').classList.add('hide');
})
bell.addEventListener("click", function() {
  document.querySelector('.shnurok').classList.toggle('moveShn');
})

/*function f_click() {
    alert('attribute onclick');
    document.querySelector('.text_3').style.color = 'green';
    console.log('attribute onclick -this:', this);
}*/

/*document.querySelector('.text_1').addEventListener('click', () => {
    alert('event listener');
    console.log('event listener', this);
    document.querySelector('.text_1').style.color = 'blue';
});*/
