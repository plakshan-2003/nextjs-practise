import React from 'react'
import Link from 'next/link'
import styles from './service.module.css'

function page() {
  return (
    <div>
        <h1 className={styles.h1}>services page</h1>
        <Link href="/">Back to home</Link>
    </div>
  )
}

export default page