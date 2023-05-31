import { Typography } from "@mui/material";
import PlayerForm from "../components/PlayerForm";
import { useSelector } from "react-redux";
import { updatePlayer } from "../reducers/PlayerSlice";

export default function UpdatePlayer() {
  const {toUpdate} = useSelector(state => state.players)
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
        Update Player
      </Typography>
      <PlayerForm text="Update Player" name={toUpdate.name} age={toUpdate.age} playerType={toUpdate.playerType} matchesPlayed={toUpdate.matchesPlayed} task={updatePlayer} />
    </main>
  );
}
