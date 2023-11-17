const btnMainModalToggler = document.querySelector('.modalShower')




btnMainModalToggler.addEventListener('click' , () => {
  btnMainModalToggler.classList.remove('hidden')
  btnMainModalToggler.classList.add('block')
})
