import React from 'react'
 const NavBar=({total})=> {
    return (
        <div>
            <nav cl="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#6"> <span className="badge badge-secondary">{total}</span></a>
            </nav>

        </div>
    )
}


export default NavBar
