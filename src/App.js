import React, { Fragment } from 'react';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';

const App = () => (
  <Fragment>
    <NoteForm />
    <Notes />
  </Fragment>
)

export default App 