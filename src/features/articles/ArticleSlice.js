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

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (page=1) => {
    const response = await getArticles(page)
    // need to add page status to store
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
                // add page state
                articlesAdapter.setAll(state, action.payload.content)
                state.page = action.payload.number + 1
                state.count = action.payload.totalElements
                state.status = 'idle'
                console.log(state.count)
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

export const getPageInfo = (state) => ({
    page: state.articles.page,
    count: state.articles.count,
})