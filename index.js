var x, n;

function calculatePow(x, n) {
	return Math.pow(x, n);
}

x = +prompt("x?", "");
n = +prompt("n?", "");

if (n < 0) {
	alert("степень" + n + " не поддерживается, введите целую степень больше 0")
}
else {
	alert(calculatePow(x, n))
};
	
module.exports = {
	calculatePow(x,n )
}; 

