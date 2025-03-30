import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { aboutLoad } from "./about";
import "./styles.css";

homeLoad();

const mainContent = document.querySelector("#content");
const pages = document.querySelectorAll("button");

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
            case "about":
                aboutLoad();
                break;
            default:
                homeLoad();
        }
    })
})

