import styles from './Landing.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

// redux actions
import { setOnboarding } from '../../actions'

// components
import Onboarding from '../Onboarding/Onboarding'

const Landing = () => {
  const profile = useSelector(state => state.profileReducer);
  const dispatch = useDispatch();

  const [onboardingPage, setOnboardingPage] = useState(1)

  function turnPage(evt){
    setOnboardingPage(onboardingPage+1)
    if (onboardingPage >= 3){
      dispatch(setOnboarding(false))
    }
    console.log('onboarding', onboardingPage)
    console.log('show', profile.showOnboarding)
  }

  return (
    <main className={styles.container}>
      <div>
        {profile.showOnboarding && <Onboarding id={styles.Onboarding} turnPage={turnPage} onboardingPage={onboardingPage} />}
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
