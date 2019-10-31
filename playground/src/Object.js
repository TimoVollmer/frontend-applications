import React, {Component} from 'react'

// Stopt de values van de array in het betreffende 'variabele'.
class Object extends Component {
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
            
            //Zet een state neer; haalt de waarde op uit de array van de betreffende labels
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

    render() {
      document.body.style.backgroundColor = "black";

    return (
      <div className="App">
          <div className='box a'>
            <h1>{this.state.title}</h1>
          </div>
      <div className='box d'>
            <p><strong>{this.state.date}</strong></p>
      </div>
      <div className='box b'>
            <p>{this.state.description}</p>
      </div>
          <a href={this.state.img}>
            <div className='box c'>
              <img src={this.state.img}></img>
            </div>
          </a>
          <pre>{this.props.data}</pre>

      <form>
      <div className='claim'>
        <h2 id="claim">Claim your object</h2>
        <p id="claim"> Do you want <strong>{this.state.title}</strong> to be yours and yours only? 
          Fill in your email and we’ll send all the information regarding the object and when and where it will be displayed!</p>
          </div>
          <ul>
            <li>
              <input type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value})}/>
            </li> 
            <li>
              <button>Claim object</button>
            </li>
          </ul>
       </form>
      </div>
      );
    }
  };
  
export default Object;