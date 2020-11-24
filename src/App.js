import './App.css';
import Bar from "./components/Bar";
import Banner from './components/Banner';
import {requests} from "./api/constants";

function App() {
  return (
    <div className="App">
      <Banner/>
      <Bar title="Netflix Originals" url={requests.netflixOriginals} isLarge={true}/>
      <Bar title="Top Rated" url={requests.topRated}/>
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
