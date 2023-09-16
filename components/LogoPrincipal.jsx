import React from 'react'
import s from "./logoPrincipal.module.scss"

function LogoPrincipal() {
  return (
    <>
      <a className={s.linkToHome} href="">
        <img
          src="https://i.ibb.co/qWmP1B9/Logo-altisimo.png"
          alt="Logo DelAltisimo"
        />
        <span className={s.titlePage}>DelAltísimo</span>
      </a>
    </>
  )
}

export default LogoPrincipal
