import { createContext } from "react";

const userContext = createContext({
  MOVES: [
    {
      name: "Praveen",
      time: "praveen@gmail.com",
      password: "123",
      confirmPassword: "123",
      id: 0,
    },
  ],
});

export default userContext;
