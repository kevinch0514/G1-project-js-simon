let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click',function changeColor(color) {
  greenButton.style.backgroundColor = 'purple' 
} )

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function changeColor(color) {
  redButton.style.backgroundColor = 'pink' 
} )

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function changeColor(color) {
  yellowButton.style.backgroundColor = 'orange' 
} )

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function changeColor(color) {
  blueButton.style.backgroundColor = 'lightblue' 
} )
