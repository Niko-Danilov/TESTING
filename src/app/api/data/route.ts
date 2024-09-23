import { ICarPrototype } from '@/types/types.dto'
import { NextResponse } from 'next/server'

const cars: ICarPrototype[] = [
	{
		id: 1,
		model: 'BMW',
		color: 'Black',
		engineType: 'Diesel',
		img: '/bmw.jpg',
		price: 444001,
		releaseData: 2011,
		transmission: 'Automatic'
	},
	{
		id: 2,
		model: 'Mercedes',
		color: 'Green',
		engineType: 'Electric',
		img: '/mercedes.jpg',
		price: 444020,
		releaseData: 2012,
		transmission: 'Automatic',
		powerReserve: 123
	},
	{
		id: 3,
		model: 'Mercedes',
		color: 'White',
		engineType: 'Diesel',
		img: '/mercedes.jpg',
		price: 444300,
		releaseData: 2010,
		transmission: 'Automatic'
	},
	{
		id: 4,
		model: 'Mercedes',
		color: 'Black',
		engineType: 'Diesel',
		img: '/mercedes.jpg',
		price: 454000,
		releaseData: 2010,
		transmission: 'Manual'
	},
	{
		id: 5,
		model: 'Mercedes',
		color: 'Green',
		engineType: 'Diesel',
		img: '/mercedes.jpg',
		price: 144000,
		releaseData: 2010,
		transmission: 'Automatic'
	},
	{
		id: 6,
		model: 'BMW',
		color: 'White',
		engineType: 'Diesel',
		img: '/bmw.jpg',
		price: 414000,
		releaseData: 2010,
		transmission: 'Robotic'
	},
	{
		id: 7,
		model: 'BMW',
		color: 'Black',
		engineType: 'Petrol',
		img: '/bmw.jpg',
		price: 414000,
		releaseData: 2011,
		transmission: 'Automatic'
	},
	{
		id: 8,
		model: 'BMW',
		color: 'Green',
		engineType: 'Diesel',
		img: '/bmw.jpg',
		price: 414000,
		releaseData: 2010,
		transmission: 'Automatic'
	},
	{
		id: 9,
		model: 'BMW',
		color: 'Green',
		engineType: 'Petrol',
		img: '/bmw.jpg',
		price: 444000,
		releaseData: 2010,
		transmission: 'Automatic'
	},
	{
		id: 10,
		model: 'BMW',
		color: 'Black',
		engineType: 'Diesel',
		img: '/bmw.jpg',
		price: 444000,
		releaseData: 2012,
		transmission: 'Automatic'
	},
	{
		id: 11,
		model: 'Mercedes',
		color: 'White',
		engineType: 'Diesel',
		img: '/mercedes.jpg',
		price: 444000,
		releaseData: 2010,
		transmission: 'Robotic'
	},
	{
		id: 12,
		model: 'Mercedes',
		color: 'Black',
		engineType: 'Electric',
		img: '/mercedes.jpg',
		price: 444000,
		releaseData: 2010,
		transmission: 'Automatic',
		powerReserve: 200
	},
	{
		id: 13,
		model: 'BMW',
		color: 'Green',
		engineType: 'Diesel',
		img: '/bmw.jpg',
		price: 44400,
		releaseData: 2011,
		transmission: 'Robotic'
	},
	{
		id: 14,
		model: 'Mercedes',
		color: 'Black',
		engineType: 'Electric',
		img: '/mercedes.jpg',
		price: 44400,
		releaseData: 2010,
		transmission: 'Automatic',
		powerReserve: 400
	},
	{
		id: 15,
		model: 'BMW',
		color: 'White',
		engineType: 'Diesel',
		img: '/bmw.jpg',
		price: 44401,
		releaseData: 2012,
		transmission: 'Manual'
	}
]

export async function GET(req: Request) {
	const url = new URL(req.url)

	const page = Number(url.searchParams.get('page'))
	const limit = Number(url.searchParams.get('limit'))

	const sortBy = url.searchParams.get('sortBy')?.split(',') || []
	const sortOrderPrice =
		url.searchParams.get('sortOrderPrice')?.split(',') || []
	const brand = url.searchParams.get('brand') || ''
	const color = url.searchParams.get('color') || ''

	let filteredCars = cars

	if (brand) {
		filteredCars = filteredCars.filter((car) => car.model === brand)
	}
	if (color) {
		filteredCars = filteredCars.filter((car) => car.color === color)
	}

	if (sortBy.length > 0) {
		filteredCars.sort((a, b) => {
			for (let i = 0; i < sortBy.length; i++) {
				const criteria = sortBy[i]

				const order = sortOrderPrice[i] || 'asc'

				if (criteria === 'asc') {
					return order === 'asc' ? a.price - b.price : b.price - a.price
				} else if (criteria === 'desc') {
					return order === 'asc'
						? a.releaseData - b.releaseData
						: b.releaseData - a.releaseData
				}
			}
			return 0
		})
	}

	const start = (page - 1) * limit
	const end = start + limit

	let paginatedCars
	if (page && limit) {
		paginatedCars = filteredCars.slice(start, end)
	} else {
		paginatedCars = filteredCars
	}

	await new Promise((resolve) => setTimeout(resolve, 100))

	const response = NextResponse.json(paginatedCars)

	response.headers.set('x-total-count', String(cars.length))

	return response
}

export async function POST(req: Request) {
	const newCar: ICarPrototype = await req.json()
	newCar.id = cars.length + 1
	cars.push(newCar)

	return NextResponse.json(newCar, { status: 201 })
}
