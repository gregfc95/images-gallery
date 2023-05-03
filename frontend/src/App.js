import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
//bad practice, it leave the key public and unsecured
//const UNSPLASH_KEY = '...'

const UNSPLASH_KEY = process.env.REACT_APP_UNSPALSH_KEY;

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
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
    //Promises, callbackfunction
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      //in case that promise gets rejected
      .catch((err) => {
        console.log(err);
      })
  }
//Used to check the API key of unsplash
//  console.log(process.env.REACT_APP_UNSPALSH_KEY);
//only to check if the typing works
//  console.log(word);

  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSearchSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
  