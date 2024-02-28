import React, {FC} from 'react';
import {IMovie, ISerche} from "../../interfaces/movisInterface";
import {poster} from "../../constans/urls";
import {useLocation} from "react-router-dom";
interface IProps{
    serche:ISerche
    poster:any
}
const Serche :FC<IProps>= ({serche, poster}) => {
    const {id, name}=serche
    // const {state:{movie}}=useLocation()
    // const {poster_path}=movie
    // const posterurl=`${poster}${poster_path}`
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            {/*<img src={posterurl} alt={name}/>*/}
        </div>
    );
};

export default Serche;