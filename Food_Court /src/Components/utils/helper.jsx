// Filter Restarunt Name
export const filterRestarunt = (searchInput, restarantsList) => {
  const filterRestaruntName = restarantsList.filter((restarant) => {
    return restarant.data.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
  return filterRestaruntName;
};
