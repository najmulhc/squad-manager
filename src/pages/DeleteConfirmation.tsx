import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deletePlayer } from "../reducers/PlayerSlice";

const DeleteConfirmation = () => {
  const { toDelete } = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deletePlayerFromList = () => {
    dispatch(deletePlayer());
    navigate("/");
  };
  return (
    <Box
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,128, 0, 0.2)",
      }}
    >
      <Card>
        <CardContent>
          <Typography
            variant="h2"
            fontSize="2rem"
            fontWeight="semibold"
            textAlign="center"
          >
            Delete Player
          </Typography>
          <Typography variant="h5">
            Are you sure you want to delete {toDelete.name}?
          </Typography>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={deletePlayerFromList}
            >
              Yes
            </Button>
            <Button variant="contained" component={Link} to="/">
              No
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DeleteConfirmation;
