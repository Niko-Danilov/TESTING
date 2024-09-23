import { apiInstance } from '@/api/api-instance'
import { DASHBORD_PAGES } from '@/config/pages-url.config'
import { SelectChangeEvent } from '@mui/material'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useFetch = () => {
	const [yearsRealeseSort, setYearsRealeseSort] = useState('')

	const handleChangeYearRealeseSort = (event: SelectChangeEvent) => {
		setYearsRealeseSort(event.target.value)
	}

	const [priceSort, setPriceSort] = useState('')

	const handleChangeSetPriceSort = (event: SelectChangeEvent) => {
		setPriceSort(event.target.value)
	}

	const [colorSort, setColorSort] = useState('')

	const handleChangeColorSort = (event: SelectChangeEvent) => {
		setColorSort(event.target.value)
	}

	const [modelSort, setModelSort] = useState('')

	const handleChangeModelSort = (event: SelectChangeEvent) => {
		setModelSort(event.target.value)
	}

	const handlerSearchSort = () => {
		refetch()
	}

	const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
		useInfiniteQuery({
			queryKey: ['cars'],
			queryFn: async ({ pageParam = 1 }) => {
				const res = await apiInstance.get(`${DASHBORD_PAGES.APIDATA}`, {
					params: {
						limit: 4,
						page: pageParam,
						sortBy: [priceSort, yearsRealeseSort]
							.filter(Boolean)
							.join(','),
						sortOrderPrice: [priceSort, yearsRealeseSort]
							.filter(Boolean)
							.join(','),
						brand: modelSort,
						color: colorSort
					}
				})
				return res.data
			},
			getNextPageParam: (lastPage, pages) => {
				if (lastPage.length < 4) return undefined
				return pages.length + 1
			},
			initialPageParam: 1
		})

	const scrollHandler = (e: Event) => {
		const target = e.target as Document
		if (
			target.documentElement.scrollHeight -
				(target.documentElement.scrollTop + window.innerHeight) <
				100 &&
			hasNextPage &&
			!isFetching
		) {
			fetchNextPage()
		}
	}

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [hasNextPage, isFetching])

	return {
		data,
		isFetching,
		yearsRealeseSort,
		handleChangeYearRealeseSort,
		priceSort,
		handleChangeSetPriceSort,
		colorSort,
		handleChangeColorSort,
		modelSort,
		handleChangeModelSort,
		handlerSearchSort
	}
}
