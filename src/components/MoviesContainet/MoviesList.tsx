import {FC, useEffect, useState} from "react";
import {IMovie} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";

import Movie from "./Movie";
import {poster} from "../../constans/urls";
import css from './Movie.module.css'
import {usePageQuery} from "../../hooks/usePageQuery";


const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const {page, nextPage, prevPage } = usePageQuery();
    useEffect(() => {
        movieService.getAll().then(({data})=>{
            setMovies(data.results)
            console.log(data)
        })
    }, [page]);
    // useEffect(() => {
    //     movieService.getAllPage(page).then(({data})=>setMovies(()=> {
    //         const {page, results} = data;
    //         return {
    //             page,
    //             results
    //         }
    //
    //     }))
    // }, [page]);
    // useEffect(() => {
    //     movieService.getAllPage(page).then(({ data }) => {
    //         const { page, results } = data;
    //         setMovies({
    //             page,
    //             results
    //         });
    //     });
    // }, [page]);
    return (
        <div>
            <div className={css.Movies}>
                {movies.map(movies=><Movie key={movies.id} movie={movies} poster={poster}/>)}
            </div>
            <div className={css.buttons}>
                <button onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export default MoviesList;