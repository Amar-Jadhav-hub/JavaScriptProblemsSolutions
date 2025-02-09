function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shippingCost = 0;
  
    if (orderAmount > 1000) {
      discount = 0.20;  // 20% discount
    } else if (orderAmount >= 500) {
      discount = 0.10;  // 10% discount
    }
  
    let finalAmount = orderAmount - orderAmount * discount;
  
    if (finalAmount > 50) {
      shippingCost = 0;  // Free shipping
    } else {
      shippingCost = 10;  // Express shipping
    }
  
    return finalAmount + shippingCost;
  }
  