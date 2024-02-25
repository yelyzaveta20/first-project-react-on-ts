import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MoviesList from "./components/MoviesContainet/MoviesList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import React from "react";
import Genres from "./components/generalsComponent/Genres";

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
                path:'details', element:<MovieDetails/>
            },
            {
                path:'genres', element:<Genres/>
            }

        ]
    }
])
export {router}