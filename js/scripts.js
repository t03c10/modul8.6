

var a = prompt('Enter value for "a"'), b = prompt('Enter value for "b"'), value, valueType;
value=(a * a) - (2 * a * b) - (b * b);

if (value > 0) { 
	valueType = 'Wynik dodatni' } 
else if (value == 0 ) { 
	valueType = 'Wynik zerowy' } 
else if (value < 0) { 
	valueType = 'Wynik ujemny' } 
else {valueType = 'Wynik bledny'  }

console.log('Calculation result is: ' + value);
console.log(valueType);

