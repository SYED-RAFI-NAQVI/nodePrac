import React from 'react';
// import pet, { ANIMALS } from '@frontendmasters/pet'
import { Router, Link } from '@reach/router'




import SearchLoaction from './location'
import Rout from './rout'



import './App.css';

function App() {

  ////////////////////////////////
  /////////   Hooks /////////////
  //////////////////////////////
  // const [breeds, setBreed] = useState('')


  ////////////////////////////////
  /////// useEffect   ///////////
  //////////////////////////////
  // useEffect(() => {
  //   pet.breeds('dogs').then((res) => { console.log(res) }).catch((err) => console.error(err))
  // })


  return (
    <div className="App">
      <header className="App-header">


        <Link to="/">
          Home
        </Link>

        {/* Router */}
        <Router>
          <SearchLoaction path='/' />
          <Rout path='rout/:id' />
        </Router>


        {/* map */}
        {/* <select>
          {ANIMALS.map(animal => (
            <option key={animal}>{animal}</option>
          ))}
        </select> */}
        {/* <p>{breeds.map(breed => (
          { breed }
        ))}</p> */}



      </header>
    </div>
  );
}

export default App;
