// Shrink Navigation Menu on Scroll
//  BEGIN
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbarHeader").style.background = "#1c2033d0";
  } else {
    document.getElementById("navbarHeader").style.background = "#2b292100";

  }
}
// END

// toggle menu 