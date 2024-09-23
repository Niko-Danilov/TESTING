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

export const EngineTypeSelect: FC<ISelectType> = ({ rest, onChange }) => {
	const [engineType, setEngineType] = useState('')

	const handleChangeEngineType = (event: SelectChangeEvent) => {
		setEngineType(event.target.value)
		if (onChange) {
			onChange(event.target.value)
		}
	}
	return (
		<FormControl
			required
			sx={{ m: 1, minWidth: 100 + '%' }}
		>
			<InputLabel id="demo-simple-select-required-label">
				EngineType
			</InputLabel>
			<Select
				labelId="demo-simple-select-required-label"
				id="demo-simple-select-required"
				value={engineType}
				label="EngineType *"
				onChange={handleChangeEngineType}
				inputProps={{ ...rest }}
			>
				<MenuItem value={'Disel'}>Disel</MenuItem>
				<MenuItem value={'Petrol'}>Petrol</MenuItem>
				<MenuItem value={'Electric'}>Electric</MenuItem>
			</Select>
			<FormHelperText>Required</FormHelperText>
		</FormControl>
	)
}
