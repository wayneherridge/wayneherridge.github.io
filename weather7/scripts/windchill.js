/* Input: User enters Temperature and Wind Speed into 2 input boxes.
         * Processing: JS works out the following equation: f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
         * Output: A message to the user showing them the wind chill in Fahrenheit
        */
 
 	    // ------ Input ------ 
         function doInputOutput() {
            var temp = parseFloat(document.getElementById('tempInput').value);
            var speed = parseFloat(document.getElementById('speedInput').value);
            // calls for the windChill function to create the result for the user
            var wc = windChill(temp, speed);
    
    // ------ Output ------ 
            document.getElementById("outputDiv").innerHTML = wc.toFixed(2);
            }

    // ------ Processing ------ 
        function windChill(temp, speed) {
            // works out the wind chill by using the formula below
            
            var spd = Math.pow(speed, 0.16);
            var wc = (35.74 + (0.6215 * temp)-(35.75 * spd)+(0.4275 * temp * spd));
            // returns the result to doInputOutput var wc
            return wc;
            }