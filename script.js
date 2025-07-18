//9022281517
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
	navMenu.classList.toggle('open');
});
(function(){
	emailjs.init("E8UEc3K1GpLL58GlV"); // e.g., uXyzAbc12345
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
	e.preventDefault();

	emailjs.sendForm('service_aa3u8fv', 'template_zdlggf6', this)
	  .then(function(response) {
		alert("✅ Message sent successfully!");
	  }, function(error) {
		alert("❌ Failed to send message. Check console.");
		console.error("EmailJS Error:", error);
	  });
  });
/*

firstName = "dan";
console.log("hello world");
console.log(typeof firstName);
index = ["green", "growth"];
console.log(index[1]);
index[1] ='Red';
console.log(index.length);
function greet(name, anotherName) {
	console.log('welcome' +' ' + name + ' ' + anotherName)
}
greet('bro', 'code')
let hey=56
function square(number) {
	return number*number
}
square(hey);
console.log(square(hey));
h = 56 % 17;
console.log(h)
f = 'thujhfgdxe';
ft = f[f.length - 1];
console.log(ft)
console.log(f)
hello = {
	name: 'red',
	age: 34
}
console.log(hello.age)
hello.age = 56
console.log(hello.age)
var array = ['hello', 45, 'hey']
var  arra = array.unshift('mode');
console.log(array)
console.log(arra)
var har = typeof array[0];
console.log(har)
var daniel = 56;
function myfuction(number) {
	return number*number
}
myfuction(daniel);
console.log(myfuction(daniel))
let g = 56;
g != 67;
console.log(g)
*/
// var global = 10;
// var oppsglobal = 15;
// function func1() {
// 	 output = ' ';
// 	if (typeof global != 'undefined') {
// 		output += "global: " + global;
// 	}
// 	console.log(output)
// }
// func1();
// console.log(output)
// var hello = 10;
// function myfunction(number) {
// 	return number - 7;
// }
// console.log(myfunction(57));
// hello = 10;
// function functon() {
// 	hello += 6;
// 	return hello;
// }
// console.log(functon());

// function boolean() {
// 	var hella = 16;
// 	if (hella = 20) {
// 		return 'nope'
// 	}
// 	else {
// 		return 'yeah'
// 	}
// }
// console.log(boolean())

// function func(val) {
// 	if (val > 20) {
// 		return 'this number is greater than required'
// 	}
// 	if (val < 10) {
// 		return 'this value is less than required'
// 	}
// 	else if (val == 10) {
// 		return 'this is the value required'
// 	}
// 	return 'this value is a bit greater than required'
// }
// console.log(func(13));
// //Testimonial Slider
// $(document).ready(function(){
//     $("#testimonial-slider").owlCarousel({
//         items:3,
//         nav:true,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 3000,
//         responsive:{
//             0:{
//                 items:1,
//             },
//             768:{
//                 items:2,
//             },
//             1170:{
//                 items:3,
//             }
//         }
//     });
// });
// function cc(card) {
// 	var count = 89;
// 	switch (card) {
// 		case 1:
// 			count = 'bro this thing small nah'
// 			break;
// 		case 2:
// 			count = 'you go like chop cain'
// 			break;
// 		case 3:
// 			count = 'omo ehn your head nnah'
// 			break;
// 		default:
// 			count++
// 			break;
// 	}
// 	return count;
// }
// cc(4); cc(2); cc(1);
// console.log(cc(3))
// let mydog = {
// 	'name': 'sheng',
// 	'age': 34,
// 	'month': 'febuary'
// };
// console.log(mydog)
// mydog.age = 56;
// console.log(mydog);
// mydog.bark = 'whoof'
// console.log(mydog);
// function ourdog(val) {
// 	var result = '';
// 	var dog = {
// 		'a': 'ada',
// 		'b': 'bata'
		
// 	};
// 	result = dog[val];
// 	return result;
// }
// console.log(ourdog('b'));
// array = [12,13,14,15];
// myArray = 0;
// for (var i = 0; i < array.length; i++){
// 	myArray = myArray + array[i];
// }
// console.log(myArray);
// function randomRange(myn, umax) {
	
// }
// var r = Math.floor(Math.random() * 20);
// console.log('i can get different type of numbers i mean random numbers ' + r);
// let mane = 'rebecca';
// console.log(mane.charAt(Math.floor(Math.random() * mane.length)));
// console.log(mane.charAt(Math.floor(Math.random() * mane.length)));
// console.log(mane.charAt(Math.floor(Math.random() * mane.length)));
// console.log(mane.charAt(Math.floor(Math.random() * mane.length)));
// console.log(mane.charAt(Math.floor(Math.random() * mane.length)));
// console.log(mane.charAt(Math.floor(Math.random() * mane.length)));
// console.log(mane.charAt(Math.floor(Math.random() * mane.length)));
// console.log(mane.charAt(Math.floor(Math.random() * mane.length)));
// console.log(mane.charAt(Math.floor(Math.random() * mane.length)));
// let playGame = confirm('shall we play r. p .s');
// if (playGame) {
// 	let playerChoice = prompt('pls enter r. p. s')
// 	if (playerChoice) {
// 		let playerOne = playerChoice.trim().toLowerCase();
// 		if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {
// 			let computerChoice = Math.floor(Math.random() * 2 + 1);
// 			let arrayForComputerChoice = ['rock', 'paper', 'scissors'];
// 			let computer = arrayForComputerChoice[computerChoice]
// 			let  result =
// 				playerOne === computer
// 					? 'tie game'
// 					: playerOne === 'rock' && computer === 'paper'
// 					? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
// 					: playerOne === 'paper' && computer === 'scissors'
// 					? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
// 					: playerOne === 'scissors' && computer === 'rock'
// 					? `playerOne ${playerOne}\ncomputer: ${computer}\ncomputer wins`
// 					: `playerOne: ${playerOne}\ncomputer: ${computer}\nplayer wins`;

// 			alert(result);
// 			var playagain = confirm('play again ?');
// 			playagain ? location.reload() : alert('ok, thanks for playing')
// 		}
// 		else {
// 			alert('you didnt enter the required syntax')

			
// 		}
// 	}
// 	else {
// 		alert('maye you changed your mind to not play maybenext time')
// 		var playAgain = confirm('play again ?');
// 			playAgain ? location.reload() : alert('ok, thanks for playing')
// 	}
// }
// else {
// 	alert('ok next time')
// }
// console.log(computer);
// var reply;
// if (computer === player) {
// 	reply = 'this is a tie ';
// }
// else if (player === 'rock') {
// 	if (computer === 'paper') {
// 		reply ='computer win'
// 	}
// 	else {
// 		reply = 'player win'
// 	}
// }
// else if (player === 'scissors') {
// 	if (computer === 'rock') {
// 		reply = 'computer win';
// 	}
// 	else {
// 		reply = 'player win';
// 	}
// }
// else if (player === 'paper') {
// 	if (computer === 'rock') {
// 		reply='player win'
// 	}
// 	else {
// 		reply='computer win'
// 	}
// }

// console.log(reply);
// let boolean = prompt('testing text out');
// if (boolean) {
// 	console.log(boolean.trim())
// 	console.log(boolean);
// }
// else {
// 	console.log('tho didnt put in a name art thy okay at all');
// }

//while loop
// var counter = 1;
// while (counter <= 5) {
// 	console.log('helo my people' + ' '+ counter)
// 	counter++;
// } 
// const myObject = {
// 	name: 'dan',
// 	hobbies: ['eat', 'sleep', 'code'],
// 	logname: function () {
// 		comsole.log(this.name)
// 	}
//  }

// const thisArray = ['eat', 'sleep', 'code']
// localStorage.setItem('myLocalStore', JSON.stringify(thisArray));
// const storeLength = localStorage.length;
// localStorage.removeItem('myLocalStore')
// const myLocalData = JSON.parse(localStorage.getItem('myLocalStore'));
// console.log(storeLength);
// import playGuitar from "./trying import.js";
// import { shredding, plucking } from "./trying import.js";
// console.log(shredding())
// console.log(plucking())
// // console.log(playGuitar());
// var i =document.getElementById('count-el').innerHTML;
// function increment() {
// 	i++;
// 	document.getElementById('count-el').textContent = i;
// };
// // var saveEl = document.getElementById('save-el')
// function save() {
// 	var saveVar = ' ' + i + ' ' + '-';
// 	document.getElementById('save-el').textContent += saveVar
// 	document.getElementById('count-el').textContent = 0;
// 	i = 0;
// }
// // var welcomeEl = document.getElementById('welcome-el')
// var name = 'daniel';
// var greetings = 'welcome back';
// var msg = name + ' ' + greetings;
//  msg += '👍';
// document.getElementById('welcome-el').textContent = msg;
let firstCard = randomNumbers();
let secondCard = randomNumbers();
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('cards-el')
let cards = [firstCard, secondCard]
function startGame() {
	isAlive=true
	renderGame()
}
function renderGame() {
		cardEl.textContent = 'cards: ';
		for (let i = 0; i < cards.length; i++){
		cardEl.textContent += cards[i] + ' '
	}
	if (sum <= 20) {
		message = 'do you want to draw a new card ?'
	}
	else if (sum === 21) {
		message='wohoo yo have got black jack'
		hasBlackJack = true;
	}
	else {
		message= 'you are out of the game'
		isAlive = false;
	}
	document.getElementById('message-el').textContent = message;
	sumEl.textContent = 'sum: ' + ' ' + sum;  


}
function newCard() {
	let card = randomNumbers();
	sum += card
	cards.push(card)
	startGame()
	console.log(cards)
	if (sum > 21) {
		return renderGame()
	}
}
function randomNumbers() {
	if (Math.floor(Math.random() * (11 - 2 + 1)) + 2 === 1) {
		return 11;
	}
	else if (Math.floor(Math.random() * (11 - 2 + 1)) + 2 > 10) {
		return 10;
	}
	else {
		return Math.floor(Math.random() * (11 - 2 + 1)) + 2;
	 }
 }