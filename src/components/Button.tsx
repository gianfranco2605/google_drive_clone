
const Button = ({ btnClass, title }: Button) => {
  return (
    <button className={`btn ${btnClass}`}>{title}</button>
  )
}

export default Button