import { createContext } from "react";

const userContext = createContext({
  MOVIES: [
    {
      movieName: "Bramhastra",
      theaterName: [
        "INOX, Sapna sangita Mall",
        "Rigal ceneplex",
        "PVR Cenema",
        "Ashima Ceneplex",
        "Sangam Ceneplex",
      ],
    },
    {
      movieName: "Bahubali",
      theaterName: [
        "INOX, Sapna sangita Mall",
        "Rigal ceneplex",
        "PVR Cenema",
        "Ashima Ceneplex",
        "Sangam Ceneplex",
      ],
      showTime: [],
    },
  ],
});

export default userContext;
