import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToDelete, addToUpdate } from "../reducers/PlayerSlice";
import { useNavigate } from "react-router";
const PlayerTable = () => {
  const { players } = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToDel = (item) => {
    dispatch(addToDelete(item));
    navigate("/confirm-delete");
  };
  const addToUpdatePlayer = (item ) => {
    dispatch(addToUpdate(item));

    navigate("/update-player");
  };
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        color="rgb(0, 128, 0)"
        align="center"
        sx={{ mb: 2 }}
      >
        Player List
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Matches Played</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player ) => (
              <TableRow key={player.id}>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.playerType}</TableCell>
                <TableCell>{player.matchesPlayed}</TableCell>
                <TableCell>{player.age}</TableCell>
                <TableCell>
                  <Button
                    sx={{
                      margin: "0 .5rem",
                    }}
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() => addToUpdatePlayer(player)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    size="small"
                    onClick={() => addToDel(player)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PlayerTable;
