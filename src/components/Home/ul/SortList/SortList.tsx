import {
	Button,
	MenuItem,
	Select,
	SelectChangeEvent,
	Stack,
	Typography
} from '@mui/material'
import { FC } from 'react'

export interface ISortList {
	color: string
	handlerColor: (event: SelectChangeEvent) => void
	price: string
	handlerPrice: (event: SelectChangeEvent) => void
	model: string
	handlerModel: (event: SelectChangeEvent) => void
	years: string
	handlerYears: (event: SelectChangeEvent) => void
	handlerSearchSort: () => void
}

export const SortList: FC<ISortList> = ({
	color,
	handlerColor,
	price,
	handlerPrice,
	model,
	handlerModel,
	years,
	handlerYears,
	handlerSearchSort
}) => {
	return (
		<div className="mt-28 flex flex-col gap-5 ">
			<Stack>
				<Typography variant="h6">По Году Выпуска</Typography>
				<Select
					labelId="demo-simple-select-required-label"
					id="demo-simple-select-required"
					value={years}
					label="Age *"
					onChange={handlerYears}
				>
					<MenuItem value={''}>None</MenuItem>
					<MenuItem value={'asc'}> по возрастанию</MenuItem>
					<MenuItem value={'desc'}> по убыванию</MenuItem>
				</Select>
			</Stack>

			<Stack>
				<Typography variant="h6">По Цене</Typography>
				<Select
					labelId="demo-simple-select-required-label"
					id="demo-simple-select-required"
					value={price}
					label="Age *"
					onChange={handlerPrice}
				>
					<MenuItem value={''}>None</MenuItem>
					<MenuItem value={'asc'}> по возрастанию</MenuItem>
					<MenuItem value={'desc'}> по убыванию</MenuItem>
				</Select>
			</Stack>

			<Stack>
				<Typography variant="h6">По Цвету</Typography>
				<Select
					labelId="demo-simple-select-required-label"
					id="demo-simple-select-required"
					value={color}
					label="Age *"
					onChange={handlerColor}
				>
					<MenuItem value={''}>None</MenuItem>
					<MenuItem value={'Black'}>Black</MenuItem>
					<MenuItem value={'White'}>White</MenuItem>
					<MenuItem value={'Green'}>Green</MenuItem>
				</Select>
			</Stack>

			<Stack>
				<Typography variant="h6">По Марке</Typography>
				<Select
					labelId="demo-simple-select-required-label"
					id="demo-simple-select-required"
					value={model}
					label="EngineType *"
					onChange={handlerModel}
				>
					<MenuItem value={''}>None</MenuItem>
					<MenuItem value={'BMW'}>BMW</MenuItem>
					<MenuItem value={'Mercedes'}>Mercedes</MenuItem>
				</Select>
			</Stack>

			<Button
				variant="outlined"
				onClick={handlerSearchSort}
			>
				Искать
			</Button>
		</div>
	)
}
