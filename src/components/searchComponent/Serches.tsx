import React, {ChangeEvent, useEffect, useState} from 'react';
import {ISerche} from "../../interfaces/movisInterface";
import {sercheService} from "../../services/sercheService";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import Serche from "./Serche";
import movie from "../MoviesContainet/Movie";
import {poster} from "../../constans/urls";

const Serches = () => {
    // const {state:{movie}}=useLocation()
    // console.log({state:{movie}})
    const [serches, setSerches] = useState<ISerche[]>([]);
    const [searchResults, setSearchResults] = useState<ISerche[]>([]);
    const [query, setQuery] = useSearchParams({ query: '', page: '1' });
    const queryValue = query.get('query') || '';
    const pageCurrent = query.get('page');
    // const {query} =useParams()
    // console.log(query)

    // useEffect(() => {
    //     sercheService.getAll().then(({ data }) => setSerches(data.results));
    //
    // }, [pageCurrent]);

    useEffect(() => {
        const filteredSerches = serches.filter((serche) =>
            serche.name.toLowerCase().includes(queryValue.toLowerCase())
        );
        setSearchResults(filteredSerches);
    }, [queryValue, serches]);

    useEffect(() => {
            sercheService.getQuery(queryValue, pageCurrent).then(({ data }) => {
                setSearchResults(data.results);
            });

    }, [pageCurrent]);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery({ query: event.target.value, page: '1' });
    };
const handleShowAll=()=>{
    sercheService.getQuery(queryValue, pageCurrent).then(({ data }) => {
        setSearchResults(data.results);
    });
}

    const next = () => {
        const nextPage = +pageCurrent + 1;
        setQuery({ query: queryValue, page: nextPage.toString() });
    };

    const prev = () => {
        const prevPage = +pageCurrent - 1;
        setQuery({ query: queryValue, page: prevPage.toString() });
    };

    return (
        <div>
            <input
                type="text"
                value={queryValue}
                onChange={handleInputChange}
                placeholder="Search movies..."
            />
            <button onClick={handleShowAll}>Show All</button>

            {searchResults?.map((serche) => (
                <Serche key={serche.id} serche={serche} poster={poster}/>
            ))}
            <div>
                <button onClick={prev}
                        disabled={!pageCurrent || +pageCurrent === 1}>prev</button>
                <button onClick={next}
                        disabled={!pageCurrent || searchResults.length === 0}>next</button>
            </div>
        </div>
    );
};

export default Serches;