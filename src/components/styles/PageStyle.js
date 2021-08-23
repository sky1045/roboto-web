import { makeStyles } from "@material-ui/core"
const PageStyle = makeStyles((theme) => ({
    page: {
        height: '100vh',
        padding: "48px 0",
        justifyContent: 'center',
    },
    spacer: theme.mixins.toolbar
}))

export default PageStyle