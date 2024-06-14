import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';
//bad practice, it leave the key public and unsecured
//const UNSPLASH_KEY = '...';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

//hooks
const App = () => {
  //we used Usestate to define the initial value of word
  //setword it's used to update the value of the variable word
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);
  // returns array
  //  console.log(images);

  //send a API request
  const handleSearchSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();
    console.log('Sending Request');
    // // Return a console.log with the input value but instead of use this, we will use AXIOS
    // // console.log(word);
    // fetch(`${API_URL}/new-image?query=${word}`)
    //   //Promises, callbackfunction
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setImages([{ ...data, title: word }, ...images]);
    //   })
    //   //in case that promise gets rejected
    //   .catch((err) => {
    //     console.log(err);
    //   });
    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      console.log('adding found image to the state');
      setImages([{ ...res.data, title: word }, ...images]);
    } catch (error) {
      console.log(error);
    }
    console.log('clearing search');
    setWord(''); //clears the input after API request
  };
  //Used to check the API key of unsplash
  //console.log(process.env.REACT_APP_UNSPALSH_KEY);
  //only to check if the typing works
  //  console.log(word);
  //Map helper method looks all the elements of an array and returns a new array.
  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };
  return (
    <div>
      <Header title="Images Gallery" />
      <Search
        word={word}
        setWord={setWord}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
