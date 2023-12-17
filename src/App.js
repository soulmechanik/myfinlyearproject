
import './App.css';
import Audience from './Components/Audience/Audience';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Getstarted from './Components/Getstarted/Getstarted'
import Howitworks from './Components/Howitworks/howitworks';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
        <Howitworks/>
        <Header />
        <Hero/>
        <Audience/>
        <Getstarted/>
        <Footer/>

    </div>
  );
}

export default App;
