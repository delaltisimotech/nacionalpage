export const metadata = {
  title: 'Ministerio Internacional Del Altísimo',
  description: 'Página Oficial del Ministerio Internacional Hijos Del Altísimo. Fundado en 1992 por el Pastor Dr. Hernan Alberto Cortes. +160 radios y +100 templos a lo largo de Argentina.',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body style={{margin: 0}}>{children}</body>
    </html>
  )
}
