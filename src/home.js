import waiterImage from "./images/waiter.png";
import steakImage from "./images/steak.jpg";
import restaurantImage from "./images/restaurant.jpg";


// const content = document.querySelector("#content");

// Home main header
const homeHeader = document.createElement("h1");
homeHeader.textContent = "Welcome to Ember & Feast!";

// Introduction 
const introduction = document.createElement("div");
introduction.classList.add("intro");

// Introduction > "waiter" image
const waiter = document.createElement("img");
waiter.src = waiterImage;
waiter.alt = "Waiter";

introduction.appendChild(waiter);

// Introduction > text

const introDiv = document.createElement("div");
introDiv.classList.add("text");

const introTextPart1 = document.createElement("p");
introTextPart1.textContent = "Step into a world of flavors where every dish tells a story. Our restaurant combines fresh, locally-sourced ingredients with culinary artistry to create unforgettable dining experiences. Whether you're here for a casual meal or a special celebration, our warm ambiance and attentive service will make you feel right at home. From mouthwatering appetizers to decadent desserts, there's something on our menu to delight every palate."

const introTextPart2 = document.createElement("p");
introTextPart2.textContent = " We invite you to relax, savor, and enjoy your time with us. Bon appétit!"

introDiv.appendChild(introTextPart1);
introDiv.appendChild(introTextPart2);

introduction.appendChild(introDiv);

// Info 
const infoDiv = document.createElement("div");
infoDiv.classList.add("info");

// Info > schedule 
const schedule = document.createElement("div");
schedule.classList.add("schedule");

const scheduleH2 = document.createElement("h2");
scheduleH2.textContent = "We are open:"

schedule.appendChild(scheduleH2);

const scheduleUl = document.createElement("ul");

const weekDays = ["Monday: 10.00 - 22.00", "Tuesday: 10.00 - 22.00", "Wednesday: 10.00 - 22.00", "Thursday: 10.00 - 22.00", "Friday: 14.00 - 0.00", "Saturday: 14.00 - 0.00", "Sunday: CLOSED"]

weekDays.forEach(day => {
    const scheduleLi = document.createElement("li");
    scheduleLi.textContent = day;
    scheduleUl.appendChild(scheduleLi);
})

schedule.appendChild(scheduleUl);
infoDiv.appendChild(schedule);

// info > "steak" image
const steak = document.createElement("img");
steak.src = steakImage;
steak.alt = "Steak";

infoDiv.appendChild(steak);

// info > "restaurant" image
const restaurant = document.createElement("img");
restaurant.src = restaurantImage;
restaurant.alt = "Restaurant interior";

infoDiv.appendChild(restaurant);

// info > location
const location = document.createElement("div");
location.classList.add("location");

const locationH2 = document.createElement("h2");
locationH2.textContent = "Location";

location.appendChild(locationH2);

const locationPara = document.createElement("p");
locationPara.textContent = "Emberstreet 34, Ember City, Emberland";

location.appendChild(locationPara);

infoDiv.appendChild(location)

export function homeLoad (container) {
    container.appendChild(homeHeader);
    container.appendChild(introduction);
    container.appendChild(infoDiv);
}

