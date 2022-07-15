import React, { useState } from 'react' //useState i react kütüphanesinden cagiriyoruz- bu sekilde. 

// class Accordion extends React.Component {
//     state = {activeIndex: 0}

//     onTitleClick = (index) => {
//         this.setState({activeIndex: index})
//     }
// }


export default function Accordion({ items }) {
    console.log('yenilendi')

    const [activeIndex, setActiveIndex] = useState(null) //burada activeIndex in degerini null olarak veriyoruz. setActiveIndex burada function dur. burada array distructure islemini yapmis oluyoruz. useState in sifirinci (null) elemanini activeIndex olarak atamis olduk., activeIndex in ilk degerinie sifir verdik. 

    // console.log(useState())

    const onTitleClick = (index) => {
        setActiveIndex(index)
        console.log("ai", activeIndex)
        // console.log('title clicked', index)
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '' 
        //index eger activeIndex e esitse className e aktif et diyecegiz. degilse bos kalacak. 

        return(
            <div key={index}>
            <div 
            className={`title ${active}`}//burada ve altta yaptigimiz degisiklikle activeIndex degistiginde rerender olacak. 
            onClick={() => onTitleClick(index)} 
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div 
            className={`content ${active}`} //burada ve yukarida yaptigimiz degisiklikle activeIndex degistiginde rerender olacak. 
            >
                {item.content}
            </div>
            </div>
        )
    })

    return (
       <div className="ui styled accordion">
           {renderedItems}
           {/* <h1>{activeIndex}</h1> */}
       </div>
    )
}

//accordion tarzi bir calisma icin , index html icine bir link kopyaladik. cdnjs.com adresinden altta styling basligini secerek bunu link olarak kopyalayip index.html icine biraktik. title in hemen ust tarafina. ve yazilan yazi ekranda akordion gibi asagi dogru tiklaninca acilir hale geldi. 