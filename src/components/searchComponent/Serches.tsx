import React, {useEffect, useState} from 'react';
import {ISerche} from "../../interfaces/movisInterface";
import {sercheService} from "../../services/sercheService";
import {useSearchParams} from "react-router-dom";
import Serche from "./Serche";

const Serches = () => {
    const [serches, setSerches] = useState<ISerche[]>([])
    const [query,setQuery] = useSearchParams({query:''})
    const queryValue = query.get('query') || '';
    useEffect(() => {
        sercheService.getAll().then(({data})=>setSerches(data.results))
    }, []);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery({ query: event.target.value });
    };

    const filteredSerches = serches.filter((serche) =>
        serche.name.toLowerCase().includes(queryValue.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={queryValue}
                onChange={handleInputChange}
                placeholder="Search movies..."
            />

                {/*{filteredSerches?.map((serche) => <Serche key={serche.id} serche={serche}/> )}*/}

        </div>
    );
};

export default Serches;