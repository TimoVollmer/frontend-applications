const el = document.querySelector('p')
const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-31/sparql"
//Note that the query is wrapped in es6 template strings to allow for easy copy pasting
const query = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?datum ?imgUrl ?titel WHERE {
 ?cho dct:created ?datum.
 ?cho dc:title ?titel.
 ?cho edm:isShownBy ?imgUrl .
  
} LIMIT 10
`
runQuery(url, query)

function runQuery(url, query){
  //Test if the endpoint is up and print result to page 
  // (you can improve this script by making the next part of this function wait for a succesful result)
  fetch(url)
    .then(res => el.innerText = "Status of API: " + res.status)
	// Call the url with the query attached, output data
	fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
	.then(res => res.json())
	.then(json => {
	console.log(json)
	console.table(json.results.bindings);
	el.textContent = JSON.stringify(json.results)
	})
}