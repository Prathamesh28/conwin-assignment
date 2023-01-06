import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, CircularProgress, Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_USERS_FAIL,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../store/actionTypes";
import UserCard from "./UserCard";
import { Box } from "@mui/system";
function UserList() {
  const { users, loading } = useSelector((state) => ({
    users: state.users.users,
    loading: state.users.loading,
  }));
  const [userData, setUserData] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_USERS_REQUEST });
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((newData) => {
        dispatch({ type: FETCH_USERS_SUCCESS, payload: newData.data.data });
        return newData.data.data;
      })
      .catch((error) => {
        dispatch({ type: FETCH_USERS_FAIL });
      });
  }, [dispatch]);

  const getUserDetails = (userId) => {
    axios.get("https://reqres.in/api/users/" + userId).then((newUserData) => {
      setUserData(newUserData.data.data);
    });
  };

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Container style={{ padding: "10px" }}>
          <UserCard user={userData} />
          {users ? (
            <Grid container spacing={3}>
              {users.map((user) => {
                return (
                  <Grid item key={user.id}>
                    <Button
                      variant="contained"
                      onClick={() => getUserDetails(user.id)}
                    >
                      {user.id}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            "No Data"
          )}
        </Container>
      )}
    </>
  );
}

export default UserList;
