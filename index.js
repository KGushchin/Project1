let first = document.querySelector('#first');
let second = document.querySelector('#second');
let third = document.querySelector('#third');
let fourth = document.querySelector('#fourth');
let fifth = document.querySelector('#fifth');
let arr = [first,second,third,fourth,fifth];
first.onclick = function() {
	first.style.color = 'black';
	second.style.color = 'grey';
	third.style.color = 'grey';
	fourth.style.color = 'grey';
	fifth.style.color = 'grey';
}
second.onclick = function() {
first.style.color = 'grey';
second.style.color = 'black';
third.style.color = 'grey';
fourth.style.color = 'grey';
fifth.style.color = 'grey';
}
third.onclick = function() {
first.style.color = 'grey';
second.style.color = 'grey';
third.style.color = 'black';
fourth.style.color = 'grey';
fifth.style.color = 'grey';	
}
fourth.onclick = function() {
first.style.color = 'grey';
second.style.color = 'grey';
third.style.color = 'grey';
fourth.style.color = 'black';
fifth.style.color = 'grey';		
}
fifth.onclick = function() {
	first.style.color = 'grey';
second.style.color = 'grey';
third.style.color = 'grey';
fourth.style.color = 'grey';
fifth.style.color = 'black';	
}
let menu = document.querySelector('.auth__menu');
let auth = document.querySelector('#auth');
auth.onclick = function() {
menu.style.display = 'flex';
}
let close = document.querySelector('.close__button')
close.onclick = function() {
menu.style.display = 'none';
}
let notAuth = document.querySelector('.incorrect__password');
let successful__auth = document.querySelector('.message__auth');
let authButton = document.querySelector('.check__button');
function hideMessage () {
successful__auth.style.display = 'none';
}
function showMessage () {
successful__auth.style.display = 'block';
setTimeout(hideMessage,2000);
}


authButton.onclick = function() {
let login = document.getElementById("login").value;
let password = document.getElementById("password").value;
if (login=="admin" && password=="123") {
menu.style.display = 'none';
authButton.style.display = 'none';
auth.style.display = 'none';
showMessage();
}
else {
notAuth.style.display = 'block';

}
}


