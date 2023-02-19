import React, { useState, useEffect } from "react";
import axios from "axios";
import Likes from "./Likes";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(9);

  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts?_page=$%7Bpage%7D&_limit=20"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
     setVisibleItems(6);
  };
  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 6);
  };
  const searchByName = () => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
      // item.userId.toString().includes(searchTerm))
    );
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />

      <div className="App">
        {searchByName()
          .slice(0, visibleItems)
          .map((item) => (
            <div className="card" key={item.id}>
              <p className="p1">User Id : {item.id}</p>
              <p className="p2">Title : {item.title}</p>
              <Likes />
            </div>
          ))}
      </div>
      {searchByName().length > visibleItems && (
        <button className="btn2" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default SearchBar;
