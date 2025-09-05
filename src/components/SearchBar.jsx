import { TextField, Box, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function SearchBar({ onSearch }) {
  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        label="Enter name or email"
        variant="outlined"
        onChange={(e) => onSearch(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search color="action" />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            backgroundColor: "#fafafa",
            boxShadow: 1,
            "&:hover fieldset": {
              borderColor: "primary.main",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
              borderWidth: 2,
            },
          },
        }}
      />
    </Box>
  );
}
