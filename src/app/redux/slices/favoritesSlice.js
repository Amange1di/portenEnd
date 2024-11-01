// src/redux/slices/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [], // Массив для хранения избранных товаров
  },
  reducers: {
    addToLike: (state, action) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex === -1) {
        state.items.push(action.payload); // Добавляем товар, если его нет в избранном
      }
    },
    removeFromLike: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); // Удаляем товар из избранного
    },
    clearFavorites: (state) => {
      state.items = []; // Очищаем избранное
    },
  },
});

// Экспортируем действия и редюсер
export const { addToLike, removeFromLike, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
