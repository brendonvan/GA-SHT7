import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'


const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
        <div>
          <h1>Chores for Coins</h1>
          <img src="assets/Welcome_Screen.png"></img>
          <p>{message}</p>
          <LoginForm
            handleSignupOrLogin={props.handleSignupOrLogin}
            updateMessage={updateMessage}
          />
          <Link className={styles.signUp} to = "/signup" >Sign Up</Link>
        </div>
    </main>
  )
}

export default LoginPage
