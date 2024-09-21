import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [], // For storing all items
    filteredItems: [], // For storing filtered items
    searchTerm: "",
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = state.items.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { setItems, setSearchTerm } = itemsSlice.actions;
export default itemsSlice.reducer;
