import PropTypes from 'prop-types'
import React, { ReactChild } from 'react'

import ProgressBarVisual from '@atoms/ProgressBarVisual/ProgressBarVisual'
import Typo, { TypoTypes } from '@atoms/Typo/Typo'

import './ProgressBar.scss'

export interface IProgressBarProps {
  percentage: Number,
  label?: String,
}

function ProgressBar({ percentage, label } : IProgressBarProps) {
  const progressLabel = label || `${percentage}%`;
  return (
    <div className={'molecule__progress-bar'}>
      <ProgressBarVisual className="molecule__progress-bar__visual" percentage={percentage} />
      <Typo className="molecule__progress-bar__label" type={TypoTypes.ProgressBarLabel}>
        {progressLabel}
      </Typo>
    </div>
  )
}

ProgressBar.propTypes = {
  text: PropTypes.string
}

export default ProgressBar