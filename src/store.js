import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './features/articles/ArticleSlice'

const store = configureStore({
    reducer: {
        articles: articleReducer
    }
})

export default store