import React from 'react'
import Link from 'next/link'
import styles from './service.module.css'

function page() {
  return (
    <div >
      <div>
        <h1 className={styles.heading}>services page</h1>
        <Link href="/" className={styles.link}>
          Back to home
        </Link>
      </div>
    </div>

  )
}

export default page