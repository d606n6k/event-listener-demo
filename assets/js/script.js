var count = 0;

var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement")
var countEl = document.querySelector("#count")

function setCounterText(){
    countEl.textContent = count;
}
// this is the button that will increment the counter
incrementEl.addEventListener("click", function(){
    count++;
    setCounterText();
})
// this is the button that will decrement the counter
decrementEl.addEventListener("click", function(){
   if(count > 0){
    count--;
    setCounterText();
   }
})

