Convert = () =>
{
 var Poundsinput=document.getElementById("Pounds");
 var pounds = parseFloat(Poundsinput.value)
    


 if (!isNaN(pounds)) {
    // Convert pounds to kilograms (1 pound = 0.453592 kg)
    var kilograms = pounds * 0.453592;

    var resultElement = document.getElementById("result");
    resultElement.textContent = kilograms.toFixed(2) + " KG";
    resultElement.style.display = "block";
  } else {
    // Handle invalid input (non-numeric)
    Poundsinput.value = "";
    // Hide the result paragraph
    resultElement.style.display = "none";
  };
  

}