import {useSearchParams} from "react-router-dom";

import css from './Paginations.module.css'

const Paginations = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page')?query.get('page'):'1'

    const next = () => {
        const nextPage = +currentPage + 1;
        setQuery({ page: nextPage.toString() });
    }

    const prev = () => {
        if (+currentPage > 1) {
            const prevPage = +currentPage - 1;
            setQuery({ page: prevPage.toString() });
        }
    }
    return (
        <div className={css.paginationContainer}>
            <button disabled={!currentPage || +currentPage === 1} onClick={prev} >prev</button>
            <button disabled={!currentPage || currentPage.length === 0} onClick={next} >next</button>
        </div>
    );
};

export default Paginations;