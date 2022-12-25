//var loader = document.getElementById("loader");
//window.addEventListener("load", function(){
//loader.style.display = "none";
//});
alert("yes");

//const toTopButton = document.querySelector("#scrollTop");

//toTopButton.addEventListener("click", function(){
//    $("html, body").animate({ scrollTop: 0}, "slow");
//});

let totalSeconds = 0;
setInterval(countUpTimer, 1000);//setInterval is needed so the function is rought up continuously

function countUpTimer() {
  ++totalSeconds;
  document.getElementById("minutes").innerHTML = convertFunction(parseInt(totalSeconds / 60)); //parseInt need so the minutes are not sown as fractions
  document.getElementById("seconds").innerHTML = convertFunction(totalSeconds % 60);
  
}

function convertFunction(value) { // this function is needed in order to show 1-9 second as "01" not just "1"
  let resultValue = value + "";
  if (resultValue.length < 2) {
    return "0" + resultValue;
  } 
  else {
    return resultValue;
  }
}