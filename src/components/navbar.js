import router from "../router"
import { siteInfo } from "../variables"

function component() {
    const navs = [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Contact", url: "/contact" }
    ]

    let lis = ""
    navs.map(n => {
        let a = ""
        if(n.target){
            a = `<a href="${n.url}" target="${n.target}">${n.label}</a>`
        }else{
            a = `<a href="${n.url}">${n.label}</a>`
        }
        const li = `<li>${a}</li>`
        lis += li
    })
    const navbar = `
    <div class="nav-bar sp-none">
        <a href="">${siteInfo.site_name[router.lang]}</a>
        <nav>
            <ul>
                ${lis}
            </ul>
        </nav>
    <div>
    `

    return navbar
}
export default component()