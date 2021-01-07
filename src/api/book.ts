import request from '@/utils/request'

export interface Book {
  id: number
  name: string
  author: string
  price: number
  sales: number
  stock: number
  cover: string
}

export interface BookParams {
  bookName: string
  currentPage: number
  pageSize: number
}

export const queryBookList = (data: BookParams) => {
  return request.post<Book[]>('/books', data)
}
