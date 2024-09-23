'use client'

import { IUser } from '@/types/types.dto'
import { Button, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useAuth } from '../AuthProvider/AuthProvider'

export const Login = () => {
	const { onSubmit } = useAuth()

	const { register, handleSubmit } = useForm<IUser>()

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="pt-20"
		>
			<Stack gap={4}>
				<TextField
					label="Login"
					variant="outlined"
					inputProps={{ ...register('username') }}
					required
				/>

				<TextField
					label="Password"
					variant="outlined"
					inputProps={{ ...register('password') }}
					required
				/>

				<Button type="submit">Sign in</Button>
			</Stack>
		</form>
	)
}
