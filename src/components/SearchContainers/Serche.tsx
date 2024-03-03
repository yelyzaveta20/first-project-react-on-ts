import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";

import {IMovie} from "../../interfaces/movisInterface";
import {useTheme} from "../../hoc";
import css from "./Serches.module.css";
interface IProps{
    movie:IMovie
    poster:string

}
const Serche :FC<IProps>= ({movie, poster}) => {
    let navigate = useNavigate();

    const {id, title, poster_path, vote_average}=movie

    // const {state:{movie}}=useLocation()
    const posterurl=`${poster}${poster_path}`
    const handle = () => {
        navigate(`/details/${id}`)
    }
    const { darkTheme} = useTheme();
    return (
        <div onClick={handle} className={`${css.allS} ${darkTheme ? css.movieLight : css.movieDark}`}>
            <div className={css.posters}>
                <div className={css.h2Div}>
                    <h3>{title}</h3>
                </div>

                {poster_path?(
                    <img src={posterurl} alt={title}/>
                ): (
                    <img src={`https://th.bing.com/th?id=OIF.s1S%2fxuarov%2fLtVlIpIFzaQ&rs=1&pid=ImgDetMain`} alt='none'/>
                )}
                <Rating className={css.rating} name="customized-10" defaultValue={vote_average} precision={0.5} max={10.0} readOnly />
            </div>

        </div>
    );
};

export {Serche};