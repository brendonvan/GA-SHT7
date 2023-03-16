import styles from './Feed.module.css'

const Feed = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" />
          <h1 className={styles.header_h1}>Feed</h1>
        </div>
      </div>
    </div>
  )
}

export default Feed