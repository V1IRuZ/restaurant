export function menuLoad() {
    const content = document.querySelector("#content");

    const menuH1 = document.createElement("h1");
    menuH1.textContent = "Menu";

    const menu = document.createElement("div");
    menu.classList.add("menu");

    function createFoodList(array, ulElement) {
        array.forEach(item => {
            const itemLi = document.createElement("li")
            const foodName = document.createElement("p");
            const foodPrice = document.createElement("p");
    
            foodName.textContent = `${item.food}`;
            foodPrice.textContent = `${item.price}`;
    
            itemLi.appendChild(foodName);
            itemLi.appendChild(foodPrice);
            ulElement.appendChild(itemLi);
        })
    }

    // Starters menu
    const startersDiv = document.createElement("div");

    const startersH2 = document.createElement("h2");
    startersH2.textContent = "Starters";

    startersDiv.appendChild(startersH2);

    const startersUl = document.createElement("ul");

    const starters = [{food: "Creamy Tomato Basil Soup served with Artisan Bread", price: "€6.50"},
                      {food: "Rustic Garlic Butter Mushrooms with a Hint of Thyme", price: "€7.00"},
                      {food: "Warm Spinach & Artichoke Dip with Crispy Pita Chips", price: "€7.50"},
                      {food: "Honey-Roasted Pumpkin Soup with Spiced Croutons", price: "€6.50"},
                      {food: "Grilled Halloumi Salad with Pomegranate Dressing", price: "€8.00"}
    ]

    createFoodList(starters, startersUl);

    startersDiv.appendChild(startersUl);

    // Main coursers menu

    const mainCoursesDiv = document.createElement("div");

    const mainCoursesH2 = document.createElement("h2");
    mainCoursesH2.textContent = "Main Courses";
    mainCoursesDiv.appendChild(mainCoursesH2);

    const mainCoursesUl = document.createElement("ul");

    const mainCourses = [{food: "Hearty Beef & Red Wine Stew with Root Vegetables", price: "€16.50"},
                         {food: "Slow-Roasted Lemon Herb Chicken served with Mashed Potatoes", price: "€15.00"},
                         {food: "Mushroom Risotto with Parmesan Shavings & Truffle Oil", price: "€14.00"},
                         {food: "Grilled Salmon with Dill Sauce & Roasted Potatoes", price: "€17.50"},
                         {food: "Vegetarian Lasagna layered with Rich Tomato Sauce", price: "€14.50"}
    ]

    createFoodList(mainCourses, mainCoursesUl);

    mainCoursesDiv.appendChild(mainCoursesUl);

    // Desserts menu

    const dessertsDiv = document.createElement("div");

    const dessertsH2 = document.createElement("h2");
    dessertsH2.textContent = "Desserts";
    dessertsDiv.appendChild(dessertsH2);

    const dessertsUl = document.createElement("ul");

    const desserts = [{food: "Sticky Toffee Pudding with Warm Custard", price: "€6.50"},
                      {food: "Decadent Chocolate Lava Cake paired with Vanilla Bean Ice Cream", price: "€7.00"},
                      {food: "Apple & Cinnamon Crumble topped with Whipped Cream", price: "€6.50"},
                      {food: "Lemon Meringue Tart with Fresh Berries", price: "€6.00"},
                      {food: "Warm Pear & Almond Tart served with Vanilla Sauce", price: "€6.50"}
    ]

    createFoodList(desserts, dessertsUl);

    dessertsDiv.appendChild(dessertsUl);

    menu.appendChild(startersDiv);
    menu.appendChild(mainCoursesDiv);
    menu.appendChild(dessertsDiv);

    content.appendChild(menuH1);
    content.appendChild(menu);
 
}