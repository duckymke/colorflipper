const colors = ['aliceblue', 'red', 'lightblue', 'orange', 'honeydew', 'papayawhip', 'purple', 'rebeccapurple', 'coral', 'teal', 'cornflowerblue', 'chocolate', 'mistyrose', 'cadetblue', 'olive', 'plum'];
const btn = document.getElementById('btn'); // here we define the button variable and specify that we take the element from the id
const color = document.querySelector('.color'); // .color is the class and we apply a query selector to choose the color

btn.addEventListener('click', function(){ // addeventlistener applys whatever is in the function
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]; // property that grabs from the body to implement a background color 
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}