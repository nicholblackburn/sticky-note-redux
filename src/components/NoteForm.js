import React from 'react'
import { connect } from 'react-redux'

class NoteForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { name } = this.state
    const note = { name, complete: false }
    dispatch({ type: 'ADD_NOTE', note })
    this.setState({ name: '' })
    }

    handleChange = (e) => {
      this.setState({ name: e.target.value })
    }

    render() {
      const { name } = this.state
        return (
          <div>
            <h3>Sticky Note</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                value={name}
                onChange={this.handleChange}
                required
              />
            </form>
          </div>
        )
    }
}







export default connect()(NoteForm)