import { Link } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#4CAF50" }}>
      <Toolbar>
        <Link variant="h6" href="/" sx={{ flexGrow: 1, color: "white" }}>
          Squad Manager
        </Link>
        <Link variant="h5" href="/" sx={{ color: "white", marginLeft: "20px" }}>
          Home
        </Link>
        <Link
          variant="h5"
          href="/add-player"
          sx={{ color: "white", marginLeft: "20px" }}
        >
          Add Player
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
