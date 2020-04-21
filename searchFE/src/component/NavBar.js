import React from "react"
import {AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        flexGrow:1,
    },
    title: {
        flexGrow:1,
        textAlign: "center"
    },
    Appbar: {
        background:" linear-gradient(to left, #000000, #434343)"
    }
})

function NavBar (){
    const classes = useStyles()
    return(
        <div className={classes.root} >
            <AppBar className={classes.Appbar} position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6">
                    Search/Filtering
                </Typography>
            </Toolbar>
            </AppBar>

        </div>
    )
}
export default NavBar