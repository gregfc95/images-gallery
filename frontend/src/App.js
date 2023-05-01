import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  //we used Usestate to define the initial value of word
  //setword it's used to update the value of the variable word
  const [word, setWord] = useState(''); 
  
  //send a API request
  const handleSearchSubmit = (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Return a console.log with the input value
    console.log(word);
  }
// only to check if the typing works
//  console.log(word);

  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSearchSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
  