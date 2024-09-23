import { ISelectType } from '@/types/types.dto'
import {
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material'
import { FC, useState } from 'react'

export const ModelTypeSelect: FC<ISelectType> = ({ rest, onChange }) => {
	const [model, setModel] = useState('')

	const handleChangeModel = (event: SelectChangeEvent) => {
		setModel(event.target.value)
	}
	return (
		<FormControl
			required
			sx={{ m: 1, minWidth: 100 + '%' }}
		>
			<InputLabel id="demo-simple-select-required-label">Model</InputLabel>
			<Select
				labelId="demo-simple-select-required-label"
				id="demo-simple-select-required"
				value={model}
				label="EngineType *"
				onChange={handleChangeModel}
				inputProps={{ ...rest }}
			>
				<MenuItem value={'BMW'}>BMW</MenuItem>
				<MenuItem value={'Mercedes'}>Mercedes</MenuItem>
			</Select>
			<FormHelperText>Required</FormHelperText>
		</FormControl>
	)
}
