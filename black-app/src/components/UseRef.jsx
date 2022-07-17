import React, { useRef} from 'react' // UseRef buradaki gibi cagiriyoruz. eger cagirmazsak diger kullanimi


export default function UseRef() {
    
    const inputRef = useRef()
    //console.log(inputRef)

    const inputChange = (e) => {

        inputRef.current.value = e.target.value
    }

        const submitButton = () => {

            console.log(inputRef.current.value)
        }
    // React.useState // bu sekilde uzantiyi cagirabiliriz. 

    const clear = () => {

        inputRef.current.value =''
    }
  return (
    <div>
    
    <input onChange={inputChange} ref= {inputRef}></input>
    <button onClick= {submitButton}>Submit</button>
    <button onClick={clear}>Clear</button>
    </div>
  )
}

//useRef elementleri de alabilmemizi sagliyor. bunu js. te getElementById ile yapabiliyoruz. cagirma islemini. 
// useRef sadece input larda degil diger bu sekilde cagrilabileccek özelliklerde de calisir kulanilir. 
