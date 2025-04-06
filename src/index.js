import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact";
import "./styles.css";

homeLoad();

const mainContent = document.querySelector("#content");
const pages = document.querySelectorAll("button");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

const logo = document.createElement("h1");
logo.classList.add("logo");
logo.textContent = "Ember&Feast";

header.insertBefore(logo, nav);

function resetDom () {
    while(mainContent.firstChild) {
        mainContent.removeChild(mainContent.lastChild);
    }
}

pages.forEach(page => {
    page.addEventListener("click", () => {
        resetDom();

        switch(page.id) {
            case "home":
                homeLoad();
                break;
            case "menu":
                menuLoad();
                break;
            case "contact":
                contactLoad();
                break;
            default:
                homeLoad();
        }
    })
})

