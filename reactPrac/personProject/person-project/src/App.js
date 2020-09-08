import React from 'react';
import './App.css';

const Person = ({ imgNum, name, job }) => {
  return (
    <article className="person">
      <img src={`https://randomuser.me/api/portraits/thumb/men/${imgNum}.jpg`} alt="img" />
      <h2>{name}</h2>
      <h4>{job}</h4>
    </article>
  )
}


const PersonList = () => {
  return (
    <section className="person-list">
      <Person imgNum={19} name={"lenovo"} job={"laptops"} />
      <Person imgNum={34} name={"Digitek"} job={"tripod"} />
      <Person imgNum={56} name={"CB"} job={"gamepad"} />
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <PersonList />
    </div>
  );
}

export default App;
