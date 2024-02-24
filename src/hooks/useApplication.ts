import {useLocation,Location} from "react-router-dom";

const useApplication= <T>():Location<T> => useLocation();
export {useApplication}