import React, {useState} from 'react'

export const useCounter = (initialValue = 100) => {

    const [count, setCount] = useState(initialValue)

    function inc() {
        setCount(curr => curr + 1)
    }

    function dec() {
        setCount(curr => curr - 1)
    }

    return [count, inc, dec]
}