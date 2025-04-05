const content = document.querySelector("#content");

// Menu main header
const menuH1 = document.createElement("h1");
menuH1.textContent = "Menu";

// Menu 
const menu = document.createElement("div");
menu.classList.add("menu");

// Dish arrays
const starters = [{food: "Creamy Tomato Basil Soup served with Artisan Bread", price: "€6.50"},
                  {food: "Rustic Garlic Butter Mushrooms with a Hint of Thyme", price: "€7.00"},
                  {food: "Warm Spinach & Artichoke Dip with Crispy Pita Chips", price: "€7.50"},
                  {food: "Honey-Roasted Pumpkin Soup with Spiced Croutons", price: "€6.50"},
                  {food: "Grilled Halloumi Salad with Pomegranate Dressing", price: "€8.00"}
];

const mainCourses = [{food: "Hearty Beef & Red Wine Stew with Root Vegetables", price: "€16.50"},
                     {food: "Slow-Roasted Lemon Herb Chicken served with Mashed Potatoes", price: "€15.00"},
                     {food: "Mushroom Risotto with Parmesan Shavings & Truffle Oil", price: "€14.00"},
                     {food: "Grilled Salmon with Dill Sauce & Roasted Potatoes", price: "€17.50"},
                     {food: "Vegetarian Lasagna layered with Rich Tomato Sauce", price: "€14.50"}
];

const desserts = [{food: "Sticky Toffee Pudding with Warm Custard", price: "€6.50"},
                  {food: "Decadent Chocolate Lava Cake paired with Vanilla Bean Ice Cream", price: "€7.00"},
                  {food: "Apple & Cinnamon Crumble topped with Whipped Cream", price: "€6.50"},
                  {food: "Lemon Meringue Tart with Fresh Berries", price: "€6.00"},
                  {food: "Warm Pear & Almond Tart served with Vanilla Sauce", price: "€6.50"}
];

// Generate dish section to menu div
function makeDishList(array, dishName) {
    const dishDiv = document.createElement("div");

    const dishH2 = document.createElement("h2")
    dishH2.textContent = dishName;

    dishDiv.appendChild(dishH2);

    const dishUl = document.createElement("ul")

    array.forEach(item => {
        const itemLi = document.createElement("li")
        const foodName = document.createElement("p");
        const foodPrice = document.createElement("p");

        foodName.textContent = `${item.food}`;
        foodPrice.textContent = `${item.price}`;

        itemLi.appendChild(foodName);
        itemLi.appendChild(foodPrice);
        dishUl.appendChild(itemLi);
    })

    dishDiv.appendChild(dishUl);
    menu.appendChild(dishDiv);
}

makeDishList(starters, "Starters");
makeDishList(mainCourses, "Main Courses");
makeDishList(desserts, "Desserts")

export function menuLoad() {
    content.appendChild(menuH1);
    content.appendChild(menu);
}