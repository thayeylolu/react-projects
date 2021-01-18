import React, { useState } from 'react'
import data from './data'

const Individuals = () => {

 const [individuals, setIndividuals] = useState(data)
  const removeItem = (id) => {
   
    let newPeople = individuals.filter((person) =>{
     const { id, name, image, age } = person
     person.id !== id
    setIndividuals(newPeople)
    })
  }
 return (
  <button onClick = {removeItem(id)}>Delete</button>
 )
}

export default Individuals
