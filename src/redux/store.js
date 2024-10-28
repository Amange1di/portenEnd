// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice"; // Правильный путь к редьюсеру

const store = configureStore({
    reducer: {
        posts: postsReducer, // Добавляем редьюсер в хранилище
    },
});

export default store; // Экспортируем хранилище
