import React from 'react'
import Article from '../../features/articles/Article'
import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core'
import PageStyle from '../../components/styles/PageStyle'

const useStyles = PageStyle

const ArticleDetail = (props) => {
    const classes = useStyles()
    console.log(classes)
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

export default ArticleDetail