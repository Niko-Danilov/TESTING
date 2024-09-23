'use client'

import { apiInstance } from '@/api/api-instance'
import { DASHBORD_PAGES } from '@/config/pages-url.config'
import { IUser } from '@/types/types.dto'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

interface AuthContextType {
	isAuth: boolean
	onSubmit: SubmitHandler<IUser>
	handlerOut: () => Promise<void>
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter()
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() => {
		const token = localStorage.getItem('token')
		setIsAuth(!!token)
	}, [])

	const useLogin = useMutation({
		mutationFn: async (data: IUser) => {
			const res = await apiInstance.post(`${DASHBORD_PAGES.APIAUTH}`, data)
			localStorage.setItem('token', res.data.token)
			return res.data
		},
		onSuccess() {
			setIsAuth(true)
			router.push('/')
		}
	})

	const useOut = useMutation({
		mutationFn: async () => {
			const token = localStorage.getItem('token')
			if (token) {
				await axios.delete(`${DASHBORD_PAGES.APIAUTH}`, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
			}
		},
		onSuccess() {
			localStorage.removeItem('token')
			setIsAuth(false)
		}
	})

	const onSubmit: SubmitHandler<IUser> = async (data) => {
		await useLogin.mutateAsync(data)
	}

	const handlerOut = async () => {
		await useOut.mutateAsync()
		router.push('/')
	}
	return (
		<AuthContext.Provider value={{ isAuth, onSubmit, handlerOut }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
