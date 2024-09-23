import { ICarItem } from '@/types/types.dto'
import Image from 'next/image'

import Link from 'next/link'
import { FC } from 'react'

export const ProductCard: FC<ICarItem> = ({ item, type }) => {
	return (
		<li className="flex w-full justify-around border-2 border-purple-500 p-4 rounded-md min-h-[300px] max-h-[300px] gap-2 ">
			<Image
				src={item.img || ''}
				alt={item.model}
				width={400}
				height={200}
			/>
			<div className="flex flex-col justify-around">
				<div className="flex flex-col justify-center">
					<div>Модель: {item.model}</div>
					<div>Цвет: {item.color}</div>
					<div>Дата Выпуска: {item.releaseData}</div>
					<div>Трансмиссия: {item.transmission}</div>
					<div>Тип двигателя: {item.engineType}</div>
					<div>Цена:{item.price}</div>
					<div>
						Запас хода:
						{item.engineType === 'Electric' ? item.powerReserve : 'N/A'}
					</div>
				</div>

				{type ? (
					<Link
						className="bg-purple-600 text-white border-2 border-black p-4 rounded-2xl text-center"
						href={`/car/${item.id}`}
					>
						Подробнее
					</Link>
				) : (
					<Link
						className="bg-purple-600 text-white border-2 border-black p-4 rounded-2xl text-center"
						href={`/`}
					>
						Назад
					</Link>
				)}
			</div>
		</li>
	)
}
