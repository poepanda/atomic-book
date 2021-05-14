import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import './ProgressBarVisual.scss'

export interface IProgressBarVisualProps {
   percentage: Number,
   className?: String,
}

function ProgressBarVisual({ percentage, className }: IProgressBarVisualProps) {
  const classes = classnames('atom__progress-bar-visual', className)
  return (
    <div className={classes}>
      <div className="atom__progress-bar-visual__highlight" style={{width: `${percentage}%`}}></div>
    </div>
  )
}

ProgressBarVisual.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}

export default ProgressBarVisual