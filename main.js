// const hamburgerBtn = document.querySelector('.ham');
// const navigation = document.querySelector('.navigation')

// function toggleMenu() {
//     navigation.classList.toggle('responsive');
//     hamburgerBtn.classList.toggle('responsive');
// }

// hamburgerBtn.addEventListener('click', toggleMenu, false);


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}

// Accordion for the FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Shows the year for the copyright 
let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;
