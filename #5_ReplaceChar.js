	var NoReadMessage = "NoRead"; 						//global no read string
 	var sequenceToReplace = "\x1d"; 					//char to be replaced
	var replaceWith = "#";								//with following char
	var regexp = new RegExp(sequenceToReplace, "g");	//use "i" instead of "g" for case-insensitive match
	
	function onResult(result, output) {
	 	var msg = [""];
	   if (!result.success) {							//If bad read
	       output.setMessage(NoReadMessage);
	       return;
	   }
	   
	   result.codes.forEach(function(code) {		
	       msg.push(code.content.replace(regexp, replaceWith));
	   }); 
	   
	   msg.sort();										//240 first
	   msg.reverse();
	   var outputmsg = "\x02"+msg[0]+"\x1d"+msg[1]+"\x03";
	   output.setMessage(outputmsg);
	}
