import React from "react";
import Character from "./Character";
import { connect } from "react-redux";

import { getAPI } from '../actions';


const CharacterList = props => {

  const fetchAPI = e => {
    e.preventDefault();
    props.getAPI();
  }

  return (
    <ul>
      
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}

      <button onClick={fetchAPI}>Fetch</button>
    </ul>
  );
};

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  isFetching: state.charsReducer.isFetching 
});

export default connect(mapStateToProps, { getAPI })(CharacterList);
