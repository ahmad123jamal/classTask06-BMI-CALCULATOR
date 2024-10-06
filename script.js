


var weight = document.getElementById("weight").value;
var height = document.getElementById("height").value;

var btn = document.getElementById("calculate");

var reset = document.getElementById("reset");

var result = document.getElementById("msg");


btn.addEventListener('click', function() {
    
    var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;

        // Check if weight and height are valid
        if (weight > 0 && height > 0) {
            var bmi = weight / (height * height); // Corrected BMI calculation formula
            result.textContent = "Your BMI is " + bmi.toFixed(2); // Display BMI with 2 decimal places
        } else {
            result.textContent = "Please enter valid weight and height values.";
        }
   
})


  // // Reset functionality
reset.addEventListener('click', function() {
    document.getElementById("weight").value = '';
    document.getElementById("height").value = '';
    result.textContent = '';
});



// function calculatebmi() {
//     var weight = +document.getElementById('weight').value
//     var height = +document.getElementById('height').value
//     var display = document.getElementById('calculate')
//     var bmi = weight / (height * height)
//     bmi = Number(bmi.toFixed(2))

//     display.textContent = 'your bmi: ${bmi}'
//     document.getElementById('weight').value = ''
//     document.getElementById('height').value = ''

//     console.log({weight, height, bmi})
// }







    // var btn = document.getElementById("calculate");
    // var reset = document.getElementById("reset");
    // var result = document.getElementById("msg");

    // btn.addEventListener('click', function() {
    //     var weight = document.getElementById("weight").value;
    //     var height = document.getElementById("height").value;

    //     // Check if weight and height are valid
    //     if (weight > 0 && height > 0) {
    //         var bmi = weight / (height * height); // Corrected BMI calculation formula
    //         result.textContent = "Your BMI is " + bmi.toFixed(2); // Display BMI with 2 decimal places
    //     } else {
    //         result.textContent = "Please enter valid weight and height values.";
    //     }
    // });

    // // Reset functionality
    // reset.addEventListener('click', function() {
    //     document.getElementById("weight").value = '';
    //     document.getElementById("height").value = '';
    //     result.textContent = '';
    // });
  
