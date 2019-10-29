import React, { Component } from 'react';
import Form from './Form';
import Object from './Components/object.js';
import './App.css';
/*import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { UserForm } from './Components/UserForm;    <UserForm />

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/users" component={Form} />
    </div>
  </Router>
)
*/


class App extends Component {
  state = {
    stage: 0,
    render: {
    img: "",
    title: "",
    description: "",
    date: ""
  }
  };

componentDidMount() {

  const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-31/sparql"
  //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
  const query = `
  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  PREFIX edm: <http://www.europeana.eu/schemas/edm/>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  
  SELECT ?datum ?imgUrl ?titel ?tekst WHERE {
   ?cho dct:created ?datum.
   ?cho dc:title ?titel.
   ?cho edm:isShownBy ?imgUrl .
   ?cho dc:description ?tekst.
    
  } LIMIT 5000  
  `
  const runQuery = (url, query) => {
      // Call the url with the query attached, output data
      fetch(url + "?query=" + encodeURIComponent(query) + "&format=json")
        .then(res => res.json())
        .then(json => {
          let results = json.results.bindings;
          let itemArray = [];
          for(let i = 0; i < 10; i++){
            var item = results[Math.floor(Math.random() * results.length)];
            itemArray.push(item);
          }
          console.log(itemArray);
          this.setState({
           
              img: item.imgUrl.value,
              title: item.titel.value,
              date: item.datum.value,
              description: item.tekst.value
            
          });
        });
    }
    runQuery(url, query)
  };
  

  onSubmit = (fields) => {
    console.log('Value in app: ', fields)
   };

  render() {

    console.log(this.state.img);
    return (
      <div className="App">
      <Form onSubmit={fields => this.onSubmit(fields)}/>
      <h1>{this.state.title}</h1>
      <p>{this.state.description}</p>
      <img src={this.state.img}></img>
      </div>
    );
  }
}

export default App;



