import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';




class Home extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      thumbnail: '',
      name: '',
      birthdate: '',
      owner: '',
      show: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleClose() {
    this.setState({
      show: false,
      thumbnail: this.props.cat.thumbnail,
      birthdate: this.props.cat.birthdate,
      name: this.props.cat.name,
      owner: this.props.cat.owner_name,
    })
  }

  handleShow() {
    // this.setState({ show: true });
    console.log('should be showing')
    this.setState({
      show: true,
      thumbnail: this.props.cat.thumbnail,
      birthdate: this.props.cat.birthdate,
      name: this.props.cat.name,
      owner: this.props.cat.owner_name,

    })
  }


  // componentDidMount() {
  //   console.log(this.props.cat)
  //   this.setState({
  //     thumbnail: this.props.cat.thumbnail,
  //     birthdate: this.props.cat.birthdate,
  //     name: this.props.cat.name,
  //     owner: this.props.cat.owner_name,
  //   })
  // }

  thumbnailChange (thumbnail) {
    this.setState({
      thumbnail: thumbnail
    })
  }

  birthChange(birthdate) {
    this.setState({
      birthdate: birthdate
    })
    console.log(this.state.birthdate)
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
    let {thumbnail, name, birthdate, owner} = this.state
    event.preventDefault();
    let newCat = {
      id: this.props.cat.id,
      thumbnail: thumbnail,
      name: name,
      birthdate: birthdate,
      owner_name: owner,
      views: this.props.cat.views
    };
    this.setState({
      show: false,
    })
    this.props.editCat(newCat)
  }






  render() {
    let {thumbnail, name, birthdate, owner} = this.state
    return (
      <div>
      <Button variant="link" onClick={(event)=>{this.handleShow()}}>Edit</Button>
        <Modal animation={false} show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Cat</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group onSubmit={this.handleSubmit}>
                <Form.Label>Thumbnail Url</Form.Label>
                <Form.Control type="text" placeholder="Thumbnail Url" value={thumbnail} onChange={(event) => { this.thumbnailChange(event.target.value) }} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={name} onChange={(event) => { this.nameChange(event.target.value) }} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Birth date</Form.Label>
                <Form.Control type="date" placeholder="Birth date" value={birthdate} onChange={(event) => { this.birthChange(event.target.value) }} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Owner</Form.Label>
                <Form.Control type="text" placeholder="Owner" value={owner} onChange={(event) => { this.ownerChange(event.target.value) }} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="link" onClick={(event) => { this.handleSubmit() }}>Save</Button>
            <Button variant="link" onClick={(event) => { this.handleClose() }}>Close</Button>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default Home;