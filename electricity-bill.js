function calculateElectricityBill(units, timeOfDay) {
    let rate = 0;
    let peakCharge = 0;
  
    // Determine rate based on units
    if (units < 100) {
      rate = 5;
    } else if (units <= 300) {
      rate = 4;
    } else {
      rate = 3;
    }
  
    // Apply peak charge if in peak hours
    if (timeOfDay >= 20 || timeOfDay < 8) {
      peakCharge = 0.10;  // 10% extra charge
    }
  
    let totalBill = units * rate;
    totalBill += totalBill * peakCharge;  // Adding peak hour charge if applicable
  
    return totalBill;
  }
  