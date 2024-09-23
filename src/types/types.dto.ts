import {
	Dispatch,
	InputHTMLAttributes,
	PropsWithRef,
	SetStateAction
} from 'react'
import { Control } from 'react-hook-form'

export interface ILayout {
	header: React.ReactNode
	children: React.ReactNode
}

type Model = 'BMW' | 'Mercedes'
type Color = 'Black' | 'White' | 'Green'
type EngineType = 'Petrol' | 'Diesel' | 'Electric'
type TransmissionType = 'Automatic' | 'Manual' | 'Robotic'

interface BaseCar {
	id: number
	img: string
	model: Model
	color: Color
	price: number
	releaseData: number
	engineType: EngineType
	transmission: TransmissionType
}

interface ElectricCar extends BaseCar {
	engineType: 'Electric'
	powerReserve: number
}

interface NonElectricCar extends BaseCar {
	engineType: Exclude<EngineType, 'Electric'>
}

export type ICarPrototype = ElectricCar | NonElectricCar

export interface ICarItem {
	item: ICarPrototype
	type: boolean
}

export interface ContainerInner {
	children: React.ReactNode
}

export interface IList extends ContainerInner {}

export interface ISelectType {
	rest?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
	onChange?: Dispatch<SetStateAction<string>> | undefined
	control?: Control<ICarPrototype, any>
}

export interface IUser {
	id: number
	username: string
	password: string
}
