console.log("index.js");

let project = document.getElementById('project'); //accessing the div element

let btn = document.getElementById("btn"); // accessing the button

let colors = ['red','yellow','pink', 'blue', 'green', 'skyblue'] // array of colors



// Adding event listener to button

btn.addEventListener('click',()=>{
    // console.log("clicked")

    let colorIndex = parseInt(Math.random()*colors.length+1) 

    project.style.backgroundColor = colors[colorIndex];
})
