
import { EXPERTIZA_ROUTER, Ekat_ROUTE, Electrostal_ROUTE, GLAV_ROUTE, KONTACTS_ROUTE, Kazan_Expr_ROUTE, Krasnodar_ROUTE, Kuchino_ROUTE, Nevinnomisk_ROUTE, New_Moskow_ROUTE, Novosib_ROUTE, OOMPANII_ROUTER,POJECTS_ROUTER,POJECTS_SHABLON_ROUTER,Podolsk_ROUTE,SPB_ROUTE,Samara_ROUTE,Sarpul_ROUTE,Tambov_ROUTE,Tula_ROUTE,USLUGI_ROUTER, Vladimir_ROUTE, Yurga_ROUTE} from "./utils/consts";
import GlavPages from "./pages/GlavPages";
import Okompanii from "./pages/Okompanii";
import Uslugi from "./pages/Uslugi";
import Expertiza from "./pages/Expertiza";
import Projects from "./pages/Projects";
import Project_shablon from "./pages/Project_shablon";
import Kontacts from "./pages/Kontacts";
import Ekat from "./pages/pages_projects/Ekat";
import Electrostal from "./pages/pages_projects/Electrostal";
import Kazan_Expr from "./pages/pages_projects/Kazan_Expr";
import Krasnodar from "./pages/pages_projects/Krasnodar";
import Kuchino from "./pages/pages_projects/Kuchino";
import Nevinnomisk from "./pages/pages_projects/Nevinnomisk";
import New_Moskow from "./pages/pages_projects/New_Moskow";
import Novosib from "./pages/pages_projects/Novosib";
import Podolsk from "./pages/pages_projects/Podolsk";
import Samara from "./pages/pages_projects/Samara";
import Sarpul from "./pages/pages_projects/Sarpul";
import SPB from "./pages/pages_projects/SPB";
import Tambov from "./pages/pages_projects/Tambov";
import Tula from "./pages/pages_projects/Tula";
import Vladimir from "./pages/pages_projects/Vladimir";
import Yurga from "./pages/pages_projects/Yurga";

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

    









    {
        path: Ekat_ROUTE,
        Component: Ekat
    },
    {
        path: Electrostal_ROUTE,
        Component: Electrostal
    },
    {
        path: Kazan_Expr_ROUTE,
        Component: Kazan_Expr
    },
    {
        path: Krasnodar_ROUTE,
        Component: Krasnodar
    },
    {
        path: Kuchino_ROUTE,
        Component: Kuchino
    },
    {
        path: Nevinnomisk_ROUTE,
        Component: Nevinnomisk
    },
    {
        path: New_Moskow_ROUTE,
        Component: New_Moskow
    },
    {
        path: Novosib_ROUTE,
        Component: Novosib
    },
    {
        path: Podolsk_ROUTE,
        Component: Podolsk
    },
    {
        path: Samara_ROUTE,
        Component: Samara
    },
    {
        path: Sarpul_ROUTE,
        Component: Sarpul
    },
    {
        path: SPB_ROUTE,
        Component: SPB
    },
    {
        path: Tambov_ROUTE,
        Component: Tambov
    },
    {
        path: Tula_ROUTE,
        Component: Tula
    },
    {
        path: Vladimir_ROUTE,
        Component: Vladimir
    },
    {
        path: Yurga_ROUTE,
        Component: Yurga
    },
]

