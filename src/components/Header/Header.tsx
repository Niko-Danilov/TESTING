'use client'

import { Button } from '@mui/material'
import Link from 'next/link'
import { useAuth } from '../AuthProvider/AuthProvider'
import { Container } from '../Container/Container'

export const Header = () => {
	const { isAuth, handlerOut } = useAuth()

	return (
		<header className="w-full fixed top-0 left-0 bg-purple-700 z-10">
			<Container>
				<div className="flex justify-between h-14 items-center">
					<Link href={'/'}>Logo</Link>
					{isAuth ? (
						<Link
							className="bg-yellow-500 p-4"
							href={'/AddProduct'}
						>
							Add Product
						</Link>
					) : (
						<Link
							className="bg-yellow-500 p-4"
							href={'/LoginPage'}
						>
							Login
						</Link>
					)}
					{isAuth && <Button onClick={handlerOut}>Sign out</Button>}
				</div>
			</Container>
		</header>
	)
}
