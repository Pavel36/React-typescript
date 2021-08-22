import React from 'react'
import Card, { CardVariant } from './components/card'

const App = () => {
  return (
    <div>
      <Card onClick={(num: number)=>console.log('click', num)} height='200px' width='200px' variant={CardVariant.primary}> 
        <button>btn</button>
        <div>descr</div>
      </Card>
    </div>
  )
}

export default App
