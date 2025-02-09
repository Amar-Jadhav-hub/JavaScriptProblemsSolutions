function trafficLightControl(density) {
    if (density === "Heavy Traffic") {
      return 60;  // Green for 60 seconds
    } else if (density === "Moderate Traffic") {
      return 40;  // Green for 40 seconds
    } else if (density === "Light Traffic") {
      return 20;  // Green for 20 seconds
    }
  
    return 0;  // Default case if unknown traffic density
  }
  