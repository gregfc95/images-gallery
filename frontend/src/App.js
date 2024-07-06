import { useState, useEffect } from 'react';
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

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSavedImages();
  }, []);

  //send a API request
  const handleSearchSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();
    console.log('Sending Request');

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
  const handleDeleteImage = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/images/${id}`);
      if (res.data?.delete_id) {
        setImages(images.filter((image) => image.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveImage = async (id) => {
    const imageToBeSaved = images.find((image) => image.id === id);
    imageToBeSaved.saved = true;

    try {
      const res = await axios.post(`${API_URL}/images`, imageToBeSaved);
      if (res.data?.inserted_id) {
        setImages(
          images.map((image) =>
            image.id === id ? { ...image, saved: true } : image
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
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
                <ImageCard
                  image={image}
                  deleteImage={handleDeleteImage}
                  saveImage={handleSaveImage}
                />
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
