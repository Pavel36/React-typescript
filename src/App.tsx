import React, {useState, useEffect} from 'react'
import Card, { CardVariant } from './components/Card'
import { IUser, ITodo } from './types/types'
import List from './components/List'
import axios from 'axios'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'
import EventsExample from './components/EventsExample'

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch (error) {
      alert(error)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <EventsExample/>
      <Card onClick={(num: number)=>console.log('click', num)} height='200px' width='200px' variant={CardVariant.primary}> 
        <button>btn</button>
        <div>descr</div>
      </Card>
      <List items={users} renderItem={(user: IUser)=><UserItem user={user} key={user.id}/>}/>
      <List items={todos} renderItem={(todo: ITodo)=><TodoItem todo={todo} key={todo.id}/>}/>
    </div>
  )
}

export default App
