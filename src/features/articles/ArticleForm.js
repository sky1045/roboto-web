import React from 'react'
import { Input, makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    text: {
        color: "black"
    },
    spacer: theme.mixins.toolbar
}))

const ArticleForm = (props) => {
    const classes = useStyles()
    return (
        <form noValidate >
            <div>article form page</div>
            <Input placeholder="제목"
                label="제목"
                inputProps={{
                    className: classes.text
                }}
            />
            <div className={classes.spacer} />
            <TextField
                multiline
                inputProps={{
                    className: classes.text
                }}
            />
        </form>
    )
}

export default ArticleForm