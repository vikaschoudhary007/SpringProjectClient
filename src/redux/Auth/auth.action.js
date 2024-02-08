import axios from "axios"
import { API_BASE_URL } from "../../config/api"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./auth.actionType";

export const loginUserAction = (loginData) => async(dispatch) => {

  dispatch({type:LOGIN_REQUEST})


  try {
    const {data} = await axios.post(`${API_BASE_URL}/auth/login`, loginData.data,{
      headers: {
        'Content-Type': 'application/json',
      }
  });
    
    if(data.token){
      localStorage.setItem("jwt", data.token);
      
    }

    console.log("login Done-----", data)

    dispatch({type:LOGIN_SUCCESS, payload: data.token})
  } catch (error) {
    console.log("-----------login error", error);
    dispatch({type:LOGIN_FAILURE, payload:error})
  }
}

export const registerUserAction = (registerData) => async(dispatch) => {

  dispatch({type:REGISTER_REQUEST})

  console.log("registerdata : ", registerData);

  try {
    const {data} = await axios.post(`${API_BASE_URL}/auth/register`, registerData.data,{
      headers: {
        'Content-Type': 'application/json',
      }
  });
    
    if(data.token){
      localStorage.setItem("jwt", data.token);
      
    }

    console.log("Register Done-----", data)

    dispatch({type:REGISTER_SUCCESS, payload: data.token})
  } catch (error) {
    console.log("-----------register error", error);
    dispatch({type:REGISTER_FAILURE, payload:error})
  }
}