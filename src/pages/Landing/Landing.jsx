import styles from './Landing.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { incAction, decAction } from '../../actions'

const Landing = ({ user }) => {
  const preview = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(incAction());
  }

  function handleDecrement() {
    dispatch(decAction());
  }

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={() => {handleDecrement()}}>-</button>
          <span>{preview}</span>
          <button onClick={() => {handleIncrement()}}>+</button>
        </div>
      </div>
    </main>
  )
}

export default Landing
