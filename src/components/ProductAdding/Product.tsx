'use client'

import { ICarPrototype } from '@/types/types.dto'
import { Button } from '@mui/material'

import { useForm } from 'react-hook-form'
import { useFetchPost } from './model/useFetchPost'
import { ColorTypeSelect } from './ui/ColorTypeSelect'
import { EngineTypeSelect } from './ui/EngineTypeSelect/EngineType'
import { ImageTypeSelect } from './ui/ImageTypeSelect'
import { ModelTypeSelect } from './ui/ModelTypeSelect/ModelTypeSelect'
import { PowerReserveType } from './ui/PowerReserveType'
import { PriceType } from './ui/PriceType'
import { RealeseType } from './ui/RealeseType'
import { TransmissionTypeSelect } from './ui/TransmissionTypeSelect'

export const ProductAdding = () => {
	const { register, handleSubmit, control } = useForm<ICarPrototype>()

	const { engineType, setEngineType, onSubmit } = useFetchPost()

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mt-16 flex flex-col gap-4"
		>
			<EngineTypeSelect
				rest={{ ...register('engineType') }}
				onChange={setEngineType}
			/>

			<TransmissionTypeSelect rest={{ ...register('transmission') }} />

			<ModelTypeSelect rest={{ ...register('model') }} />

			<ColorTypeSelect rest={{ ...register('color') }} />

			<PriceType rest={{ ...register('price') }} />

			<RealeseType rest={{ ...register('releaseData') }} />

			<ImageTypeSelect control={control} />

			{engineType === 'Electric' && (
				<PowerReserveType rest={{ ...register('powerReserve') }} />
			)}

			<Button
				type="submit"
				variant="contained"
				className="w-full m-2"
				color="warning"
			>
				Add
			</Button>
		</form>
	)
}
