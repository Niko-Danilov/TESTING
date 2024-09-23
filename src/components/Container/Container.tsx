import { ContainerInner } from '@/types/types.dto'
import { FC } from 'react'

export const Container: FC<ContainerInner> = ({ children }) => {
	return (
		<div>
			<div className="max-w-[1230px] w-full  m-auto pl-4 pr-4">
				{children}
			</div>
		</div>
	)
}
