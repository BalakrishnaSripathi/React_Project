import { useState } from "react";
import {
  Alert,
  Button,
  TextField,
  Stack,
  Typography,
  IconButton,
  Card,
  CardContent,
  InputAdornment
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

export default function MaterialUiComponent() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);


  const handleSubmit = () => {
    if (!name || !password) return;

    setUsers([...users, { name, password }]);
    setName("");
    setPassword("");
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: 20 }}>
      <Stack spacing={2} width={300}>
        
        {/* Name with Icon */}
        <TextField
        placeholder="Enter Your Name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        {/* Password with Icon */}
        <TextField
        placeholder="Password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
        
        >
          
          
          Submit
        </Button>
      </Stack>

      <Typography variant="h6" mt={4}>
        Name & Password
      </Typography>

      <Stack spacing={2} mt={2} width={350}>
        {users.map((user, index) => (
          <Card key={index}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Typography>Name: {user.name}</Typography>
                <Typography>Password: {user.password}</Typography>
              </div>

              <IconButton color="error" onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}
