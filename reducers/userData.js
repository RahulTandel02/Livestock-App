const userData = (userData = [], action) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload;
    case "UPDATE_USER":
      return action.payload;
    case "REMOVE":
      return [];
    default:
      return userData;
  }
};

export default userData;
