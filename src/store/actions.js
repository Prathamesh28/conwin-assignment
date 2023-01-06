import {
  FETCH_USERS_FAIL,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./actionTypes";

export const fetchUsersPending = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersError = (error) => ({
  type: FETCH_USERS_FAIL,
  payload: error,
});
