import { ISelectType } from '@/types/types.dto'
import { Avatar, Button, FormControl } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import { Controller } from 'react-hook-form'

export const ImageTypeSelect: FC<ISelectType> = ({ control }) => {
	const [image, setImage] = useState<string | null>(null)

	const handleImageChange = (
		event: ChangeEvent<HTMLInputElement>,
		onChange: (value: string) => void
	) => {
		const file = event.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				const imageUrl = reader.result as string
				setImage(imageUrl) // Устанавливаем Data URL
				onChange(imageUrl) // Передаем Data URL в onChange
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<FormControl
			required
			sx={{ m: 1, minWidth: '100%' }}
		>
			<Controller
				name="img"
				control={control}
				render={({ field }) => (
					<>
						<input
							accept="image/*"
							style={{ display: 'none' }}
							id="upload-button"
							type="file"
							onChange={(event) => {
								handleImageChange(event, field.onChange)
							}}
						/>
						<label htmlFor="upload-button">
							<Button
								variant="contained"
								component="span"
								className="w-full"
							>
								DownLoad Image
							</Button>
						</label>
						{image && (
							<Avatar
								alt="Uploaded Image"
								src={image}
								sx={{ width: 200, height: 200, marginTop: 2 }}
							/>
						)}
					</>
				)}
			/>
		</FormControl>
	)
}
