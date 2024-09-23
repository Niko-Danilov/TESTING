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

export const ColorTypeSelect: FC<ISelectType> = ({ rest, onChange }) => {
	const [color, setColor] = useState('')

	const handleChangeColor = (event: SelectChangeEvent) => {
		setColor(event.target.value)
	}
	return (
		<FormControl
			required
			sx={{ m: 1, minWidth: 100 + '%' }}
		>
			<InputLabel id="demo-simple-select-required-label">Color</InputLabel>
			<Select
				labelId="demo-simple-select-required-label"
				id="demo-simple-select-required"
				value={color}
				label="Age *"
				onChange={handleChangeColor}
				inputProps={{ ...rest }}
			>
				<MenuItem value={'Black'}>Black</MenuItem>
				<MenuItem value={'White'}>White</MenuItem>
				<MenuItem value={'Green'}>Green</MenuItem>
			</Select>
			<FormHelperText>Required</FormHelperText>
		</FormControl>
	)
}
