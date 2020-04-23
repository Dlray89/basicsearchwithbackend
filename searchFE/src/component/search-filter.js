import React, { useEffect, useState } from 'react';
import { useQuery } from "urql";
import gql from "graphql-tag";
import { TextField, makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Project from "./Project";

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
  const classes = useStyles();
  const [filter, setFilter] = useState('');

  const [result, executeQuery] = useQuery({
    query: FEED_SEARCH,
    variables: { filter },
    pause: true
  })

  const execSearch = React.useCallback(() => {
    executeQuery();
  }, [executeQuery])

  const projects = result.data ? result.data.feed : [];
  let timer;
  const handleChange = e => {
    //reset timer on each key stroke
    window.clearTimeout(timer);
    setFilter(e.target.value);
    e.persist();
  }//end handleChange

  const handleSubmit = e => {
    e.preventDefault();
    //clear the submit timer and submit form
    window.clearTimeout(timer);
    execSearch();
  }

  useEffect(() => {
    //delay then submit form/or hit enter to submit immediately
    timer= window.setTimeout(() => {
      execSearch();
    }, 2000)
  }, [filter])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          name='search'
          id='search'
          placeholder='Search'
          value={filter}
        />
        {/* <button type= 'submit'>submit</button> */}
      </form>

      {projects.map((project, index) => (
        <Project key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

export default Search