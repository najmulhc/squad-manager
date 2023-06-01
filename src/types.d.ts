export interface Player {
  id?: number;
  name: string;
  playerType: string;
  matchesPlayed: number;
  age: number;
}

export interface State {
  players: {
    players: Players[];
  };
  toDelete: Player;
  toUpdate: Player;
}

export interface DataValues {
  name: string;
  age: string;
  playerType: "Batter" | "WicketKeeper" | "Bowler";
  matchesPlayed: string;
}