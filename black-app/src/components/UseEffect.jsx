import React, {useEffect, useState }from 'react'

export default function UseEffect() { //sayfa ilk render edildiginde calisir.UseEffect.
    const [name, setName] = useState('')
    const [term, setTerm] = useState('')

  
    UseEffect(() => {// dependency array ilk acildiginda calismasini istiyorsak, bos birakmak yeterli. 
        console.log('I RUN AT JUST INITIAL RENDER')

    },[])
  

    UseEffect(() => {
        console.log('I RUN AT INITIAL AND EVERY RENDER')

    }) //eger dependency array hicbirsey koymuyorsak yine  rerender edildiginde herhangibir state degisikliginde sayfa her acildiginda tekrar calisir. 

    UseEffect(() => {
         
        console.log('I RUN AT INITIAL AND NAME IS CHANGED')

    },[data])
  
    const setter1 = () => {

        setName(name +'x')
    }

    const setter2 = () => {

        setTerm(term +'a')
    }

    return (
    <div>
      <button onClick = {setter1} > Setter 1</button>
      <button onClick = {setter2} > Setter 2</button>
        
        </div>
  )
}
