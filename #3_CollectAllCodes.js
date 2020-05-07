function onResult(result, output) {
    var outputMessage ="";
    var CR = "\x0D";
    var LF = "\x0A";
    //For loop to iterate through codes
    
    for(var j = 0; j<result.codes.length; j++){
    //Add cam slave id and code content to string
		outputMessage+= "CAMid: " + result.codes[j].addresses + "   Content:" + result.codes[j].content + CR;
	}
	output.setMessage(outputMessage);
}
