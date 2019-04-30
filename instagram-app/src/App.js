import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from '../src/dummy-data';
import PostGrid from './components/PostGrid/PostGrid';

class App extends React.Component {
  state = dummyData

  render(){
  return (
    <div className="App">

      <SearchBar />

      <PostGrid posts = {this.state} />

    </div>
  );
}
}

export default App;
