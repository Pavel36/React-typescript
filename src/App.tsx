import React from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types'

const App = () => {
  const users: IUser[] = [
    {id:1, name:'Petro', email:'sss@mail.ru', address: {city: 'Moscow', street: 'lenina', zipcode: '24124312'}},
    {id:2, name:'Petro', email:'sss@mail.ru', address: {city: 'Moscow', street: 'lenina', zipcode: '24124312'}}
  ]
  return (
    <div>
      <Card onClick={(num: number)=>console.log('click', num)} height='200px' width='200px' variant={CardVariant.primary}> 
        <button>btn</button>
        <div>descr</div>
      </Card>
      <UserList users={users}/>
    </div>
  )
}

export default App
