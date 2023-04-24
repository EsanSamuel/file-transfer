import React from 'react'

const Button = ({title,styles}) => {
  return (
    <div>
        <button className={styles}>
            {title}
        </button>
    </div>
  )
}

export default Button