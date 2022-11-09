import logo from './logo.svg';
import './App.css';

function Greet(props) {
  return <h1>"Hello, {props.name}!"</h1>;
}

export const hello = <Greet name="Melissa" />;

// oppure:
// function Greet(name) {
//   return <h1>"Hello, {name}!"</h1>;
// }

// export default Greet;


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

// export default App;
