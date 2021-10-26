import React, { useState } from 'react'
import '../index.css'

const Login = () => {
    const [uname,setUname] =useState('')
    const [password,setPassword] =useState('')

    const inputEvent=(event)=>{
        console.log(event.target.value)
        setUname(event.target.value)
    }

    const inputEvent2=(event)=>{
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    const submit=(event)=>{
        event.preventDefault()
        setUname(uname)
        setPassword(password)
    }

    const isLoggedIn = (e)=>{
        e.preventDefault()
        console.log('Button is clicked')        
    }

    return (
        <div>
           <form onSubmit={submit}>
                <div className='main-div'>
                <h1>Login</h1>
                <label htmlFor='uname'>UserName</label>
                    <input type="text" 
                     placeholder='Enter Your Username'
                     value={uname}
                     onChange={inputEvent}
                    />

                <label htmlFor='password'>Password</label>
                    <input type="password" 
                     placeholder='Enter Your Password'
                     value={password}
                     onChange={inputEvent2}
                    />
                <div className='btn'>
                    <button onClick={isLoggedIn}>Login</button></div> 
                </div>
           </form>
        </div>
    )
}

export default Login
