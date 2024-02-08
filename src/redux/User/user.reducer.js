import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE } from "./user.actionType";

const initialState = {
  user: null,
  error: null,
  loading: false
}

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {...state, loading : false, error: null}

    case GET_PROFILE_SUCCESS:
      return {...state, user:action.payload, loading: false, error: null};

    case GET_PROFILE_FAILURE:
        return {...state, loading:false, error: action.payload};

    default:
      return state;
  }
}