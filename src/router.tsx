import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import {GenresOfMoviesList} from "./components";
import {GenresPage, MoviesDetailsPage, MoviesPage, SerchesPage} from "./pages";



const router=createBrowserRouter([
    {
        path:'', element:<MainLayout/>
        , children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>
            },
            {
                path:'details/:id', element:<MoviesDetailsPage/>
            },
            {
                path:'genres', element:<GenresPage/>,  children:[
                    {
                        path:'moviesgeeneres/:id', element:<GenresOfMoviesList/>
                    }
                ]
            },
            {
                path:'search', element:<SerchesPage/>
            }

        ]
    }
])
export {router}