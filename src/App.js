import React from "react";
import "./App.css";
import Row from "./Row.js";
import Banner from "./Banner.js";
import Nav from "./Nav.js";
import requests from "./requests"
function App() {
    return ( 
        <div className="app">
            <Nav/>
            <Banner/>
            <Row 
            title="NETFILX ORIGINALS" 
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow    
            />
            <Row title="Tendances Actuelles" fetchUrl={requests.fetchTrending}/>
            <Row title="Mieux Notés" fetchUrl={requests.fetchTopRated}/>
            <Row title="Films Actions" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Films Comédies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Films Horreur" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Films Romantiques" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    );
}

export default App;