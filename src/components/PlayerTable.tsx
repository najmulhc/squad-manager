import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import {useSelector} from 'react-redux';

const PlayerTable = () => {
 
  const {players} = useSelector(state => state.players);
 
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
            {players.map((player) => (
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
                  >
                    Update
                  </Button>
                  <Button variant="contained" color="warning" size="small">
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
