import React from 'react';
import moment from 'moment';



const CatList = ({cats, selectCat}) => {

  return (
    <div>
    {cats.map((cat,index)=>{ 
        // user map to render each phrase in the array, this way all cards are shown
      return <div className="panel panel-default" key={index} onClick={(event)=>{selectCat(cat, index)}}>
            <img src={cat.thumbnail} height="75" width="100"/>
            <h4>{cat.name}</h4>
            {/* add moment to make the date better looking */}
          <div>{moment(cat.birthdate).format('MMMM Do YYYY')}</div>
        </div>
      })}
 </div>
  )
}

export default CatList;