const eyeOpen = document.querySelector('.eye-open');
const eyeClosed = document.querySelector('.eye-closed');
const pass = document.querySelector('.pass-input');
const email = document.querySelector('.email-input');
const logIn = document.querySelector('.login-btn');
const iCon = document.querySelector('.i-con');

let key1 = true;
let key2 = true;

function makeVisible() {
  if (pass.type === 'text') {
    if (pass.value.trim().length === 0) {
      eyeOpen.removeEventListener('animationend', closeAnimation1)

      eyeOpen.style.animation = 'fadeOut 0.3s';
      eyeOpen.addEventListener('animationend', closeAnimation1)
    }
    else if (pass.value.trim().length === 1) {
      eyeOpen.removeEventListener('animationend', closeAnimation1)

      eyeOpen.style.display = 'flex';
      eyeOpen.style.animation = 'fadeIn 0.3s';
    }
  } 
  else {
    if (pass.value.trim().length === 0) {
      eyeClosed.removeEventListener('animationend', closeAnimation2)

      eyeClosed.style.animation = 'fadeOut 0.3s';
      eyeClosed.addEventListener('animationend', closeAnimation2)
    }
    else if (pass.value.trim().length === 1) {
      eyeClosed.removeEventListener('animationend', closeAnimation2)

      eyeClosed.style.display = 'flex';
      eyeClosed.style.animation = 'fadeIn 0.3s';
    }
  }  
}

function closeAnimation1() {
  eyeOpen.style.display = 'none';
 
}

function closeAnimation2() {
  eyeClosed.style.display = 'none';
  
}

eyeOpen.addEventListener('click', function() {
  

  pass.type = 'password';

  eyeOpen.style.display = 'none';
  eyeClosed.style.display = 'flex';
})

eyeClosed.addEventListener('click', function() {
  eyeOpen.style.animation = 'none';
  eyeClosed.style.animation = 'none';

  pass.type = 'text';

  eyeOpen.style.display = 'flex';
  eyeClosed.style.display = 'none';
})


pass.addEventListener('input', (e) => {
  if (e.inputType !== 'deleteContentBackward') {
    makeVisible();
  }
  if (pass.value.trim().length === 0) {
    makeVisible();
  }
  key1 = true;
  pass.style.boxShadow = '0 0 0 2px whitesmoke';
})

pass.addEventListener('focus', function() {
  if (key1) {
    pass.style.boxShadow = '';

    pass.style.boxShadow = '0 0 0 2px whitesmoke';
  }
  else {
    pass.style.boxShadow = '';

    pass.style.boxShadow = '0 0 0 2px #e63946';
  }
})

pass.addEventListener('blur', function() {
  if (key1) {
    pass.style.boxShadow = '';

    pass.style.boxShadow = '0 0 0 1px grey';
  }
  else {
    pass.style.boxShadow = '';

    pass.style.boxShadow = '0 0 0 1px #e63946';
  }
})

pass.addEventListener('mouseover', function() {
  if (key1) {
    if (document.activeElement !== pass) {
      pass.style.boxShadow = '0 0 0 1px whitesmoke';
    }
  }
})

pass.addEventListener('mouseout', function() {
  if (key1) {
    if (document.activeElement !== pass) {
      pass.style.boxShadow = '0 0 0 1px grey';
    }
  }
})

email.addEventListener('input', function() {
  key2 = true;
  email.style.boxShadow = '0 0 0 2px whitesmoke';
})

email.addEventListener('focus', function() {
  if (key2) {
    email.style.boxShadow = '';

    email.style.boxShadow = '0 0 0 2px whitesmoke';
  }
  else {
    email.style.boxShadow = '';

    email.style.boxShadow = '0 0 0 2px #e63946';
  }
})

email.addEventListener('blur', function() {
  if (key2) {
    email.style.boxShadow = '';

    email.style.boxShadow = '0 0 0 1px grey';
  }
  else {
    email.style.boxShadow = '';

    email.style.boxShadow = '0 0 0 1px #e63946';
  }
})

email.addEventListener('mouseover', function() {
  if (key2) {
    if (document.activeElement !== email) {
      email.style.boxShadow = '0 0 0 1px whitesmoke';
    }
  }
})

email.addEventListener('mouseout', function() {
  if (key2) {
    if (document.activeElement !== email) {
      email.style.boxShadow = '0 0 0 1px grey';
    }
  }
})

logIn.addEventListener('click', function() {
  if (checkVal() && checkInfo()) {
    logIn.style.filter = 'brightness(80%)';

    setTimeout(() => {
      logIn.style.filter = 'brightness(100%)';

      window.location.href = 'home.html';
    }, 1000)
  }
}) 

function checkVal() {
  if (pass.value.trim().length === 0 && email.value.trim().length === 0) {
    pass.style.boxShadow = '0 0 0 1px #e63946';
    email.style.boxShadow = '0 0 0 1px #e63946';

    key1 = false;
    key2 = false;
  }
  else if (pass.value.trim().length === 0) {
    pass.style.boxShadow = '0 0 0 1px #e63946';

    key1 = false;
  }
  else if (email.value.trim().length === 0) {
    email.style.boxShadow = '0 0 0 1px #e63946';

    key2 = false;
  }
  else {
    key1 = true;
    key2 = true;

    return true;
  }
}

function checkInfo() {
  if (pass.value.trim() === '1234' && (email.value.trim() === 'sikaroki@gmail.com' || email.value.trim() === 'sikaroki')) {
    return true;
  }
  
  logIn.style.filter = 'brightness(80%)';

  setTimeout(() => {
    pass.style.boxShadow = '0 0 0 1px #e63946';
    email.style.boxShadow = '0 0 0 1px #e63946';

    key1 = false;
    key2 = false;

    iCon.style.animation = 'move 3s';
    iCon.style.display = 'flex';

    logIn.style.filter = 'brightness(100%)';

    iCon.addEventListener('animationend', function() {
      iCon.style.display = 'none';
    }, {once: true})
  }, 1000)
  
}