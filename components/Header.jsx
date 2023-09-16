import LogoDelAltisimo from '../images/Logo-altisimo.png'
import LogoPrincipal from './LogoPrincipal'
import s from './header.module.scss'

function Header() {
  return (
    <nav className={s.header}>
      <LogoPrincipal />
      <ol className={s.navList}>
        <li className={s.linkTo}>Home</li>
        <li className={s.linkTo}>Iglesia</li>
        <li className={s.linkTo}>Radios</li>
        <li className={s.linkTo}>Escuela</li>
        <li className={s.linkTo}>Fundación</li>
      </ol>
      <button className={s.headerButton}>COLABORÁ</button>
    </nav>
  )
}

export default Header
