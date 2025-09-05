import { Card, CardContent, Typography, Avatar } from "@mui/material";
import { useState } from "react";
import UserDetailsModal from "./UserDetailsModal";

export default function UserCard({ user }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        sx={{
          width: 250,
          height: 260,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#f5f5f7",
          mx: "auto",
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            px: 2,
          }}
        >
          <Avatar sx={{ width: 56, height: 56, mb: 2, bgcolor: "#1976d2" }}>
            {user.name[0]}
          </Avatar>
          <Typography variant="h6" fontWeight="bold">
            {user.name}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {user.email}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {user.phone}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {user.address.city}
          </Typography>
        </CardContent>
      </Card>
      <UserDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        user={user}
      />
    </>
  );
}
