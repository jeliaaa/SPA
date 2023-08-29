import React from 'react'
import { useParams } from 'react-router-dom'

const Fact = () => {
    const {id} = useParams();
  return (
    <div>Some Fact ... {id}</div>
  )
}

export default Fact