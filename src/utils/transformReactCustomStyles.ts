import React from 'react'

const tranformCustomStyles = (customStyles : any) => {
  const styles : React.CSSProperties = {}
  if (!customStyles) {
    return {};
  }
  if (customStyles.textColor) {
    styles.color = customStyles.textColor;
  }
  if (customStyles.textColor) {
    styles.backgroundColor = customStyles.backgroundColor;
  }
  return styles;
}

export default tranformCustomStyles