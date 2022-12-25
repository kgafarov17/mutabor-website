//const toTopButton = document.querySelector("#scrollTop");

//toTopButton.addEventListener("click", function(){
//    window.scrollTo(0,0);
//});

$("a[href='#scrollToTop']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

var loader = document.getElementById("loader");

window.addEventListener("load", function(){
  loader.style.display = "none";
});