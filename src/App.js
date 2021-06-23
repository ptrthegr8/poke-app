import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemon(data.results));
  }, []);
  return (
    <div>
      <h1>Hello, Pokemon!</h1>
      <ul>
        {pokemon.map((p) => (
          <li>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

class PokemonApp extends React.Component {
  url = "https://pokeapi.co/api/v2/pokemon/";
  constructor(props) {
    super(props);
    this.state = { pokemon: [] };
  }
  componentDidMount() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => this.setState({ pokemon: data.results }));
  }
  render() {
    return (
      <div>
        <h1>Hello, Pokemon!</h1>
        <ul>
          {this.state.pokemon.map((p) => (
            <li>{p.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonApp;
