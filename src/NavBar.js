import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
        
    return (
        <>
            <div className='nav'>
                <Link exact to='/'>Home</Link>
                
                <Link exact to='/login'>Login</Link>
                <Link to='/products'>Products</Link>
            </div>
        </>
    )
}

export default NavBar
