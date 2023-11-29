const setRandomFilter = (picturesData, itemLimit = 10) => {
  const compare = () => .5 - Math.random();
  return picturesData.toSorted(compare).slice(0, itemLimit);
};

const setPopularFilter = (picturesData) => {
  const compare = (a, b) => b.comments.length - a.comments.length;
  return picturesData.toSorted(compare);
};

export {setRandomFilter, setPopularFilter};
