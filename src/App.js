import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Row from './Components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Nav/>
     {/* <h1 style={{color:"red"}}>NETFLIX</h1> */}
     <Banner fetchUrl={requests.fetchNetflixOriginals}/>
     <Row isPoster={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     
     
    </div>
  );
}

export default App;
