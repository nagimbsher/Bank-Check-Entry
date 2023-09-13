import React from 'react';
import Header from './Header';
import FormContainer from './Form';
import CheckDisplay from './CheckDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checkDate: '',
      senderName: '',
      bankName: '',
      accountType: '',
      accountNumber: '',
      transitNumber: '',
      address: '',
      city: '',
      senderState: '',
      zip: '',
      recipientName: '',
      amount: '',
      memo: '',
    };
    this.handleCheckInput = this.handleCheckInput.bind(this);
  }

  handleCheckInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <FormContainer handleChange={this.handleCheckInput} data={this.state} />
        <CheckDisplay data={this.state} />
      </div>
    );
  }
}

export default App;












// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
