
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import { Input, Button } from 'components'
import './Register.css'

const Register = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        name === 'id' ? setId(value) : setPassword(value)
        console.log(name, value)
    }
    const handleRegister = () => {
        if(JSON.parse(sessionStorage.getItem('user'))){
            navigate('/login')
        }else{
            sessionStorage.setItem('user', JSON.stringify({ id, password }))
            navigate('/home')
        } 
    }
    return (
        <div className='register-container'>
            <Input name='id' type='text' placeholder='Type ID ...' value={id} onChange={handleChange}/><br/>
            <Input name='password' type='password' placeholder='Type PASSWORD ...' value={password} onChange={handleChange}/><br/>
            <Button handleClick={handleRegister}>Register</Button>
        </div>
    )
}

export default Register

