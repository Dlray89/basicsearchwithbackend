import React, { Component } from "react"
import Project from "./Project"
import gql from "graphql-tag"
import { Query } from "react-apollo"


//feed_Query stores the query and gql function is useed to parse the string that contains the Graphql code
const FEED_QUERY = gql`
        
        {
  feed{
    id
    name
    description
  }
}
        `


class ProjectList extends Component {
    render() {


        return (
            //return code with Query component and pass FEED_Query prop
            <Query query={FEED_QUERY} >
            {({ loading, error, data}) => {
                if (loading) return <div>Loading</div>
                if (error) return <div>Error</div>

                const ProjectData = data.feed

                return(
                    <div>
                        {ProjectData.map(project => <Project key={project.is} project={project} />)}
                    </div>
                )
            }}
            </Query>
        )
    }
}
export default ProjectList