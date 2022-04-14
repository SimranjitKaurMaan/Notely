export const handleSortByDate = (items, { sortBy }) => {
    switch (sortBy) {
      case "ascending":
        return items.sort(
          (firstItem, secondItem) => new Date(firstItem.createdAt).getTime() - new Date(secondItem.createdAt).getTime()
        );
      case "descending":
        return items.sort(
          (firstItem, secondItem) => new Date(secondItem.createdAt).getTime() - new Date(firstItem.createdAt).getTime()
        );
      default:
        return items;
    }
  };

  export const handleFilterByLabels = ( items, {labels}) => {
    const filteredItems = items.filter(item => item.tags.some(tag => labels.includes(tag)));
    return filteredItems;
}


const applyFunctions =
(filterParams, ...functions) =>
(filteredNotes) => {
    return functions.reduce(
    (accum, curr) => curr(accum, filterParams),
    filteredNotes
    );
};

export const applyFilterAndSorts = (state) => {
const {
    filteredNotes,
    sortBy,
    labels
} = state;
const composedFunctions = applyFunctions(
    { sortBy, labels },
    handleSortByDate,
    handleFilterByLabels
);

const updatedList = composedFunctions(filteredNotes);
return updatedList;
};