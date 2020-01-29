const cat_arr = [
    "./imgs/cat1.jpeg",
    "./imgs/cat2.jpeg",
    "./imgs/cat3.jpg",
];


const btn = document.getElementById('next-button');
const img = document.querySelector('img');

let counter = 0;

btn.addEventListener('click', () => {
    counter +=1

    if(counter > cat_arr.length - 1){
        counter = 0
    }

    img.src = cat_arr[counter]


})