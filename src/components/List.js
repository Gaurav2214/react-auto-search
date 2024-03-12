import React from 'react'

const List = (props) => {
    console.log(props?.colorList);
  return (
    <>
        <ul>
           {props?.colorList && props.colorList.map((item, i)=>{
            return <li key={i}>{item.color} - {item.value}</li>
           })} 
        </ul>
    </>
  )
}

export default List