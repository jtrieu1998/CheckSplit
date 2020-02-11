import React from 'react';
import logo from './logo.svg';
import './App.css';
// Class testForm extends React.Component {
  function handleSubmit(event) {
    alert("You submitted!!" + event);
  }
// }
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <label>
            A:
            <input type="text" name="A" />
          </label>
          <label>
            B:
            <input id='second' type="text" name="B" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>

    // <script>
      
    // </script>
  );
}

export default App;
