const increment =()=>{
    return(dispatch)=>{
        dispatch({
            type:"Increment"
        })
    }
}

const decrement =()=>{
    return(dispatch)=>{
        dispatch({
            type:"Decrement"
        })
    }
}


export {increment,decrement}