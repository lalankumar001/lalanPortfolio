import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top shadow">
                <div className="container-fluid">
                    <Link  to='/' className="navbar-brand text-secondary fs-2 fw-bold">Lalan Kumar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon bg-secondary shadow"></span>
                    </button>
                    <div className="offcanvas offcanvas-end w-50 " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-info" id="offcanvasNavbarLabel">Lalan Kumar</h5>
                            <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mt-4 p-2">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link active text-info btn btn-danger mb-2" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/About' className="nav-link text-info btn btn-danger  mb-2 " href="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Project' className="nav-link text-info btn btn-danger  mb-2 " href="#">Work</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contact' className="nav-link text-info btn btn-danger mb-2" href="#">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Blog' className="nav-link text-info btn btn-danger mb-2" href="#">Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar