import React, { useContext, useEffect } from 'react'
import { Link, useLocation} from "react-router-dom";
import NoteContext from '../Contexts/Notes/NoteContext';






const Navbar = () => {

  const location = useLocation()
  useEffect(() => {
    console.log(location.pathname)
  }, [location])


const {mode, toggleMode}= useContext(NoteContext)
const togglOverButton=()=>{
  toggleMode()
}

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Android -Notebook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Home" ? "active" : ""}`} aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/About" ? "active" : ""}`} to="/About">About</Link>
              </li>


            </ul>
{/* toogle button */}

{/* <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'} mx-2`}> */}
<div className="form-check form-switch text-light mx-2">


  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"   onClick={togglOverButton}/>
  <label className={`form-check-label text-${mode === "light"? 'black':'white'}`} htmlFor="flexSwitchCheckDefault">Enable toogle</label>
</div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar


