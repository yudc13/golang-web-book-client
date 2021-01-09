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

export interface BookPage {
  books: Book[]
  page_info: {
    current_page: number
    page_size: number
    total: number
    total_page: number
  }
}

export const queryBookList = (data: BookParams) => {
  return request.post<BookPage>('/books', data)
}
