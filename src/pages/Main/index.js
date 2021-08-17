import { Button, Container, Grid, makeStyles, Link as LinkButton } from '@material-ui/core'
import React from 'react'
import ArticleList from '../../features/articles/ArticleList'
import { Link } from 'react-router-dom'
import PageStyle from '../../components/styles/PageStyle'

const useStyles = PageStyle

const MainPage = () => {
    const classes = useStyles()
    return(
        <Container maxWidth="lg" className={classes.page}>
            <Grid container >
                <Grid item xs={12} md={12} lg={12}>
                    <ArticleList />
                </Grid>
            </Grid>
            <div className={classes.spacer} />
            <Grid container>
                <Grid item xs={2} md={1} lg={1}>
                    <LinkButton variant="contained" color="primary" component={Link} to="/article">
                        <Button variant="contained" color="primary">
                            글 쓰기 
                        </Button>
                    </LinkButton>
                </Grid>
                <Grid item xs={11} md={11} lg={11}>
                    <div></div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MainPage