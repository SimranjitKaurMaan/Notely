import { handleFilterByLabels, handleSortByDate } from "./FilterUtils";

export const filterReducer = (state, action) => {
    switch(action.type) {
        case "SORT_BY_DATE":{
            let result = [...action.payload.notes];
            //result = applyFilterAndSorts(state);
            const sortType = action.payload.sortBy;
            const sortedByDate = handleSortByDate([...result],{sortBy: sortType});
            //console.log(sortedByDate);
            return {
              ...state,
              filteredNotes: sortedByDate,
              sortBy: action.payload.sortBy
            }
          };
        case "FILTER_BY_LABEL":{
            let result = [...action.payload.notes];
            //const newState = {...state, labels: distinctLabels}
            //result = applyFilterAndSorts(newState);
            const label = action.payload.label;
            const newLabels = state.labels.includes(label) ? state.labels.filter(l => l!== label) : [...state.labels, label];
            const filteredNotes = handleFilterByLabels([...result],{labels: newLabels});
            console.log(`filteredNotes: ${JSON.stringify(filteredNotes)}`);
            return {
              ...state,
              filteredNotes: filteredNotes,
              labels: newLabels
          }
          };
       default: return state;     
    }
}