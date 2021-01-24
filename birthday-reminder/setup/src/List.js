import React, { useState } from 'react'
import data from './data'


//people is a prop here
const List = ({ people }) => {
	 const [individuals, setIndividuals,setIndividuals] = useState(data)
	 const removeItem = (id) => {
			let newPeople = individuals.filter((ind) => ind.id !== id)
			setIndividuals(newPeople)
		}
	
	return (
		<>
			{people.map((person) => {
				const { id, name, image, age } = person
				return (
					<article key={id} className='person'>
						<img src={image} alt={name} />
						<div>
							<h4>{name}</h4>
							<p>{age} years</p>
							{individuals.map((ind) => {
								const { id, name } = ind
								return (
									<div key={id} className='item'>
										<h4>{name}</h4>
										<button
											onClick={() =>
												removeItem(id)
											}>
											remove
										</button>
									</div>
								)
							})}
						</div>
					</article>
				)
			})}
		</>
	)
}

export default List
