import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const productReducer = useSelector((state) => state.productSlice)
  
  return (
    <div>Home</div>
  )
}

export default Home