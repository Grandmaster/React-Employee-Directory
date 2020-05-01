import React from "react";
import Jumbotron from "./components/Jumbotron";
import Row from "./components/Row";
import employees from "./seed.json";

class App extends React.Component {
  // Reading data from the seed file
  state = { employees };

  // Building row html from seed file
  buildRow = () => {
    return this.state.employees.map((employee, index) => {
      return <Row data={employee} key={index} />;
    });
  };

  // Rendering the page
  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container">{this.buildRow()}</div>
      </div>
    );
  }
}

export default App;
