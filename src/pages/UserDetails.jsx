import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUsers } from "@services/api";
import {
  Container,
  CircularProgress,
  Typography,
  Box,
  Button,
} from "@mui/material";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const users = await getUsers();
        const found = users.find((u) => u.id === parseInt(id));
        setUser(found);
      } catch (err) {
        console.error("Failed to load user", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!user) return <Typography>User not found</Typography>;

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4">{user.name}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>Phone: {user.phone}</Typography>
      <Typography>Website: {user.website}</Typography>
      <Typography>
        Address: {user.address.street}, {user.address.city}
      </Typography>
      <Typography>Company: {user.company.name}</Typography>
    </Container>
  );
}
