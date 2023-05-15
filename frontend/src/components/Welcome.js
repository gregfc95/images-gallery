import React from 'react';

const Welcome = () => (
  <div className="container-fluid bg-dark text-light p-5">
    <div className="container bg-dark p-5">
      <h1 className="display-4">Images Gallery</h1>
      <hr />
      <p>
        Simple App for search photos using Unsplash API. In order to start enter
        any search term in the input field
      </p>
      <a
        href="https://unsplash.com"
        target="_blank"
        className="btn btn-primary"
        rel="noreferrer"
      >
        Learn more
      </a>
    </div>
  </div>
);

export default Welcome;
