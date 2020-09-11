
function onResult(results, output)
{
	var aimId,codeContent,outputMessage; 

	var stringToReplace = /\x1d/g; // Target string to replace from the code
	var replacement = ']'; // Replacement for the target string
	var Stx = "\x87";  // x8D
	
	if( results.codes.length > 0)
	{// If a code was read..
		codeContent = results.codes[0].content; // Store the code content
		aimId = results.codes[0].aimId;
		outputMessage = codeContent.replace(stringToReplace,replacement); // The output message is the new code
	}
	else
	{// If the VL hasn't decoded any barcode --> NO READ message
		outputMessage = "NO READ";
	}
	output.setMessage(Stx+aimId+outputMessage + "\r\n"); // Output the message
}
