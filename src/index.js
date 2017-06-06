import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY ='AIzaSyCbxqg1Jbzpor23IYRJGQIuLm9x9vDIpF8';

// create new component should produce html
const App = () => {
  return (
        <div>
          <SearchBar />
        </div>
      );
  }


// take component and put it on the page (in DOM)

ReactDOM.render(<App />, document.querySelector('.container') );
