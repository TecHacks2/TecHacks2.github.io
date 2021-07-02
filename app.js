const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Get DOM Elements
const modalBtn1 = document.querySelector('#modal-btn-education');
const modalBtn2 = document.querySelector('#modal-btn-activism');
const modalBtn3 = document.querySelector('#modal-btn-sustainability');
const modalBtn4 = document.querySelector('#modal-btn-recreation');
const modal1 = document.querySelector('#modalEducation');
const modal2 = document.querySelector('#modalActivism');
const modal3 = document.querySelector('#modalSustainability');
const modal4 = document.querySelector('#modalRecreation');
const closeBtn1 = document.querySelector('.close1');
const closeBtn2 = document.querySelector('.close2');
const closeBtn3 = document.querySelector('.close3');
const closeBtn4 = document.querySelector('.close4');

// Events
// modalBtn1.addEventListener('click', openModal1);
// modalBtn2.addEventListener('click', openModal2);
// modalBtn3.addEventListener('click', openModal3);
// modalBtn4.addEventListener('click', openModal4);
// closeBtn1.addEventListener('click', closeModal1);
// closeBtn2.addEventListener('click', closeModal2);
// closeBtn3.addEventListener('click', closeModal3);
// closeBtn4.addEventListener('click', closeModal4);
// window.addEventListener('click', outsideClick);

// Open
function openModal1() {
  modal1.style.display = 'block';
}
function openModal2() {
  modal2.style.display = 'block';
}
function openModal3() {
  modal3.style.display = 'block';
}
function openModal4() {
  modal4.style.display = 'block';
}

// Close
function closeModal1() {
  modal1.style.display = 'none';
}
function closeModal2() {
  modal2.style.display = 'none';
}
function closeModal3() {
  modal3.style.display = 'none';
}
function closeModal4() {
  modal4.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal1) {
    modal1.style.display = 'none';
  }
  if (e.target == modal2) {
    modal2.style.display = 'none';
  }
  if (e.target == modal3) {
    modal3.style.display = 'none';
  }
  if (e.target == modal4) {
    modal4.style.display = 'none';
  }
}

// FAQ Section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.getElementById("myForm").submit();
