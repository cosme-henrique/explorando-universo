import { Router } from "./router.js"

const route = new Router()
route.add('/', "/pages/home.html")
route.add('/universe', "/pages/universe.html")
route.add('/exploration', "/pages/exploration.html")
route.add(404, "/pages/404.html")

route.handle()

window.onpopstate = () => route.handle()
window.route = () => route.route()