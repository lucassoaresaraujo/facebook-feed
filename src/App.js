import React from 'react';

import Header from './components/Header';
import PostList from './components/PostList';

import './app.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <PostList />
    </React.Fragment>
  )
}

export default App;