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

export const TransmissionTypeSelect: FC<ISelectType> = ({ rest, onChange }) => {
	const [transmission, setTransmission] = useState('')

	const handleChangeTransmission = (event: SelectChangeEvent) => {
		setTransmission(event.target.value)
	}
	return (
		<FormControl
			required
			sx={{ m: 1, minWidth: 100 + '%' }}
		>
			<InputLabel id="demo-simple-select-required-label">
				Transmission
			</InputLabel>
			<Select
				labelId="demo-simple-select-required-label"
				id="demo-simple-select-required"
				value={transmission}
				label="EngineType *"
				onChange={handleChangeTransmission}
				inputProps={{ ...rest }}
			>
				<MenuItem value={'Automatic'}>Automatic</MenuItem>
				<MenuItem value={'Manual'}>Manual</MenuItem>
				<MenuItem value={'Robotic'}>Robotic</MenuItem>
			</Select>
			<FormHelperText>Required</FormHelperText>
		</FormControl>
	)
}
