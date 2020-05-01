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

  // Function that sorts employees by name in ascending/descending order
  sortByName = (order) => {
    var employees = this.state.employees;
    var names = employees.map((employee) => {
      return employee.name;
    });
    var sortedNames;
    if (order === "ascending") {
      sortedNames = names.sort();
    } else if (order === "descending") {
      sortedNames = names.reverse();
    }
    var employeeArray = [];
    for (let name of sortedNames) {
      for (let employee of employees) {
        if (name === employee.name) employeeArray.push(employee);
      }
    }
    this.setState({ employees: employeeArray });
  };

  // Function that filters employees by role
  filterByRole = (event, str) => {
    console.log(event.target.value);
    str = event.target.value;
    var employees = this.state.employees;
    var filteredEmployees = employees.filter((employee) => {
      return (
        employee.title.includes(str) ||
        employee.title.includes(str.toUpperCase())
      );
    });
    this.setState({ employees: filteredEmployees });
  };

  // Rendering the page
  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container">
          <Header sort={this.sortByName} sieve={this.filterByRole} />
          <hr />
          {this.buildRow()}
        </div>
      </div>
    );
  }
}

export default App;
