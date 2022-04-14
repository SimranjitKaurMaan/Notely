import { createContext , useReducer, useContext } from "react";
import { filterReducer } from "../reducers/filterReducer";

const filterContext = createContext();

export const FilterProvider = ({children}) => {
    const [state , dispatch] = useReducer(filterReducer, {
        filteredNotes: [],
        sortBy: '',
        labels: []
    });

    const handleSortByDate = (sortBy, notes) => {
        dispatch({type: 'SORT_BY_DATE', payload: {sortBy, notes}});
    }

    const handleFilterByLabel = (label , notes) => {
        dispatch({type: 'FILTER_BY_LABEL', payload: {label, notes}});
    }

    return (<filterContext.Provider value={{ filteredState: state, handleSortByDate , handleFilterByLabel }}>
        {children}
    </filterContext.Provider>)
};

export const useFilter = () =>  useContext(filterContext);