import { ILayout } from '@/types/types.dto'

import { FC } from 'react'
import { Container } from '../Container/Container'

export const LayoutPage: FC<ILayout> = ({ header, children }) => {
	return (
		<div>
			{header}
			<main className="min-h-screen">
				<Container>{children}</Container>
			</main>
		</div>
	)
}
