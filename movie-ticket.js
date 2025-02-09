function calculateTicketPrice(age, showTime) {
    let price = 12;  // Standard price
  
    // Apply show time discount for Matinee show (before 5 PM)
    if (showTime < 17) {
      price -= price * 0.20;  // 20% discount
    }
  
    // Apply age-based discount
    if (age > 60) {
      price -= price * 0.30;  // 30% discount for senior citizens
    } else if (age < 12) {
      price -= price * 0.40;  // 40% discount for children
    }
  
    return price;
  }
  