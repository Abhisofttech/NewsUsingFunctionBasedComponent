import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
 
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">News</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/business">business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/entertainment">entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/health">health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/science">science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/technology">technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/sports">sports</Link>
                </li>
               
              </ul>


              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success active " type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  
}

export default Navbar
