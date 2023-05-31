import { Typography } from "@mui/material";
import PlayerForm from "../components/PlayerForm";

export default function UpdatePlayer() {
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
      <PlayerForm text="Update Player" name="Liton Das" age={28} playerType="Batter" matchesPlayed={112} />
    </main>
  );
}
