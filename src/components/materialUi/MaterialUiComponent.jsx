import { useState } from "react";
import {
  Button,
  TextField,
  Stack,
  Typography,
  IconButton,
  Card,
  CardContent
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

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
    const filtered = users.filter((_, i) => i !== index);
    setUsers(filtered);
  };

  return (
    <div style={{ padding: 20 }}>
      <Stack spacing={2} width={300}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <Typography>Name: {user.name}</Typography>
                <Typography>Password: {user.password}</Typography>
              </div>

              <IconButton
                color="error"
                onClick={() => handleDelete(index)}
              >
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}
