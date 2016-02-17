function playFizzBuzz(){
	var para;
for (var i = 1; i <=100; i++) {
	if((i%15)==0) {
		para = $("<p></p>").text("Fizz Buzz");
	}
	else if((i%5)==0){
		para = $("<p></p>").text("Buzz");
	}
	else if((i%3)==0){
		para = $("<p></p>").text("Fizz");
	}
	else {
		para = $("<p></p>").text(i);
	}
	$('body').append(para);
};	
};

$(document).ready(function(){
	playFizzBuzz();
});