import React from 'react'
import './Navbar.css'
import navbarItems from './NavbarItems'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const PATH = process.env.REACT_APP_LINK_TO_PATH;

const Navbar = ({ toggle }) => {
    return (
        <nav>
            <div className="menu-items">
                {navbarItems.map((item, index) => (
                    !item.dropdown ? <Link className="link" to={`${PATH}${item.link}`} key={index}>
                        {item.title}
                    </Link> : 
                    <>
                        <div className="nav-link dropdown-toggle link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {item.title}
                    </div>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item"><Link to={`${PATH}genomic-database`}>Genomic SSRs</Link></a>
                    <a className="dropdown-item"><Link to={`${PATH}genic-database`}>Genic SSRs</Link></a>
                </div>
              </>
                ))}
            </div>
            <div className="icons">
                <div className="mobile-menu-icon">
                    <FaBars onClick={toggle} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
