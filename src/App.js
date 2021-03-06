import React from 'react'
import {Link, Route} from 'wouter'
import Home from './pages/Home';
import './index.css';
import SearchResults from './pages/SearchResult';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <section className="bg-slate-900 min-h-screen">
    <StaticContext.Provider value={{name: 'citojose', soydeveloper: true}}>
      <Link to='/'>
        <h1 className='text-center text-2xl font-black py-10 text-green-400 hover:cursor-pointer w-1/3 mx-auto'>App</h1>
      </Link>
      <GifsContextProvider>
      <Route 
      component={Home}
      path='/'
      />
      <Route 
      component={SearchResults}
      path='/search/:keyword'
      />
      <Route 
      component={Detail}
      path='/gif/:id'
      />
      </GifsContextProvider>
      </StaticContext.Provider>
      </section>
  );
}

export default App;
