import { useState, useEffect } from "react"

const useFetch = () => {
    const [tasks, setTasks] = useState ([])

    useEffect(() => {
        const getTasks = async () => {
          const taskFromServer = await fetchTasks()
          setTasks(taskFromServer)
        }
        getTasks()
    }, [])

    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:8000/tasks')
        const data = await res.json()
        return data
    }

    // Add Items
    const addTask = async (task) => {
        const res = await fetch(`http://localhost:8000/tasks`,{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
        })
        const data = await res.json()
        setTasks([...tasks, data])
    }

    // Delete Items
    const deleteTask = async (id) => {
        await fetch(`http://localhost:8000/tasks/${id}`,{
            method: 'DELETE'
        })
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return { tasks, setTasks, addTask, deleteTask }
}
 
export default useFetch;
