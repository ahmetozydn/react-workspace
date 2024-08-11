import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function UserDefined(props) {
  return <p>{props.title} and {props.description}</p>
}

function TabButton({children,onSelect}){
  console.log("Tab button is rendered...")
  return(
  <li>
    <button onClick={onSelect}>{children}</button>
  </li>);

}

function App() {
  var selection = ' value of the text'
  const [selectedTopic, setSelectedTopic] = useState(null);


  console.log(selectedTopic)

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    selection = selectedButton;
    console.log(selection);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <section id = "examples">
        <h3>h3</h3>
         <menu>
         <TabButton onSelect={()=>handleSelect('1')}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect('2')}>Components2</TabButton>
          <TabButton onSelect={()=>handleSelect('3')}>Components3</TabButton>
         </menu>
         {selectedTopic}
          {selectedTopic && <p>Conditional statement.</p>}
         <div id ="tab-content">
            <h3></h3>
            <p></p>
            <pre>
              <code>

              </code>
            </pre>
         </div>
        </section>


      </header>
    </div>
  );
}

export default App;
