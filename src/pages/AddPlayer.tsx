import { Typography } from "@mui/material";
import PlayerForm from "../components/PlayerForm";
import { addPlayer } from "../reducers/PlayerSlice";

export default function AddPlayer() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "rgba(0, 128, 0, 0.2)",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        color="rgb(0, 128, 0)"
        align="center"
        sx={{ mb: 2 }}
      >
        Add Player
      </Typography>
      <PlayerForm text="Add Player" name="" age={0} playerType="Batter" matchesPlayed={0}  task={addPlayer}/>
    </main>
  );
}
