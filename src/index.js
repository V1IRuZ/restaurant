import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact";
import "./styles.css";

const content = document.querySelector("#content");
const pages = document.querySelectorAll("button");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

// Add logo to header
const logo = document.createElement("h1");
logo.classList.add("logo");
logo.textContent = "Ember&Feast";

header.insertBefore(logo, nav);

function resetDom () {
    while(content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

// By default home page content is loaded
homeLoad(content);

// First reset content DOM tree then load selected content
pages.forEach(page => {
    page.addEventListener("click", () => {
        resetDom();

        switch(page.id) {
            case "home":
                homeLoad(content);
                break;
            case "menu":
                menuLoad(content);
                break;
            case "contact":
                contactLoad(content);
                break;
            default:
                homeLoad(content);
        }
    })
})

// Add footer
const footer = document.createElement("footer");

const footerPara = document.createElement("p");
footerPara.textContent = "This is not a real restaurant";
footer.appendChild(footerPara);

document.body.appendChild(footer);


