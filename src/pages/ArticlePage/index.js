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

const ArticlePage = (props) => {
    const classes = useStyles()
    console.log(props)
    console.log(props.params)
    const { id } = props.match.params
    return (
        <Container maxWidth="lg" className={classes.page}>
            <Grid container >
                <Grid item xs={12} md={12} lg={12}>
                    <Article id={id}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ArticlePage