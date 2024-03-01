import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import React from "react";
import {GenresOfMoviesList, MovieDetails, MoviesDetailsWithId, MoviesList} from "./components";
import {GenresPage, SerchesPage} from "./pages";



const router=createBrowserRouter([
    {
        path:'', element:<MainLayout/>
        , children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesList/>
            },
            {
                path:'details/:id', element:<MoviesDetailsWithId/>
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