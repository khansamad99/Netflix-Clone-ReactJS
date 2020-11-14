import './App.css';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginal}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
    </div>
  );
}

export default App;
