const $modalButton = document.querySelector('.modalShower');
const $modalContainer = document.querySelector('.modal_full');

$modalButton.addEventListener('click', function (event) {
  $modalContainer.classList.remove('hidden')
});

const $cancelButton = document.querySelector('.cancel');

$cancelButton.addEventListener('click', function (event) {
  $modalContainer.classList.add('hidden')
});
