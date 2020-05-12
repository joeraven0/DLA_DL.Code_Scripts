function onResult(results, output) {
	const outputMessage = "";
	
	//Constant separators
	const header = "\x02";
	const terminator = "\x0D";
	const separator = ";";
	
	//If codes decoded
	if(results.redingCount>0){
		//Iterate through all codes
	    for(var j = 0; j<results.codes.length; j++){	
			//If code symbology is CODE128	    
			if(results.codes[j].symbology=="CODE128"){
				//Add aim ID to output string
				outputMessage += results.codes[j].aimId + results.codes[j].content + separator;
			}else{
				//Else, just add code content
				outputMessage += results.codes[j].content + separator;
			}
		}
		
	}
	output.setMessage(header + outputMessage + terminator);
}
