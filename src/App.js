import './App.css';
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOne: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.state.listOne.push(this.state.value)
    this.setState({value: this.state.value});
    alert('Familia ' + this.state.value+' este adaugata la lista de duminica dimineata');
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h2>Lista de duminica dimineata</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Numele de familie:<br/>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <div>
          <ul>
            {this.state.listOne.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </>);
  }
}

export default App;
