import PropTypes from 'prop-types'
import React, { MouseEventHandler, ReactNode } from 'react'
import './Button.scss'

interface IProps {
  onClick: MouseEventHandler,
  children: ReactNode,
}

function Button({ onClick, children }: IProps) {
  return (
    <button className="atom__button" onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
