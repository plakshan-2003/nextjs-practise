import React from 'react'
import styles from '../page.module.css'

function Button() {

    const handleClick = () => {
        alert("hellow");
    }
    return (
        <button onClick={handleClick} className={styles.button}>
            Click Here
        </button>
    )
}

export default Button