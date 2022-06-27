import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>This is a wonderful component</h1>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <h1>
        {this.props.type} This is a wonderful Component
      </h1>
    )
  }
}

export default App;
