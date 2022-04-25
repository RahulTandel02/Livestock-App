const blog = (blog = [], action) => {
  switch (action.type) {
    case "LOAD":
      return action.payload;
    default:
      return blog;
  }
};

export default blog;
