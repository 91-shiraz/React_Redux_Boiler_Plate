import React, { useState } from 'react';
import '../App.css';

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
        <h1>ADD USER</h1>
        <input type="email" name="email" id="" placeholder='Enter Email' onChange={(e)=>handleChange(e)}/>
        <input type="password" name="password" id="" placeholder='Enter Password' onChange={(e)=>handleChange(e)}/>
        <input type="submit" value={"Submit"} onClick={submit}/>
      
    </div>
  )
}

export default AddUser
