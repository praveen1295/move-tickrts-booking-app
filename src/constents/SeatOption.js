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
    PLATINUM: [
      {
        row: "A",
        seats: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21,
        ],
        totalPlaces: 16,
      },
    ],
    GOLD: [
      {
        row: "B",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 19,
      },
      {
        row: "C",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 19,
      },
      {
        row: "D",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 19,
      },
      {
        row: "E",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 19,
      },
      {
        row: "F",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 15,
      },
    ],
    SILVER: [
      {
        row: "G",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 15,
      },
      {
        row: "H",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 15,
      },
      {
        row: "I",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 15,
      },
      {
        row: "J",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 15,
      },
      {
        row: "K",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 15,
      },
    ],
    CLUB: [
      {
        row: "L",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 15,
      },
      {
        row: "M",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 15,
      },
      {
        row: "N",
        seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21],
        totalPlaces: 15,
      },
    ],
  },
};
export default SEATS;
