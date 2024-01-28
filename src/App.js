import BlockTubesContainer from "./components/BlockMain/BlockTubesContainer";
import BlockResultContainer from "./components/BlockResult/BlockResultContainer";
import "./styles.css";

export default function App() {
  return (
      <div className="wrapper">
        <div className="mainMenu">
          <BlockTubesContainer />
        </div>
        <hr className="hr"></hr>
        <BlockResultContainer />
        <hr className="hr"></hr>
      </div>
  );
}

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
//
// export default App;
