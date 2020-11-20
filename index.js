const calc = () => {
	const a = parseInt(document.querySelector('#val1').value);
	const b = parseInt(document.querySelector('#val2').value);
	const op = document.querySelector('#operator').value;
	let result = document.getElementById('num');
	let calculate;
	
	if (op == "Add") {
		calculate = a + b;
		result.value = calculate;
	}
	else if (op == "Sub") {
		calculate = a - b;
		result.value = calculate;
	}
	if (op == "Mult") {
		calculate = a * b;
		result.value = calculate;
	}
	else if (op == "Div") {
		calculate = a / b;
		result.value = calculate;
	}
	console.log(calculate);
}
document.querySelector('[type="button"]').addEventListener("click", ()=>{
	calc();
	});
	
//TOGGLE BODY BACKGROUND
function change() {
	let bDY = document.body;
	let fm = document.querySelector('form');
	bDY.classList.toggle('active');
	fm.classList.toggle('active');
}
