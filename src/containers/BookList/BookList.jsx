import React from 'react';
import './Booklist.scss';
const BookList = ({ data = [] }) => {
  console.log('DATA BOOKLIST', data);
  return (
    <div className="BooksList">
      <div className="container">
        <div className="Booklist-wrapper">
          <div className="Booklist-title">Title</div>
          <div className="flex justify-between items-center">
            {data.map((item) => (
              <div className="Book-content">
                <div>{item.name}</div>
                <img className="Book-content-img" src={item.images?.[0]} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
