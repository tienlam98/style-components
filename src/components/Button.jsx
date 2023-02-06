import React from 'react'
import { CommonButton } from './styles';

function Button(props) {
  return (
      <CommonButton>{props.children}</CommonButton>
  )
}
export default Button;