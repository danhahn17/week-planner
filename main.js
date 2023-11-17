const $modalButton = document.querySelector('.modalShower');
const $modalContainer = document.querySelector('.modal_full');
const $tablebody = document.querySelector('tbody');

// event js inp
const $eventJs = document.querySelectorAll('.EventJs');


$modalButton.addEventListener('click', function (event) {
  $modalContainer.classList.remove('hidden')
});

const $cancelButton = document.querySelector('.cancel');

$cancelButton.addEventListener('click', function (event) {
  $modalContainer.classList.add('hidden')
});



// CONFIRM btn for the Modal
const $confirmBtn = document.querySelector('.btn-success');



$confirmBtn.addEventListener('click' , function(event){
  // Make a new element of a row

  const $rowEl = document.createElement('tr')


  //Making 3 Td's

  const $tableData1 = document.createElement('td')
  const $tableData2 = document.createElement('td')
  const $tableData3 = document.createElement('td')

  // content of 1

  $tableData1.textContent = $eventJs.value


$rowEl.appendChild($tableData1)
$rowEl.appendChild($tableData2)
$rowEl.appendChild($tableData3)

$eventJs.forEach(el => {
  $tablebody.appendChild(el)
})

})
