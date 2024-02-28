import {useSearchParams} from "react-router-dom";
import {IMovie} from "../interfaces/movisInterface";
// import {FC} from "react";
//
// interface IQuery{
//     page:number
//     prevPage: () => void
//     nextPage: () => void
//     prev:any
//
// }
// const usePageQuery = ():IQuery => {
//     const [query, setQuery] = useSearchParams({page: '1'});
//     useSearchParams({page:'1'})
//     const page=query.get('page')
//     return {
//         page,
//             prevPage:()=>setQuery(prev=>{
//                 prev.set('page',(+prev.get('page')-1).toString())
//                 return prev
//     }),
//         nextPage:()=>setQuery(prev=>{
//             prev.set('page',(+prev.get('page')+1).toString())
//             return prev
//         })
// }
// };
// export {usePageQuery}

interface PageQuery {
    page:number,
    prevPage: () => void;
    nextPage: () => void;
}

const usePageQuery = (): PageQuery => {

    const [query, setQuery] = useSearchParams({ page: '1' });

    const page = parseInt(query.get('page') || '1', 10);

    return {
        page,
        prevPage: () => setQuery((prev) => {
            prev.set('page', (page - 1).toString());
            return prev;
        }),
        nextPage: () => setQuery((prev) => {
            const nextPage = page + 1;
            prev.set('page', nextPage.toString());
            return prev;
        }),
    };
};


export { usePageQuery };