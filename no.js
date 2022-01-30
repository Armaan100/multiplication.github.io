//console.log('It is console');
let num1 = Math.floor(Math.random()*100 + 1);
let num2 = Math.floor(Math.random()*100 +1);



document.getElementById('v1').value = num1;
document.getElementById('v2').value = num2;

let finalNum = num1 * num2;


console.log(finalNum);

function jsGame(){
	var ans = document.getElementById('answer').value;

	if(ans == finalNum){
		alert('Your Answer Is CORRECT.' + "   " + 'It Is:' + ans)
	}else{
		alert('Your Answer Is WRONG.' + "   " + 'Try Once More')
	}
} 

