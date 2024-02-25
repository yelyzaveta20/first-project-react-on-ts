import React from 'react';
import Genres from "../components/generalsComponent/Genres";
import {Outlet} from "react-router-dom";

const GenresPage = () => {
    return (
        <div>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export default GenresPage;