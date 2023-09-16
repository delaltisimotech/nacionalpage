import s from "./button.module.scss"

export default function Button({text}) {
  return (
    <div className={s.buttonPrincipal}>{text}</div>
  )
}
