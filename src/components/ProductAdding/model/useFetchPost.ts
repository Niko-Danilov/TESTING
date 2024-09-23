import { apiInstance } from '@/api/api-instance'
import { DASHBORD_PAGES } from '@/config/pages-url.config'
import { ICarPrototype } from '@/types/types.dto'
import { useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

export const useFetchPost = () => {
	const [engineType, setEngineType] = useState('')

	const router = useRouter()

	const { refetch } = useInfiniteQuery({
		queryKey: ['cars'],
		queryFn: async ({ pageParam = 1 }) => {
			const res = await apiInstance.get(`${DASHBORD_PAGES.APIDATA}`, {
				params: { limit: 4, page: pageParam }
			})
			return res.data
		},
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.length < 4) return undefined
			return pages.length + 1
		},
		initialPageParam: 1
	})

	const mutation = useMutation({
		mutationFn: async (data: ICarPrototype) => {
			const res = await apiInstance.post(`${DASHBORD_PAGES.APIDATA}`, data)
			return res.data
		},
		onSuccess() {
			refetch()
			router.push('/')
		}
	})

	const onSubmit: SubmitHandler<ICarPrototype> = async (data) => {
		await mutation.mutateAsync(data)
	}

	return {
		engineType,
		setEngineType,
		onSubmit
	}
}
