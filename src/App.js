import React from 'react'
import ListOfGifs from './components/ListOfGifs';
import {Link, Route} from 'wouter'
import Home from './pages/Home';
import './index.css';

function App() {
  return (
      <section className="bg-indigo-900 h-screen">
      <Link to='/'>
        <h1 className='text-center text-2xl font-black py-10 text-green-400 hover:cursor-pointer w-1/3 mx-auto'>App</h1>
      </Link>
      <Route 
      component={Home}
      path='/'
      />
      <Route 
      component={ListOfGifs}
      path='/search/:keyword'
      />
      </section>
  );
}

export default App;
