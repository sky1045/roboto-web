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
        articleChecked(state, action) {
            const id = action.payload
            const article = state.entities[id]
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                articlesAdapter.setAll(state, action.payload)
                console.log(state.ids)
                state.status = 'idle'
            })
    }
})

export default articleSlice.reducer

export const {
    selectAll: selectArticles,
    selectById: selectArticleById,
} = articlesAdapter.getSelectors((state) => state.articles)

export const selectArticleIds = createSelector(
    selectArticles,
    (articles) => articles.map((article) => article.id)
)