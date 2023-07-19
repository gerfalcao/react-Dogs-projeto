import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Germanno Falcão. Website feito em curso de React JS.</p>
    </footer>
  )
}

export default Footer