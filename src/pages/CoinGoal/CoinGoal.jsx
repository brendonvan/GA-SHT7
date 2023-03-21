import styles from './CoinGoal.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function CoinGoal() {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate(-1)}} />
          <h1 className={styles.header_h1}>Kid Profile</h1>
          <p className={styles.header_p}>Enter the number of chore coins each chore <br></br>is worth</p>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src="/assets/Kid_3.png" alt="Kid_3_Image"></img>
          <h1 className={styles.profileName}>Billy</h1>
        </div>
        <div className={styles.setCoinValue}>
          <h1>Set Coin Value</h1>
          <div>Vacuum the living room<input placeholder='0' className={styles.coinInput}></input><img className={styles.choreCoin}src='/assets/Chore_coin.svg'></img></div>
          <div>Clean Up Dishes<input placeholder='0' className={styles.coinInput}></input><img className={styles.choreCoin}src='/assets/Chore_coin.svg'></img></div>
        </div>
        <div className={styles.goal}>
          <h1>Set Billy's Goal</h1>
        </div>
        <div className={styles.dreamItem}>
          <h1>Dream Item</h1>
          <input type="text" />
        </div>
        <div className={styles.coinValue}>
          <h1>Coin Value</h1>
          <input type="text" />
          <p>Parents will determine the true monetary value of each coin.</p>
          <p>This can be adjusted in parent profile</p>
        </div>
        <Link id="saveLink" to ="/parentprofile">
          <button className={styles.save}>Create Profile</button>
        </Link>
    </div>
  </div>
  )
}