const SEATS = {
  SEAT_TYPE: [
    { type: "CLUB", price: 150 },
    { type: "SILVER", price: 170 },
    { type: "GOLD", price: 170 },
    { type: "PLATINUM", price: 250 },
  ],
  SEAT_PRICE: { CLUB: 150, SILVER: 170, GOLD: 170, PLATINUM: 250 },
  MAX_SEAT_ALLOWED: 10,
  SEAT_STRUCTURE: {
    EXECUTIVE: [
      {
        row: "K",
        seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        totalPlaces: 16,
      },
    ],
    PREMUIM_ECONOMY: [
      {
        row: "J",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21,
      },
      {
        row: "I",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21,
      },
      {
        row: "H",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21,
      },
      {
        row: "G",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21,
      },
      {
        row: "F",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21,
      },
    ],
    ECONOMY: [
      {
        row: "E",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21,
      },
      {
        row: "D",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21,
      },
      {
        row: "C",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21,
      },
      {
        row: "B",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21,
      },
      {
        row: "A",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 21,
      },
    ],
  },
};
export default SEATS;
