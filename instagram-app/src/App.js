import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import dummyData from './components/dummy-data';
import PostContainer from './components/PostContainer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dummyData: dummyData
    }
  }

  render(){
  return (
    <div className="App">

      <SearchBar />

      <PostContainer 
      dummyData = {this.state.dummyData}
      />

    </div>
  );
}
}

export default App;
