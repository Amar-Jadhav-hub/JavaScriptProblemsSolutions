function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "Basic") {
      return "Basic plan: Gym access only";
    }
  
    if (planType === "Premium") {
      return wantsTrainer ? "Premium plan: Gym + Personal Trainer" : "Premium plan: Gym only";
    }
  
    if (planType === "VIP") {
      if (wantsTrainer && wantsDietPlan) {
        return "VIP plan: Gym + Personal Trainer + Diet Plan";
      } else if (wantsTrainer) {
        return "VIP plan: Gym + Personal Trainer";
      } else {
        return "VIP plan: Gym + Diet Plan";
      }
    }
  
    return "Invalid plan type";
  }
  