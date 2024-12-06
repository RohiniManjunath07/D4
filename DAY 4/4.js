/*A warehouse tracks inventory levels for products and raises an alert if any product's quantity falls below a certain threshold. The threshold levels are: low: between 10 and 20 units (should alart ("stock is low ").
Adequate: more than 20 units (no alert needed).
Question 1: Write a Javascript function checkInventory(productName, quantity) that takes a product name and its quantity, and prints an alart message based on the inventory level*/

function checkInventory(productName, quantity) {
    if (quantity >= 21) {
      console.log("Adequate stock for " + productName);
    } else if (quantity >= 10 && quantity <= 20) {
      console.log("Stock is low for " + productName + ". Please replenish.");
    } else {
      console.log("Critical stock level for " + productName + ". Immediate replenishment needed.");
    }
  }
  checkInventory("Product A", 15);
  checkInventory("Product B", 30);
  checkInventory("Product C", 5); 