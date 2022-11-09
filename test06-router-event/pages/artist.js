import {withRouter} from 'next/router'
import Link from 'next/link'

const Artist = ({router}) => {
	return (
		<>
			<div>藝術家: {router.query.name}</div>
			<Link href='/'>Back</Link>
		</>
	)
}

export default withRouter(Artist)
