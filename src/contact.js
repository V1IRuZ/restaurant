class Staff {
    constructor(name, title, phone, email) {
        this.name = name;
        this.title = title;
        this.phone = phone;
        this.email = email;
    }
}

const mainChef = new Staff("Jack", "Chef", "+358 40 987 65430", "jack@emberandfeast.fi");
const otherChef = new Staff("Julie", "Cheff", "+358 40 987 65431", "juliek@emberandfeast.fi")
const waiter1 = new Staff("John", "Waiter", "+358 40 987 65432", "john@emberandfeast.fi");
const waiter2 = new Staff("Sophie", "Waiter", "+358 40 987 65433", "sophie@emberandfeast.fi");


export function contactLoad() {
    console.log("Contact");
}