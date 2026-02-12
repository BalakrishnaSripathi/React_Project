import React from 'react'

const Button =React.memo( ({Increment}) => {
    console.log("Chaild component render")
  return (
    <button onClick={Increment}>CLICK ME</button>
  )
})

export default Button
