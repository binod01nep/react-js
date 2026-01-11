import { useContext } from 'react'

import { ThemeDataContext } from '../Context/ThemeContext'
import Nav2 from './Nav2'

const Navbar = () => {

    const [theme] = useContext(ThemeDataContext)
    return (
        <div className={theme}>
            <h2>Sheryians</h2>
            <Nav2/>
        </div>
    )
}

export default Navbar