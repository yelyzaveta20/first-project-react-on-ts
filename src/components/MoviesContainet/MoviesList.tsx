import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren{

}
const MoviesList:FC<IProps> = () => {
    return (
        <div>
            MoviesList
        </div>
    );
};

export default MoviesList;