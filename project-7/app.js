console.log('project 7');

//  making variables
// let buttons = document.querySelector(".btn")
let imgcontainer = document.querySelector('.sub');
let leftBtn = document.querySelector('.btn-left');
let rightBtn = document.querySelector('.btn-right');
 let counter = 0 

// making array of images to pass

let carImages = [
    'car-1.jpeg',
    'car-2.jpeg',
    'car-3.jpeg',
    'car-4.jpeg',
    'car-5.jpeg',
    'car-6.jpeg',
    'car-7.jpeg'
];

leftBtn.addEventListener('click',()=>{
    console.log('clicked')
    counter--
    if(counter < 0){
        counter = carImages.length -1;
    }
    imgcontainer.style.background = `url("./img/${carImages[counter]}")center/cover fixed no-repeat`
})

rightBtn.addEventListener('click',()=>{
    console.log('clicked')
    counter++
        if(counter > carImages.length -1){
            counter = 0;
        }
        imgcontainer.style.background = `url("./img/${carImages[counter]}")center/cover fixed no-repeat`
})
    

