import Link from 'next/link'
import Router from 'next/router'

const Home=()=>{

	{/* 方法二 */}
	function GoToArtist() {
		Router.push('/artist?name=李紫彤')
	}

	{/* 方法三 -- 使用物件 */}
	function GoToArtist2() {
		Router.push({
			pathname: '/artist',
			query: { name: 'LEE TzuTung' }
		})
	}
	

	return (
		<>
			<div>這是首頁</div>
			{/* 方法一 */}
			<div>
				<Link href='/artist?name=紫彤'>紫彤</Link><br/>
				<Link href='/artist?name=TzuTung'>TzuTung</Link>
			</div>

			{/* 方法二 */}
			<div>
				<button onClick={GoToArtist}>李紫彤</button>
			</div>

			{/* 方法三 */}
			<div>
				<button onClick={GoToArtist2}>LEE TzuTung</button>
			</div>

			{/* 方法四 */}
			<div>
				<Link href={{pathname: '/artist', query: { name: 'LEE紫彤' }}}>LEE紫彤</Link>
			</div>
		</>
	)
}

export default Home
