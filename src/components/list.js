import React from 'react'
import emojiList from '../emojiList.json'

export default function List() {
    const getValue = (value) => {
        console.log(value)
    } 
    return (
        <div>
            <input placeholder="search" onChange={(e) => getValue(e.target.value)}/>

            { emojiList.map(item => {
                return (
                    <div>
                        <ul>
                            <li>{item.symbol} {item.title}</li>
                        </ul>
                    </div>
                    
                )
            }) }
        </div>
    )
}
