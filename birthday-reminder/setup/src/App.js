import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  return (
    <>
      <section className='container'>
        <h3>0 birthdays today</h3>
        <List/>
        <button onClick ={() => { console.log('Hello')
          
        }}>Clear</button>
      </section>
    </>
  )
}

export default App
