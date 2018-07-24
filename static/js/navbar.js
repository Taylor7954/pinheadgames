var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  /* Are you further down the page than before */
  if (prevScrollpos > currentScrollPos) {
    /* .style.top :: set to 0 */
    document.getElementById("navbar").style.top = "0";
  } else {
    /* .style.top :: size of the navbar */
    document.getElementById("navbar").style.top = "-135px";
  }
  /* Current position on page */
  prevScrollpos = currentScrollPos;
}

function myFunction() {
    //Get element id as x
    var x = document.getElementById("navbar-bot");

    //When the user clicks the = icon :: change the classname to botnav responsive
    //This triggers the @media css styles
    if (x.className === "botnav") {
        x.className += " responsive";
    }
    //Clicking the = icon when it is active :: change classname back to botnav
    //This essentially "disables" the @media css styles
    else {
        x.className = "botnav";
    }
}
