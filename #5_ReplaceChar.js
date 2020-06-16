	/*******************************************************************************/
	/*                                                                             */
	/*   DATALOGIC SAMPLE SCRIPTING ENGINE CODE                                    */
	/*                                                                             */	
	/*   Example for Search and Replacement of barcode content                     */
	/*                                                                             */
	/*******************************************************************************/

	var NoReadMessage = "NoRead"; 	//place your global no read string here
 	var GoodReadMessage = ''; 		//will be filled by script code
 	
 	//place your target undesired sequence here in RegExp format
 	var sequenceToReplace = "\x1d"; // ascii char <GS>
 	
 	//place replacement text sequence here
	var replaceWith = "";
	
	//use "i" instead of "g" for case-insensitive match
	var regexp = new RegExp(sequenceToReplace, "g"); 
	
	function onResult(result, output) {
	   if (!result.success) {
	       output.setMessage(NoReadMessage);
	       return;
	   }
	   GoodReadMessage = "";
	   result.codes.forEach(function(code) {
	       GoodReadMessage += code.content.replace(regexp, replaceWith);
	   }); 
	   
	   output.setMessage("*"+(GoodReadMessage ? GoodReadMessage : NoReadMessage)+"*");
	}
