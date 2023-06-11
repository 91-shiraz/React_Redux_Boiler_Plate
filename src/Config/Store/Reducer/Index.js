//app start store
const state1 = {
    count: 0,
    user:"sheerazshaikh@gmail.com",
    center:"SMIT Hyd"
  };
  
  export default (state = state1, action) => {
    switch (action.type) {
  
      case "Increment":
        return { ...state, count: state.count + 1 };
  
      case "Decrement":
        return { ...state, count: state.count - 1 };
        
      case "Add User":
        return{...state, user:[...state.user, action.data]}
        
      default:
        return state;
    }
  };