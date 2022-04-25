import * as api from "../api/livestock";

export const getLivestock = (id) => async (dispatch) => {
  try {
    const { data } = await api.getLivestockapi(id);
    dispatch({
      type: "GET_LIVE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postLivestock = (livestockData) => async (dispatch) => {
  try {
    const { data } = await api.postLivestockapi(livestockData);
    dispatch({
      type: "POST_LIVE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletelivestock = (id) => async (dispatch) => {
  try {
    await api.deletelivestock(id);
    dispatch({
      type: "DEL_LIVE",
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatelivestock = (id, liveData) => async (dispatch) => {
  try {
    const { data } = await api.updatelivestock(id, liveData);
    dispatch({
      type: "UP_LIVE",
      payload: data,
    });
  } catch (error) {
    console.log(data);
  }
};

export const getBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.getBlogs();
    dispatch({
      type: "LOAD",
      payload: data,
    });
    dispatch({
      type: "GET",
    });
  } catch (error) {
    console.log(error);
  }
};
