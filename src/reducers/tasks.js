// define the counter reducer which will increment or decrement the state based on the action it receives
const tasksReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
        console.log('ADD_TASK')
        // backend api call to add task
        return state;
      case 'DELETE_TASK':
        console.log('DELETE_TASK')
        // backend api call to delete task
        return state;
      case 'COMPLETE_TASK':
        console.log('COMPLETE_TASK')
        // backend api call to complete task
        return state;
      case 'UNCOMPLETE_TASK':
        console.log('UNCOMPLETE_TASK')
        // backend api call to uncomplete task
        return state;
      default:
        return state;
    }
  };

export default tasksReducer;