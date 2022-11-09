import React from 'react'
import Router from 'next/router'

const Home=()=>{

	function gotoPageA() {
		Router.push('/linkA')
	}

	return (
		<>
			<div>This is Home Page III</div>
			<div>
				<button onClick={gotoPageA}>Go to Page A</button>
				<button onClick={gotoPageA}>Go to Page A, too</button>
			</div>
		</>
	)
}

export default Home
