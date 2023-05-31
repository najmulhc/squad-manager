import { useFormik } from "formik";
import { useNavigate } from "react-router";
import {
  TextField,
  Button,
  Container,
  Grid,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const PlayerForm = ({
  name,
  age,
  playerType,
  matchesPlayed,
  text
}: {
  name: string;
  age: string | number;
  playerType: "Batter" | "WicketKeeper" | "Bowler";
  matchesPlayed: string | number; text: "Add Player" | "Update Player"
}) => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    age: "",
    playerType: "",
    matchesPlayed: "",
  };

  const handleSubmit = (values) => {
    console.log(values); // You can perform your desired actions here
    navigate("/");
  };

  // performing form validation using formik
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate: (values) => {
      const errors = {};

      if (!name && !values.name) {
        errors.name = "Required";
      }

      if (!age && !values.age) {
        errors.age = "Required";
      } else if (parseInt(values.age) < 18 || parseInt(values.age) > 32) {
        errors.age = "Age must be between 18 and 32";
      }

      if (!playerType && !values.playerType) {
        errors.playerType = "Required";
      }

      if (!matchesPlayed && !values.matchesPlayed) {
        errors.matchesPlayed = "Required";
      } else if (parseInt(values.matchesPlayed) > 150) {
        errors.matchesPlayed = "A  player Can not play more than 150 matches";
      } else if (parseInt(values.matchesPlayed) < 0) {
        errors.matchesPlayed =
          "A player can not play negative amount of matches";
      }

      return errors;
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 2,
          p: 3,
          borderRadius: 4,
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="name"
                name="name"
                label="Name"
                value={ formik.values.name || name }
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="age"
                name="age"
                label="Age"
                type="number"
                value={formik.values.age || age}
                onChange={formik.handleChange}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="playerType-label">Player Type</InputLabel>
                <Select
                  labelId="playerType-label"
                  id="playerType"
                  name="playerType"
                  label="Player Type"
                  value={formik.values.playerType || playerType}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.playerType &&
                    Boolean(formik.errors.playerType)
                  }
                  fullWidth
                >
                  <MenuItem value="">Select player type</MenuItem>
                  <MenuItem value="Batter">Batter</MenuItem>
                  <MenuItem value="WicketKeeper">Wicket Keeper</MenuItem>
                  <MenuItem value="Bowler">Bowler</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="matchesPlayed"
                name="matchesPlayed"
                label="Matches Played"
                type="number"
                value={formik.values.matchesPlayed || matchesPlayed}
                onChange={formik.handleChange}
                error={
                  formik.touched.matchesPlayed &&
                  Boolean(formik.errors.matchesPlayed)
                }
                helperText={
                  formik.touched.matchesPlayed && formik.errors.matchesPlayed
                }
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
              >
               {text}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default PlayerForm;
