import React, {useState} from 'react'
import {items} from '../Components/Items'


export default function Shop() {

  const [item, setItem] = useState(items)

  const filterResult = (catItem) => {
    const result = items.filter((curDate) => {
      return curDate.category === catItem
    })
    setItem()
  }

  return (
    <div>
      <div className='catBtns'>
        <button className='catBtn'>All</button>
        <button className='catBtn'>Music</button>
        <button className='catBtn'>Instruments</button>
        <button className='catBtn'>Merch</button>
      </div>
      <div className='cards'>
   
      </div>

        
    </div>
  )
}
