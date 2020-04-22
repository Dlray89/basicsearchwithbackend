import React from "react"
import { Typography, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    root: {

    },
    title: {
         textAlign: "center",
        padding: "4%",
        background: "linear-gradient(to right, #4b6cb7, #182848)",
        color: "White"
    },
    React: {
         textAlign: "center",
        padding: "4%",
       background: "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
        color: "White",
        margin: "2% 0"
    },
    Apollo: {
         textAlign: "center",
        padding: "4%",
        background: "linear-gradient(to right, #ad5389, #3c1053);",
        color: "White"
    },
    GraphQL: {
         textAlign: "center",
        padding: "4%",
        background: "linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)",
        color: "White",
        margin: "2% 0"
    },
    Prisma: {
         textAlign: "center",
        padding: "4%",
        background: "linear-gradient(to right, #1f1c2c, #928dab);",
        color: "White",
    },
    Links: {
        textDecoration: "none",
        color:"white",
    }
})

function TechDocs(){
    const classes = useStyles()
    return(
        <div>
            <Typography className={classes.title} variant="h4">
                Tech Documents
            </Typography>

            <Typography className={classes.React} variant="h4"><a className={classes.Links} href="https://reactjs.org/">React</a></Typography>

            <Typography className={classes.Apollo}  variant="h4"><a href="https://www.apollographql.com/docs/" className={classes.Links}>Apollo</a></Typography>

            <Typography className={classes.GraphQL} variant="h4"><a href="https://graphql.org/" className={classes.Links}>GraphQL</a></Typography>

            <Typography className={classes.Prisma} variant="h4"><a href="https://www.prisma.io/docs/" className={classes.Links}>Prisma</a></Typography>
        </div>
    )
}

export default TechDocs