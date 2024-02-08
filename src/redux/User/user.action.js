import axios from "axios";
import {API_BASE_URL, api} from "../../config/api"
import {GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE} from "./user.actionType"

export const getProfileAction = (jwt) => async(dispatch) => {

  dispatch({type:GET_PROFILE_REQUEST})


  try {
    const {data} = await axios.get(`${API_BASE_URL}/api/users/profile`,{
      headers: {
        "Content-Type": 'application/json',
        "Authorization":`Bearer ${jwt}`
      }
  });

    console.log("User-----", data)

    dispatch({type:GET_PROFILE_SUCCESS, payload: data})
  } catch (error) {
    console.log("-----------error", error);
    dispatch({type:GET_PROFILE_FAILURE, payload:error})
  }
}

export const updateProfileAction = (userData) => async(dispatch) => {

  dispatch({type:UPDATE_PROFILE_REQUEST})


  try {
    const {data} = await api.put('/api/users/update', userData.data);

    console.log("Update Done-----", data)

    dispatch({type:UPDATE_PROFILE_SUCCESS, payload: data})
  } catch (error) {
    console.log("-----------update error", error);
    dispatch({type:UPDATE_PROFILE_FAILURE, payload:error})
  }
}