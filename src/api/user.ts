import request from '@/utils/request'

export interface User {
  id: number
}

export interface Register {
  username: string
  password: string
  rePassword: string
  email: string
}

export const login = (username: string, password: string) => {
  return request.post<User>('/login', { username, password })
}

export const register = (data: Register) => {
  return request.post('/register', data)
}
