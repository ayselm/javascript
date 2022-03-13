console.log('hello');

console.log(document.querySelector('.text_1'));
console.log(document.querySelector('.text_1').innerHTML);

document.querySelector('.button1').onclick = function () {
    //this.style.color = 'red';
    document.querySelector('.button_text1').style.display='block';
    document.querySelector('.button_text2').style.display='block';
    //document.querySelector('.button_text1').classList.toggle='show';
    //console.log('js onclick',   document.querySelector('.button_text1').classList);
}
document.querySelector('.red1').onclick = function () {
  document.querySelector('.img_advise1').style.display='block';
  console.log('advice');
}

window.addEventListener('scroll', function() {
    document.querySelector('.firefighter').style.top = 0.5*window.pageYOffset  +'px';
    console.log('scroll', window.pageYOffset);
});

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
