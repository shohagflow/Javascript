const body = document.getElementById('body');
const button = document.querySelectorAll('li');

// const redColor = document.querySelector('.red');
// redColor.addEventListener('click', function(){
//     body.style.background = 'red';
// });


button.forEach(function(value){
    value.addEventListener('click', function(){
        let className = this.classList[0];
        let color = '';
        if(className === 'red'){
            color= 'rgb(236, 72, 72)';

        } else if (className === 'green') {
            color= 'rgb(32, 92, 32)';
            
        } else if (className === 'yellow') {
            color= 'rgb(124, 124, 29)';
        }

        body.style.background = color;
    })
});

// Second project BMI Calculator 

let height = document.getElementById('height');
let weight = document.getElementById('weight');
let btn = document.getElementById('btn');
let score = document.getElementById('score');

button.addEventListener(clicl, function(){
    let heightNew = height.value;

});

let form = document.getElementById('bmiForm');
form.addEventListener(submit, function(e){
    e.preventDefault();
});