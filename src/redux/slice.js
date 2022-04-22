import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items.filter(({ name }) => name !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     changeFilter: (_, { payload }) => payload,
//   },
// });

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
// export const { changeFilter } = filterSlice.actions;
