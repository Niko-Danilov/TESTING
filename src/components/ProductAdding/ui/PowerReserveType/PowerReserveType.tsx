import { ISelectType } from '@/types/types.dto'
import { FormControl, FormHelperText, TextField } from '@mui/material'
import { FC } from 'react'

export const PowerReserveType: FC<ISelectType> = ({ rest }) => {
	return (
		<FormControl
			required
			sx={{ m: 1, minWidth: 100 + '%' }}
		>
			<TextField
				inputProps={{ ...rest }}
				label="Release Data"
				variant="outlined"
			/>
			<FormHelperText>Required</FormHelperText>
		</FormControl>
	)
}
