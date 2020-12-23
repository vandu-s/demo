import logo from './logo.svg';
import './App.css';
import {cardArr} from './commondata';
import Card from './card.js';
import HeaderData from './header.js';
import FooterDetails from './footer.js';
import Filter from './filter.js';

function App() {
  return (
    <div classNameName="App">
   <HeaderData />

    <div id="main-container">
           <Filter/>
        {cardArr.map((item)=><Card title={item.title} thumbnail={item.thumbnail} description={item.description} author={item.author} date={item.date}/>)}

      </div>
     <FooterDetails/>

    </div>//App
  );
}

export default App;

