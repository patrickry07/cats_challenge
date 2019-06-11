import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const Search = () => {
  
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" >Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
}

export default Search;