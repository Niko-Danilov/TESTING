'use client'

import { ICarPrototype } from '@/types/types.dto'
import { ProductCard } from '../ProductCard/ProductCard'
import { useFetch } from './model/useFetch'
import { HomeList } from './ul/HomeList/HomeList'
import { SortList } from './ul/SortList/SortList'

export const Home = () => {
	const {
		data,
		isFetching,
		colorSort,
		handleChangeColorSort,
		handleChangeModelSort,
		handleChangeSetPriceSort,
		handleChangeYearRealeseSort,
		modelSort,
		priceSort,
		yearsRealeseSort,
		handlerSearchSort
	} = useFetch()

	return (
		<section>
			<SortList
				color={colorSort}
				handlerColor={handleChangeColorSort}
				price={priceSort}
				handlerPrice={handleChangeSetPriceSort}
				model={modelSort}
				handlerModel={handleChangeModelSort}
				years={yearsRealeseSort}
				handlerYears={handleChangeYearRealeseSort}
				handlerSearchSort={handlerSearchSort}
			/>
			<HomeList>
				{data?.pages.map((page) =>
					page.map((item: ICarPrototype) => (
						<ProductCard
							key={item.id}
							type={true}
							item={item}
						/>
					))
				)}
			</HomeList>
			{isFetching && <div>Loading...</div>}
		</section>
	)
}
