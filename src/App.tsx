import React from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import UsersPage from './components/pages/UsersPage'
import TodosPage from './components/pages/TodosPage'
import UserItemPage from './components/pages/UserItemPage'
import TodoItemPage from './components/pages/TodoItemPage'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/todos'>Todos</NavLink>
        </div>
        <Route path={'/users'} exact>
            <UsersPage/>
        </Route>
        <Route path={'/todos'} exact>
            <TodosPage/>
        </Route>
        <Route path={'/users/:id'}>
            <UserItemPage/>
        </Route>
        <Route path={'/todos/:id'}>
            <TodoItemPage/>
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App
