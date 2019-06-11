import React from 'react';
import { Button } from 'react-bootstrap'
import EditModal from './EditModal.jsx';


const CatSelect = ({cat, deleteCat, selected, editCat}) => {
  console.log('cat', cat);
  if (selected){
    return (
      <div>
        <img src={cat.thumbnail} height="300" width="300" className="text-center"/>
        <div>
        <div>{cat.name}</div>
        <div>{cat.birthdate}</div>
        <div>{cat.owner_name}</div>
        <div>{cat.views}</div>
        </div>
        <div className="text-right">
          <EditModal cat={cat} editCat={editCat}/>
          <Button variant="link" onClick={(event) => { deleteCat(cat) }}>Delete</Button>
        </div>
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