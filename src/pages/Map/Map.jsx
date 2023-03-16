import styles from './Map.module.css'

const Map = () => {


  return (
    <div className={styles.container}>
      <img className={styles.map} src="/assets/full_map.png" alt="progress_map_to_goal" />
    </div>
  )
}

export default Map