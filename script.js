function trailingZeros(n) {
  //your JS code here. If required.
	let result=0;
	while(n >= 5){
		n=Math.floor(n/5);
		result += n;
	}
	return result;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
