import * as navbar from "./Components/navbar.js";
import * as footer from "./Components/footer.js";

window.onload = () => {
    scrollTo(0,0);
    footer.updateCopyRightYear();
    navbar.navbarListClick();
}

window.onscroll = () =>{
    navbar.scrollDetect();
}