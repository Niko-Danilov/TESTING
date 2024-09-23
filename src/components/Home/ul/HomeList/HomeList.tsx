import { IList } from '@/types/types.dto'
import { FC } from 'react'

export const HomeList: FC<IList> = ({ children }) => {
	return <ul className="flex flex-col gap-4 mt-16">{children} </ul>
}
