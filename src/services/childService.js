import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/child`


async function create(childData) {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(childData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function index() {
  try {
    const res = await fetch(`${BASE_URL}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(childId) {
  try {
    const res = await fetch(`${BASE_URL}/${childId}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


async function update(childId, childData) {
  try {
    const res = await fetch(`${BASE_URL}/${childId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(childData)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

//! Tasks

async function createTask(childId, taskData) {
  try {
    const res = await fetch(`${BASE_URL}/${childId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function indexTasks(childId) {
  try {
    const res = await fetch(`${BASE_URL}/tasks/${childId}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function showTask(childId, taskId) {
  try {
    const res = await fetch(`${BASE_URL}/${childId}/${taskId}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


async function updateTask(childId, taskId, taskData) {
  try {
    const res = await fetch(`${BASE_URL}/${childId}/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteTask(childId, taskId) {
  try {
    const res = await fetch(`${BASE_URL}/${childId}/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


export {
  create,
  index,
  show,
  update,
  createTask,
  indexTasks,
  showTask,
  updateTask,
  deleteTask
}