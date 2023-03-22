import styles from './KidChores.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate, Link, useParams } from 'react-router-dom'

// redux actions
import { setProfileName } from '../../actions'

// services
import * as profileService from '../../services/profileService'
import * as taskService from '../../services/taskService'

export default function KidChores() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)
  const childId = useParams().id
  const [selectedTasks, setSelectedTasks] = useState([])


  const [form, setForm] = useState({
    taskName: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, taskName: target.value })
    console.log(form)
  }

  // const clearInput = () => {
  //   setForm({ taskName: '' })
  // }

  const handleSubmit = async (e, tasksData) => {
    e.preventDefault()
    handleAddTask(form)
    try {
      await taskService.create(profile.user.profile, childId, tasksData)
    } catch (error) {
      console.log(error)
    }
    
  }

  const preDefinedTasks = [
    {
      id: "123",
      taskName: "Throw Trash",
      selected: false
    },
    {
      id: "4321123123",
      taskName: "Clean Room",
      selected: false
    },
    {
      id: "1231231234523",
      taskName: "Fold Clothes",
      selected: false
    },
    {
      id: "1231243523123",
      taskName: "Clean up dishes",
      selected: true
    },
    {
      id: "1223453123123",
      taskName: "Vacuum the living room",
      selected: true
    },

  ]

  const [child, setChild] = useState({});
  const [tasks, setTasks] = useState(preDefinedTasks);

  async function fetchChild() {
    setChild(await profileService.showChild(profile.user.profile, childId))
    setTasks(await tasks)
  }

  function handleSelectTask(task) {
    console.log(task)
    task.selected = !task.selected
    if (task.selected){
      setSelectedTasks(selectedTasks => [...selectedTasks, task])
    } else {
      setSelectedTasks(selectedTasks => selectedTasks.filter(t => t.id !== task.id))
    }
  }

  async function handleAddTask(form) {
      const newTask = { id: Date.now().toString(), taskName: form.taskName, selected: true }
      setTasks(tasks => [...tasks, newTask])
      setForm({ taskName: '' })
  }

  const handleSendTasksToBackEnd = async () => {
    const selectedTaskIds = selectedTasks.map(task => task.taskName)
    const tasksData = { tasks: selectedTaskIds }
  console.log('tasksData:',tasksData)
    try {
      await taskService.create(profile.user.profile, childId, tasksData)
    } catch (error) {
      console.log(error)
    }
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
          <p className={styles.header_p}>Select your Child's Primary Chores</p>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src={child.avatar} alt={child.avatar}></img>
          <h1 className={styles.profileName}>{child.name}</h1>
          <div className={styles.tasklist}>
            <form className={styles.formField}>
              {tasks.map((task) => 
                {
                  return(
                    <div key={task.id} className={styles.task} onClick={() => { handleSelectTask(task) }}>
                      <div className={styles.checkcircle} >
                        <img className={`${styles.check} ${task.selected ? '' : styles.hide}`} src="/assets/check.svg" alt="selected-task" />
                      </div>
                      {task.taskName}
                    </div>
                  )
                }
              )}
            </form>
              <div className={styles.addTask}><div className={styles.addTaskCircle} onClick={handleSubmit}>+</div>
                <input type="text"
                name='taskName'
                  placeholder='Create New Chore'
                  value={form.taskName}
                  onChange={handleChange}
                  autoComplete='off'  />
              </div>
          </div>
        </div>
      </div>
      <Link to='/coingoal'>
        <button className={styles.save} onClick={handleSendTasksToBackEnd}>Save</button>
      </Link>
    </div>
  )

}


