const livestock = (livestock = [], action) => {
  switch (action.type) {
    case "GET_LIVE":
      return action.payload;
    case "POST_LIVE":
      return [...livestock, action.payload];
    case "DEL_LIVE":
      return livestock.filter((item) => item._id !== action.payload);
    case "UP_LIVE":
      return livestock.map((l) =>
        l._id === action.payload._id ? action.payload : l
      );
    default:
      return livestock;
  }
};
export default livestock;
