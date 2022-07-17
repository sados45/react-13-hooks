import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function Search() {
    const [term, setTerm] = useState('')
    // const [name, setName] = useState('adfja')// eger buradaki gibi set degisimi olursa component didUpdate i de yaptirmis oluyoruz. 
    const [results, setResults] = useState([])

    useEffect(() => { // biz useEffect ile functional componentlere lifecycle metodunu eklemeye yapmaya calisiyoruz. 
//buraya api isteklerimi yada cagrilmasi gerekenleri yazacagiz. 
     
        // (async () =>{
        //     await axios.get('bla bla')
        // }) () // ÖNEMLI bu sekilde bu arrow function sonuna konula bos parantezde calismasini sagliyor. 

    const search =async () => {
     const {data} = await axios.get("https://en.www.wikipedia.org/w/api.php", {
        params: {
            action: 'query',
            list: 'search',
            format: 'json',
            origin:'*',
            srsearch: term
        }

     })

     console.log('data', data)

     setResults(data.query.search) //buradaki bilgiyi wikipedianin icinden aldik. 
     
      }

     search()

      
    },[term]) //bu useEffect ile birlikte kullaniliyor. dependency array deniyor. burasi bos olarak da kalabilir ici doldurulabilir de. 


        const renderedResults = results.map(result =>{

            return(
                <div className='item'>

                    <div className = 'content'>

                        <div className= 'header'>{result.title}</div> 
                        <span dangerouslySetInnerHTML={{_html: result.snippet}}></span>
                        {/* {result.snippet}  */}
                        {/* buradaki bilgiyi ve uzantisini wikipedia icinden aldik.   */}
                    </div>
                </div>
            )
        })

    const inputChange = (e) => {
        setTerm (e.target.value)
    }
    return (
        <div>
        <div className="ui form">
            <div className='field'>
                <label>Enter Search Term</label>
                <input
                value={term}
                onChange={(e) => inputChange(e)}
                // onChange = {(e) => setTerm(e.target.value)}
                className='input'></input>
            </div>
        </div>
        {/* <div className='ui celled list'>{renderedResults}</div> */}
        <div className = 'ui celled list'> {renderedResults}</div>
    </div>
    )
}


//useeffect in özelliligi Life rcycle deki didMountun yaptigini yapiyor. didMount apiden istek getirmede kullanilirken burada da useEffect bu isi yapacak. 
//birinci görevi sayfayi ilk actigimda calismasi. [] bu sekilde bos birakinca oluyor. 
//ikincisi sayfa rerender edildiginde de calissin. 
//mesela count her degistiginde de tekrar hep calissin. 
