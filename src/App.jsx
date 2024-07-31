import './App.css';
import Navbar from "./components/Navbar";
import HomeScreen from './screen/home/HomeScreen';
//import ArticleScreen from "./screen/article/ArticleScreen";
import TechsScreen from "./screen/techs/TechsScreen";
import SeriesScreen from "./screen/series/SeriesScreen";

function App() {
  return(
    <>
      <Navbar/>
      <HomeScreen/>
      <TechsScreen />
      <SeriesScreen/>
    </>
  );
}

export default App;