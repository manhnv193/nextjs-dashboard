import { Inter, Lusitana } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] }) // Xuất một biến font từ google font

export const lusitana = Lusitana({
    subsets: ['latin'], // Đối tượng font được tạo ra từ google font
    weight: ['400', '700'] // Các weight của font 400: regular, 700: bold
})