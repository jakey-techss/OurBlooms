import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import styles from './NavBar.module.css'
import Toggle from './toggle/Toggle'
import { ToggleContext } from './toggle/ToggleContext'

const NavBar = () => {
    const { opened } = useContext(ToggleContext)
    return (
        <>
            <nav className={styles.nav}>
                <div>
                    <Link to='/' className={styles.logo}>Our Blooms</Link>
                </div>
                <div className={styles.linkHolder}>
                    <NavLink to='/gallery' className={styles.navLink}>GALLERY</NavLink>
                    <NavLink to='/about' className={styles.navLink}>ABOUT</NavLink>
                    <NavLink to='/contact' className={styles.navLink}>CONTACT</NavLink>
                </div>
                <div className={styles.toggleHolder}>
                    <Toggle />
                </div>
            </nav>
            {opened &&
                <div className={styles.columnNav}>
                    <NavLink to='/gallery' className={styles.navLink}>GALLERY</NavLink>
                    <NavLink to='/about' className={styles.navLink}>ABOUT</NavLink>
                    <NavLink to='/contact' className={styles.navLink}>CONTACT</NavLink>
                </div>}
        </>
    )
}

export default NavBar