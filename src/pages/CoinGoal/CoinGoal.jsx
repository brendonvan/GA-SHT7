import styles from './CoinGoal.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link, useParams } from 'react-router-dom'

// services
import * as childService from '../../services/childService'

export default function CoinGoal() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const childId = useParams().id

  const [child, setChild] = useState({});
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    taskReward: 0,
  })
  const [itemForm, setItemForm] = useState({
    goalItem: "",
    goalScore: 0,
  })

  async function fetchChild() {
    setChild(await childService.show(childId))
    setTasks(await childService.indexTasks(childId))
  }

   const handleChange = async(e, task) => {
    setForm({ ...form, taskReward: e.target.value })
    await childService.updateTask(childId, task._id, {taskReward: e.target.value});
  }

  const handleItem = async (e) => {
    setItemForm({...itemForm, goalItem: e.target.value})
    await childService.update(childId, {goalItem: e.target.value})
  }

  const handleGoal = async (e) => {
    setItemForm({...itemForm, goalScore: e.target.value})
    let test = await childService.update(childId, {goalScore: e.target.value})
    console.log(e.target.value)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate(`/choreboard/${childId}`)
  }

  useEffect(() => {
    fetchChild()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate(-1)}} />
          <h1 className={styles.header_h1}>Kid Profile</h1>
          <p className={styles.header_p}>Enter the number of chore coins each chore <br></br>is worth</p>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src={child.avatar} alt={child.avatar}></img>
          <h1 className={styles.profileName}>{child.name}</h1>
        </div>
        <div className={styles.setCoinValue}>
        <h1>Set Coin Value</h1> 

          { tasks.length ? (
            <h1 className={styles.taskList} >{tasks.map((task) => 
              <div className={styles.taskItem} key={task._id} >
                <h3 className={styles.taskName}>{task.name}</h3>
                <input 
                  placeholder='0' 
                  type='number' 
                  className={styles.coinInput}
                  name='taskReward'
                  onChange={ (e)=> handleChange(e, task)}
                  autoComplete='off'></input>
                <img className={styles.choreCoin}src='/assets/Chore_coin.svg'></img>
              </div>)}
            </h1>) : (<div className={styles.taskList}>No Tasks Today</div>) }

        </div>
        <div className={styles.goal}>
          <h1>Set {child.name}'s Goal</h1>
        </div>
        <div className={styles.dreamItem}>
          <h1>Dream Item</h1>
          <input type="text" 
            onChange={(e) => handleItem(e)}
          />
        </div>
        <div className={styles.coinValue}>
          <h1>Coin Value</h1>
          <input type="text" 
            onChange={(e) => handleGoal(e)}
          />
          <p>Parents will determine the true monetary value of each coin.</p>
          <p>This can be adjusted in parent profile</p>
          <Link id="saveLink" to ="/parentprofile">
            <button className={styles.save} onClick={handleSubmit}>Save</button>
          </Link>
        </div>
    </div>
  </div>
  )
}