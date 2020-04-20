import React from "react"
import Project from "./Project"
import gql from "graphql-tag"
import { useQuery } from "urql"


//this holds our query from database
//gql pasres the string containing the graphql code
const FEED_QUERY = gql`
{
    feed {
      id
      name
      description
    }
}
`

const ProjectList = () => {
  const [result] = useQuery({ query: FEED_QUERY })
  const { data, fetching, error } = result

  if (fetching) return <div>Fetching</div>
  if (error) return <div>error</div>

    //you had 'data.feed.project' here. ***
  const projectsToRender = data.feed

  return (
    <div>
      {projectsToRender.map(project => <Project key={project.id} project={project} />)}
    </div>
  )
}
export default ProjectList


