import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import {Route, NavLink} from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/characters'>Characters</NavLink>
      </nav>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList}/>
    </main>
  );
}
