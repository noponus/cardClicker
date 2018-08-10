
var clickO = 0;
let addPlus = document.querySelector('.clickers');


const card = document.getElementsByClassName('clickingImage')[0];
card.addEventListener('click', function(){
	clickO++;
	addPlus.innerHTML= "You clicked " + clickO + " times !!!!";
}, false);