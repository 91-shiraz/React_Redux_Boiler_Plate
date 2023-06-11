import React, { useState } from 'react';

function AddUser() {
    let [user,setuser]=useState({
        email :"",
        password : ""
    })

    const handleChange=(e)=>{
        setuser({...user,
            [e.target.name] : e.target.value
        })
    }

    const submit=()=>{
        console.log(submit)
    }
  return (
    <div>
        <h1>Add User</h1>
        <input type="email" name="email" id="" placeholder='Enter Email' onChange={(e)=>handleChange(e)}/>
        <input type="password" name="password" id="" placeholder='Enter Passowrd' onChange={(e)=>handleChange(e)}/>
        <input type="submit" value={"Submit"} onClick={submit}/>
      
    </div>
  )
}

export default AddUser
