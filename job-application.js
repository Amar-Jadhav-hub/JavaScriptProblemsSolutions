function isEligibleForJob(age, experience, qualification) {
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
      return true;
    }
    
    return false;
  }
  