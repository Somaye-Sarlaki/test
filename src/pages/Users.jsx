import { useEffect, useState } from "react";
import { Container, CircularProgress, Grid } from "@mui/material";
import { getUsers } from "@services/api";
import UserList from "@components/UsersList";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      {loading ? (
        <Grid container justifyContent="center" sx={{ mt: 4 }}>
          <CircularProgress />
        </Grid>
      ) : (
        <UserList users={users} />
      )}
    </Container>
  );
}
