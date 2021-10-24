function input(fruitName, weight, money){
     const weightFruit = weight / 1000;
     const moneyNeeded = weightFruit * money;

     console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightFruit.toFixed(2)} kilograms ${fruitName}.`);
}

input('apple', 1563, 2.35);