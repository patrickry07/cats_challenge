import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Search from '../components/Search.jsx'
import CatSelect from '../components/CatSelect.jsx'
import CatList from '../components/CatList.jsx'
import axios from 'axios'
import { debounce } from 'lodash'



class Home extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      cats: [],
      cat: {},
      selected: false
    }
    this.allCats = [];
    //make the functions bound to this home.jsx context so that when passed down they still work
    this.selectCat = this.selectCat.bind(this);
    this.deleteCat = this.deleteCat.bind(this);
    this.editCat = this.editCat.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // get the cats from the server database
    axios.get('/cats')
    .then((cats)=>{
      this.allCats = cats.data;
      this.setState({cats: cats.data})
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  selectCat (selectedCat) {
    //selects cat from list and then sets this.state.cat equal to its value, also updates the views by 1 each time this is done
    // updates the front end views view first, then sends the put request to server to update as well.
    selectedCat.views++;
    this.setState({
      cat: selectedCat, 
      selected: true,
      modalOpen: false
    })
    //http request to server to update the view count 
    axios.put(`/view/${selectedCat.id}/${selectedCat.views}`)
      .then((result)=>{
        console.log(result)
      })
      .catch((err)=>{
        console.log(err)
      })
    console.log(this.state.cat)
  }

  deleteCat (selectedCat) {
    // deletes the cat from the front end states, and then sends the axios/http request to server to update server/database
    let newCatArr = this.state.cats.filter((cat)=>{
      return cat.id !== selectedCat.id
    })
    this.setState({
      cat: {},
      cats: newCatArr,
      selected: false
    })
    // use axios to send http request to server in order to delete cat from database also
    axios.delete(`/delete/${selectedCat.id}`)
  }

  editCat(newCat){
    let newCats = [];
    //update the front end dynamically to ensure a quicker response, and then update the database as well so it still reflects true on page refresh
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
    //http request to server to edit the cat within the database
    axios.post('/edit', newCat)
  }

  handleSearch (query) {
    //taking query from the searching and then filtering the cats state depending on the current query
    const filter = (query) =>{
      let searchedCats;
      // if there is a query present, show the cats whose name match
      if (query) {
        // Case SENSITIVE, and use includes to implement a more lenient search
        searchedCats = this.allCats.filter((cat)=> cat.name.includes(query))
      }
      else {
        //if the query is empty, just showing all the cats
        searchedCats = this.allCats
      }
      this.setState({
        cats: searchedCats
      })
    }
    // debouncing the searching function so that it feels more natural. (from lodash library)
    const debounceSearch = debounce(filter, 1000)
    debounceSearch(query)

  }


  render() {

    let {cats, cat, selected, modalOpen} = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col sm={3}>
              <Search handleSearch={this.handleSearch}/>
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