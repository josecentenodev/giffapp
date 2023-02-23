import React from 'react'
import {Link, Route, Switch} from 'wouter'
import Home from 'pages/Home';
import SearchResults from 'pages/SearchResult';
import Detail from 'pages/Detail';
import NotFound from 'pages/NotFound';
import {UserContextProvider} from 'context/UserContext'
import { GifsContextProvider } from 'context/GifsContext';
import Header from 'components/Header';
import Login from 'pages/Login';
import Register from 'pages/Register';
import 'index.css';

function App() {
  return (
    // <section className="bg-slate-900 min-h-screen">
    <UserContextProvider>
    <Header />
      <Link to='/'>
        <h1 className='text-center text-2xl font-black py-3 text-green-400 hover:cursor-pointer w-1/3 mx-auto mb-5'>Gif App</h1>
      </Link>
      <GifsContextProvider>
      <Switch>
      <Route 
      component={Home}
      path='/'
      />
      <Route 
      component={SearchResults}
      path='/search/:keyword/:rating?'
      />
      <Route 
      component={Detail}
      path='/gif/:id'
      />
      <Route 
        component={Login}
        path='/login'
      />
      <Route 
        component={Register}
        path='/register'
      />
      <Route 
      component={NotFound}
      path='/:rest*'
      />
      </Switch>
      </GifsContextProvider>
      </UserContextProvider>
      // </section>
  );
}

export default App;
