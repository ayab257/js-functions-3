function myFunction () {
	var count= 0;
	var result = document.getElementById("result");
	var word= document.getElementById("word").value;
	var letter= document.getElementById("letter").value;
	var x= word.split("");
	for(i=0;i<x.length;i++){
		if(x[i]==letter){
			count++;
		}
	}
	result.innerHTML = count;
}

