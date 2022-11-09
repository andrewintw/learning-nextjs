import Link from 'next/link'

export default ()=>(
	<>
		<div>This is Page-A</div>
		<Link href='/'>
			<span>返回首頁</span>
			<span>Icon</span>
		</Link>
	</>
)
