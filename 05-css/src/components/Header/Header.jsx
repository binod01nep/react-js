import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
        <h2>Binod Budha</h2>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header