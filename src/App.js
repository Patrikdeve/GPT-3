import logo from './logo.svg';
import './App.css';
import {Article, Brand, Cta, Features, Navbar } from './Components'
import {Footer, Blog, Feature, Header, Possibility, WhatGPT3} from './Containers'



function App() {
  return (
    <div className="App">
        <div className = 'gradient_bg'> 
              <Navbar/>
              <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Feature/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>

    </div>
  );
}

export default App;
