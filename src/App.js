import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import ResultsContextProvider from './contexts/results/results.context';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import TopRated from './pages/top/top.component';
import Trending from './pages/trending/trending.component';
import GenrePage from './pages/genre/genre.component';
import Detail from './pages/detail/detail.component';
import SearchResults from './pages/search-results/search-results.component';
import People from './pages/people/people.component';
import Footer from './components/footer/footer.component';
import SidebarProvider from './contexts/sidebar/sidebar.context';

const App = () => (
  <ResultsContextProvider className='app'>
    <Header />
    <div className='body'>
      <SidebarProvider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/info/:titleId' component={Detail} />
          <Route exact path='/search' component={SearchResults} />
          <Route exact path='/search/:title' component={SearchResults} />
          <Route exact path='/trending' component={Trending} />
          <Route exact path='/trending/:category/:time' component={Trending} />
          <Route exact path='/genre/:genre/:id' component={GenrePage} />
          <Route exact path='/people/:id' component={People} />
          <Route exact path='/top/:category' component={TopRated} />
          <Redirect to='/' />
        </Switch>
      </SidebarProvider>
    </div>
    <Footer />
  </ResultsContextProvider>
);

export default App;
