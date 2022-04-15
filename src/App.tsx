import React from 'react';
// @ts-ignore
import {BrowserRouter as Router, Route} from "react-router-dom";

// @ts-ignore
import Dashboard from './ts/dashboard'
import MainPage from './ts/mainpage'

function App() {
    return (
        <Router>
            <Route path="/" exact component={MainPage}/>
            <Route path="/Dashboard" component={Dashboard}/>
        </Router>


    );
}

export default App;


// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
