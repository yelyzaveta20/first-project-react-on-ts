import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MoviesList from "./components/MoviesContainet/MoviesList";

const router=createBrowserRouter([
    {
        path:'', element:<MainLayout/>
        , children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesList/>
            }

        ]
    }
])
export {router}