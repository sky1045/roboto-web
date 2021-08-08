import React, {
    useEffect,
    useState,
} from 'react'
import { Typography } from '@material-ui/core'
import { getArticle } from './ArticleAPI'

const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}

const Article = (props) => {
    const [article, setArticle] = useState({})
    const fetchData = async (id) => {
        const { data } = await getArticle(id)
        console.log(data)
        setArticle(data)
    }
    useEffect(() => {
        const { id } = props
        if (isEmpty(article)) {
            fetchData(id)
        }
    })
    return (
        <div style={{ height: 400, width: '100%' }}>
            <Typography variant="h4">Title</Typography>
            <div>{article.title}</div>
        </div>
    )
}

export default Article