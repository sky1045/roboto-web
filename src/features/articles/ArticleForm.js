import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { unwrapResult } from '@reduxjs/toolkit';
import { 
    Input,
    makeStyles,
    TextField,
    Button,
} from '@material-ui/core'
// https://uiwjs.github.io/react-md-editor/
import MDEditor from '@uiw/react-md-editor';
import { saveNewArticle } from './ArticleSlice';
import { RestoreOutlined } from '@material-ui/icons';

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
    const history = useHistory()

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            const resultAction = await dispatch(saveNewArticle({title, content}))
            const result = unwrapResult(resultAction)
            console.log(result.id)
            history.push('/article/' + result.id)
        } catch (rejectedValueOrSerializedError) {
            throw(rejectedValueOrSerializedError)
        }
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