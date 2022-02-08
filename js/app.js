//const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
//const menuIcon = document.querySelector('.menu-icon');
//const sideBar = document.querySelector('.sidebar');
/*jshint esversion: 6 */
document.querySelector('.menu-icon-wrapper').onclick = function () {
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  document.querySelector('.sidebar').classList.toggle('sidebar--mobile-active');
};


const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelector('.hidden-cards');

document.querySelector('.btn-more').addEventListener('click', function () {
  document.querySelectorAll('.card-link--hidden').forEach(function (card) {
    card.classList.remove('card-link--hidden');
  });
});


const widgets = document.querySelectorAll('.widget');


widgets.forEach(function (widget) {
  widget.addEventListener('click', function (e) {
    //item.nextElementSibling.hidden = true;
    if (e.target.classList.contains('widget__title')) {
      e.target.classList.toggle('widget__title--active');
      e.target.nextElementSibling.classList.toggle('widget__body--hidden');
    }
  });
});
//