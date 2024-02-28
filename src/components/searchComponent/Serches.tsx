import React, {useEffect, useState} from 'react';
import {ISerche} from "../../interfaces/movisInterface";
import {sercheService} from "../../services/sercheService";
import {useLocation, useSearchParams} from "react-router-dom";
import Serche from "./Serche";
import movie from "../MoviesContainet/Movie";
import {poster} from "../../constans/urls";

const Serches = () => {

    const [serches, setSerches] = useState<ISerche[]>([]);
    const [query, setQuery] = useSearchParams({ query: '' });
    const queryValue = query.get('query') || '';
    const [searchResults, setSearchResults] = useState<ISerche[]>([]);
    useEffect(() => {
        sercheService.getAll().then(({ data }) => setSerches(data.results));
    }, []);

    useEffect(() => {
        const filteredSerches = serches.filter((serche) =>
            serche.name.toLowerCase().includes(queryValue.toLowerCase())
        );
        setSearchResults(filteredSerches);
    }, [queryValue, serches]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery({ query: event.target.value });
    };

    const handleShowAll = () => {
        sercheService.getQuery(queryValue).then(({ data }) => {
            setSearchResults(data.results);
        });
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
        </div>
    );
};

export default Serches;