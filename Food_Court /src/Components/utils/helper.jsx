// Filter Restarunt Name
export const filterRestarunt = (searchInput, restarants) => {
  const filterRestaruntName = restarants.filter((restarant) => {
    return restarant.data.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
  return filterRestaruntName;
};
