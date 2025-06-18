export interface GameInfo {
  id: string;
  team: string;
  logo: any;
  status: string;
  detail: string;
  record: string;
  lastGame: {
    opponent: string;
    score: string;
    win: boolean;
  };
  coach: string;
  stadium: string;
}

const mockGames: GameInfo[] = [
  {
    id: "seahawks",
    team: "Seattle Seahawks",
    logo: require("@/assets/images/seahawks.png"),
    status: "Sun 1:25 PM",
    detail: "vs. Rams",
    record: "6–3",
    lastGame: {
      opponent: "Cardinals",
      score: "21–14",
      win: true,
    },
    coach: "Mike Macdonald",
    stadium: "Lumen Field",
  },
  {
    id: "mariners",
    team: "Seattle Mariners",
    logo: require("@/assets/images/mariners.png"),
    status: "Today 6:40 PM",
    detail: "vs. Orioles 0–0",
    record: "32 - 26",
    lastGame: {
      opponent: "Twins",
      score: "2 - 1",
      win: true,
    },
    coach: "Dan Wilson",
    stadium: "T-Mobile Park",
  },
  {
    id: "kraken",
    team: "Seattle Kraken",
    logo: require("@/assets/images/kraken.png"),
    status: "Tue 7:00 PM",
    detail: "vs. Jets",
    record: "34 - 32 - 5",
    lastGame: {
      opponent: "Canucks",
      score: "3 - 2",
      win: false,
    },
    coach: "Dave Hakstol",
    stadium: "Climate Pledge Arena",
  },
  {
    id: "sounders",
    team: "Seattle Sounders FC",
    logo: require("@/assets/images/sounders.png"),
    status: "Sun 6:00 PM",
    detail: "vs. Vancouver",
    record: "7 - 5 - 5",
    lastGame: {
      opponent: "Minnesota",
      score: "3 - 2",
      win: false,
    },
    coach: "Brian Schmetzer",
    stadium: "Lumen Field",
  },
  {
    id: "storm",
    team: "Seattle Storm",
    logo: require("@/assets/images/storm.png"),
    status: "Fri 7:00 PM",
    detail: "vs. Aces",
    record: "4 - 6",
    lastGame: {
      opponent: "Mercury",
      score: "78 - 65",
      win: true,
    },
    coach: "Noelle Quinn",
    stadium: "Climate Pledge Arena",
  },
  {
    id: "reign",
    team: "OL Reign",
    logo: require("@/assets/images/reign.png"),
    status: "Sat 7:30 PM",
    detail: "vs. Thorns",
    record: "3 - 7 - 1",
    lastGame: {
      opponent: "Portland Thorns",
      score: "2 - 3",
      win: false,
    },
    coach: "Laura Harvey",
    stadium: "Lumen Field",
  },
];

export default mockGames;
