import React from 'react'

const Search = props => {

  const handleChange = (e) => {
    props.changeSearchTerm(e.target.value)
    console.log(e.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchTerm} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
