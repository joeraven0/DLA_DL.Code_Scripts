function onResult(results, output) {
    if(results.redingCount>0){                              //If barcode found within reading phase
        output.setMessage("BARCODE FOUND!")                 //Send to output
    }
}
