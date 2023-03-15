import styles from './Landing.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { incAction, decAction } from '../../actions'
import { useState } from 'react'

const Landing = ({ user, Onboarding }) => {
  const preview = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

    const [onboardingPage, setOnboardingPage] = useState(1)
    const [showOnboarding, setShowOnboarding] = useState(true)

  function turnPage(evt){
    setOnboardingPage(onboardingPage+1)
    if (onboardingPage >= 3){
      setShowOnboarding(false)
    }
    console.log(onboardingPage)
    console.log(showOnboarding)
  }
  
  // function handleIncrement() {
  //   dispatch(incAction());
  // }

  // function handleDecrement() {
  //   dispatch(decAction());
    
  // }

  return (
    <main className={styles.container}>
      <div>
        {showOnboarding && <Onboarding id={styles.Onboarding} turnPage={turnPage} onboardingPage={onboardingPage} />}
        {/* <h2>Counter</h2>
        <div>
          <button onClick={() => {handleDecrement()}}>-</button>
          <span>{preview}</span>
          <button onClick={() => {handleIncrement()}}>+</button>
        </div> */}
      </div>
    </main>
  )
}

export default Landing
