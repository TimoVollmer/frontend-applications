# Find your object

![Object page](https://user-images.githubusercontent.com/14195114/67972637-5eff2800-fc0f-11e9-9802-104d22060551.png
)

## Table of Contents
- [Live demo](#Live-demo)
- [Description](#Description)
- [Features](#Features)
  - [API request](#API-request)
  - [App Features](#App-Features)
  - [Upcoming features](#Upcoming-features)
  - [Bugs](#Bugs-in-current-version)
- [Installation](#Installation)
  - [Prerequisites](#Prerequisites)
  - [Installation of the app](#Installation-of-the-web-app)
  -[Usage](#Usage)
  - [Deployment](#Deployment) 
  - [Gitignore](#Gitignore)
- [Built With](#Built-With)
- [License](#License)
  
## Live demo

[Live demo](https://github.com/TimoVollmer/frontend-applications.git)

## Description 
The web app matches a user with an object based upon there first name and last name. It retrieves these object from the 'Nationaal Museum van Wereldculturen' data base via an API. The object that is matched with the user can than be 'claimed' by the user so that no other user can be matched with this perticular object. The user will also receive all the information regarding the object and when and where it will be displayed. 

## Features 

### API request

Once the user fills in the required data (first name, last name) and presses 'Find my object' an API request is send to the NMVW collection API. This search cantains the following request, image url, title of the object, date created and the description:

```
{
    img: "http://collectie.wereldculturen.nl/cc/imageproxy.ashx?server=localhost&port=17581&filename=images/Images/RV//5677-   
          126_a.jpg"
    title: "Meat pot for boys"
    date: "1982"
    description: "Deze pot werd gebruikt voor het opdienen van vlees… de periode na de pubertijd en voor het huwelijk."
}
```

The SPARQL query used:

```SPARQL
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
```

### App Features 

- [x] Fill in form requesting first and last name 
- [x] Makes a random search through the objects
- [x] Shows object with its attributes

### Upcoming features

- [ ] Being able to share the object via social media
- [ ] Make search based upon first and last name
- [ ] The ability to claim objects per user
- [ ] Highlight logo of museum (SVG) if the object is currently or soon to be displayed there

### Bugs in current version

- Desciption may contain traces of HTML
- Image not always displayed (due to server errors)

## Installation 

### Prerequisites

- [x] Install Node.js
- [x] Install a Code Editor
- [x] Use of Command Line Interface (Terminal) or might be included in your Code editor

### Installation of the web app

Clone the project from: https://github.com/TimoVollmer/frontend-applications.git

Use your Command Line Interface to get in the following folder
```
cd frontend-apllications/
```
Install the npm packages
```
npm install
```

### Usage 

To run the application use
```
npm run start
```

### Deployment

If you want to compile the code so you can the deploy the app use
```
npm run build
```

### Gitignore
Use the following lines in your gitignore if you are going to present it in your own github repository.
```
node_modules/react/.DS_Store
node_modules
package-lock.json
index.js

# dependencies
/.pnp
.pnp.js

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

```

## Built With

* [React](https://reactjs.org) - The web framework used
* [SPARQL](https://en.wikipedia.org/wiki/SPARQL) - Protocol and RDF Query Language

## Credits


# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

