import LogoDelAltisimo from '../images/Logo-altisimo.png'
import s from './header.module.scss'

function Header() {
  return (
    <nav className={s.header}>
      <a href="">
        <img src="https://i.ibb.co/qWmP1B9/Logo-altisimo.png" alt="Logo DelAltisimo" />
        <span className='titlePage'>DelAltisimo</span>
      </a>
      <ol className={s.navList}>
        <li className={s.linkTo}>Home</li>
        <li className={s.linkTo}>Iglesia</li>
        <li className={s.linkTo}>Radios</li>
        <li className={s.linkTo}>Escuela</li>
        <li className={s.linkTo}>Fundacion</li>
      </ol>
      <button className={s.headerButton}>COLABORÁ</button>
    </nav>
  )
}

export default Header
