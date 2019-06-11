import React from 'react';
import { Button } from 'react-bootstrap'
import EditModal from './EditModal.jsx';


const CatSelect = ({cat, deleteCat, selected, editCat, modalOpen}) => {
  if (selected){
    return (
      <div>
        <img src={cat.thumbnail} height="300" width="300" />
        <div>{cat.name}</div>
        <div>{cat.birthdate}</div>
        <div>{cat.owner_name}</div>
        <div>{cat.views}</div>

        <button onClick={(event)=>{editCat()}}>Edit</button>
        <button onClick={(event) => { deleteCat(cat) }}>Delete</button>
        {modalOpen ? <EditModal cat={cat}/> : <div></div>}
      </div>
    )
  }
  else{
    return (
      <div></div>
    )
  }
}

export default CatSelect;