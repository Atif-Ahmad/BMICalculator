function showUnit(){
    var weightUnits = document.getElementById("weight-unit").value;
if (weightUnits == "lbs" ){
    document.getElementById("unit").innerHTML = "inches";
    
} else if (weightUnits == "kg"){
    document.getElementById("unit").innerHTML = "centimeters";
}else{
    alert("Please enter one of the listed units");
    
    }
}


function calcBMI(){
    var height = document.getElementById("Height").value;
 
    var weight = document.getElementById("Weight").value;
 
    var weightUnit = document.getElementById("weight-unit").value;

    if (weightUnit == "kg"){
        var weightinKG = parseFloat(document.getElementById("Weight").value) ||0;
        var heightInM = parseFloat(document.getElementById("Height").value)/100 ||0;
        if (weightinKG <= 0 && heightInM <=0){
            document.getElementById("WeightError").innerHTML = "Error. Please enter a valid weight";
            document.getElementById("HeightError").innerHTML = "Error. Please enter a valid height";
        }
        else{
            var metricBMI = parseFloat(weightinKG/(heightInM*heightInM)) ||0;
        
        document.getElementById("final-BMI").innerHTML = "Your BMI is " +  metricBMI.toFixed(2);

        }
        
        if(metricBMI<=18.5){
            document.getElementById("yourBMI").innerHTML = "You are underweight";
        }else if (metricBMI >18.5 && metricBMI<=24.9){
            document.getElementById("yourBMI").innerHTML = "You are normal";
        }else if (metricBMI > 24.9 && metricBMI <= 24.9){
            document.getElementById("yourBMI").innerHTML = "You are overweight";
        }else{
            document.getElementById("yourBMI").innerHTML = "You are obese.";
        }
    }else{
        var weightinLbs = parseFloat(document.getElementById("Weight").value) || 0;
        var heightInInches = parseFloat(document.getElementById("Height").value) ||0;
        
        if (weightinLbs <= 0 && heightInInches <=0){
            document.getElementById("WeightError").innerHTML = "Error. Please enter a valid weight";
            document.getElementById("HeightError").innerHTML = "Error. Please enter a valid height";
        }
        else{
            var imperialBMI = 703 * (weightinLbs/(heightInInches*heightInInches));
   
            document.getElementById("final-BMI").innerHTML = "Your BMI is " +  imperialBMI.toFixed(2);
        }
       
       
        if(imperialBMI<=18.5){
            document.getElementById("yourBMI").innerHTML = "You are underweight";
        }else if (imperialBMI >18.5 && imperialBMI<=24.9){
            document.getElementById("yourBMI").innerHTML = "You are normal";
        }else if (imperialBMI > 24.9 && imperialBMI <= 24.9){
            document.getElementById("yourBMI").innerHTML = "You are overweight";
        }else{
            document.getElementById("yourBMI").innerHTML = "You are obese.";
        }
    }
    
    
}

function clearError(){
    document.getElementById("HeightError").innerHTML = "";
    document.getElementById("WeightError").innerHTML = "";
}



