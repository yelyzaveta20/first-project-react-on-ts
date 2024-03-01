import React, {useEffect, useState} from 'react';
import {IMovieDetails} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";
import {useLocation, useParams} from "react-router-dom";
import {MovieDetails} from "./MovieDetails";

const MoviesDetailsWithId = () => {
    const {id} =useParams()
    console.log(id)
    const [moviDetails, setMoviDetails] = useState<IMovieDetails>();

    useEffect(() => {
        if (+id){
            movieService.detailsMovie(+id).then(({ data }) => {
                setMoviDetails(data);
                console.log(data);
            });
        }

    }, [id]);
    console.log(moviDetails);
    return (
        <div>
           <MovieDetails key={moviDetails?.id} moviDetails={moviDetails}/>
        </div>
    );
};

export {MoviesDetailsWithId};