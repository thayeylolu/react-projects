import React, { useState } from 'react'
import data from './data'
import List from './List'
import Individuals from './Individuals'

function App() {
  const [people, setPeople] = useState(data)
  


  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people}  />
        <button onClick={() => setPeople([])}>Clear</button>
      </section>
    </main>
  )
}

export default App
