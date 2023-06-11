import React from "react";
import { connect } from "react-redux";
import { add_inc, decrement, del_inc, increment } from "./Config/Store/Action/Index.js";
import AddUser from "./Components/AddUser.jsx";
// import Child from "./Child";

function App(props){
  console.log(props)
  return(
    <>
    <h1>
      Store Value = 
      {props.count}
    </h1>
    {/* <Child/> */}
    <button onClick={()=>props.inc()}>Increment</button>
    <button onClick={()=>props.dec()}>Decrement</button>
    <AddUser/>
    </>
  )
}


//data Get 
const mapStateToProps=(state)=>({
  count:state.count,
  // email:state.user
  // mainuser: state.user
})

const mapdispatchToProps=(dispatch)=>({
  inc:()=>dispatch(increment()),
  dec:()=>dispatch(decrement())

})

// export default App;
export default connect(mapStateToProps,mapdispatchToProps)(App)