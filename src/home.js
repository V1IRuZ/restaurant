import waiterImage from "./waiter.png";

export function pageLoad () {

    const content = document.querySelector("#content");

    // Introduction section
    const image = document.createElement("img");
    image.src = waiterImage;

    const introduction = document.createElement("div");
    introduction.classList.add("intro");

    const homeHeader = document.createElement("h1");
    homeHeader.textContent = "Welcome to Restaurant";
    
    const introText = document.createElement("p");
    introText.classList.add("text");
    introText.textContent = "Step into a world of flavors where every dish tells a story. Our restaurant combines fresh, locally-sourced ingredients with culinary artistry to create unforgettable dining experiences. Whether you're here for a casual meal or a special celebration, our warm ambiance and attentive service will make you feel right at home. From mouthwatering appetizers to decadent desserts, there's something on our menu to delight every palate. We invite you to relax, savor, and enjoy your time with us. Bon appétit!"

    introduction.appendChild(image);
    introduction.appendChild(introText);

    // Opening hours section
    const openHours = document.createElement("div");
    openHours.classList.add("open");

    const h2 = document.createElement("h2");
    h2.textContent = "Open"

    openHours.appendChild(h2);

    const ul = document.createElement("ul");

    const weekDays = ["Monday: 10.00 - 22.00", "Tuesday: 10.00 - 22.00", "Wednesday: 10.00 - 22.00", "Thursday: 10.00 - 22.00", "Friday: 14.00 - 0.00", "Saturday: 14.00 - 0.00", "Sunday: CLOSED"]

    weekDays.forEach(day => {
        const li = document.createElement("li");
        li.textContent = day;
        ul.appendChild(li);
    })

    openHours.appendChild(ul);




    content.appendChild(homeHeader);
    content.appendChild(introduction);
    content.appendChild(openHours);
}

