import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0) // burada useState olarak countun ilk degerini 0 olarak belirledik.

    const onButtonClick = () => { //  button a her tiklamamiz ile sayi bir artmaktadir. 
        setCount(count+1)
    }

    return (
        <div>
            <button onClick={onButtonClick}>Click !</button>
            <h1>Current Count : {count} </h1>
        </div>
    )
}