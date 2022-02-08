const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');
/*jshint esversion: 6 */
sidebarToggleBtn.onclick = function () {
  menuIcon.classList.toggle('menu-icon-active');
  sideBar.classList.toggle('sidebar--mobile-active');
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



const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

checkBoxAny.addEventListener('change', function () {
  if (checkBoxAny.checked) {
    topLocationCheckboxes.forEach(function (item) {
      item.checked = false;
    });
  }
});

topLocationCheckboxes.forEach(function (item) {
  item.addEventListener('change', function () {
    if (checkBoxAny.checked) {
      checkBoxAny.checked = false;
    }
  })
});




const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckboxes = document.querySelectorAll('.checkbox-hidden');

showMoreOptions.onclick = function () {

  if (showMoreOptions.dataset.options == 'hidden') {
      hiddenCheckboxes.forEach(function (item) {
      item.style.display = 'block';
    });
    showMoreOptions.innerText = 'Скрыть дополнительные опции';
    showMoreOptions.dataset.options = 'visible';
  } 
  else if (showMoreOptions.dataset.options == 'visible') {
      hiddenCheckboxes.forEach(function (item) {
      item.style.display = 'none';
    });
    showMoreOptions.innerText = 'Показать ещё';
    showMoreOptions.dataset.options = 'hidden';
  }
  //showMoreOptions.remove();
  //showMoreOptions.innerText = 'Скрыть дополнительные опции'
}