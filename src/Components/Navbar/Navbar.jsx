import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top shadow">
                <div className="container-fluid">
                    <a className="navbar-brand text-secondary fs-2 fw-bold" href="#">Lalan Kumar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon bg-secondary shadow"></span>
                    </button>
                    <div className="offcanvas offcanvas-end w-50 " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-info" id="offcanvasNavbarLabel">Lalan Kumar</h5>
                            <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                                <li className="nav-item">
                                    <a className="nav-link active text-info btn btn-danger mb-2" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-info btn btn-danger  mb-2 " href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-info btn btn-danger mb-2" href="#">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-info btn btn-danger mb-2" href="#">Work</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-info btn btn-danger mb-2" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-info btn btn-danger mb-2" href="#">Blog</a>
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