import * as api from "../api/user";
// import protect from './auth'

export const RetriveData = (token) => async (dispatch) => {
  try {
    dispatch({
      type: "GET",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (token) => async (dispatch) => {
  try {
    const { data } = await api.getUser(token);
    dispatch({
      type: "GET_USER",
      payload: data.data,
    });
    dispatch({
      type: "GET",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserWithToken = (token) => async (dispatch) => {
  try {
    // const { data } = await api.getUser(token);
    dispatch({
      type: "LOGIN",
      payload: token,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.postUser(user);
    dispatch({
      type: "LOGIN",
      payload: data.token,
    });
  } catch (error) {
    // console.log(error.response.data.message);
    dispatch({
      type: "ERR",
      payload: error.response.data.message,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(user);
    dispatch({
      type: "LOGIN",
      payload: data.token,
    });
  } catch (error) {
    // console.log({ ...error });

    // console.log(error.response.data.message);
    dispatch({
      type: "ERR",
      payload: error.response.data.message,
    });
  }
};

export const logOut = (user) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT",
    });
    dispatch({
      type: "REMOVE",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, userData) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, userData);

    dispatch({
      type: "UPDATE_USER",
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeError = () => async (dispatch) => {
  try {
    dispatch({
      type: "ERR_REM",
    });
  } catch (error) {
    console.log(error);
  }
};
