import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getPhoto } from "../actions"
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("CDM")
    this.props.getPhoto();
    // call our action
  }

  render() {
    console.log("render");
    if (this.props.fetching) {
      console.log("Hello");
      return (
        <h1>Fetching data...</h1>
      )
      // return something here to indicate that you are fetching data
    }
    console.log("CLV", this.props.characters)
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
})

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getPhoto
    /* action creators go here */
  }
)(CharacterListView);
