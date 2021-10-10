import * as navbar from "./Components/navbar.js";
import * as footer from "./Components/footer.js";

window.onload = () => {
   footer.updateCopyRightYear();
}

window.onscroll = () => {
    navbar.scrollDetect()
}