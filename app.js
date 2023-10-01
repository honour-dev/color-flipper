const colors = ['red', 'green', 'yellow', 'yellowgreen', 'tan', 'turquoise', 'teal', '#f1b9f8'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
   const randomColor = getColor();
   document.body.style.backgroundColor = colors[randomColor];
   color.textContent = colors[randomColor];
});

function getColor(){
   return Math.floor(Math.random()*colors.length);
};