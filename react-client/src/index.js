import Backbone from 'backbone';
import Marionette from 'backbone.marionette'
import _ from 'underscore'

const Cat = Backbone.Model.extend({
})


const Cats = Backbone.Collection.extend({
  model: Cat,
  url: '/cats',
  parse: function(data){
    console.log(data)
    return data
  }
  
})

let CatView = Marionette.View.extend({
  template: _.template(`
  <div><% name %> </div>
  `),
  events: {
    "click .cat-item": "clickHandler"
  },
  render: function(){
        this.$el.html(`
    <div class="cat-item">
        <h4>Name: ${this.model.get('name')}</h4>
        <h4>Birthdate: ${this.model.get('birthdate')}</h4>
        <h4>Owner Name: ${this.model.get('owner_name')}</h4>
        <img src=${this.model.get('thumbnail')} height="75" width="75" className="text-center"/>
    </div>
    `)

    return this;
  },
  clickHandler: function(){
    console.log('hello')
  }
})

let cat1 = new Cat({name: 'Jenna', thumbnail: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', birthdate: '2016-01-01', owner_name: 'Jason Crowley'});
let cat2 = new Cat({name: 'Delph', thumbnail: 'https://res.cloudinary.com/dlqxzhifw/image/upload/v1560197249/nvwnqarwjpd4xwqg0m8p.jpg', birthdate: '2000-01-01', owner_name: 'Joe Crowley'});
let cat3 = new Cat({name: 'Tiger', thumbnail: ' https://res.cloudinary.com/dlqxzhifw/image/upload/v1560197756/evnp8aryrkuln31amiha.jpg', birthdate: '2005-01-01', owner_name: 'James Crowley'});
let cat4 = new Cat({name: 'Enuice', thumbnail: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', birthdate: '2002-01-01', owner_name: 'George Crowley'});
let cat5 = new Cat({name: 'JoJo', thumbnail: 'https://res.cloudinary.com/dlqxzhifw/image/upload/v1560197775/di8y3ir81bip1o5dpeia.jpg', birthdate: '2016-01-01', owner_name: 'Manny Crowley'});


let CatsView = Marionette.CollectionView.extend({
  childView: CatView,

  initialize: function () {
    // this.render();
  },
  render: function (cat) {
    console.log(this.collection.models)
    this.collection.models.forEach(cat => {
      let catView = new CatView({model: cat});
      this.$el.append(catView.render().$el)
    });
  },
})

let cats = new Cats([cat1, cat2, cat3, cat4, cat5])

let catView = new CatView({el: 'body'});


let catsView = new CatsView({
  collection: cats,
  el: 'body',
})

catsView.render();





