import { useEffect, useState } from 'react'
import React from 'react'

export default function Learn() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  let songtitle = "My Hero"
  let artistname = "Foo Fighters"

useEffect(() => {
  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.quotable.io/random`
      )
      if (!response.ok){
        throw new Error(
          `Error occured`
        )
      }
      let actualData = await response.json()
      setData(actualData)
      setError(null)
    } catch(err) {
      setError(err.message)
      setData(null)
    } finally{
      setLoading(false)
    }
  }
  getData()
}, [])


  return (
    <div>
      <div>
        <input type="text"></input>
      </div>
      {loading && <div>A moment plz... </div>}
      {error && (
        <div>{`there is a problem - ${error}`}</div>
      )}
      <ul>
        {data &&
          <li >{data.content}</li>
        }
      </ul>
    </div>
  )
}
