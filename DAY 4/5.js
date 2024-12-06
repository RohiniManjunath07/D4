/* an atm allows withdrawls in denominations of 10$ only. each transaction is limited to a max of $500, and system should check if the system has sufficient funds before processing the withdrawls. Question 1: write a javascript function atmwithdrawl(balance, amount) that: checks if the requested amount is multiple of 10, check if amount is less than or equal to $500, check if the balance is enough for the required withdrawl, returns a success message if withdrawl is allowed or an error message if any condition fails, print numbers in range with conditions*/

function atmWithdrawal(balance, amount) {
 
  if (amount % 10 !== 0) {
    return "Error: Amount must be a multiple of 10.";
  }

  if (amount > 500) {
    return "Error: Maximum withdrawal amount is 500.";
  }

  if (amount > balance) {
    return "Error: Insufficient balance.";
  }

  return "Withdrawal successful.";
}
const balance = 1000;
const amountToWithdraw = 420;
const result = atmWithdrawal(balance, amountToWithdraw);
console.log(result);