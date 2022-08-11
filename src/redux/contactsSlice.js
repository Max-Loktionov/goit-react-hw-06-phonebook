import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const data = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
];

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: { items: data, filter: '' },

  reducers: {
    itemAdd(state, action) {
      state.items.push(action.payload);
    },

    itemDelete(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { itemAdd, itemDelete, changeFilter } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const getContacts = state => state.contacts.items;
export const getFiltred = state => state.contacts.filter;
