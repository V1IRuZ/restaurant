import kitchenImage from "./images/restaurant-kitchen.jpg";

class Staff {
    constructor(name, title, phone, email) {
        this.name = name;
        this.title = title;
        this.phone = phone;
        this.email = email;
    }
}

// Create staff objects
const mainChef = new Staff("Jack", "Chef & Owner", "+358 40 987 65430", "jack@emberandfeast.fi");
const otherChef = new Staff("Julie", "Chef", "+358 40 987 65431", "julie@emberandfeast.fi")
const waiter1 = new Staff("John", "Chef & Waiter", "+358 40 987 65432", "john@emberandfeast.fi");
const waiter2 = new Staff("Sophie", "Waiter", "+358 40 987 65433", "sophie@emberandfeast.fi");
const waiter3 = new Staff("Sarah", "Waiter", "+358 40 987 65434", "sarah@emberandfeast.fi");
const manager = new Staff("Mike", "Manager & Owner", "+358 40 987 65435", "mike@emberandfeast.fi");


const content = document.querySelector("#content");

// Contact main header
const contactH1 = document.createElement("h1");
contactH1.textContent = "Our staff";

// Contact container 
const contactDiv = document.createElement("div");
contactDiv.classList.add("contact");

// Contact > staff
const contactStaff = document.createElement("div");
contactStaff.classList.add("contact-staff");

// Generate a staff information card
function createStaffDiv (obj) {
    const staffDiv = document.createElement("div");

    const staffH2 = document.createElement("h2");
    staffH2.textContent = `${obj.name}`;
    staffDiv.appendChild(staffH2);

    const staffUl = document.createElement("ul");
    const staffLi = document.createElement("li");

    const staffTitle = document.createElement("p");
    staffTitle.textContent = `${obj.title}`;

    const staffPhone = document.createElement("p");
    staffPhone.textContent = `${obj.phone}`;

    const staffEmail = document.createElement("p");
    staffEmail.textContent = `${obj.email}`;

    staffLi.appendChild(staffTitle);
    staffLi.appendChild(staffPhone);
    staffLi.appendChild(staffEmail);

    staffUl.appendChild(staffLi);
    staffDiv.appendChild(staffUl);
    contactStaff.appendChild(staffDiv);
}

// Add staff cards
createStaffDiv(mainChef);
createStaffDiv(otherChef);
createStaffDiv(waiter1);
createStaffDiv(waiter2);
createStaffDiv(waiter3);
createStaffDiv(manager);

contactDiv.appendChild(contactStaff);

// Contact info
const contactInfo = document.createElement("div");
contactInfo.classList.add("contact-info");

// Contact info > image
const kitchen = document.createElement("img");
kitchen.src = kitchenImage;
kitchen.alt = "Kitchen with staff";

contactInfo.appendChild(kitchen);

// Contact info > text section
const infoTextDiv = document.createElement("div");

const infoTextH2 = document.createElement("h2");
infoTextH2.textContent = "Contact Us"
infoTextDiv.appendChild(infoTextH2);

const infoTextPara = document.createElement("p");
infoTextPara.textContent = "Feel free to reach out—we're always happy to share our passion for great food and even better company. Your next delightful dining experience is just a message or call away!"
infoTextDiv.appendChild(infoTextPara); 

contactInfo.appendChild(infoTextDiv);

contactDiv.appendChild(contactInfo);

export function contactLoad() {
    content.appendChild(contactH1);
    content.appendChild(contactDiv);
}