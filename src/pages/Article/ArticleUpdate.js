import React from 'react'
import { useSelector } from 'react-redux'
import { selectArticleById } from '../../features/articles/ArticleSlice'
import ArticleForm from '../../features/articles/ArticleForm'
import {
    Container,
    Grid,
} from '@material-ui/core'
import PageStyle from '../../components/styles/PageStyle'

const useStyles = PageStyle

const ArticleUpdate = (props) => {
    const { id } = props.match.params
    const article = useSelector((state) => selectArticleById(state, id))
    const classes = useStyles()
    return (
        <div>
            <Container maxWidth="lg" className={classes.page}>
                <Grid container >
                    <Grid item xs={12} md={12} lg={12}>
                        <ArticleForm article={article}></ArticleForm>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ArticleUpdate