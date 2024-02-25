import {useSearchParams} from "react-router-dom";
// import {FC} from "react";
//
// interface IQuery{
//     page:string
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