// define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        console.log('increment')
        return state + 1;
  
      case 'DECREMENT':
        console.log('decrement')
        return state - 1;
  
      default:
        return state;
    }
  };

export default counterReducer;