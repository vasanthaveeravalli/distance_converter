function kmToMiles(kilometers) {
    return kilometers * 0.621371;
  }
  
  function convertToMiles() {
    const kilometers = parseFloat(document.getElementById("km").value);
    if (!isNaN(kilometers)) {
      const miles = kmToMiles(kilometers);
      document.getElementById("result-miles").textContent = `${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`;
    } else {
      document.getElementById("result-miles").textContent = "Invalid input. Please enter a valid number.";
    }
  }
  
  function milesToKilometers(miles) {
    return miles * 1.60934;
  }
  
  function convertToKilometers() {
    const miles = parseFloat(document.getElementById("miles").value);
    if (!isNaN(miles)) {
      const kilometers = milesToKilometers(miles);
      document.getElementById("result-km").textContent = `${miles} miles is equal to ${kilometers.toFixed(2)} kilometers.`;
    } else {
      document.getElementById("result-km").textContent = "Invalid input. Please enter a valid number.";
    }
  }
  