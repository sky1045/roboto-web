import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ArticleList from '../../features/articles/ArticleList'

const useStyles = makeStyles((theme) => ({
    page: {
        height: '100vh',
        padding: "48px 0"
    }
}))

const MainPage = () => {
    const classes = useStyles()
    return(
        <Container maxWidth="lg" className={classes.page}>
            <Grid container >
                <Grid item xs={12} md={12} lg={12}>
                    <ArticleList />
                </Grid>
            </Grid>
        </Container>
    )
}

export default MainPage