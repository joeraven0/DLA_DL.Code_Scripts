function onResult(results, output) {
    
    var prefix = "\x02";                      //Prefix <STX>=\x02
    var suffix = "";
    
    //If code found within reading phase
    if(results.redingCount>0){          
        var msg = results.codes[0].content;   //Get barcode content from first code in list(No iteration if more than one code found!)
        var strMsg = msg[msg.length-2];       //Keep second last char
        strMsg += msg[msg.length-1];          //Keep last char and add to string
        if(strMsg=="NO"){                     //If two last chars are "NO", replace the output variable
            msg = strMsg;
        }    
        output.setMessage(prefix+msg+suffix)  //Send to output
    }
}
