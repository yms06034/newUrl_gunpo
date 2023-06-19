const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

const location1 = document.querySelector('#bbbtn01');
const traffic = document.querySelector('#bbbtn02');
const life = document.querySelector('#bbbtn03');
const education = document.querySelector('#bbbtn04');

const img_location = document.querySelector('#img01');
const img_traffic = document.querySelector('#img02');
const img_life = document.querySelector('#img03');
const img_education = document.querySelector('#img04');


function closePopup(popupId) {
  document.getElementById(popupId).setAttribute('data-popup-state', 'hidden');
}

function getCookie(name) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(name + '=') === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function setCookie(name, value, days) {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  document.cookie = name + '=' + value + '; expires=' + expirationDate.toUTCString() + '; path=/;';
}

function initPopup() {
  var popup1Cookie = getCookie('popup1');
  if (popup1Cookie === 'hidden') {
    document.getElementById('popup1').setAttribute('data-popup-state', 'hidden');
  }

  // document.getElementById('hide1dayBtn1').addEventListener('click', function() {
  //   setCookie('popup1', 'hidden', 1);

  //   closePopup('popup1');
  // });

  document.getElementById('closeBtn1').addEventListener('click', function() {
    closePopup('popup1');
  });

  var popup2Cookie = getCookie('popup2');
  if (popup2Cookie === 'hidden') {
    document.getElementById('popup2').setAttribute('data-popup-state', 'hidden');
  }


  // document.getElementById('hide1dayBtn2').addEventListener('click', function() {
  //   setCookie('popup2', 'hidden', 1);

  //   closePopup('popup2');
  // });

  document.getElementById('closeBtn2').addEventListener('click', function() {
    closePopup('popup2');
  });
}

window.addEventListener('load', function() {
  initPopup();
});



