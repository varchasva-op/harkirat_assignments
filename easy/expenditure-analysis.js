/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // 1. Map/Object to track totals
  const totalsMap = {};

  // 2. Loop through all transactions
  for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      const category = transaction.category;
      const price = transaction.price;

      if (totalsMap[category]) {
          totalsMap[category] += price;
      } else {
          totalsMap[category] = price;
      }
  }

  // 3. Convert map to the required array of objects format
  const finalResult = [];
  for (const category in totalsMap) {
      finalResult.push({
          category: category,
          totalSpent: totalsMap[category]
      });
  }

  return finalResult;
}

module.exports = calculateTotalSpentByCategory;