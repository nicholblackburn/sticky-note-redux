import React from 'react'
import { connect } from 'react-redux'

const Notes = ({ notes }) => (
  <ul>
    { notes.map( (n,i) => {
      return (
        <li key={i}>
        {n.name}
        </li>
      )
    })
  }
  </ul>
)
  
const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(Notes) 