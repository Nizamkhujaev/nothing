var cabin = document.querySelector('#cabin');
var overlay = document.querySelector('#overlay');
var body = document.querySelector('body');
var enter = document.querySelector('#enter');
var x = document.querySelector('#close');
var burgertablet = document.querySelector('#burger-tablet');
var tabletmenu = document.querySelector('#tabletmenu');
var burgermobile = document.querySelector('#burgermobile');
var mobilemenu = document.querySelector('#mobilemenu')



cabin.addEventListener('click', function (e) {
  e.preventDefault();

  overlay.classList.toggle('opened');
  body.classList.toggle('no_scroll');
  enter.classList.toggle('be');


})

x.addEventListener('click', function (e) {

    overlay.classList.remove('opened');
    body.classList.remove('no_scroll');
    enter.classList.remove('be');


  }


)

burgertablet.addEventListener('click', function (e) {
  tabletmenu.classList.toggle('visible');
});

burgermobile.addEventListener('click', function (e) {
  burgermobile.classList.toggle('crossed');
  overlay.classList.toggle('opened');
  body.classList.toggle('no_scroll');
  mobilemenu.classList.toggle('over');
});