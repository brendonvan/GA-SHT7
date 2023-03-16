import styles from './Feed.module.css'
import { useNavigate } from 'react-router-dom'

const Feed = () => {
const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
        <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate(-1)}} />
          <h1 className={styles.header_h1}>Feed</h1>
        </div>
      </div>
    </div>
  )
}

export default Feed