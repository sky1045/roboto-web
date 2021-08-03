import React from 'react'
import { 
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Tooltip,
    makeStyles,
    //createTheme,
    ThemeProvider,
    unstable_createMuiStrictModeTheme,
    createMuiTheme,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    logo: {
        margin: 0,
        fontSize: '36px',
        fontFamily: 'Roboto "Noto Sans KR"',
        fontWeight: 'bold',
        //flexGrow: 1,
        backgroundColor: 'inherit',
        color: "white"
    },
    right: {
        display: 'flex',
        marginLeft: 'auto',
    },
    tooltipText: {
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <header>
            <AppBar position="absolute">
                <Toolbar variant="dense">
                    <IconButton aria-label="menu" edge="start" className={classes.logo}>
                        ROBOTO
                    </IconButton>
                    <div className={classes.right}>
                        <Tooltip title="login">
                            <Button className={classes.tooltipText}>
                                LogIn
                            </Button>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header