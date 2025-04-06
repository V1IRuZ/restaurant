import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact";
import "./styles.css";

// By default home page content is loaded
homeLoad();

const mainContent = document.querySelector("#content");
const pages = document.querySelectorAll("button");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

// Add logo to header
const logo = document.createElement("h1");
logo.classList.add("logo");
logo.textContent = "Ember&Feast";

header.insertBefore(logo, nav);

function resetDom () {
    while(mainContent.firstChild) {
        mainContent.removeChild(mainContent.lastChild);
    }
}

// First reset content DOM tree then load selected content
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

// Add footer
const footer = document.createElement("footer");

const footerPara = document.createElement("p");
footerPara.textContent = "This is not real restaurant";
footer.appendChild(footerPara);

document.body.appendChild(footer);


