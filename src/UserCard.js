import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function UserCard({ user }) {
  return (
    <>
      {user ? (
        <Card sx={{ maxWidth: 345 }} style={{ margin: 20 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={user.avatar}
            title={user.name}
          />
          <CardContent>
            <Typography variant="body2">{"ID : " + user.id}</Typography>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              {user.first_name + " " + user.last_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {user.email}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ maxWidth: 400 }} style={{ margin: 20 }}>
          <Typography
            sx={{ fontSize: 20, padding: 1 }}
            color="text.secondary"
            gutterBottom
          >
            {"Please click any button below to select"}
          </Typography>
        </Card>
      )}
    </>
  );
}

export default UserCard;
