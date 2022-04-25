const user = (
  prevState = {
    isLoading: false,
    isSignout: false,
    userToken: null,
    error: "",
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...prevState,
        isLoading: true,
        isSignout: false,
        userToken: action.payload,
      };
    case "LOGOUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    case "GET":
      return {
        ...prevState,
        isLoading: false,
      };
    case "GOT":
      return {
        ...prevState,
        isLoading: false,
      };
    case "ERR":
      return {
        ...prevState,
        error: action.payload,
      };
    case "ERR_REM":
      // console.log("in rem redure");
      return {
        ...prevState,
        error: "",
      };
    default:
      return prevState;
  }
};

export default user;
