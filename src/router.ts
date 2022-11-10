import { Router } from '@vaadin/router';

const router = new Router(document.querySelector(".root"));
router.setRoutes([
    { path: '/', component: 'welcome-page' },
    { path: '/horarios', component: 'horarios-page' }

]);
if (location.host.includes("github.io")) {
    Router.go("/");
} else if (location.pathname == "/") {
    Router.go("/");
} else {
    console.log("el handler recibio una nueva ruta", location.pathname);
}
