
const Button = ({children, className, onclick}) => {
  return (
    <button className={`btn ${className}`} onClick={onclick}>{children}</button>
  )
}

export default Button