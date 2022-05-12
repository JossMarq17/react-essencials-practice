import React from "react";
import './App.css';

function Header(props){

  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
      </header>
  );
}

function Main(props) {
  return(
    <section>
      <p>We serve the most {props.adjective} food </p>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese",
  "Cheesy Pizza",
  "Salmon with pasta"
];


function App() {
  return (
    <div className="App">
      <Header name="Joss" />
      <Main adjective="delicious" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
