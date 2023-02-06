import React from 'react'
import { CommonInput } from './styles';

export default function Input(props) {
  return (
    <div>
        <CommonInput>{props.children}</CommonInput>
    </div>
  )
}
