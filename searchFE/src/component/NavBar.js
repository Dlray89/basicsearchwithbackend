import React from "react"
import {Button, AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
    root: {
        flexGrow:1,
    },
    title: {
        flexGrow:1,
        textAlign: "left"
    },
    Appbar: {
        background:"linear-gradient(to right, #4b6cb7, #182848)"
    },
    Links: {
        textDecoration:"none",
        color: "White"
    }
})

function NavBar (){
    const classes = useStyles()
    return(
        <div className={classes.root} >
            <AppBar className={classes.Appbar} position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6">
                    LABS 23
                </Typography>
                <Button className={classes.Button}><Link className={classes.Links} to="/">Home</Link></Button>        
                <Button className={classes.Button}><Link className={classes.Links} to="/React">Tech Docs</Link></Button>
            </Toolbar>
            </AppBar>

        </div>
    )
}
export default NavBar