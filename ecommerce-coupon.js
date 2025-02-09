function applyCoupon(orderAmount, couponCode) {
    let discount = 0;
    let freeShipping = false;
  
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
      discount = 0.10;  // 10% discount
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
      freeShipping = true;
    }
  
    if (discount > 0 && freeShipping) {
      return "Both coupons cannot be used together";
    }
  
    let finalAmount = orderAmount - orderAmount * discount;
  
    if (freeShipping) {
      return finalAmount;  // No shipping cost
    }
  
    return finalAmount + 10;  // Apply $10 shipping charge
  }
  