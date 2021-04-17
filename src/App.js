import './App.css';
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      listOne: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    console.log(event.target.name);
    console.log(value);
    this.setState({
      ...this.state,
      [event.target.name]: value
    }, () => console.log(this.state));
  }

  handleSubmit(event) {
    this.state.listOne.push({familyName: this.state.nameInput, amount: this.state.amount})
    this.setState({...this.state});
    alert('Familia ' + this.state.nameInput + ' este adaugata la lista de duminica dimineata');
    console.log(this.state);
    event.preventDefault();
  }

  availablePlaces() {
    let total=15;
    this.state.listOne.map(p => p.amount).forEach(a => total-=a)
    return total
  }

  render() {

    let availablePlaces = this.availablePlaces();
    return (
      <>
        <h2>Lista de dimineață ({availablePlaces} locuri libere)</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Numele de familie:<br/>
              <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label>
              Numărul persoanelor peste 12 ani:<br/>
              <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange}/>
            </label>
          </div>
          <input type="submit" value="Submit"/>
        </form>
        <div>
          <ul>
            {this.state.listOne.map((item, index) => (
              <li key={index}>Familia {item.familyName} {item.amount} persoane</li>
            ))}
          </ul>
        </div>
      </>);
  }
}

export default App;
