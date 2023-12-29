import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Books = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://reactnd-books-api.udacity.com/books", {
        headers: { 'Authorization': 'whatever-you-want' }
      })
      .then(response => {
        setData(response.data.books);
      })
      .catch(error => {
        console.log(error)
        console.log(error.message);
        console.log("Status Code : ",error.request.status)
      });
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Books</h1>
      {data.map((book, idx) => (
        <div className='bookdiv' key={idx}>
          <h2>{book.title}</h2>
          <div className='bookdetails'>
            <img src={book.imageLinks.thumbnail} alt="bookimg" />
            <p>{book.description}</p>
          </div>
          <h3>{book.authors}</h3>
        </div>
      ))}
    </div>
  );
}

export default Books;
