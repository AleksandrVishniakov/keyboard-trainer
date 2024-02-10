import { useState } from "react"

const useCounter = (value: number, delta: number):[number, ()=>void] => {
    const [counter, setCounter] = useState(value)

    const handleCounterIncrement = () => {
        setCounter(counter + delta)
    }

    return [counter, handleCounterIncrement]
}

export default useCounter