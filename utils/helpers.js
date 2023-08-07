module.exports = {
  makeTimestamp: (timestamp) => {
    return (
      timestamp.getMonth() +
      "/" +
      timestamp.getDate() +
      "/" +
      timestamp.getFullYear()
    );
  },
};
