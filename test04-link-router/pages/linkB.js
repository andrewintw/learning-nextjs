import Link from 'next/link'

export default ()=>(
	<>
		<div>This is Page-B</div>
		<Link href='/'>
			<span>返回首頁</span>
		</Link>
	</>
)
