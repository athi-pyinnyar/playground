import icons from "../icons"
import mac from "/src/assets/images/macbook.png"
import ios from "/src/assets/images/iphone14pro.png"
import android from "/src/assets/images/android.png"
import app_store_icon from "/src/assets/images/app_store_icon.png"
import app_store_android from "/src/assets/images/app_store_android.png"

const WA_NAV = `<div class="wa-navbar">
    <span class="wan-brand"></span>
    <nav>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <span class="menu"></span>
    </nav>
</div>
`
const WA_LOGO = `<div class="wa-logo">
    <span class="wa-txt">WEBVIEW APP</span>
    <span class="font-2">PLAYGROUND</span>
</div>
`

const WA_BANNER = `<div class="wa-banner">

</div>
`

const WA_ICONS = 6
const getIcons = () => {
    let icons_html = ""
    for (let i = 1; i < WA_ICONS + 1; i++) {
        icons_html += `<div class="wa-card" style="animation-delay: ${(13+(i*0.25))*1000}ms;">
        <small></small>
        </div>
        `
    }
    return `<div class="wa-icons">
    ${icons_html}
    </div>
    `
}
const WA_MENUS = 5
const getMenus = () => {
    let menu_html = ""
    for (let i = 1; i < WA_MENUS + 1; i++) {
        menu_html += `<li>
            <span class="menu-item"></span>
        </li>
        `
    }
    return menu_html
}
const getConverter = (counts, arrow) => {
    let menu_html = ""
    for (let i = 1; i <= counts; i++) {
        menu_html += `<span>${icons[arrow]}</span>`
    }
    return menu_html
}
const appStoreIcon = (os) => {
    const appStoreHtml = `<div class="app-store">
        <img src="${ os == 'ios' ? app_store_icon : app_store_android}" />
    </div>
    `
    return appStoreHtml
}
const WA_HAMBURGER = `<div class="wa-hb-menu">
    <div class="hb-menu">
        <ul>
            <li><span class="close-menu"></span></li>
            ${getMenus()}
        </ul>
    </div>
</div>
`
const component = () => {
    const component = `
    <div class="home">
        <div class="banner">
            <div class="start-logo">
                <span class="wa-txt">WEBVIEW APP</span>
                <span class="font-2">Convert your website to mobile app.</span>
            </div>
            <div class="container">
                <div class="mac">
                    <div class="mac-img attribute">
                        <img src="${mac}">
                        <div class="mac-inner-content">
                            ${WA_NAV}
                            ${WA_BANNER}
                            ${getIcons()}
                        </div>
                    </div>
                </div>
                <div class="convert">
                    <span class="c-arrow"></span>
                </div>
                <div class="phone">
                    <div class="phone-img">
                        ${appStoreIcon("ios")}
                        <img src="${ios}" class="device-img" alt="Image by svstudioart on Freepik">
                        
                        <div class="phone-inner-content ios">
                            ${WA_NAV}
                            ${WA_BANNER}
                            ${getIcons()}
                            ${WA_HAMBURGER}
                        </div>
                    </div>
                    <div class="phone-img">
                        ${appStoreIcon("android")}
                        <img src="${android}" class="device-img" alt="png image from pngtree.com">
                        
                        <div class="phone-inner-content android">
                            ${WA_NAV}
                            ${WA_BANNER}
                            ${getIcons()}
                            ${WA_HAMBURGER}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div>
    `
    return component
}
export default component()

{/* <a class="attr-text" href="https://www.freepik.com/free-vector/new-modern-realistic-front-view-black-iphone-mockup-isolated-white-mobile-template-vector_33632328.htm#query=iphone%2014%20png&position=0&from_view=keyword&track=ais&uuid=083cc49a-f3d2-4da6-bdce-b6f4f4ed2bdc" target="_blank">Image by svstudioart on Freepik</a>  */}
{/* <a class="attr-text" href="https://pngtree.com/freepng/macbook-pro-16-2019_9190542.html" target="_blank">png image from pngtree.com</a>  */}
{/* <a class="attr-text" href='https://pngtree.com/freepng/mobile-mockup-black-android-smartphone-frame-design-hanging-on-transparent-background_6067790.html' target="_blank">png image from pngtree.com/</a>pos */}