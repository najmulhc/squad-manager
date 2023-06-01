import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    {
      id: 1,
      name: "Shakib Al Hasan",
      playerType: "Batter",
      matchesPlayed: 215,
      age: 34,
    },
    {
      id: 2,
      name: "Tamim Iqbal",
      playerType: "Batter",
      matchesPlayed: 227,
      age: 32,
    },
    {
      id: 3,
      name: "Mushfiqur Rahim",
      playerType: "Wicket Keeper",
      matchesPlayed: 234,
      age: 34,
    },
    {
      id: 4,
      name: "Mustafizur Rahman",
      playerType: "Bowler",
      matchesPlayed: 76,
      age: 25,
    },
    {
      id: 5,
      name: "Mahmudullah Riyad",
      playerType: "Bowler",
      matchesPlayed: 201,
      age: 35,
    },
  ],
  toDelete: {},
  toUpdate: {},
};

const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      const newPlayer = {
        id: state.players.length,
        ...action.payload,
      };
      state.players = [...state.players, newPlayer];
    },
    addToDelete: (state, action) => {
      console.log(action.payload);
      state.toDelete = { ...action.payload };
    },
    addToUpdate: (state, action) => {
      state.toUpdate = { ...action.payload };
    },
    deletePlayer: (state ) => {
      const playerIdToDelete = state.toDelete.id;
      state.players = state.players.filter(
        (player) => player.id !== playerIdToDelete
      );
      state.toDelete = {};
    },
    updatePlayer: (state, action) => {
      const updatedPlayer = action.payload;

      state.players = state.players.map((player) => {
        if (player.id === state.toUpdate.id) {
          for (const prop in updatedPlayer) {
            if (updatedPlayer[prop] !== "") {
              player[prop] = updatedPlayer[prop];
            }
          }
        }
        return player;
      });

      state.toUpdate = {};
    },
  },
});

export const {
  addPlayer,
  addToDelete,
  deletePlayer,
  addToUpdate,
  updatePlayer,
} = playerSlice.actions;

export default playerSlice.reducer;
