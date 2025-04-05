class Staff {
    constructor(name, title, phone, email) {
        this.name = name;
        this.title = title;
        this.phone = phone;
        this.email = email;
    }
}

const mainChef = new Staff("Jack", "Chef & Owner", "+358 40 987 65430", "jack@emberandfeast.fi");
const otherChef = new Staff("Julie", "Chef", "+358 40 987 65431", "julie@emberandfeast.fi")
const waiter1 = new Staff("John", "Chef & Waiter", "+358 40 987 65432", "john@emberandfeast.fi");
const waiter2 = new Staff("Sophie", "Waiter", "+358 40 987 65433", "sophie@emberandfeast.fi");
const waiter3 = new Staff("Sarah", "Waiter", "+358 40 987 65434", "sarah@emberandfeast.fi");
const manager = new Staff("Mike", "Manager & Owner", "+358 40 987 65435", "mike@emberandfeast.fi");


export function contactLoad() {
    const content = document.querySelector("#content");

    const contactH1 = document.createElement("h1");
    contactH1.textContent = "Contact";
    content.appendChild(contactH1);

    const contact = document.createElement("div");
    contact.classList.add("contact-staff");

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
        contact.appendChild(staffDiv);
    }

    createStaffDiv(mainChef);
    createStaffDiv(otherChef);
    createStaffDiv(waiter1);
    createStaffDiv(waiter2);
    createStaffDiv(waiter3);
    createStaffDiv(manager);

    // const location = document.createElement("div");
    // location.classList.add("location");

    // const locationH2 = document.createElement("h2");
    // locationH2.textContent = "Location";

    // location.appendChild(locationH2);

    // const address = document.createElement("p");
    // address.textContent = "Emberstreet 45, Helsinki, Finland";
    // location.appendChild(address);



    content.appendChild(contact);
}