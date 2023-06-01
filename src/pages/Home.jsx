import { Box } from "@mui/material";
import PlayerTable from "../components/PlayerTable";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,128,0 , 0.2)",
        minHeight: "100vh",
        padding: "2rem 1rem"
      }}
    >
      <PlayerTable />
    </Box>
  );
};

export default Home;
