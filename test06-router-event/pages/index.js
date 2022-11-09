import Link from 'next/link'
import Router from 'next/router'

const Home=()=>{

	/*	routeChangeStart
		beforeHistoryChange
		routeChangeComplete
		routeChangeError
		hashChangeStart
		hashChangeComplete
	 */

	Router.events.on('routeChangeStart', (...args) => {
		console.log('routeChangeStart>', ...args)
	})
	
	Router.events.on('beforeHistoryChange', (...args) => {
		console.log('beforeHistoryChange>', ...args)
	})

	Router.events.on('routeChangeComplete', (...args) => {
		console.log('routeChangeComplete>', ...args)
	})

	Router.events.on('routeChangeError', (...args) => {
		console.log('routeChangeError>', ...args)
	})

	Router.events.on('hashChangeStart', (...args) => {
		console.log('hashChangeStart>', ...args)
	})

	Router.events.on('hashChangeComplete', (...args) => {
		console.log('hashChangeComplete>', ...args)
	})

	function GoToArtist() {
		Router.push({
			pathname: '/artist',
			query: { name: 'LEE TzuTung' }
		})
	}
	
	return (
		<>
			<div>
				<Link href='/artist?name=紫彤'>紫彤</Link><br/>
			</div>

			<div>
				<button onClick={GoToArtist}>LEE TzuTung</button>
			</div>

			<div>
				<Link href='#TzuTung'>#TzuTung</Link>
			</div>
		</>
	)
}

export default Home
