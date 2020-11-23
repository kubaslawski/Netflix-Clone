import logo from './logo.svg';
import './App.css';
import Bar from "./components/Bar";
import {requests} from "./api/constants";

function App() {
  return (
    <div className="App">
      <Bar title="Top Rated" url={requests.topRated} isLarge={true}/>
      <Bar title="Netflix Originals" url={requests.netflixOriginals}/>
      <Bar title="Trending Now" url={requests.popular}/>
      <Bar title="For Kids" url={requests.forKids}/>
      <Bar title="Dramas" url={requests.dramas}/>
      <Bar title="Action" url={requests.action}/>
      <Bar title="Comedy" url={requests.comedy}/>
      <Bar title="Horror" url={requests.horror}/>
      <Bar title="Romance" url={requests.romance}/>
      <Bar title="Documentaries" url={requests.docs}/>
      <Bar title="On Time" url={requests.onTime}/>
    </div>
  );
}

export default App;
