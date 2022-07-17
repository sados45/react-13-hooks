import React from 'react';
import Accordion from './components/Accordion';
import Counter from './components/Counter';
import Search from './components/Search';
import UseRef from './components/UseRef';




    const items = [
    {
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favorite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

export default () => {
 
  return <Search/>//<UseRef/>
    
  {/* (
  
    <UseRef/>  

    UseRef input gibi refere etmek icin kullandigimiz araci kullanim hooks ta. */}
 
   {/* // <UseEffect/>   

      <Search/> 
      //Search sayfasini refere ettik. 

 //   return (
//  <Accordion items={items}/>
//  )

// return <Counter/> burada counter icin refere verdik. 

  ) */}

}





