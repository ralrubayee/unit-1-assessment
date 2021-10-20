// 
let result =0
// cashed elements
const input = document.querySelector("#number-input")
const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector("#minus")
const displayResults = document.querySelector("#display-result")

//event listeners
plusButton.addEventListener("click", add)
minusButton.addEventListener("click", minus)

//functions 
function add(){
  result = result + parseInt(input.value) 
  displayResults.textContent = result
  }
  function minus(){
    result = result - parseInt(input.value) 
    displayResults.textContent = result
  }