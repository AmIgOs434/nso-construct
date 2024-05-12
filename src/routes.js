
import { EXPERTIZA_ROUTER, GLAV_ROUTE, KONTACTS_ROUTE, OOMPANII_ROUTER,POJECTS_ROUTER,POJECTS_SHABLON_ROUTER,USLUGI_ROUTER} from "./utils/consts";
import GlavPages from "./pages/GlavPages";
import Okompanii from "./pages/Okompanii";
import Uslugi from "./pages/Uslugi";
import Expertiza from "./pages/Expertiza";
import Projects from "./pages/Projects";
import Project_shablon from "./pages/Project_shablon";
import Kontacts from "./pages/Kontacts";

export const adminRoutes = [


]

export const publicRoutes = [
    {
        path: GLAV_ROUTE,
        Component: GlavPages
    },
    {
        path: OOMPANII_ROUTER,
        Component: Okompanii
    },
    {
        path: USLUGI_ROUTER,
        Component: Uslugi
    },
    {
        path: EXPERTIZA_ROUTER,
        Component: Expertiza
    },
    {
        path: POJECTS_ROUTER,
        Component: Projects
    },

    {
        path: POJECTS_SHABLON_ROUTER,
        Component: Project_shablon
    },
    {
        path: KONTACTS_ROUTE,
        Component: Kontacts
    },

    
]

