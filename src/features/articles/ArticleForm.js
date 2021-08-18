import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { 
    Input,
    makeStyles,
    TextField,
    Button,
} from '@material-ui/core'
import MDEditor from '@uiw/react-md-editor';
import { saveNewArticle } from './ArticleSlice';

const useStyles = makeStyles(theme => ({
    text: {
        color: "black",
        fontSize: '36px',
    },
    spacer: theme.mixins.toolbar
}))

const ArticleForm = (props) => {
    const classes = useStyles()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("## MarkDown으로 작성해주세요");
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(title, content)
        await dispatch(saveNewArticle({title, content}))
    }

    return (
        <form noValidate onSubmit={handleSubmit}>
            <Input placeholder="제목"
                label="제목"
                inputProps={{
                    className: classes.text
                }}
                autoFocus
                required
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <MDEditor
                value={content}
                onChange={setContent}
            />
            {/* <MDEditor.Markdown source={value} /> */}
            <TextField
                multiline
                inputProps={{
                    className: classes.text
                }}
            />
            <div className={classes.spacer} />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
            >
                글 쓰기
            </Button>
        </form>
    )
}

export default ArticleForm