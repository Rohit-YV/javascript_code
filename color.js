const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['violet','green','black','white'];

body.style.background = 'black';
// Use 'click' as the event type for the button
button.addEventListener("click",changeClour);

function changeClour() {
           const colorindex = parseInt(Math.random()*color.length);
           body.style.backgroundColor = color[colorindex];
}
