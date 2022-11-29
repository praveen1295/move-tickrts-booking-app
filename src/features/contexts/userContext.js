import { createContext } from "react";

const userContext = createContext({
  USER: [
    {
      name: "Praveen",
      email: "praveen@gmail.com",
      password: "123",
      confirmPassword: "123",
      id: 0,
      cartData: [
        // { item: "", price: 200, count: 1, id: 1 }
      ],
    },
  ],
});

export default userContext;
