import PropTypes from 'prop-types'
import React from 'react'
import './CounterUnitConnector.scss'

export interface ICounterUnitConnectorProps {
  label: string
}

function CounterUnitConnector({ label }: ICounterUnitConnectorProps) {
  return <div className={'atom__counter-unit-connector'}>{label || ':'}</div>
}

CounterUnitConnector.propTypes = {
  text: PropTypes.string
}

export default CounterUnitConnector