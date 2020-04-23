import React, {useEffect} from 'react';
import { useQuery } from "urql"
import gql from "graphql-tag"
import { TextField, makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Project from "./Project"

const useStyles = makeStyles({
  root: {
    margin: "2% auto"
  }
})

const FEED_SEARCH = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
            id
            name
            description
    }
}
`

const Search = () => {
  const classes = useStyles()
  const [filter, setFilter] = React.useState('');
  // const [result] = useQuery({ query: FEED_QUERY })
  const [result, executeQuery] = useQuery({
    query: FEED_SEARCH,
    variables: { filter },
    pause: true
  })
     console.log("Result", result)


  console.log('result: ', result);

  const execSearch = React.useCallback(() => {
    executeQuery()
  }, [executeQuery])

  const projects = result.data ? result.data.feed : [];
  
  console.log('projects:', projects);
  const handleChange = e => {
    console.log("change: ", e.target.value);
  }

  useEffect(() => {
    execSearch()
  }, [])

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>

        <input
          onChange={e => setFilter(e.target.value)}
          type='text'
          name='search'
          id='search'
          placeholder='Search'
        />
      </form>

      {projects.map((project, index) => (
        <Project key={project.id} project={project} index={index} />
      ))}

    </div>
  )
}

export default Search