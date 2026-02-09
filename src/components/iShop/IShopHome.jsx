import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  TextField,
  Card,
  CardContent,
  Alert,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function MaterialUiComponent() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!error) {
      setOpenSnackbar(true);
    }
  };

  return (
    <>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">MUI All Concepts</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {/* Form */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Form Example
                </Typography>

                <TextField
                  label="Username"
                  fullWidth
                  margin="normal"
                />

                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error}
                  onChange={(e) =>
                    setError(
                      e.target.value.length < 6
                        ? "Minimum 6 characters required"
                        : ""
                    )
                  }
                />

                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{ mt: 2 }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Alert & Dialog */}
          <Grid item xs={12} md={6}>
            <Alert severity="info" sx={{ mb: 2 }}>
              This is a MUI Alert component
            </Alert>

            <Button
              variant="outlined"
              onClick={() => setOpenDialog(true)}
            >
              Open Dialog
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="success" variant="filled">
          Form Submitted Successfully!
        </Alert>
      </Snackbar>

      {/* Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography>
            This is a MUI Dialog (Modal)
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
