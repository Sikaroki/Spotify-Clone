const expandLibrary = document.querySelector('.icon-con');
const elLabel = document.querySelector('.icon-label');

const searchBar = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.sg');

const createBtn = document.querySelector('.create');
const createContent = document.querySelector('.content');
const createLabel = document.querySelector('.create-label');

searchIcon.addEventListener('click', function() {
  searchBar.focus();
})

createBtn.addEventListener('click', function() {
  createContent.removeEventListener('animationend', closeContent)

  if (createContent.style.display === 'none' || createContent.style.display === '') {
    createContent.style.animation = 'fadeIn 0.3s';
    createContent.style.display = 'flex';

    createBtn.style.transform = 'rotate(45deg)'
  }
  
  else {
    createContent.style.animation = 'fadeOut 0.3s';

    createContent.addEventListener('animationend', closeContent)
    
    createBtn.style.transform = 'rotate(0)'
  }
})

function closeContent() {
  createContent.style.display = 'none';
}

createContent.addEventListener('mouseenterr', function() {
  createLabel.style.opacity = '0';
  createLabel.style.transition = '0.3s'
})

createBtn.addEventListener('mouseenter', function() {
  createLabel.style.opacity = '1';
  createLabel.style.transition = '0.3s ease 0.5s'
})

createBtn.addEventListener('mouseleave', function() {
  createLabel.style.opacity = '0';
  createLabel.style.transition = '0.3s'
})