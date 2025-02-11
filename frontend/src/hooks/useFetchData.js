import React, { useEffect, useState } from 'react'

function useFetchData(url) {
  const [data, setData] = useState('')
useEffect(()=>{
  const getdata=async()=>{
const res=await fetch(url)
const data=await res.json()
setData(data)

  }
  getdata()
},[url])
  return {data}
}

export default useFetchData