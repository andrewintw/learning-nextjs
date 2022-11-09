import React from 'react'
import Link from 'next/link'

const Home=()=>(
	<>
		<div>This is Home Page</div>
		<div><Link href='/linkA'>Go to Page A</Link></div>
		{/* Error: Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>. 
			現在已經不需要在 <Link> 下層放 <a>
		  */}
		<div><Link href='/linkB'>Go to Page B</Link></div>
	</>
)

export default Home
