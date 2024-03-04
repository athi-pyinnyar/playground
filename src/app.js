import { getElement } from "./func"
import router from "./router"
import navbar from "./components/navbar"
import home from "./pages/home"
import about from "./pages/about"
import contact from "./pages/contact"
import footer from "./components/footer"

function app() {
    // APP
    const app = document.getElementById("app")

    // NAVBAR
    app.innerHTML = navbar

    // PAGES
    const page = getElement(`<div class="page"></div>`)
    switch (router.route) {
        case "": 
            page.innerHTML = home
            break;
        case "about": 
            page.innerHTML = about
            break;
        case "contact": 
            page.innerHTML = contact 
            break;
        default:
            break;
    }
    app.appendChild(page)
    
    // FOOTER
    app.appendChild(footer)
}

app()
  