const picContainer = document.querySelector('.photo')


picContainer.addEventListener('click', e => {
  const picInfoBtn = e.target.closest('.pic__show-description')
  const picLessBtn = e.target.closest('.pic__hide-description')
  
  if (picInfoBtn) {
    picInfoBtn.parentNode.parentNode.classList.add('pic--open')
  }
  
  if (picLessBtn) {
    picLessBtn.parentNode.parentNode.classList.remove('pic--open')
  }
})