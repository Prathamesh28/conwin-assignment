import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../actionTypes";

const initialState = {
  users: [],
  loading: false,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default usersReducer;
