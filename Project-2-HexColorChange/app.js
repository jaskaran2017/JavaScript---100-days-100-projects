console.log('app.js');

// Initializing Variables

const heading = document.getElementById('heading');

const btn = document.getElementById('btn');

// color object
const hexColor = {
     color1:'#eb4034',
     color2:'#7434eb',
     color3:'#eb9934',
     color4:'#b4eb34',
     color5:'#34eb56',
     color6:'#3493eb',
     color7:'#8934eb',
     color8:'#eb347a'
};

// Destructuring color object into an array

let hexColorArray = Object.values(hexColor);

// adding event listener to the button

btn.addEventListener('click',()=>{

    let h1 =''; // initiallizing empty string to display h1 tag with hex color name

    // let colorName = parseInt(Math.random()*hexColorArray.length+1); // to get random hexcolor value through index but it may sometimes show undefind values.
    let colorName = Math.floor(Math.random()*hexColorArray.length); // to get random hexcolor value through index.<ath.floor method will cut the undefind values. 

    document.body.style.backgroundColor = hexColorArray[colorName]; //changing body color
    btn.style.backgroundColor = hexColorArray[colorName]; // changing button color same as body color

    h1 += `HEX-COLOR = ${ hexColorArray[colorName]}`; // this is a templete litral for h1 tag
    heading.innerText = h1; // display current color name

})
