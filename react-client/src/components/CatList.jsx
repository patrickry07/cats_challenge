import React from 'react';


const CatList = ({cats, selectCat}) => {

  return (
    <div>
    {cats.map((cat,index)=>{ 
        // user map to render each phrase in the array, this way all cards are shown
        return <div key={index} onClick={(event)=>{selectCat(cat, index)}}>
            <img src={cat.thumbnail} height="75" width="75"/>
            <div>{cat.name}</div>
          <div>{cat.birthdate}</div>
        </div>
      })}
 </div>
  )
}

export default CatList;