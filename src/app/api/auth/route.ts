import { IUser } from '@/types/types.dto'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

const users: IUser[] = [
	{ id: 1, username: 'admin', password: 'admin123' },
	{ id: 2, username: 'user', password: 'user123' }
]

let loggedInUser: IUser | null = null
let tokens: { [key: string]: IUser } = {}

export async function POST(req: Request) {
	const { username, password } = await req.json()

	const user = users.find(
		(user) => user.username === username && user.password === password
	)

	if (user) {
		const token = uuidv4()
		tokens[token] = user
		return NextResponse.json(
			{ message: 'Login successful', userId: user.id, token },
			{ status: 200 }
		)
	} else {
		return NextResponse.json(
			{ message: 'Invalid credentials' },
			{ status: 401 }
		)
	}
}

export async function GET(req: Request) {
	const token = req.headers.get('Authorization')?.split(' ')[1]
	if (token && tokens[token]) {
		loggedInUser = tokens[token]
		return NextResponse.json(
			{ message: 'User is logged in', user: loggedInUser },
			{ status: 200 }
		)
	} else {
		return NextResponse.json(
			{ message: 'User not authenticated' },
			{ status: 401 }
		)
	}
}

export async function DELETE(req: Request) {
	const token = req.headers.get('Authorization')?.split(' ')[1]
	if (token) {
		delete tokens[token]
		loggedInUser = null
		return NextResponse.json({ message: 'User logged out' }, { status: 200 })
	} else {
		return NextResponse.json(
			{ message: 'No token provided' },
			{ status: 400 }
		)
	}
}
