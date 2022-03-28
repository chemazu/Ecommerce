import React from 'react'

export default function Button(prop: { title: string }) {
    const {title}=prop
  return (
    <button {...prop}>{title}</button>
  )
}
