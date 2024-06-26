import React, { Component } from 'react';
import PersonCard from '../PersonCard/PersonCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personCard: [
        { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
        { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
        { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
        { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" }
      ]
    };
  }

  incrementarEdad = (index) => {
    const updatedPersonCard = [...this.state.personCard];
    updatedPersonCard[index].age += 1;
    this.setState({ personCard: updatedPersonCard });
  }

  render() {
    return (
      <div id="containerPersonCard">
        {this.state.personCard.map((person, index) => (
          <PersonCard
            key={index}
            firstName={person.firstName}
            lastName={person.lastName}
            age={person.age}
            hairColor={person.hairColor}
            incrementarEdad={() => this.incrementarEdad(index)}
          />
        ))}
      </div>
    );
  }
}

export default App;

