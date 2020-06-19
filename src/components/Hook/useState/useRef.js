import React, { useRef, useState } from 'react'

export const useRefCount = ()=>{

    const [count, setCount] = useState(0)

    
    return(
    <div>{count}</div>
    )
}