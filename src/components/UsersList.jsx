import { Grid } from "@mui/material";
import UserCard from "./UserCard";

export default function UsersList({ users }) {
  return (
    <Grid container spacing={3} justifyContent="center">
      {users.map((user) => (
        <Grid item key={user.id}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
}
