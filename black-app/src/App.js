import React from 'react';
import Accordion from './components/Accordion';
import Counter from './components/Counter';



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
 
  return (
  <Search/> //Search sayfasini refere ettik. 
//   return (
//  <Accordion items={items}/>
//  )

// return <Counter/> burada counter icin refere verdik.
  ) 
}





