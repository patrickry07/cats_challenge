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
    }
  }

  componentDidMount() {
    axios.get('/cats')
    .then((cats)=>{
      this.setState({cats: cats.data})
    })
  }



  render() {
    console.log(this.state.cats);
    return (
      <div>
        
        <Search/>
        <CatList/>
        <CatSelect/>
      </div>
    );
  }
}


export default Home;