function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let additionalCharge = 0;
    let discount = 0;
  
    // Apply class type charges
    if (classType === "Business") {
      additionalCharge = 200;
    } else if (classType === "First") {
      additionalCharge = 500;
    }
  
    // Calculate luggage charge for extra weight over 20kg
    if (luggageWeight > 20) {
      additionalCharge += Math.ceil((luggageWeight - 20) / 10) * 50;  // $50 per 10kg over 20kg
    }
  
    // Apply discounts for students and seniors
    if (isStudent) {
      discount = 0.15;  // 15% discount for students
    } else if (isSenior) {
      discount = 0.10;  // 10% discount for seniors
    }
  
    let finalFare = baseFare + additionalCharge;
    finalFare -= finalFare * discount;
  
    return finalFare;
  }
  