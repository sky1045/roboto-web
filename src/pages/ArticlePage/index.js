import React from 'react'
import Article from '../../features/articles/Article'
import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    page: {
        height: '100vh',
        padding: "48px 0"
    }
}))

const ArticlePage = () => {
    const classes = useStyles()
    return (
        <Container maxWidth="lg" className={classes.page}>
            <Grid container >
                <Grid item xs={12} md={12} lg={12}>
                    <Article />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ArticlePage