import {FC, useEffect, useState} from "react";
import {IMovie} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";

import Movie from "./Movie";
import {poster} from "../../constans/urls";
import css from './Movie.module.css'
import {usePageQuery} from "../../hooks/usePageQuery";
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query,setQuery] = useSearchParams({page:'1'})
    const page = query.get('page');
    useEffect(() => {
        movieService.getAllPage(page).then(({data})=>{
            setMovies(data.results)
        })
    }, [page]);

    const previousPage = (newPage:any)=>{

        setQuery({ ...query, page: newPage })
    }
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
                <button onClick={() => previousPage(parseInt(page || '1' ) - 1)}>prev</button>
                <button onClick={() => previousPage(parseInt(page || '1' ) + 1)}>next</button>
            </div>
        </div>
    );
};

export default MoviesList;