import PropTypes from 'prop-types'
import React, { ReactChild } from 'react'
import './CounterUnit.scss'

export interface ICounterUnitProps {
  children: ReactChild
}

function CounterUnit({ children }: ICounterUnitProps) {
  return (
    <div className={'atom__counter-unit'}>
      {children}
    </div>
  )
}

CounterUnit.propTypes = {
  text: PropTypes.string
}

export default CounterUnit