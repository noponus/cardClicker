
var click1 = 0;
let addPlus = document.querySelector('.clickers');


const card1 = document.getElementsByClassName('clickingImage')[0];

card1.addEventListener('click', function(){
	click1++;
	addPlus.innerHTML= "You clicked " + click1 + " times on first cat!!!!";
}, false);

var click2 = 0;
const card2 = document.getElementsByClassName('clickingImage2')[0];

card2.addEventListener('click', function(){
	click2++;
	addPlus.innerHTML= "You clicked " + click2 + " times on 2nd cat!!!!";
}, false);