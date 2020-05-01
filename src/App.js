// Importing required data from other files
import React from "react";
import Jumbotron from "./components/Jumbotron";
import Row from "./components/Row";
import Header from "./components/Header";
import employees from "./seed.json";
import "./css/app.css";

class App extends React.Component {
  // Reading data from the seed file
  state = { employees };

  // Building row html from seed file
  buildRow = () => {
    return this.state.employees.map((employee, index) => {
      return <Row data={employee} key={index} />;
    });
  };

  // Function that sorts employees by name in ascending order
  sortByNameAsc = () => {
    var employees = this.state.employees;
    var names = employees.map((employee) => {
      return employee.name;
    });
    var sortedNames = names.sort();
    var employeeArray = [];
    for (let name of sortedNames) {
      for (let employee of employees) {
        if (name === employee.name) employeeArray.push(employee);
      }
    }
    employees = employeeArray;
    this.setState({ employees });
  };

  // Function that sorts employees by name in descending order

  // Rendering the page
  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container">
          <Header asc={this.sortByNameAsc} />
          <hr />
          {this.buildRow()}
        </div>
      </div>
    );
  }
}

export default App;
