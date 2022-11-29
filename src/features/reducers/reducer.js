export default function reducer(state, action) {
  switch (action.type) {
    case "userData": {
      const userData = [
        ...state.USER,
        { ...action.payload, id: state.USER.length },
      ];
      return { ...state, USER: userData };
    }

    case "addToCart": {
      let index = action.payload.currentUser.index;
      let addItem = true;
      let arr = state.USER[index].cartData;

      const data = arr.map((item, idx) => {
        if (item.item === action.payload.itemName) {
          addItem = false;
          console.log("1", state.USER);
          item.count = item.count + 1;
          return {
            ...item,
          };
        }
        return item;
      });

      if (!addItem) {
        state.USER[index].cartData = data;
        // console.log("2", state.USER);
        return {
          ...state,
        };
      }

      if (addItem) {
        let addData = [
          ...state.USER[index].cartData,
          {
            item: action.payload.itemName,
            price: action.payload.itemPrice,
            count: 1,
            id: action.payload.index,
          },
        ];

        state.USER[index].cartData = addData;
        console.log("3", state.USER);
        return {
          ...state,
        };
      }
      return {
        ...state,
      };
    }

    case "removeFromCart": {
      const index = action.payload.currentUser.id;
      const data = state.USER[index].cartData
        .map((item, index) => {
          if (item.item === action.payload.itemName) {
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        })
        .filter((item, index) => {
          return item.count > 0;
        });
      state.USER[index].cartData = data;
      return {
        ...state,
        // cartData: data,
      };
    }
    default:
      return state;
  }
}
