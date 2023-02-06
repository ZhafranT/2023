import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Books = () => {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      const fetchAllBooks = async () => {
         try {
            const res = await axios.get('http://localhost:8800/books');
            setBooks(res.data);
         } catch (err) {
            console.log(err);
         }
      };
      fetchAllBooks();
   }, []);

   return (
      <div>
         <h1>all books</h1>
         <div className="books">
            {books.map((book) => (
               <div className="book" key={book.id}>
                  {book.cover && <img src={book.cover} alt="" />}
                  <h2>{book.title}</h2>
                  <p>{book.desc}</p>
                  {/* <span>{book.price}</span> */}
               </div>
            ))}
         </div>
      </div>
   );
};

export default Books;
