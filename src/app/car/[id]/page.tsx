import { apiInstance } from '@/api/api-instance'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import { DASHBORD_PAGES } from '@/config/pages-url.config'
import { ICarPrototype } from '@/types/types.dto'

export const dynamicParams = true

export async function generateStaticParams() {
	try {
		const res = await apiInstance.get(`${DASHBORD_PAGES.APIDATA}`)
		const data: ICarPrototype[] = res.data

		return data.map((item: ICarPrototype) => ({
			id: item.id.toString()
		}))
	} catch (error) {
		console.error('Error fetching API data:', error)

		return []
	}
}

async function getCar(id: string): Promise<ICarPrototype | undefined> {
	try {
		const res = await apiInstance.get(`${DASHBORD_PAGES.APIDATA}`)
		const data: ICarPrototype[] = res.data
		console.log(data)
		const car = data.find((item) => item.id === +id)
		console.log(data)
		return car
	} catch (error) {
		console.error('Error fetching API data:', error)

		return undefined
	}
}

export default async function CarProduct({
	params: { id }
}: {
	params: { id: string }
}) {
	const car: ICarPrototype | undefined = await getCar(id)

	if (!car) {
		return <div>Машина не найдена</div>
	}

	return (
		<section>
			<div className="mt-16">
				<ProductCard
					item={car}
					type={false}
				/>
			</div>
		</section>
	)
}
