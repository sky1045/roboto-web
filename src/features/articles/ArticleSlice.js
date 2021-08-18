import { 
    createAsyncThunk,
    createSlice,
    createSelector,
    createEntityAdapter,
} from '@reduxjs/toolkit'
import { 
    getArticles,
    createArticle
} from './ArticleAPI'

const articlesAdapter = createEntityAdapter()

const initialState = articlesAdapter.getInitialState({
    status: 'idle',
})

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
    const response = await getArticles()
    return response.data
})

export const saveNewArticle = createAsyncThunk('articles/createArticle', async (data) => {
    const response = await createArticle(data)
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
                state.status = 'idle'
            })
            .addCase(saveNewArticle.fulfilled, articlesAdapter.addOne)
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