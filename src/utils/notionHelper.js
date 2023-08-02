const swapKeyToId = (properties) => {
  return Object.values(properties).reduce((obj, property) => {
    const { id, ...rest } = property;
    return { ...obj, [id]: rest };
  }, {});
};

module.exports = {
  swapKeyToId,
};
