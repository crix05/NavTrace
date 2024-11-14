// reducers/yourReducer.js
const initialState = {
    distance: 0,
    speed: 0,
    batchCount: 0
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DISTANCE':
        return { ...state, distance: state.distance + action.payload };
      case 'SPEED':
        return { ...state, speed: action.payload }; 
      case 'BATCH_COUNT':
        return { ...state, batchCount: state.batchCount + 1 }; 
      default:
        return state;
    }
  };
  
  export default rootReducer;
  