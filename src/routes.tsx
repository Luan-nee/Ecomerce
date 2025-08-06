import { createBrowserRouter } from "react-router-dom";
import ListProductView from "./pages/ListProductView";
import { MaindData } from "./layout/MainData";
import App from "./App";


const router = createBrowserRouter([
    {
        element: <MaindData/>,
        children:[{
            path:'/',
            element: <App/> 
        },
            {
                path:'/productos',
                element: <ListProductView/>
            }
        ]
    },
])

export default router;

