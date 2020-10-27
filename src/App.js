import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">

    <Nav/>

    <Banner/>


     <Row isLargeRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
     {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/> */}
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> */}

     
    </div>
  );
}

export default App;

