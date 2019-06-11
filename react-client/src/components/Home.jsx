import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Search from '../components/Search.jsx'
import CatSelect from '../components/CatSelect.jsx'
import CatList from '../components/CatList.jsx'
import axios from 'axios'



class Home extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      cats: [],
      cat: {},
      selected: false
    }
    this.selectCat = this.selectCat.bind(this);
    this.deleteCat = this.deleteCat.bind(this);
    this.editCat = this.editCat.bind(this);
  }

  componentDidMount() {
    axios.get('/cats')
    .then((cats)=>{
      this.setState({cats: cats.data})
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  selectCat (selectedCat) {
    selectedCat.views++;
    this.setState({
      cat: selectedCat, 
      selected: true,
      modalOpen: false
    })
    axios.put(`/view/${selectedCat.id}/${selectedCat.views}`)
      .then((result)=>{
        console.log(result)
      })
      .catch((err)=>{
        console.log(err)
      })
    console.log(this.state.cat)
  }

  deleteCat (selectedCat,) {
    let newCatArr = this.state.cats.filter((cat)=>{
      return cat.id !== selectedCat.id
    })
    this.setState({
      cat: {},
      cats: newCatArr,
      selected: false
    })
    axios.delete(`/delete/${selectedCat.id}`)
  }

  editCat(newCat){
    let newCats = [];
    this.state.cats.forEach((cat)=>{
      if (cat.id === newCat.id){
        newCats.push(newCat);
      }
      else{
        newCats.push(cat);
      }
    })
    this.setState({
      cat: newCat,
      cats: newCats
    })
    console.log(newCat)
  }


  render() {
    let {cats, cat, selected, modalOpen} = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col sm={3}>
              <Search/>
              <CatList cats={cats} selectCat={this.selectCat} />
            </Col>
              <Col sm={9}><CatSelect cat={cat} deleteCat={this.deleteCat} selected={selected} editCat={this.editCat}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Home;