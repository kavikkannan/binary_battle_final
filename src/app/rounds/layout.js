
import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Binary Battles',
  description: 'Created by ISA VIT'
}
export default function RootLayout1({ children }) {
  return (
    <html lang="en">
      <body> 
        <Navbar />
        <main ><div>{children}</div></main>
      </body>
     
      
    </html>
  )
}
