# DLA_DLCODE-SCRIPTS
### #1_FirstExample.js
> Sends custom string to output for each reading phase
### #2_LogicalTest.js
> Collect the first barcode content and check if last two characters are "NO", IF true, send "NO" to output
### #3_CollectAllCodes.js
> Iterate through codes object and find all codes and which slave device it was scanned on
### #4_AddAIMID.js
> Iterate through all codes, if symbology is CODE128, also add aimID (]C0) to output message<br>
![#4_AddAIMID_img](https://raw.githubusercontent.com/joeraven0/DLA_DL.Code_Scripts/master/assets/%234.png)
### #5_ReplaceChar.js
> Read two barcodes and replace all GS with # and add GS between both barcodes.
* Read two barcodes
* Replace all <GS> with #
* Sort array order, barcode "240" always first in array, then "0037"
* Add GS between barcodes
