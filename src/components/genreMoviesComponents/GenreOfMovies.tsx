import React, {FC} from 'react';
import {IMovie} from "../../interfaces/movisInterface";
import { useNavigate} from "react-router-dom";
import {poster} from "../../constans/urls";
import {Rating} from "@mui/material";
import css from './GenreOfMovie.module.css'

interface IProps{
    movie:IMovie
}
const GenreOfMovies:FC<IProps> = ({movie}) => {
    // const [genreMovie, setGenreMovie] = useState<IGenre[]>([])
    let navigate = useNavigate();
    const { id, title, poster_path, vote_average}=movie
    const posterurl=`${poster}${poster_path}`

    const handle = () => {
        navigate(`/details/${id}`)
    }

    return (
        <div>
            {/*{isMatchingGenre && (*/}
                <div onClick={handle} className={css.wrapper}>
                    <h2 className={css.title}>{title}</h2>
                    <img src={posterurl} alt={title}/>
                    <Rating className={css.rating} name="customized-10" defaultValue={vote_average} precision={0.5} max={10.0} readOnly />
                </div>
            {/*)}*/}
        </div>
    );
};

export {GenreOfMovies};