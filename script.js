var modal = Array.from(document.querySelectorAll('.modal')),
  loginLink = document.querySelector('.login-link'),
  modalLogin = document.querySelector('.modal-login'),
  overlay = document.querySelector('.overlay'),
  map = document.querySelector('.modal-map'),
  form = modalLogin.querySelector('form'),
  login = form.querySelector('[name=login]'),
  password = form.querySelector('[name=password]');


  function show(elem) {
    elem.classList.add('show');
  };
  function hide(elem) {
    elem.classList.remove('show');
  };


// show/hide modal
document.addEventListener('click', function(e) {
//show login modal
  if (e.target == loginLink) {
    e.preventDefault();
    show(overlay);
    show(modalLogin);
    login.focus();
    if (localStorage.getItem('login')) {
      login.value = localStorage.getItem('login');
      password.focus();
    };
    if (localStorage.getItem('password')) {
      password.value = localStorage.getItem('password');
    };
  };
  //show map
  Array.from(document.querySelectorAll('.contact-map')).forEach(function(elem) {
    if (e.target == elem) {
      e.preventDefault();
      show(overlay);
      show(map);
    };
  });
  //close
  Array.from(document.querySelectorAll('.modal-close')).forEach(function(elem) {
    if (e.target == elem || e.target == overlay) {
      hide(modalLogin);
      hide(map);
      hide(overlay);
      Array.from(form.querySelectorAll('input')).forEach(function(e){
        e.classList.remove('error');
      });
    };
  });
});
// close modal on esc
window.addEventListener ('keydown', function(e) {
  if (e.keyCode === 27){
    modal.forEach(function(elem) {
      if (elem.classList.contains('show')){
        e.preventDefault();
        hide(modalLogin);
        hide(map);
        hide(overlay);
        Array.from(form.querySelectorAll('input')).forEach(function(e){
          e.classList.remove('error');
        });
      };
    });
  };
});

// forms
form.addEventListener('submit', function(e) {
  e.preventDefault();
  Array.from(form.querySelectorAll('input')).forEach (function(elem) {
    if (!elem.value){
      elem.classList.add ('error');
    } else {
      elem.classList.remove ('error');
      localStorage.setItem('login', login.value);
      localStorage.setItem('password', password.value);
    };
  });
});
