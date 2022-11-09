import React from 'react'
import Router from 'next/router'

const Home=()=>(
	<>
		<div>This is Home Page II</div>
		<div>
			<button onClick={()=>{Router.push('/linkA')}}>Go to Page A</button>
		</div>
	</>
)

export default Home
