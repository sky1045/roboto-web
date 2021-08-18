import React from 'react'
import { 
    Input,
    makeStyles,
    TextField,
    Button,
} from '@material-ui/core'
import MDEditor from '@uiw/react-md-editor';

const useStyles = makeStyles(theme => ({
    text: {
        color: "black",
        fontSize: '36px',
    },
    spacer: theme.mixins.toolbar
}))

const ArticleForm = (props) => {
    const classes = useStyles()
    const [value, setValue] = React.useState("## MarkDown으로 작성해주세요");

    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault()
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
            />
            <MDEditor
                value={value}
                onChange={setValue}
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