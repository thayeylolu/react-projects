import React, { useState } from 'react'
import data from './data'

const Individuals = () => {
	//const [individuals, setIndividuals] = useState(data)

	const printout = () => {
		return (
			<div>
				<h3>dddd</h3>
			</div>
		)
	}
	return (
		<>
			<div className='item'>
				<button onClick={() => printout()}>remove</button>
			</div>
		</>
	)
}
export default Individuals
