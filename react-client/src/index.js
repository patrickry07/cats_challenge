import Backbone from 'backbone';
import Marionette from 'backbone.marionette'
import _ from 'underscore'


const Cat = Backbone.Model.extend({
})


const Cats = Backbone.Collection.extend({
  model: Cat,
  url: '/cats',
  parse: function(data){
    return data
  }
  
})

let CatView = Marionette.View.extend({
  tagName: 'div',
  template: _.template(`
  <div><% name %> </div>
  `)
})

let CatsView = Marionette.CollectionView.extend({
  initialize: function () {
    this.collection.fetch();
    this.render();
  },
  render: function () {
    this.collection.each(function (log) {
      console.log('log item.', log);
    });
  },
})

let catView = new CatView();
// catView.render();


let catsView = new CatsView({
  collection: cats,
  el: 'body',
})
catsView.render();



let cats = new Cats({collection: cats});
cats.fetch()

function test(){
  // console.log(hello)
cats.models.forEach((cat)=>{
  console.log(cat)
})
}
test()
// console.log(cats.models.get('name'))


