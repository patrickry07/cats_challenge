import React from 'react';
import { Form } from 'react-bootstrap'

class Search extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      query: '',

    }

  }

  handleChange (query) {
    this.setState({
      query: query
    })
    this.props.handleSearch(query)
  }





  render() {
    return (
      <div>

            <Form>
              <Form.Group >
                <Form.Control type="text" placeholder="Search" value={this.state.query} onChange={(event) => { this.handleChange(event.target.value) }} />
              </Form.Group>
            </Form>
      </div>
    );
  }
}


export default Search;