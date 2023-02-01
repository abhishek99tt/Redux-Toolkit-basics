import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const value =20
    const { c } = useSelector(state => state.custom)
    const dispatch = useDispatch()
    const add =  () => {
        dispatch({
            type:"increment"
        })
    }
    const addBy10 =  () => {
        dispatch({
            type:"incrementByValue",
            payload: 10
        })
    }
    const sub =  () => {
        dispatch({
            type:"decrement"
        })
    }
  return (
    <div>
        <h2>{c}</h2>
        <button onClick={add}>Increment</button>
        <br />
        <br />
        <button onClick={addBy10}>Increment By 10</button>
        <br />
        <br />
        <button onClick={sub}>Decrement</button>
    </div>
  )
}

export default Home