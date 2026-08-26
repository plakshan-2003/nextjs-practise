import React from 'react'

function page() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <ul>
          <label>Username:</label>  <input type="text" placeholder='Username' />
          <label>Email:</label>  <input type="email" placeholder='Email' />
          <label>Password:</label>  <input type="password" placeholder='Password' />
          <button type='submit'>Sign Up</button>
        </ul>


      </form>
    </div>
  )
}

export default page