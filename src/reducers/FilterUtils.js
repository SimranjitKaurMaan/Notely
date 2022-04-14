export const handleSortByDate = (items, { sortBy }) => {
    console.log(`items: ${JSON.stringify(items)}`)
    console.log(`sortBy: ${sortBy}`);
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
    console.log(`items: ${JSON.stringify(items)}`)
    console.log(`labels: ${labels}`);
    const filteredItems = items.filter(item => item.tags.some(tag => labels.includes(tag)));
    return filteredItems;
}


const functionalChaining =
(filterParams, ...functions) =>
(notes) => {
    return functions.reduce(
    (accum, curr) => curr(accum, filterParams),
    notes
    );
};

export const applyFilterAndSorts = (state) => {
const {
    notes,
    sortBy,
    labels
} = state;
const composedFunctions = functionalChaining(
    { sortBy, labels },
    handleSortByDate,
    handleFilterByLabels
);

const updatedList = composedFunctions(notes);
return updatedList;
};