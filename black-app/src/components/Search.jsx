import React, {useEffect, useState} from 'react'

export default function Search() {
    const [term, setTerm] = useState('abab')
    const [name, setName] = useState('adfja')// eger buradaki gibi set degisimi olursa component didUpdate i de yaptirmis oluyoruz. 

    useEffect(() => { // biz useEffect ile functional componentlere lifecycle metodunu eklemeye yapmaya calisiyoruz. 
//buraya api isteklerimi yada cagrilmasi gerekenleri yazacagiz. 
    },[name]) //bu useEffect ile birlikte kullaniliyor. dependency array deniyor. burasi bos olarak da kalabilir ici doldurulabilir de. 

    return (
        <div>

        </div>
    )
}


//useeffect in özelliligi Life rcycle deki didMountun yaptigini yapiyor. didMount apiden istek getirmede kullanilirken burada da useEffect bu isi yapacak. 
//birinci görevi sayfayi ilk actigimda calismasi. [] bu sekilde bos birakinca oluyor. 
//ikincisi sayfa rerender edildiginde de calissin. 
//mesela count her degistiginde de tekrar hep calissin. 
