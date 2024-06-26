import React, { Component } from "react";


class PersonCard extends Component {
  render() {
    const { firstName, lastName, age, hairColor, incrementarEdad } = this.props;
    return (
      <div>
        <h1>{lastName}, {firstName}</h1>
        <h3>Age: {age}</h3>
        <h3>Hair Color: {hairColor}</h3>
        <button onClick={incrementarEdad}>Birthday Button for {firstName} {lastName} </button>
      </div>
    );
  }
}

export default PersonCard;

