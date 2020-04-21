import React from "react"
import {Button, AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core"
import { Link } from "react-router-dom"

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
    },
    Button: {
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
                    RAGP(React,Apollo, GraphQL, Prisma )
                </Typography>
                <Button className={classes.Button}><Link to="/">Home</Link></Button>        
                <Button className={classes.Button}><Link to="/React">React</Link></Button>
                <Button className={classes.Button}><Link to="/Apollo">Apollo</Link></Button>
                <Button className={classes.Button}><Link to="/GraphQL">GraphQL</Link></Button>
                <Button className={classes.Button}><Link to="/Prisma">Prisma</Link></Button>
            </Toolbar>
            </AppBar>

        </div>
    )
}
export default NavBar