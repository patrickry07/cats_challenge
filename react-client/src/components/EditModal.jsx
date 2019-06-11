import React from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';




class Home extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      thumbnail: '',
      name: '',
      owner: ''
    }

  }

  componentDidMount() {
    console.log(this.props.cat)
    this.setState({
      thumbnail: this.props.cat.thumbnail,
      name: this.props.cat.name,
      owner: this.props.cat.owner_name,

    })
  }

  thumbnailChange (thumbnail) {
    this.setState({
      thumbnail: thumbnail
    })
  }

  nameChange(name) {
    this.setState({
      name: name
    })
  }

  ownerChange(owner) {
    this.setState({
      owner: owner
    })
  }

  handleSubmit () {
    let updatedCat = this.props.cat;
    updatedCat
    axios.patch('/edit')
  }






  render() {
    let {thumbnail, name, owner} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group onSubmit={this.handleSubmit}>
          <Form.Label>Thumbnail Url</Form.Label>
          <Form.Control type="text" placeholder="Thumbnail Url" value={thumbnail} onChange={(event) => {this.thumbnailChange(event.target.value)}}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" value={name} onChange={(event) => {this.nameChange(event.target.value)}} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Owner</Form.Label>
          <Form.Control type="text" placeholder="Owner" value={owner} onChange={(event)=>{this.ownerChange(event.target.value)}}/>
        </Form.Group>
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}


export default Home;