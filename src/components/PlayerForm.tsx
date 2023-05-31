import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { addPlayer } from "../reducers/PlayerSlice";
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
import { useDispatch } from "react-redux";

const PlayerForm = ({
  name,
  age,
  playerType,
  matchesPlayed,
  text,
}: {
  name: string;
  age: string;
  playerType: "Batter" | "WicketKeeper" | "Bowler";
  matchesPlayed: string;
  text: "Add Player" | "Update Player";
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues: {
    name: string;
    age: string;
    playerType: "Batter" | "WicketKeeper" | "Bowler";
    matchesPlayed: string;
  } = {
    name: "",
    age: "",
    playerType: "Batter",
    matchesPlayed: "",
  };

  const handleSubmit = (values: {
    name: string;
    age: string;
    playerType: "Batter" | "WicketKeeper" | "Bowler";
    matchesPlayed: string;
  }) => {
    // You can perform your desired actions here

    console.log(values);
    dispatch(addPlayer({ ...values }));
    navigate("/");
  };

  // performing form validation using formik
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate: (values) => {
      const errors: {
        name?: string;
        age?: string;
        playerType?: string;
        matchesPlayed?: string | number;
      } = {};

      if (!name && values.name === "") {
        errors.name = "Enter the Name of the Player";
      }

      if (!age && !values.age) {
        errors.age = "Enter the age of the Player";
      } else if (parseInt(values.age) < 18 || parseInt(values.age) > 37) {
        errors.age = "Age must be between 18 and 37";
      }

      if (!playerType && !values.playerType) {
        errors.playerType = "Select the type of the Player";
      }

      if (!matchesPlayed && !values.matchesPlayed) {
        errors.matchesPlayed =
          "Enter the number of matches played by the Player";
      } else if (parseInt(values.matchesPlayed) > 250) {
        errors.matchesPlayed = "A  player Can not play more than 250 matches";
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
                value={formik.values.name || name}
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
                value={parseInt(age) >= 18 ? age : formik.values.age}
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
                  value={
                    playerType === "Batter"
                      ? "Batter"
                      : formik.values.playerType
                  }
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
