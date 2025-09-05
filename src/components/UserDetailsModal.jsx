import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

export default function UserDetailsModal({ open, onClose, user }) {
  if (!user) return null;

  const { lat, lng } = user.address.geo;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{user.name}</DialogTitle>
      <DialogContent dividers>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Typography>Website: {user.website}</Typography>
        <Typography>
          Address: {user.address.street}, {user.address.city}
        </Typography>
        <Typography>Company: {user.company.name}</Typography>
        <Box sx={{ mt: 2 }}>
          <Button component={Link} to={`/users/${user.id}`} variant="outlined">
            Details Page
          </Button>
        </Box>
        <Box sx={{ mt: 2, height: "300px" }}>
          <MapContainer
            center={[lat, lng]}
            zoom={4}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OSM</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}>
              <Popup>{user.name}'s Location</Popup>
            </Marker>
          </MapContainer>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
