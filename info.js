function showDescription(){
    var types = document.getElementById("type").value;  

 if (types == "s"){
    document.getElementById("underweight").style.display = "none"; 
    document.getElementById("Normal").style.display = "none"; 
    document.getElementById("Normal").style.display = "none";
    document.getElementById("overweight").style.display = "none"; 
    document.getElementById("obese").style.display = "none";  
 }
 
 if (types == "n"){ 
    document.getElementById("underweight").style.display = "none"; 
    document.getElementById("Normal").style.visibility = "visible"; 
    document.getElementById("Normal").style.display = "initial";
    document.getElementById("overweight").style.display = "none"; 
    document.getElementById("obese").style.display = "none";
    
    } 

if (types == "e"){ 
    document.getElementById("obese").style.visibility = "visible"; 
    document.getElementById("obese").style.display = "initial";
    document.getElementById("Normal").style.display = "none"; 
    document.getElementById("overweight").style.display = "none"; 
     document.getElementById("underweight").style.display = "none";
    } 

if (types == "ov"){ 
    document.getElementById("underweight").style.display = "none";
    document.getElementById("Normal").style.display = "none";  
    document.getElementById("overweight").style.display = "initial";
    document.getElementById("overweight").style.visibility = "visible";
    document.getElementById("obese").style.display = "none";
    } 

if (types == "u"){ 
    document.getElementById("underweight").style.visibility = "visible"; 
    document.getElementById("underweight").style.display = "initial";
    document.getElementById("Normal").style.display = "none";  
    document.getElementById("overweight").style.display = "none";
    document.getElementById("obese").style.display = "none";
    }


function cdc(){ 
    
    
    
    
    
}
}