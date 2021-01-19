import React, { useState } from 'react'
import data from './data'

const Individuals = () => {
  const [individuals, setIndividuals] = useState(data);

	const removeItem = (id) => {
		let newPeople = individuals.filter((person) => person.id !== id)
		setIndividuals(newPeople)
  }

  return (
    <>
      {Individuals.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })
}
</>
)};
export default Individuals
