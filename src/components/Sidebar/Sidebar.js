import React from 'react'
import './Sidebar.css'
import navbarItems from '../Navbar/NavbarItems'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PATH = process.env.REACT_APP_LINK_TO_PATH;

const Sidebar = ({ isopen, toggle }) => {

    let opacityClasses = ['sidebar-container'];
    if (isopen) {
        opacityClasses.push('opacity-on')
    } else {
        opacityClasses.push('opacity-off')
    }


    return (
        <div className={opacityClasses.join(' ')} isopen={isopen.toString()} onClick={toggle}>
            <div className="icon">
                <FaTimes className="close-icon" onClick={toggle} />
            </div>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                {navbarItems.map((item, index) => (
                    !item.dropdown ? <Link className="sidebar-links" to={`${PATH}${item.link}`} key={index}>
                        {item.title}
                    </Link> : 
                    <>
                        <div className="nav-link dropdown-toggle sidebar-links" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {item.title}
                    </div>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item"><Link to={`${PATH}genomic-database`} className='links'>Genomic SSRs</Link></a>
                    <a className="dropdown-item"><Link to={`${PATH}genic-database`} className='links'>Genic SSRs</Link></a>
                </div>
              </>
                ))}
                </div>
            </div>
        </div>

    )
}

export default Sidebar
