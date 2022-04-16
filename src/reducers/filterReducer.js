import { applyFilterAndSorts, handleFilterByLabels, handleSortByDate } from "./FilterUtils";

export const filterReducer = (state, action) => {
    switch(action.type) {
        case "SORT_BY_DATE":{
            let result = [...action.payload.notes];
            state.filteredNotes = result;
            result = applyFilterAndSorts(state);
            const sortType = action.payload.sortBy;
            const sortedByDate = result.length === 0 ? handleSortByDate([...action.payload.notes],{sortBy: sortType}) : handleSortByDate([...result],{sortBy: sortType})
            return {
              ...state,
              filteredNotes: sortedByDate,
              sortBy: action.payload.sortBy
            }
          };
        case "FILTER_BY_LABEL":{
            let result = [...action.payload.notes];
            result = handleSortByDate([...result], state);
            const label = action.payload.label;
            const newLabels = state.labels.includes(label) ? state.labels.filter(l => l!== label) : [...state.labels, label];
            const filteredNotes = handleFilterByLabels([...result],{labels: newLabels})
            return {
              ...state,
              filteredNotes: filteredNotes,
              labels: newLabels
           }
          };
        case "CLEAR_FILTERS" : {
          return {
            ...state,
            filteredNotes: [],
            sortBy: '',
            labels: []
          }
        }  
       default: return state;     
    }
}