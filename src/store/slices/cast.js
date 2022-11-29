import { createSlice } from "@reduxjs/toolkit";

const cast = createSlice({
  name: "shop",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      let order = [...state.items, payload];
      state.items = order.sort(compare);
    },
    updateItem: (state, { payload }) => {
      let updateItems = state.items.filter((item) => {
        return item.id !== payload.id;
      });
      let order = [...updateItems, payload];
      state.items = order.sort(compare);
    },
    removeItem: (state, { payload }) => {
      state.items.forEach((el) => {
        if (el.id === payload.id) el = payload;
      });

      let updateItems = state.items.filter((item) => {
        return item.id !== payload.id;
      });
      state.items = updateItems;
    },
  },
});

export const { addItem, updateItem, removeItem } = cast.actions;
export default cast.reducer;

/*================= Sort the List =======================*/
function compare(a, b) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}
