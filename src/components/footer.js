import router from "../router"
import { getElement } from "../func"
import { siteInfo } from "../variables"
function component() {
    const small = `<small class="sp-footer">Copyright © 2024 ${siteInfo.site_name[router.lang]}</small>`
    const footer = `<footer>${small}</footer>`
    return getElement(footer)
}
export default component()