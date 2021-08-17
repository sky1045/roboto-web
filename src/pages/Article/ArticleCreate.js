import React from 'react'
import ArticleForm from '../../features/articles/ArticleForm'
import {
    Container,
    Grid,
} from '@material-ui/core'
import PageStyle from '../../components/styles/PageStyle'

const useStyles = PageStyle

const ArticleCreate = () => {
    const classes = useStyles()
    return (
        <div>
            <Container maxWidth="lg" className={classes.page}>
                <Grid container >
                    <Grid item xs={12} md={12} lg={12}>
                        <ArticleForm></ArticleForm>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ArticleCreate