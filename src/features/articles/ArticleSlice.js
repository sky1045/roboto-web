import { 
    createAsyncThunk,
    createSlice,
    createSelector,
    createEntityAdapter,
} from '@reduxjs/toolkit'
import { getArticles } from './ArticleAPI'

const articlesAdapter = createEntityAdapter()

const initialState = articlesAdapter.getInitialState({
    status: 'idle',
})

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
    const response = await getArticles()
    return response.data
})

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchArticles, (state, action) => {
                articlesAdapter.setAll(state, action.payload)
                state.status = 'idle'
            })
    }
})

export default articleSlice.reducer