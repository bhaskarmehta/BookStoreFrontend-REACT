import React from 'react'
import styles from './Footer.module.css';

export default function Footer() {
  return (<>
    <hr />
    <div className={`${styles.footerInfo}`}>
        <p>About us</p>
        <p>Contact</p>
        <p>Jobs</p>
    </div>
    <div><p>Copyright &copy; 2024 - All right reserved by Bhaskar Mehta</p></div>
    </>)
}
