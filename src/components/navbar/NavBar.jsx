import React from 'react'

const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e6e6e6"}}>
                <div className="container">
                <span className="navbar-brand mb-0 h1">myCart</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                        <ul className='d-flex navbar-nav ml-auto mb-2 mb-lg-0'>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="signup">SignUp</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar