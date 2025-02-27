import React from 'react'

const Input = ({placeholder, type="text", className, setTask, task, name} ) => {
  return (
    <input name={name} className={`inp ${className}`} type={type} placeholder={placeholder} value={task} onChange={(e) => {
      setTask(e.target.value)
    }}/>
   
  )
}

export default Input