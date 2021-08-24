import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Grid,
    Button,
    Link as LinkButton,
    makeStyles
} from '@material-ui/core'
import Article from '../../features/articles/Article'
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
            <Grid container >
                <Grid item xs={1} md={1} lg={1}>
                    <LinkButton color="primary" component={Link} to="/">
                        <Button variant="contained" color="primary">
                            목록으로 
                        </Button>
                    </LinkButton>
                </Grid>
                <Grid item xs={2} md={2} lg={2}>
                    <LinkButton color="primary" component={Link} to={"/article/update/" + id}>
                        <Button variant="contained" color="primary">
                            수정하기
                        </Button>
                    </LinkButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ArticleDetail