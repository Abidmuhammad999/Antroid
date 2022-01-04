
//active nav bar
// var element = document.getElementsByClassName("navbar-nav")[0];
// element.addEventListener("click", myFunction);
// function myFunction(e) {
// 		var elems = document.querySelector(".active");
//     if(elems !=null) {
//       elems.classList.remove("active");
//     }
//     e.target.className = "active";
// 	}


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const words = ["Open Ecosystem", "Customizable UI", "Open Source", "Affordable"],
  colors = ["blue", "green", "yellow", "red"],
  text = document.querySelector(".text");

// Generator (iterate from 0-3)
function* generator() {
  var index = 0;
  while (true) {
    yield index++;

    if (index > 3) {
      index = 0;
    }
  }
}

// Printing effect
function printChar(word) {
  let i = 0;
  text.innerHTML = "";
  text.classList.add(colors[words.indexOf(word)]);
  let id = setInterval(() => {
    if (i >= word.length) {
      deleteChar();
      clearInterval(id);
    } else {
      text.innerHTML += word[i];
      i++;
    }
  }, 300);
}

// Deleting effect
function deleteChar() {
  let word = text.innerHTML;
  let i = word.length - 1;
  let id = setInterval(() => {
    if (i >= 0) {
      text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
      i--;
    } else {
      text.classList.remove(colors[words.indexOf(word)]);
      printChar(words[gen.next().value]);
      clearInterval(id);
    }
  }, 10);
}

// Initializing generator
let gen = generator();

printChar(words[gen.next().value]);

var home = document.getElementById("home")
function reload(){
  window.reload();
}

// carosel

$(document).ready(function(){
  $(".b").click(function(){
      $(this).toggleClass("b");
      $(this).toggleClass("b-selected");
   });
  });
  
  var elem = document.querySelector('.carousel');
  var flkty = new Flickity( elem, {
    // options
    cellalign: 'right',
    pageDots: false,
    groupCells: '20%',
    selectedAttraction: 0.03,
    friction: 0.15
  });
  var flkty = new Flickity( '.carousel', {
    // options
  });