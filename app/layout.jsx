import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"

import { Inter } from "next/font/google"

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"]
})

export const metadata = {
    title: "Carl Bajo | Bootstrap V5",
    description: "Generated by carl bajo"
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
      </html>
    );
  }
