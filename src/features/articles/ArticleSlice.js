import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

const initialState = []

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
    // const response = 
})

const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase()
    }
})