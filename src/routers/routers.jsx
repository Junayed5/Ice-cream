import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
    {
        path: "/",
        element : <Main/>,
        children : [
            {
                path: "/",
                element : <Home/>
            },
            {
                path : "/about",
                element : <About/>
            }
            ,
            {
                path : "/shop",
                element : <Shop/>
            }
        ]
    }
]);

export default router;