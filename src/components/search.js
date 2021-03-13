import React from 'react'

export default function Search() {
    const getValue = (value) => {
        console.log(value)
    } 
    return (
        <div>
            <input placeholder="search" onChange={(e) => getValue(e.target.value)}/>
        </div>
    )
}
