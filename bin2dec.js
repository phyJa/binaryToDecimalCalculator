function getValue() {
    let value = document.getElementById("binary").value;
    try {
        // If the user type nothing
        if (value === "") throw "Please type your binary number";
        let numberLength = value.length;
        for(let letter = 0 ; letter < numberLength; letter++) {
            //If the user type something different from 0 and 1
            if(value[letter] !== "0" && value[letter] !== "1") 
                throw `Error: you must type only 0 or 1. You typed '${value[letter]}' at your char number ${letter + 1}.`;
            else {
                document.getElementById("answer").innerHTML = `The correspoding 
                decimal number of ${value} is ` +
                "<br />" +
                "<span style='color: lightgreen; font-size: 40px'>" +
                ` ${parseInt(value, 2)}` +
                "</span>";
            }
        }
    } catch (error) {
        document.getElementById("answer").innerHTML = error;
    }
}