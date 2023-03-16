import { useState } from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <div>
        <h1>Chores for</h1>
        <h1>Coins</h1>
        <img src="/assets/Welcome_Screen.png" className={styles.image}></img>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
        <Link className={styles.login} to = "/login">
          Login
        </Link>
      </div>
    </main>
  )
}

export default Signup
