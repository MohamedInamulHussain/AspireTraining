// Creating a Set to store  food item ID
let foodSet: Set<number> = new Set();

// Adding food items to the Set
foodSet.add(1);
foodSet.add(2);
foodSet.add(3);
foodSet.add(4);
foodSet.add(5);

// Trying to add a duplicate food item
foodSet.add(1);

console.log("Number of unique food items:", foodSet.size);

// Checking if  Set contains specific food items
console.log("Set contains food item with ID 3:", foodSet.has(3));
console.log("Set contains food item with ID 6:", foodSet.has(6)); 

// Deleting a food item from the Set
foodSet.delete(2);

// Displaying all food items in the Set
console.log("Food items in the Set:");
foodSet.forEach(foodID => {
    console.log(foodID);
});

// Clearing the Set
foodSet.clear();
console.log("Number of food items after clearing:", foodSet.size);

// Creating a Map to store food items and their quantities
let foodMap: Map<string, number> = new Map();

// Adding food items to the Map
foodMap.set("Apples", 10);
foodMap.set("Bread", 20);
foodMap.set("Soup", 30);
foodMap.set("Rice", 40);
foodMap.set("Pasta", 50);

// Updating the quantity of a food item
foodMap.set("Apples", 15);

console.log("Number of food items in the Map:", foodMap.size);

// Retrieving the quantity of specific food items
console.log("Quantity of Apples:", foodMap.get("Apples"));
console.log("Quantity of Milk:", foodMap.get("Milk"));

// Checking if the Map contains specific food items
console.log("Map contains item 'Bread':", foodMap.has("Bread"));
console.log("Map contains item 'Cheese':", foodMap.has("Cheese")); 

// Deleting a food item from the Map
foodMap.delete("Rice");

// Displaying all food items and their quantities in the Map
console.log("Food items and their quantities in the Map:");
foodMap.forEach((quantity, foodItem) => {
    console.log(`${foodItem} => ${quantity}`);
});

// Clearing the Map
foodMap.clear();
console.log("Number of food items in the Map after clearing:", foodMap.size);
