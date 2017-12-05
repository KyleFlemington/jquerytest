$(document).ready(function(){
	console.log("File Connected")



//1. Press Submit and post to Body
	$('#submit').click(function(e){
		e.preventDefault()
		console.log('clicked')
		const val = $("#color_name").val()
		console.log(val)
		$(".post__Body").append(val)
	})


//2.If input value is less than 3, not able to submit



//3.If input value is less than 3, text color red


//4.If input value is greater than 3, text color green


})