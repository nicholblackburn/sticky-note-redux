const notes = ( state = [], action ) => {
  switch(action.type) {
    case 'NOTES':
      return state
    case 'ADD_NOTE':
      return[action.note,...state];
    default:
      return state 
  }
}

export default notes 