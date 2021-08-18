import React, {
    useEffect,
    useState,
} from 'react'
import { Typography } from '@material-ui/core'
import MDEditor from "@uiw/react-md-editor";
import { getArticle } from './ArticleAPI'

const Article = (props) => {
    const [article, setArticle] = useState({})
    const {id} = props
    const fetchData = async (id) => {
        const { data } = await getArticle(id)
        setArticle(data)
    }
    useEffect(() => {
        fetchData(id)
    }, [id])
    return (
        <div style={{ height: 400, width: '100%' }}>
            <Typography variant="h4">{article.title}</Typography>
            <div>
                <MDEditor.Markdown source={article.content} />
            </div>
        </div>
    )
}

export default Article