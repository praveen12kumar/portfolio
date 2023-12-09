import React from 'react'
import "./button.scss";
const Button = ({text, href, classname, newTab}) => {
  return (
    <div className={classname}>
      <a className='main-button' href={href} target={newTab && "_blank"} >{text}</a>
    </div>
  )
}

export default Button
