const route = location.pathname.replaceAll("/", "");
const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "eng"
const router = {
    route,
    lang
}

export default router