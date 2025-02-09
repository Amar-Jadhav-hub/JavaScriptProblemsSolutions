function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }
    if (amount > balance) {
        return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }
    return `Transaction successful! New balance: $${balance - amount}`;
}

// Example Usage:
// console.log(atmWithdrawal(5000, 1000, 1234, 1234)); // Success
// console.log(atmWithdrawal(5000, 1300, 1234, 1234)); // Not a multiple of 100
// console.log(atmWithdrawal(5000, 6000, 1234, 1234)); // Insufficient funds
// console.log(atmWithdrawal(5000, 1000, 1234, 4321)); // Incorrect PIN
