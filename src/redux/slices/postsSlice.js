// src/redux/slices/postsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../../api/service"; // Правильный путь к сервису

// Async thunk для получения данных о постах
export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const { data } = await service.getAllPosts(); // Получение данных
        console.log(data, "---all posts data---");
        return data; // Возвращаем данные
    }
);

// Создаем срез состояния для постов
const postsSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        isError: "",
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true; // Устанавливаем статус загрузки
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false; // Завершаем загрузку
                state.items = action.payload; // Сохраняем полученные данные
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false; // Завершаем загрузку
                state.isError = action.error.message; // Сохраняем сообщение об ошибке
            });
    },
});

// Экспортируем редьюсер по умолчанию
export default postsSlice.reducer; 
